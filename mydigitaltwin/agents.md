# Digital Twin MCP Server Project Instructions

## Project Overview
Build an MCP server using the roll dice pattern to create a digital twin assistant that can answer questions about a person's professional profile using RAG (Retrieval-Augmented Generation).

## Project Repository
- **This Project**: https://github.com/shammirasadika/Digital-Twin
  - Digital Twin MCP Server for interview preparation using RAG
  - Owner: Shammi Parussella
  - Tech Stack: Next.js 15.5.6, TypeScript, Upstash Vector, Groq API

## Reference Repositories
- **Pattern Reference**: https://github.com/gocallum/rolldice-mcpserver.git
  - Roll dice MCP server - use same technology and pattern for our MCP server
- **Logic Reference**: https://github.com/gocallum/binal_digital-twin_py.git
  - Python code using Upstash Vector for RAG search with Groq and LLaMA for generations

## Core Functionality
- MCP server accepts user questions about Shammi Parussella's professional background
- Server actions search Upstash Vector database with semantic similarity (topK=5)
- Groq LLaMA 3.3 70B Versatile generates contextual responses
- JSON-RPC 2.0 protocol for MCP client compatibility
## Environment Variables (.env.local)
```bash
# Upstash Vector Database (smooth-basilisk-44139-us1)
UPSTASH_VECTOR_REST_URL=https://smooth-basilisk-44139-us1-vector.upstash.io
UPSTASH_VECTOR_REST_TOKEN=<configured_in_env_file>

# Groq API for LLaMA 3.3 70B Versatile
GROQ_API_KEY=<configured_in_env_file>
## Technical Requirements & Constraints

### Framework & Tooling
- **Framework**: Next.js 15.5.6 (App Router, TypeScript)
- **Package Manager**: pnpm ONLY (never npm or yarn)
- **Runtime**: Node.js with Windows PowerShell commands
- **Type Safety**: Strict TypeScript, no `any` types, proper error typing
- **Architecture**: Server Actions with "use server" directive

### Code Standards
- **Error Handling**: Use `error instanceof Error ? error.message : 'Unknown error'`
- **Async Operations**: Always await promises, handle rejections
- **Environment Variables**: Use `process.env.VAR_NAME!` with proper null checks
- **Imports**: Use `@/` path alias for app directory imports

### API Specifications
- **MCP Protocol**: JSON-RPC 2.0 (jsonrpc, method, params, id)
- **HTTP Methods**: POST for MCP queries, GET for server info
- **Response Format**: 
  ```typescript
  { jsonrpc: "2.0", result: {...}, id: number }
  { jsonrpc: "2.0", error: { code: number, message: string }, id: number }
  ```
- **Status Codes**: 200 (success), 400 (invalid), 500 (error)

### Business Logic Constraints
- **RAG Parameters**: topK=5, includeMetadata=true, embeddings handled by Upstash
- **LLM Settings**: temperature=0.7, max_tokens=1000, model=llama-3.3-70b-versatile
- **Context Building**: Join vector results with double newline separator
- **Response Fallback**: Return helpful message when no relevant context found

## Environment Variables (.env.local)
```
UPSTASH_VECTOR_REST_URL=https://smooth-basilisk-44139-us1-vector.upstash.io
UPSTASH_VECTOR_REST_TOKEN=<your_token>
GROQ_API_KEY=<your_api_key>
```
**Note**: Actual credentials are configured in `.env.local` file (not committed to git)

## Technical Requirements
- **Framework**: Next.js 15.5.3+ (use latest available)
- **Package Manager**: Always use pnpm (never npm or yarn)
- **Commands**: Always use Windows PowerShell commands
- **Type Safety**: Enforce strong TypeScript type safety throughout
- **Architecture**: Always use server actions where possible
- **Styling**: Use globals.css instead of inline styling
- **UI Framework**: ShadCN with dark mode theme
- **Focus**: Prioritize MCP functionality over UI - UI is primarily for MCP server configuration

## Setup Commands
```bash
pnpm dlx shadcn@latest init
```
Reference: https://ui.shadcn.com/docs/installation/next

## Upstash Vector Integration

### Key Documentation
- Getting Started: https://upstash.com/docs/vector/overall/getstarted
- Embedding Models: https://upstash.com/docs/vector/features/embeddingmodels
- TypeScript SDK: https://upstash.com/docs/vector/sdks/ts/getting-started

### Example Implementation
```typescript
import { Index } from "@upstash/vector"

const index = new Index({
  url: process.env.UPSTASH_VECTOR_REST_URL!,
  token: process.env.UPSTASH_VECTOR_REST_TOKEN!,
})

## Database Schema (Upstash Vector)

### Vector Metadata Structure
```typescript
{
  text: string;           // STAR-formatted experience or skill description
  category?: string;      // "experience" | "skills" | "education" | "projects"
  company?: string;       // Company name (e.g., "CONIFS Global")
  role?: string;          // Job title (e.g., "Technical Consultant")
  period?: string;        // Date range (e.g., "May 2023 - April 2024")
  technologies?: string[]; // Tech stack used
}
```

### Embedded Profile Data Includes:
- Work experience (3 companies, 4+ years)
- Technical skills (.NET, Azure, React, Python, SQL Server)
- Education (Master's at UTAS, Bachelor's from SLIIT)
- Projects and achievements in STAR format

## API Endpoints

### 1. MCP Server (JSON-RPC 2.0)
**Endpoint**: `POST /api/mcp`
**Methods**:
- `ping` - Health check
- `query` - Main RAG query (params: {question: string})
- `digital_twin_query` - Alias for query
- `test_connections` - Test Upstash & Groq connectivity
- `capabilities` - List available methods

### 2. Chat API (REST)
**Endpoint**: `POST /api/chat`
**Body**: `{question: string}`
**Response**: `{answer: string, metadata: {resultsFound: number}}`

### 3. Server Actions
- `digitalTwinQuery(question: string)` - Main RAG function
- `testVectorConnection()` - Verify Upstash connection
- `testGroqConnection()` - Verify Groq API connection

## Development Workflow

### When Making Code Changes:
1. **Read agents.md** for project context
2. **Check existing code** in app/actions/ and app/api/
3. **Follow TypeScript patterns** already established
4. **Test locally** at http://localhost:3000
5. **Verify MCP endpoint** with POST requests
6. **Check terminal logs** for errors

### For New Features:
1. Add to server actions first (app/actions/)
2. Expose via MCP endpoint if needed (app/api/mcp/)
3. Update agents.md with new functionality
4. Test with both web UI and MCP clients

## Additional Resources
- **MCP Protocol**: https://modelcontextprotocol.io/
- **Groq API Docs**: https://console.groq.com/docs/quickstart
- **Upstash Vector SDK**: https://upstash.com/docs/vector/sdks/ts/getting-started
- **Next.js App Router**: https://nextjs.org/docs/app
- **JSON-RPC 2.0 Spec**: https://www.jsonrpc.org/specification

---

**Note**: This file provides comprehensive context for GitHub Copilot to generate accurate, project-specific code that matches existing patterns and requirements. Update this file whenever project requirements, APIs, or architecture change.
├── app/
│   ├── actions/
│   │   └── digital-twin-actions.ts    # Server Actions for RAG queries
│   ├── api/
│   │   ├── mcp/
│   │   │   └── route.ts               # MCP JSON-RPC 2.0 endpoint
│   │   └── chat/
│   │       └── route.ts               # REST API for web UI
│   ├── profile-data/                  # Profile data viewer page
│   ├── testing/                       # Testing utilities page
│   └── layout.tsx                     # Root layout
├── .vscode/
│   └── mcp.json                       # MCP client configuration
├── agents.md                          # This file - GitHub Copilot instructions
└── .env.local                         # Environment variables (not in git)
```

## Current Implementation Status
✅ **Server Actions**: `digital-twin-actions.ts` with digitalTwinQuery(), testVectorConnection(), testGroqConnection()
✅ **MCP Endpoint**: `/api/mcp` with JSON-RPC 2.0 support (methods: ping, query, test_connections, capabilities)
✅ **Upstash Integration**: Vector search with topK=5, includeMetadata=true
✅ **Groq Integration**: LLaMA 3.3 70B Versatile model for response generation
✅ **Web UI**: React-based chat interface at `/` 

## Testing & Debugging
- **MCP Endpoint**: `http://localhost:3000/api/mcp` (GET for info, POST for queries)
- **Web UI**: `http://localhost:3000` (chat interface)
- **Test Files**: `test-mcp.html`, `test-mcp-query.js` for endpoint testing

## Additional Resources
- MCP Protocol Spec: https://modelcontextprotocol.io/
- Groq API Docs: https://console.groq.com/docs/quickstart
- Upstash Vector: https://upstash.com/docs/vector
- Next.js App Router: https://nextjs.org/docs/app

---

**Note**: This file provides context for GitHub Copilot to generate accurate, project-specific code suggestions. Keep it updated as requirements evolve.
**Note**: This file provides context for GitHub Copilot to generate accurate, project-specific code suggestions. Keep it updated as requirements evolve.
