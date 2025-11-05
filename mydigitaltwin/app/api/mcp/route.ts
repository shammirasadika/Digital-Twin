import { NextRequest, NextResponse } from "next/server";
import { digitalTwinQuery, testVectorConnection, testGroqConnection } from "@/app/actions/digital-twin-actions";

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
                description: "Query Shammi Parussella's professional profile using RAG. Returns information about work experience, skills, education, and projects.",
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
    description: "MCP server for professional profile RAG queries",
    protocol: "JSON-RPC 2.0 / MCP",
    methods: ["initialize", "tools/list", "tools/call"],
    tools: ["query_digital_twin", "test_connections"],
  });
}
