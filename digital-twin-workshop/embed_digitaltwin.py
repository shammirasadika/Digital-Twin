"""
Digital Twin Embedding Script
Processes digitaltwin.json and creates vector embeddings in Upstash Vector Database
"""


import os
import json
from dotenv import load_dotenv, find_dotenv
from upstash_vector import Index
from groq import Groq
from sentence_transformers import SentenceTransformer


# Load environment variables from .env.local if it exists, else .env
env_path = find_dotenv('.env.local', usecwd=True)
if not env_path:
    env_path = find_dotenv('.env', usecwd=True)
load_dotenv(env_path)

# Initialize connections
print("🔄 Initializing connections...")
upstash_url = os.getenv("UPSTASH_VECTOR_REST_URL")
upstash_token = os.getenv("UPSTASH_VECTOR_REST_TOKEN")
print(f"[DEBUG] UPSTASH_VECTOR_REST_URL: {upstash_url}")
print(f"[DEBUG] UPSTASH_VECTOR_REST_TOKEN: {upstash_token}")
print("Note: Your Upstash index has 1536 dimensions. Using all-mpnet-base-v2 model (768 dim).")
print("Loading embedding model (this may take a moment on first run)...")
embedding_model = SentenceTransformer('all-mpnet-base-v2')  # 768 dimensions
print("✓ Embedding model loaded")

index = Index(
    url=upstash_url,
    token=upstash_token
)

groq_client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def get_embedding(text: str) -> list:
    """Generate embedding for text using sentence-transformers"""
    embedding = embedding_model.encode(text)
    embedding_list = embedding.tolist()
    
    # Pad or truncate to match Upstash dimension (1024)
    target_dim = 1024
    current_dim = len(embedding_list)
    
    if current_dim < target_dim:
        # Pad with zeros
        embedding_list.extend([0.0] * (target_dim - current_dim))
    elif current_dim > target_dim:
        # Truncate
        embedding_list = embedding_list[:target_dim]
    
    return embedding_list

def flatten_json(data, parent_key='', sep='_'):
    """Flatten nested JSON structure for better embedding"""
    items = []
    if isinstance(data, dict):
        for k, v in data.items():
            new_key = f"{parent_key}{sep}{k}" if parent_key else k
            if isinstance(v, dict):
                items.extend(flatten_json(v, new_key, sep=sep))
            elif isinstance(v, list):
                for i, item in enumerate(v):
                    if isinstance(item, dict):
                        items.extend(flatten_json(item, f"{new_key}_{i}", sep=sep))
                    else:
                        items.append((f"{new_key}_{i}", str(item)))
            else:
                items.append((new_key, str(v)))
    return items

def create_chunks(data):
    """Create meaningful chunks from JSON data for embedding"""
    chunks = []
    
    # Personal information
    if 'personal' in data:
        personal = data['personal']
        chunk_text = f"Name: {personal.get('name', '')}\n"
        chunk_text += f"Title: {personal.get('title', '')}\n"
        chunk_text += f"Location: {personal.get('location', '')}\n"
        chunk_text += f"Summary: {personal.get('summary', '')}\n"
        chunk_text += f"Elevator Pitch: {personal.get('elevator_pitch', '')}"
        chunks.append({
            "id": "personal_info",
            "text": chunk_text,
            "metadata": {"category": "personal", "type": "basic_info"}
        })
    
    # Experience
    if 'experience' in data:
        for idx, exp in enumerate(data['experience']):
            chunk_text = f"Company: {exp.get('company', '')}\n"
            chunk_text += f"Title: {exp.get('title', '')}\n"
            chunk_text += f"Duration: {exp.get('duration', '')}\n"
            chunk_text += f"Context: {exp.get('company_context', '')}\n"
            
            # Add STAR achievements
            if 'achievements_star' in exp:
                chunk_text += "\nAchievements:\n"
                for achievement in exp['achievements_star']:
                    chunk_text += f"- Situation: {achievement.get('situation', '')}\n"
                    chunk_text += f"  Task: {achievement.get('task', '')}\n"
                    chunk_text += f"  Action: {achievement.get('action', '')}\n"
                    chunk_text += f"  Result: {achievement.get('result', '')}\n"
            
            chunk_text += f"\nTechnical Skills Used: {', '.join(exp.get('technical_skills_used', []))}"
            
            chunks.append({
                "id": f"experience_{idx}",
                "text": chunk_text,
                "metadata": {"category": "experience", "company": exp.get('company', '')}
            })
    
    # Skills
    if 'skills' in data:
        skills = data['skills']
        
        # Technical skills
        if 'technical' in skills:
            tech = skills['technical']
            chunk_text = "Technical Skills:\n"
            
            if 'programming_languages' in tech:
                chunk_text += "\nProgramming Languages:\n"
                for lang in tech['programming_languages']:
                    chunk_text += f"- {lang.get('language', '')}: {lang.get('proficiency', '')} ({lang.get('years', '')} years)\n"
                    chunk_text += f"  Frameworks: {', '.join(lang.get('frameworks', []))}\n"
            
            if 'databases' in tech:
                chunk_text += f"\nDatabases: {', '.join(tech['databases'])}\n"
            
            if 'cloud_platforms' in tech:
                chunk_text += f"\nCloud Platforms: {', '.join(tech['cloud_platforms'])}\n"
            
            if 'ai_ml' in tech:
                chunk_text += f"\nAI/ML: {', '.join(tech['ai_ml'])}\n"
            
            chunks.append({
                "id": "technical_skills",
                "text": chunk_text,
                "metadata": {"category": "skills", "type": "technical"}
            })
        
        # Soft skills
        if 'soft_skills' in skills:
            chunk_text = f"Soft Skills: {', '.join(skills['soft_skills'])}"
            chunks.append({
                "id": "soft_skills",
                "text": chunk_text,
                "metadata": {"category": "skills", "type": "soft"}
            })
    
    # Education
    if 'education' in data:
        edu = data['education']
        chunk_text = f"Education:\n"
        chunk_text += f"University: {edu.get('university', '')}\n"
        chunk_text += f"Degree: {edu.get('degree', '')}\n"
        chunk_text += f"Graduation Year: {edu.get('graduation_year', '')}\n"
        chunk_text += f"GPA: {edu.get('gpa', '')}\n"
        chunk_text += f"Relevant Coursework: {', '.join(edu.get('relevant_coursework', []))}"
        
        chunks.append({
            "id": "education",
            "text": chunk_text,
            "metadata": {"category": "education"}
        })
    
    # Projects
    if 'projects_portfolio' in data:
        for idx, project in enumerate(data['projects_portfolio']):
            chunk_text = f"Project: {project.get('name', '')}\n"
            chunk_text += f"Description: {project.get('description', '')}\n"
            chunk_text += f"Technologies: {', '.join(project.get('technologies', []))}\n"
            chunk_text += f"Impact: {project.get('impact', '')}"
            
            chunks.append({
                "id": f"project_{idx}",
                "text": chunk_text,
                "metadata": {"category": "projects", "project_name": project.get('name', '')}
            })
    
    # Interview prep - behavioral questions
    if 'interview_prep' in data and 'common_questions' in data['interview_prep']:
        questions = data['interview_prep']['common_questions']
        
        if 'behavioral' in questions:
            for idx, qa in enumerate(questions['behavioral']):
                chunk_text = f"Question: {qa.get('question', '')}\n"
                chunk_text += f"Answer: {qa.get('answer', '')}"
                
                chunks.append({
                    "id": f"behavioral_qa_{idx}",
                    "text": chunk_text,
                    "metadata": {"category": "interview_prep", "type": "behavioral"}
                })
        
        if 'technical' in questions:
            for idx, qa in enumerate(questions['technical']):
                chunk_text = f"Question: {qa.get('question', '')}\n"
                chunk_text += f"Answer: {qa.get('answer', '')}"
                
                chunks.append({
                    "id": f"technical_qa_{idx}",
                    "text": chunk_text,
                    "metadata": {"category": "interview_prep", "type": "technical"}
                })
        
        if 'situational' in questions:
            for idx, qa in enumerate(questions['situational']):
                chunk_text = f"Question: {qa.get('question', '')}\n"
                chunk_text += f"Answer: {qa.get('answer', '')}"
                
                chunks.append({
                    "id": f"situational_qa_{idx}",
                    "text": chunk_text,
                    "metadata": {"category": "interview_prep", "type": "situational"}
                })
    
    # Career goals
    if 'career_goals' in data:
        goals = data['career_goals']
        chunk_text = f"Career Goals:\n"
        chunk_text += f"Short-term: {goals.get('short_term', '')}\n"
        chunk_text += f"Long-term: {goals.get('long_term', '')}\n"
        chunk_text += f"Learning Focus: {', '.join(goals.get('learning_focus', []))}\n"
        chunk_text += f"Industries Interested: {', '.join(goals.get('industries_interested', []))}"
        
        chunks.append({
            "id": "career_goals",
            "text": chunk_text,
            "metadata": {"category": "career_goals"}
        })
    
    # Salary and location preferences
    if 'salary_location' in data:
        sal = data['salary_location']
        chunk_text = f"Salary & Location Preferences:\n"
        chunk_text += f"Salary Expectations: {sal.get('salary_expectations', '')}\n"
        chunk_text += f"Location Preferences: {', '.join(sal.get('location_preferences', []))}\n"
        chunk_text += f"Relocation Willing: {sal.get('relocation_willing', '')}\n"
        chunk_text += f"Remote Experience: {sal.get('remote_experience', '')}"
        
        chunks.append({
            "id": "salary_location",
            "text": chunk_text,
            "metadata": {"category": "preferences"}
        })
    
    return chunks

def main():
    print("📚 Digital Twin Embedding Process")
    print("=" * 50)
    
    # Load JSON data
    print("\n1️⃣ Loading digitaltwin.json...")
    with open('digitaltwin.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    print("✓ JSON data loaded successfully")
    
    # Create chunks
    print("\n2️⃣ Creating text chunks...")
    chunks = create_chunks(data)
    print(f"✓ Created {len(chunks)} chunks")
    
    # Clear existing vectors (optional)
    print("\n3️⃣ Clearing existing vectors...")
    try:
        index.reset()
        print("✓ Existing vectors cleared")
    except Exception as e:
        print(f"⚠ Could not clear vectors: {e}")
    
    # Upload to Upstash Vector
    print("\n4️⃣ Uploading vectors to Upstash...")
    for chunk in chunks:
        try:
            # Generate embedding locally
            embedding = get_embedding(chunk['text'])

            # Ensure metadata includes 'title' and 'content'
            metadata = dict(chunk.get('metadata', {}))
            # Use chunk id/type as title if not present
            metadata['title'] = metadata.get('title') or chunk.get('id') or 'Information'
            metadata['content'] = chunk.get('text', '')

            # Upload to Upstash
            index.upsert(
                vectors=[
                    (
                        chunk['id'],  # ID
                        embedding,  # Vector embedding
                        metadata     # Metadata with title/content
                    )
                ]
            )
            print(f"✓ Uploaded: {chunk['id']}")
        except Exception as e:
            print(f"✗ Failed to upload {chunk['id']}: {e}")

    # Print all uploaded IDs for reference
    print("\nAll uploaded vector IDs:")
    for chunk in chunks:
        print(f"- {chunk['id']}")
    
    print("\n" + "=" * 50)
    print("✅ Embedding process complete!")
    print(f"📊 Total chunks embedded: {len(chunks)}")
    
    # Verify
    print("\n5️⃣ Verifying upload...")
    info = index.info()
    print(f"✓ Vector count in database: {info.vector_count}")
    print(f"✓ Vector dimension: {info.dimension}")

if __name__ == "__main__":
    main()
