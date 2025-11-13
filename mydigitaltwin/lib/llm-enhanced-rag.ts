import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

/**
 * Query Preprocessing: Enhance user questions for better vector search
 * Transforms vague questions into specific, search-optimized queries
 */
export async function enhanceQuery(originalQuery: string): Promise<string> {
  const enhancementPrompt = `You are an interview preparation assistant that improves search queries.

Original question: "${originalQuery}"

Enhance this query to better search professional profile data by:
- Adding relevant synonyms and related terms
- Expanding context for interview scenarios  
- Including technical and soft skill variations
- Focusing on achievements and quantifiable results

Return only the enhanced search query (no explanation):`;

  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: enhancementPrompt }],
      model: 'llama-3.1-8b-instant',
      temperature: 0.3, // Lower temperature for consistent query enhancement
      max_tokens: 150,
    });

    const enhanced = completion.choices[0]?.message?.content?.trim();
    return enhanced || originalQuery;
  } catch (error) {
    console.error('Query enhancement failed:', error);
    return originalQuery; // Fallback to original query
  }
}

/**
 * Response Post-Processing: Format RAG results for interview-ready answers
 * Transforms technical data into compelling interview stories with STAR format
 */
export async function formatForInterview(
  ragResults: Array<{ metadata?: Record<string, unknown> }>,
  originalQuestion: string
): Promise<string> {
  const context = ragResults
    .map((result) => {
      const metadata = result.metadata || {};
      return (metadata.text as string) || JSON.stringify(metadata);
    })
    .join('\n\n');

  const formattingPrompt = `You are an expert interview coach. Create a compelling interview response using this professional data.

Question: "${originalQuestion}"

Professional Background Data:
${context}

Create a response that:
- Directly addresses the interview question
- Uses specific examples and quantifiable achievements
- Applies STAR format (Situation-Task-Action-Result) when telling stories
- Sounds confident and natural for an interview setting
- Highlights unique value and differentiators
- Includes relevant technical details without being overwhelming

Interview Response:`;

  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: formattingPrompt }],
      model: 'llama-3.3-70b-versatile', // More powerful model for response crafting
      temperature: 0.7, // Higher creativity for natural responses
      max_tokens: 800,
    });

    return completion.choices[0]?.message?.content?.trim() || 'Unable to generate response';
  } catch (error) {
    console.error('Response formatting failed:', error);
    return context; // Fallback to raw RAG results
  }
}

/**
 * Configuration for different interview types
 */
export const RAG_CONFIGS = {
  technical_interview: {
    queryModel: 'llama-3.1-8b-instant',
    responseModel: 'llama-3.3-70b-versatile',
    temperature: 0.3,
    focusAreas: ['technical skills', 'problem solving', 'architecture', 'code quality'],
    responseStyle: 'detailed technical examples with metrics',
  },

  behavioral_interview: {
    queryModel: 'llama-3.1-8b-instant',
    responseModel: 'llama-3.3-70b-versatile',
    temperature: 0.7,
    focusAreas: ['leadership', 'teamwork', 'communication', 'conflict resolution'],
    responseStyle: 'STAR format stories with emotional intelligence',
  },

  executive_interview: {
    queryModel: 'llama-3.3-70b-versatile',
    responseModel: 'llama-3.3-70b-versatile',
    temperature: 0.5,
    focusAreas: ['strategic thinking', 'business impact', 'vision', 'leadership'],
    responseStyle: 'high-level strategic responses with business metrics',
  },
};

/**
 * Context-aware RAG query with interview type customization
 */
export async function formatForInterviewType(
  ragResults: Array<{ metadata?: Record<string, unknown> }>,
  originalQuestion: string,
  interviewType: keyof typeof RAG_CONFIGS
): Promise<string> {
  const config = RAG_CONFIGS[interviewType];
  const context = ragResults
    .map((result) => {
      const metadata = result.metadata || {};
      return (metadata.text as string) || JSON.stringify(metadata);
    })
    .join('\n\n');

  const contextualPrompt = `You are an expert interview coach preparing a candidate for a ${interviewType.replace('_', ' ')}.

Question: "${originalQuestion}"

Professional Background Data:
${context}

Interview Context:
- Focus areas: ${config.focusAreas.join(', ')}
- Response style: ${config.responseStyle}

Create a response tailored to this specific interview type that:
- Emphasizes the relevant focus areas
- Matches the expected response style
- Uses appropriate technical depth for the audience
- Demonstrates the candidate's fit for this interview level

Interview Response:`;

  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: contextualPrompt }],
      model: config.responseModel,
      temperature: config.temperature,
      max_tokens: 800,
    });

    return completion.choices[0]?.message?.content?.trim() || 'Unable to generate response';
  } catch (error) {
    console.error(`Response formatting failed for ${interviewType}:`, error);
    return context;
  }
}
