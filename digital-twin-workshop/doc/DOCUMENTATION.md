# Digital Twin RAG System Documentation

## About
This project implements a professional Digital Twin using a Retrieval-Augmented Generation (RAG) system. The backend is built in Python and leverages:
- **Upstash Vector** for vector database and semantic search
- **Groq AI** for ultra-fast LLM inference
- **Professional profile data** structured using the STAR methodology

The system loads your professional data, generates vector embeddings, and stores them in Upstash. When a query is received, it performs semantic search to retrieve relevant information and uses Groq AI to generate a personalized response in real time. All interactions are optimized for recruiter and hiring team scenarios.

---

## GitHub Repository
[View the complete implementation on GitHub](https://github.com/shammi-parussella/digital-twin)

---

## Testing & Quality Assessment
### Sample Recruiter-Style Queries
Below are 20+ sample queries you can use to test the system:

1. Tell me about your work experience.
2. What are your technical skills?
3. Describe your career goals.
4. How did you use the STAR methodology in your projects?
5. What is your experience with RAG systems?
6. Explain a challenging technical problem you solved.
7. How do you approach learning new technologies?
8. What leadership examples can you share?
9. Describe a successful project you completed.
10. How do you handle remote work?
11. What are your salary expectations?
12. What industries are you interested in?
13. How do you manage your time?
14. What is your experience with APIs?
15. How do you handle feedback?
16. What are your soft skills?
17. Describe your education background.
18. What certifications do you have?
19. How do you prepare for interviews?
20. What motivates you in your career?
21. How do you contribute to team success?
22. What are your long-term goals?

*Quality assessments and real responses can be added here after running the system.*

---

## Profile Data (STAR-Structured)
The RAG system uses professional profile data structured using the STAR methodology. Example structure:

```json
{
  "personal": {
    "name": "Shammi Parussella",
    "location": "Melbourne, Australia",
    "phone": "+61 459497554",
    "email": "shammirasadika123@gmail.com",
    "linkedin": "www.linkedin.com/in/shammi-parussella-301603197",
    "summary": "A self-motivated and hardworking individual with over four years of valuable industrial experience in .NET consulting, training, and solution development. Committed to ensuring complete customer satisfaction and service excellence. Possesses excellent communication skills and demonstrates the ability and experience to relate to a wide range of people."
  },
  "skills": [
    ".NET Framework/Core", "PHP", "C#", "ASP.NET MVC/Core", "Entity Framework", "RESTful APIs", "Visual Studio", "HTML", "CSS", "JavaScript", "React", "Angular", "SQL Server", "MySQL", "Git", "NUnit", "xUnit", "Azure", "Problem-solving", "Analytical skills", "Debugging", "Communication", "Teamwork", "Software design patterns"
  ],
  "experience": [
    {
      "company": "CONIFS Global (Pvt) Ltd",
      "title": "Technical Consultant/Software Engineer",
      "duration": "May 2023 - April 2024",
      "achievements_star": [
        {
          "situation": "Needed to optimize and maintain complex database structures for client projects.",
          "task": "Design, build, and upkeep the structure of databases, including tables, relationships, and data types.",
          "action": "Created advanced T-SQL queries, optimized performance, and coordinated with internal teams to develop solutions.",
          "result": "Enhanced data retrieval/manipulation performance and improved team technical capabilities."
        }
      ],
      "technologies": [".Net Core", "Azure DB", "Asp.Net", "Azure Function App", "Azure Logic App", "EF Core", "Azure Storage", "React Native", "MS SQL", "Azure Event Grid", "Azure DevOps"]
    },
    {
      "company": "Acentura (Pvt) Ltd",
      "title": "Software Engineer",
      "duration": "April 2022 - May 2023",
      "achievements_star": [
        {
          "situation": "Needed to improve existing software and design new applications.",
          "task": "Work with a team to enhance software and develop new solutions.",
          "action": "Developed SOPs, investigated new technologies, and drafted data models/visual diagrams.",
          "result": "Improved software quality and team adoption of new technologies."
        }
      ]
    },
    {
      "company": "DMS Software Engineering (Pvt) Ltd",
      "title": "Associate Software Engineer",
      "duration": "Feb 2021 - April 2022",
      "achievements_star": [
        {
          "situation": "Tasked with developing a new software product from scratch.",
          "task": "Develop and improve software products and database queries.",
          "action": "Created advanced T-SQL queries, investigated/troubleshot database issues.",
          "result": "Successfully launched a new software product and improved database reliability."
        }
      ]
    },
    {
      "company": "Flexiv Micro System (Pvt)",
      "title": "Trainee Software Engineer",
      "duration": "Dec 2019 - Feb 2021",
      "achievements_star": [
        {
          "situation": "Assigned to support software development and database functions.",
          "task": "Write code and create stored procedures/functions.",
          "action": "Developed program modules and SQL functions.",
          "result": "Contributed to successful project delivery."
        }
      ]
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Science – Information Technology",
      "institution": "Sri Lanka Institute of Information Technology",
      "year": "2020"
    },
    {
      "degree": "Master of Science – Data Analytics and Artificial Intelligence",
      "institution": "University of Tasmania – Australia",
      "year": "Present"
    },
    {
      "degree": "Diploma of Spoken English",
      "institution": "ICBT Campus – Sri Lanka"
    }
  ],
  "languages": [
    {"language": "English", "level": "Advanced (C1)"},
    {"language": "Hindi", "level": "Beginner (A1)"}
  ]
}
```

---

## How to Run
1. Install Python dependencies:
   ```
   pip install -r requirements.txt
   ```
2. Start the backend server:
   ```
   uvicorn app:app --reload
   ```
3. (Optional) Run the Next.js frontend for portfolio integration.

---

## Contact
- **Name:** Shammi Parussella
- **Email:** shammirasadika123@gmail.com
- **LinkedIn:** [shammi-parussella-301603197](https://www.linkedin.com/in/shammi-parussella-301603197)
