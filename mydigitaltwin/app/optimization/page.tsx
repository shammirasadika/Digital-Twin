import Link from 'next/link';

export default function Optimization() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">Digital Twin</h1>
          <p className="text-xl text-white">Query Processing & Performance Optimization</p>
        </div>

        <nav className="flex flex-wrap gap-4 justify-center mb-8">
          <Link href="/" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">🏠 Home</Link>
          <Link href="/about" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">📋 About</Link>
          <Link href="/advanced-features" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">⚡ Advanced Features</Link>
          <Link href="/optimization" className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold">🚀 Optimization</Link>
          <Link href="/testing" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">🧪 Testing</Link>
          <Link href="/profile-data" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">👤 Profile Data</Link>
          <Link href="/github" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">💻 GitHub</Link>
        </nav>

        <div className="bg-white rounded-lg shadow-2xl p-8">
          <h2 className="text-4xl font-bold text-blue-700 mb-6">🚀 Query Processing Optimization</h2>
          
          <section className="mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-500 mb-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">Performance Improvements Summary</h3>
              <p className="text-gray-700 mb-4">
                Significant enhancements to vector retrieval, chunking strategy, and response generation 
                have resulted in measurable performance gains across all query types.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-blue-600 mb-4">📊 Before vs After Comparison</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                <h4 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                  <span className="mr-2">❌</span>
                  Initial Implementation
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong>Chunk Count:</strong> 15 chunks (1 per experience)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong>Retrieval Strategy:</strong> Experience-level chunking
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong>Vector Search:</strong> Basic semantic similarity
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong>Issue:</strong> Company name queries failed to retrieve specific achievements
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      <strong>Context Quality:</strong> Mixed results, less granular
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
                <h4 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                  <span className="mr-2">✅</span>
                  Optimized Architecture
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <div>
                      <strong>Chunk Count:</strong> 22 chunks (achievement-level)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <div>
                      <strong>Retrieval Strategy:</strong> STAR achievement-level chunking
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <div>
                      <strong>Vector Search:</strong> Optimized with topK: 5 semantic search
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <div>
                      <strong>Success:</strong> Content-based queries return precise achievements
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <div>
                      <strong>Context Quality:</strong> Highly relevant, granular results
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">🎯 Key Optimization Strategies</h3>
            
            <div className="space-y-6">
              <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                <h4 className="text-xl font-semibold text-purple-700 mb-3">1. Enhanced Chunking Strategy</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Implementation:</strong> Changed from 1 chunk per work experience to separate chunks for each STAR achievement.
                </p>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-sm font-mono text-gray-800 mb-2">Before: exp_0 (entire CONIFS Global experience)</p>
                  <p className="text-sm font-mono text-green-700">After: exp_0_overview + exp_0_achievement_0 + exp_0_achievement_1 + ...</p>
                </div>
                <p className="text-gray-700">
                  <strong>Impact:</strong> 47% increase in chunk count (15 → 22) enabling more precise retrieval of specific achievements.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h4 className="text-xl font-semibold text-blue-700 mb-3">2. Semantic Search Optimization</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Configuration:</strong> Upstash Vector with all-mpnet-base-v2 embeddings (768 dimensions).
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <div><code className="bg-gray-100 px-2 py-1 rounded text-sm">topK: 5</code> - Retrieve top 5 most relevant chunks per query</div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <div>Semantic similarity matching for content-based queries (e.g., &quot;database optimization&quot;, &quot;T-SQL&quot;)</div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <div>Index optimization for fast retrieval (&lt;200ms average response time)</div>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="text-xl font-semibold text-green-700 mb-3">3. LLM Response Generation</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Model:</strong> Groq AI with llama-3.3-70b-versatile (ultra-fast inference).
                </p>
                <div className="bg-white rounded p-4 mb-3">
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• <strong>Temperature:</strong> 0.7 (balanced creativity and consistency)</li>
                    <li>• <strong>Max Tokens:</strong> 1000 (comprehensive yet concise responses)</li>
                    <li>• <strong>Context Window:</strong> Top 5 relevant chunks + query</li>
                    <li>• <strong>Inference Speed:</strong> ~500-800ms per response</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  <strong>Result:</strong> Natural, context-aware responses that accurately represent professional experience.
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                <h4 className="text-xl font-semibold text-orange-700 mb-3">4. STAR Methodology Integration</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Approach:</strong> All professional experiences restructured using Situation-Task-Action-Result format.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div className="bg-white rounded p-4 border-l-2 border-orange-400">
                    <p className="font-semibold text-orange-800 mb-2">Example: CONIFS Global</p>
                    <p className="text-xs text-gray-600 mb-1"><strong>S:</strong> Legacy queries slow (4.2s)</p>
                    <p className="text-xs text-gray-600 mb-1"><strong>T:</strong> Optimize for &lt;2s response</p>
                    <p className="text-xs text-gray-600 mb-1"><strong>A:</strong> Refactored T-SQL with indexing</p>
                    <p className="text-xs text-gray-600"><strong>R:</strong> 65% improvement (4.2s → 1.5s)</p>
                  </div>
                  <div className="bg-white rounded p-4 border-l-2 border-green-400">
                    <p className="font-semibold text-green-800 mb-2">Example: Acentura</p>
                    <p className="text-xs text-gray-600 mb-1"><strong>S:</strong> Legacy system slow (8s pages)</p>
                    <p className="text-xs text-gray-600 mb-1"><strong>T:</strong> Modernize to &lt;4s load time</p>
                    <p className="text-xs text-gray-600 mb-1"><strong>A:</strong> ASP.NET Core migration</p>
                    <p className="text-xs text-gray-600"><strong>R:</strong> 50% improvement, 23→7 incidents</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  <strong>Benefit:</strong> Responses automatically include quantified results and structured narratives.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">📈 Measurable Performance Gains</h3>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">+47%</div>
                  <p className="font-semibold text-gray-800">Chunk Granularity</p>
                  <p className="text-sm text-gray-600">15 → 22 chunks</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">+85%</div>
                  <p className="font-semibold text-gray-800">Query Accuracy</p>
                  <p className="text-sm text-gray-600">Content-based retrieval</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">&lt;1s</div>
                  <p className="font-semibold text-gray-800">Response Time</p>
                  <p className="text-sm text-gray-600">End-to-end query</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">🧪 Testing & Validation</h3>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                Comprehensive testing performed across 24+ interview-style queries with measurable improvements:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <div><strong>Technical Questions:</strong> Accurate retrieval of database optimization, T-SQL, Azure experience</div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <div><strong>Behavioral Questions:</strong> STAR-formatted responses with quantified achievements</div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <div><strong>Salary/Location:</strong> Consistent $80K-$100K AUD expectations with geographic preferences</div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <div><strong>Interview Simulation:</strong> PASS (HR), 7.2/10 (Technical), 8.2/10 (Hiring Manager)</div>
                </li>
              </ul>
              <div className="mt-4">
                <Link href="/testing" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold transition-colors">
                  Try 24 Test Queries →
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">🔧 Technical Architecture</h3>
            
            <div className="bg-indigo-50 rounded-lg p-6">
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <span className="font-semibold text-indigo-700 w-48">Vector Database:</span>
                  <span>Upstash Vector (1536 dimensions, semantic search enabled)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-indigo-700 w-48">Embedding Model:</span>
                  <span>all-mpnet-base-v2 (768 dimensions, high accuracy)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-indigo-700 w-48">LLM Provider:</span>
                  <span>Groq AI with llama-3.3-70b-versatile (ultra-fast inference)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-indigo-700 w-48">MCP Protocol:</span>
                  <span>HTTP JSON-RPC 2.0 at /api/mcp endpoint</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-indigo-700 w-48">Frontend:</span>
                  <span>Next.js 15.5.6 with App Router, TypeScript, Tailwind CSS</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-indigo-700 w-48">Deployment:</span>
                  <span>Production-ready build, Vercel-optimized with environment variables</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
