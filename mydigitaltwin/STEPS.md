# Digital Twin MCP Server - Complete Step-by-Step Guide

## ✅ Step 6: Create Agent Instructions (20 minutes) - COMPLETED

**What we did:**
- ✅ Created `agents.md` file in project root
- ✅ Added comprehensive instructions for GitHub Copilot
- ✅ Included project overview, technical requirements, and Upstash/Groq integration details

**File created:** `agents.md`

---

## ✅ Step 7: AI-Assisted Code Generation (35 minutes) - COMPLETED

**What we did:**
- ✅ Installed required dependencies: `pnpm add @upstash/vector groq-sdk`
- ✅ Created server actions in `app/actions/digital-twin-actions.ts`
  - `digitalTwinQuery()` - Main RAG function
  - `testVectorConnection()` - Test Upstash
  - `testGroqConnection()` - Test Groq
- ✅ Created MCP endpoint: `app/api/mcp/route.ts`
  - Supports methods: ping, query, test_connections, capabilities
  - Follows JSON-RPC 2.0 protocol
- ✅ Updated `/api/chat` to use Server Actions instead of Python backend
- ✅ Fixed all TypeScript errors
- ✅ Build successful

**Files created:**
- `app/actions/digital-twin-actions.ts`
- `app/api/mcp/route.ts`
- `.env.local` (with API keys)

**Architecture:**
```
Frontend → Server Actions → Upstash Vector + Groq
(No Python backend needed!)
```

---

## ✅ Step 8: Test MCP in GitHub Copilot/Claude (30 minutes) - SETUP COMPLETE

**What we did:**
- ✅ Created `.vscode/mcp.json` configuration
- ✅ Server running on `http://localhost:3000`
- ✅ MCP endpoint available at `http://localhost:3001/api/mcp`
- ✅ Updated Groq model to `llama-3.3-70b-versatile`

**To test (when you have VS Code Insiders with MCP support):**

```

### Test with GitHub Copilot (VS Code Insiders)
```
@workspace Can you tell me about my work experience using the digital twin MCP server?
```

**Files created:**
- `.vscode/mcp.json`

---

## 📋 Step 9: Real Interview Simulation (45 minutes) - READY

**What to do:**

### 1. Find a Job Posting
- Go to https://www.seek.com.au/
- Find a job matching your skills (Software Engineer, .NET Developer, etc.)
- Copy the entire job posting

### 2. Create Job File
```powershell
# Create the file
New-Item -Path "job-postings/job1.md" -ItemType File

# Open in editor
code job-postings/job1.md
```

### 3. Paste Job Content
Paste the complete job posting into `job1.md`

### 4. Run Interview Simulation
Use this prompt in GitHub Copilot:

```
@workspace You are a senior recruiter conducting a comprehensive interview simulation using the job posting in job-postings/job1.md and my digital twin MCP server data.

INTERVIEW PROCESS:

Phase 1 - Initial Screening (5 minutes)
You are HIGHLY CRITICAL and expect SHORT, SHARP answers. Check:
- Location compatibility
- Salary expectations alignment
- ALL mandatory selection criteria met
- Technical skills match
- Experience level appropriate

Ask 3-4 probing screening questions.

Phase 2 - Technical Assessment (10 minutes)
- Specific programming languages/frameworks
- Years of experience with required technologies
- Project complexity handled
- Problem-solving approach
- Technical leadership

Provide technical competency matrix with 1-5 ratings.

Phase 3 - Cultural Fit (5 minutes)
- Working style compatibility
- Leadership experience
- Team collaboration
- Communication style
- Career motivation

Phase 4 - Final Assessment Report
EXECUTIVE SUMMARY:
- HIRE/DO NOT HIRE recommendation
- Overall suitability score (1-10)
- Key reasons

DETAILED BREAKDOWN:
- Technical competency scores
- Experience relevance
- Cultural fit
- Salary/location alignment
- Risk factors

IMPROVEMENT AREAS:
- Skills gaps
- Missing profile information
- Better interview responses
- Recommended next steps

Be ruthless - only recommend truly suitable candidates.
```

### 5. Review Feedback & Improve
Based on interview feedback:
- Update `digitaltwin.json` in backend folder
- Add missing information (salary expectations, location preferences)
- Add STAR format stories for projects
- Re-run: `python embed_digitaltwin.py` to update vector database

### 6. Test Again
Re-run the interview simulation with updated profile

**Folder created:**
- `job-postings/` with README.md

---

## 📋 Step 10: Test in Claude Desktop (20 minutes) - READY

**What to do:**

### 1. Ensure Server is Running
```powershell
cd mydigitaltwin
pnpm dev
```
Server should be at: `http://localhost:3001`

### 2. Connect Claude Desktop
```powershell
# In a new terminal
npx -y mcp-remote http://localhost:3001/api/mcp
```

### 3. Configure Claude Desktop
In Claude Desktop Settings → Developer → MCP Servers:
```json
{
  "mcpServers": {
    "digital-twin-remote": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "http://localhost:3001/api/mcp"]
    }
  }
}
```

### 4. Test Queries in Claude
- "Can you tell me about my work experience?"
- "What are my key technical skills?"
- "Help me prepare for a technical interview"
- "Given my experience, what salary range should I request?"

---

## 📋 Step 11: Deploy to Vercel (25 minutes) - READY

**What to do:**

### 1. Push to GitHub
```powershell
cd "c:\Users\shamm\OneDrive\Desktop\UTAS\Internship\Digital Twin"
git add mydigitaltwin/
git commit -m "Add Next.js MCP server with Upstash and Groq"
git push origin main
```

### 2. Deploy to Vercel
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your "Digital-Twin" repository
5. **Important:** Set Root Directory to `mydigitaltwin`

### 3. Add Environment Variables
Add these 3 variables in Vercel dashboard:

```
UPSTASH_VECTOR_REST_URL=your_upstash_url_here
UPSTASH_VECTOR_REST_TOKEN=your_upstash_token_here
GROQ_API_KEY=your_groq_api_key_here
```

### 4. Deploy
Click "Deploy" and wait 2-3 minutes

### 5. Get Your URLs
After deployment:
- **Production URL**: `https://your-project.vercel.app`
- **MCP Endpoint**: `https://your-project.vercel.app/api/mcp`
- **Web UI**: `https://your-project.vercel.app`

### 6. Update Configurations
Update `.vscode/mcp.json` and Claude Desktop config with production URL

---

## 📋 Step 12: Advanced RAG Optimization (45 minutes) - OPTIONAL

**What it does:**
- LLM-enhanced query preprocessing (better searches)
- LLM-powered response formatting (interview-ready answers)
- Context-aware responses based on interview type

**To implement:**
1. Add query enhancement function
2. Add response post-processing
3. Configure different interview contexts (technical, behavioral, executive)
4. A/B test basic vs enhanced RAG

**This step is optional** - current implementation already works well!

---

## 🎯 Current Status Summary

### ✅ Completed:
1. Next.js project setup with TypeScript, Tailwind, ESLint
2. agents.md instructions for GitHub Copilot
3. Upstash Vector + Groq SDK installation
4. Server Actions for RAG functionality
5. MCP endpoint with JSON-RPC 2.0
6. VS Code MCP configuration
7. Environment variables configured
8. Build successful, server running
9. Web UI working at localhost:3001
10. Updated to current Groq model (llama-3.3-70b-versatile)

### 📋 Ready to Do:
- Step 9: Interview simulation with real job postings
- Step 10: Test with Claude Desktop
- Step 11: Deploy to Vercel
- Step 12: Advanced RAG optimization (optional)

### 🔑 Key Endpoints:
- **Web UI**: http://localhost:3001
- **MCP API**: http://localhost:3001/api/mcp
- **Chat API**: http://localhost:3001/api/chat

---

## 📚 Quick Reference

### Run Dev Server
```powershell
cd mydigitaltwin
pnpm dev
```

### Test MCP Endpoint
```powershell
$body = @{jsonrpc="2.0"; method="ping"; id=1} | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:3001/api/mcp" -Method POST -Body $body -ContentType "application/json"
```

### Build for Production
```powershell
pnpm build
```

### Deploy to Vercel
```powershell
git add .
git commit -m "Update"
git push origin main
# Then deploy via Vercel dashboard
```

---

**You're ready to continue with Steps 9-12! 🚀**
