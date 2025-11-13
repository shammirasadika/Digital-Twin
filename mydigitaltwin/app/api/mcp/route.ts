import { NextRequest, NextResponse } from "next/server";
import { 
  digitalTwinQuery, 
  enhancedDigitalTwinQuery,
  contextAwareDigitalTwinQuery,
  compareRAGApproaches,
  testVectorConnection, 
  testGroqConnection 
} from "@/app/actions/digital-twin-actions";

// MCP Protocol Version
const MCP_VERSION = "2024-11-05";

/**
 * MCP (Model Context Protocol) Server Endpoint
 * This endpoint follows the JSON-RPC 2.0 specification for MCP
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { jsonrpc, method, params, id } = body;

    // Validate JSON-RPC 2.0 format
    if (jsonrpc !== "2.0") {
      return NextResponse.json(
        {
          jsonrpc: "2.0",
          error: {
            code: -32600,
            message: "Invalid Request: jsonrpc must be '2.0'",
          },
          id: id || null,
        },
        { status: 400 }
      );
    }

    // Handle different MCP methods
    switch (method) {
      case "initialize":
        return NextResponse.json({
          jsonrpc: "2.0",
          result: {
            protocolVersion: MCP_VERSION,
            capabilities: {
              tools: { listChanged: false },
            },
            serverInfo: {
              name: "digital-twin-mcp",
              version: "1.0.0",
            },
          },
          id,
        });

      case "tools/list":
        // List available MCP tools
        return NextResponse.json({
          jsonrpc: "2.0",
          result: {
            tools: [
              {
                name: "query_digital_twin",
                description: "Query Shammi Parussella's professional profile using basic RAG. Returns information about work experience, skills, education, and projects.",
                inputSchema: {
                  type: "object",
                  properties: {
                    question: {
                      type: "string",
                      description: "Question about professional background, skills, or experience",
                    },
                  },
                  required: ["question"],
                },
              },
              {
                name: "enhanced_query_digital_twin",
                description: "Enhanced RAG query with LLM-powered query preprocessing and interview-focused response formatting. Provides more detailed, interview-ready answers with STAR format.",
                inputSchema: {
                  type: "object",
                  properties: {
                    question: {
                      type: "string",
                      description: "Question about professional background, skills, or experience",
                    },
                  },
                  required: ["question"],
                },
              },
              {
                name: "context_aware_query",
                description: "Context-aware RAG query tailored for specific interview types (technical_interview, behavioral_interview, or executive_interview). Adapts response style and focus areas.",
                inputSchema: {
                  type: "object",
                  properties: {
                    question: {
                      type: "string",
                      description: "Interview question",
                    },
                    interviewType: {
                      type: "string",
                      enum: ["technical_interview", "behavioral_interview", "executive_interview"],
                      description: "Type of interview to optimize response for",
                    },
                  },
                  required: ["question", "interviewType"],
                },
              },
              {
                name: "compare_rag_approaches",
                description: "Compare basic RAG vs enhanced LLM-powered RAG responses side-by-side to evaluate improvements in answer quality and interview readiness.",
                inputSchema: {
                  type: "object",
                  properties: {
                    question: {
                      type: "string",
                      description: "Question to compare across both approaches",
                    },
                  },
                  required: ["question"],
                },
              },
              {
                name: "test_connections",
                description: "Test connectivity to Upstash Vector database and Groq API",
                inputSchema: {
                  type: "object",
                  properties: {},
                },
              },
            ],
          },
          id,
        });

      case "tools/call":
        // Execute MCP tool
        const toolName = params?.name;
        const toolArgs = params?.arguments || {};

        if (toolName === "query_digital_twin") {
          const question = toolArgs.question;
          if (!question) {
            return NextResponse.json({
              jsonrpc: "2.0",
              error: {
                code: -32602,
                message: "Missing required parameter: question",
              },
              id,
            });
          }

          const queryResult = await digitalTwinQuery(question);
          return NextResponse.json({
            jsonrpc: "2.0",
            result: {
              content: [
                {
                  type: "text",
                  text: queryResult.answer,
                },
              ],
              isError: !queryResult.success,
            },
            id,
          });
        }

        if (toolName === "enhanced_query_digital_twin") {
          const question = toolArgs.question;
          if (!question) {
            return NextResponse.json({
              jsonrpc: "2.0",
              error: {
                code: -32602,
                message: "Missing required parameter: question",
              },
              id,
            });
          }

          const queryResult = await enhancedDigitalTwinQuery(question);
          const metadata = 'metadata' in queryResult ? queryResult.metadata : null;
          
          return NextResponse.json({
            jsonrpc: "2.0",
            result: {
              content: [
                {
                  type: "text",
                  text: queryResult.answer,
                },
                {
                  type: "text",
                  text: `\n\n---\nMetadata:\n- Original Query: ${metadata?.originalQuery || 'N/A'}\n- Enhanced Query: ${metadata?.enhancedQuery || 'N/A'}\n- Results Found: ${metadata?.resultsFound || 0}`,
                },
              ],
              isError: !queryResult.success,
            },
            id,
          });
        }

        if (toolName === "context_aware_query") {
          const question = toolArgs.question;
          const interviewType = toolArgs.interviewType;
          
          if (!question || !interviewType) {
            return NextResponse.json({
              jsonrpc: "2.0",
              error: {
                code: -32602,
                message: "Missing required parameters: question and interviewType",
              },
              id,
            });
          }

          const queryResult = await contextAwareDigitalTwinQuery(question, interviewType);
          const metadata = 'metadata' in queryResult ? queryResult.metadata : null;
          
          return NextResponse.json({
            jsonrpc: "2.0",
            result: {
              content: [
                {
                  type: "text",
                  text: queryResult.answer,
                },
                {
                  type: "text",
                  text: `\n\n---\nInterview Context:\n- Type: ${interviewType.replace('_', ' ')}\n- Enhanced Query: ${metadata?.enhancedQuery || 'N/A'}\n- Results Found: ${metadata?.resultsFound || 0}`,
                },
              ],
              isError: !queryResult.success,
            },
            id,
          });
        }

        if (toolName === "compare_rag_approaches") {
          const question = toolArgs.question;
          if (!question) {
            return NextResponse.json({
              jsonrpc: "2.0",
              error: {
                code: -32602,
                message: "Missing required parameter: question",
              },
              id,
            });
          }

          const comparison = await compareRAGApproaches(question);
          
          const comparisonText = `
QUESTION: ${comparison.question}

=== BASIC RAG RESPONSE ===
${comparison.results?.basic?.response || 'Error'}

=== ENHANCED RAG RESPONSE ===
${comparison.results?.enhanced?.response || 'Error'}

---
Enhanced Query Used: ${comparison.results?.enhanced?.enhancedQuery || 'N/A'}
Total Processing Time: ${comparison.totalComparisonTime}ms
          `.trim();

          return NextResponse.json({
            jsonrpc: "2.0",
            result: {
              content: [
                {
                  type: "text",
                  text: comparisonText,
                },
              ],
              isError: !!comparison.error,
            },
            id,
          });
        }

        if (toolName === "test_connections") {
          const [vectorTest, groqTest] = await Promise.all([
            testVectorConnection(),
            testGroqConnection(),
          ]);
          return NextResponse.json({
            jsonrpc: "2.0",
            result: {
              content: [
                {
                  type: "text",
                  text: `Upstash Vector: ${vectorTest.success ? "✓ Connected" : "✗ Failed"}\nGroq API: ${groqTest.success ? "✓ Connected" : "✗ Failed"}`,
                },
              ],
              isError: !vectorTest.success || !groqTest.success,
            },
            id,
          });
        }

        return NextResponse.json({
          jsonrpc: "2.0",
          error: {
            code: -32602,
            message: `Unknown tool: ${toolName}`,
          },
          id,
        });

      default:
        return NextResponse.json({
          jsonrpc: "2.0",
          error: {
            code: -32601,
            message: `Method not found: ${method}`,
          },
          id,
        });
    }
  } catch (error) {
    // Error logged for production monitoring
    console.error("MCP endpoint error:", error);
    return NextResponse.json(
      {
        jsonrpc: "2.0",
        error: {
          code: -32603,
          message: "Internal error",
          data: error instanceof Error ? error.message : 'Unknown error',
        },
        id: null,
      },
      { status: 500 }
    );
  }
}

/**
 * GET request handler - returns server information
 */
export async function GET() {
  return NextResponse.json({
    name: "Digital Twin MCP Server",
    version: "1.0.0",
    description: "MCP server for professional profile RAG queries with LLM-enhanced responses",
    protocol: "JSON-RPC 2.0 / MCP",
    methods: ["initialize", "tools/list", "tools/call"],
    tools: [
      "query_digital_twin", 
      "enhanced_query_digital_twin",
      "context_aware_query",
      "compare_rag_approaches",
      "test_connections"
    ],
  });
}
