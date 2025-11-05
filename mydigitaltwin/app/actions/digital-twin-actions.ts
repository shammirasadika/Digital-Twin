"use server";

import { Index } from "@upstash/vector";
import Groq from "groq-sdk";

// Initialize Upstash Vector client
const index = new Index({
  url: process.env.UPSTASH_VECTOR_REST_URL!,
  token: process.env.UPSTASH_VECTOR_REST_TOKEN!,
});

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

/**
 * Main RAG query function for digital twin
 * @param question - User's question about professional background
 * @returns AI-generated response based on vector search results
 */
export async function digitalTwinQuery(question: string) {
  try {
    // Step 1: Perform vector search in Upstash
    const vectorResults = await index.query({
      data: question,
      topK: 5,
      includeMetadata: true,
    });

    // Step 2: Extract context from vector search results
    const context = vectorResults
      .map((result) => {
        const metadata = result.metadata || {};
        return metadata.text || JSON.stringify(metadata);
      })
      .join("\n\n");

    if (!context) {
      return {
        success: false,
        answer: "I couldn't find relevant information in my profile database. Please try rephrasing your question.",
      };
    }

    // Step 3: Generate response using Groq with context
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a professional digital twin assistant representing Shammi Parussella. 
Answer questions about professional experience, skills, projects, and career goals using ONLY the provided context.
Be specific, confident, and use first-person perspective.
If the context doesn't contain relevant information, say so honestly.`,
        },
        {
          role: "user",
          content: `Context from professional profile:
${context}

Question: ${question}

Please provide a detailed, professional answer based on the context above.`,
        },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 1000,
    });

    const answer = completion.choices[0]?.message?.content || "Unable to generate response";

    return {
      success: true,
      answer,
      resultsFound: vectorResults.length,
    };
  } catch (error) {
    // Error logged for production monitoring
    console.error("Error in digitalTwinQuery:", error);
    return {
      success: false,
      answer: `Error processing your question: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
}

/**
 * Test function to verify Upstash Vector connection
 */
export async function testVectorConnection() {
  try {
    const result = await index.query({
      data: "test connection",
      topK: 1,
      includeMetadata: true,
    });
    return {
      success: true,
      message: "Successfully connected to Upstash Vector",
      resultsCount: result.length,
    };
  } catch (error) {
    return {
      success: false,
      message: `Connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
}

/**
 * Test function to verify Groq API connection
 */
export async function testGroqConnection() {
  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: "Say 'Connection successful'" }],
      model: "llama-3.1-8b-instant",
      max_tokens: 10,
    });
    return {
      success: true,
      message: "Successfully connected to Groq API",
      response: completion.choices[0]?.message?.content,
    };
  } catch (error) {
    return {
      success: false,
      message: `Connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
}
