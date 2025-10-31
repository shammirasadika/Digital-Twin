from upstash_vector import Index
import os
from dotenv import load_dotenv

# Load environment variables from .env.local (or .env)
load_dotenv('.env.local')

# Initialize Upstash index
index = Index(
    url=os.getenv("UPSTASH_VECTOR_REST_URL"),
    token=os.getenv("UPSTASH_VECTOR_REST_TOKEN")
)

# Get info about the index
info = index.info()
print(f"Vector count: {info.vector_count}")

# Try to fetch all vectors by guessing possible IDs (since Upstash does not provide a list-all API)
# If you know the chunking logic, you can reconstruct the IDs. Otherwise, print a message to check embedding script output.

print("\n--- Attempting to fetch all likely vector IDs (0 to vector_count-1) ---")
found_any = False
for i in range(info.vector_count):
    # Try common ID patterns
    for prefix in ["personal", "personal_info", "experience", "education", "skills", "project", "projects_portfolio", "career_goals", "salary_location", "chunk", "section"]:
        vector_id = f"{prefix}_{i}"
        result = index.fetch([vector_id])
        for v in result:
            if v is not None:
                if v.vector is not None:
                    found_any = True
                    print("ID:", v.id)
                    print("Metadata:", v.metadata)
                    print("Vector (first 5 dims):", v.vector[:5])
                    print("-" * 40)

if not found_any:
    print("No vectors found with common ID patterns.\n")
    print("Tip: To see all actual IDs, modify your embedding script to print/log each uploaded ID during the upload process.")
