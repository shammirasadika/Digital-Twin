import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">Digital Twin</h1>
          <p className="text-xl text-white">AI-Powered Professional Profile Assistant</p>
        </div>

        <nav className="flex flex-wrap gap-4 justify-center mb-8">
          <Link href="/" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">🏠 Home</Link>
          <Link href="/about" className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold">📋 About</Link>
          <Link href="/advanced-features" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">⚡ Advanced</Link>
          <Link href="/optimization" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">🚀 Optimization</Link>
          <Link href="/testing" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">🧪 Testing</Link>
          <Link href="/profile-data" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">👤 Profile</Link>
          <Link href="/github" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">💻 GitHub</Link>
        </nav>

        <div className="bg-white rounded-lg shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">About the Digital Twin RAG System</h2>
          
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">System Architecture</h3>
            <p className="text-gray-700 mb-4">
              This Digital Twin leverages a Retrieval-Augmented Generation (RAG) architecture to provide context-aware, 
              professional responses to recruiter-style queries. The system combines cutting-edge AI technologies to 
              deliver accurate and personalized information about professional experience, skills, and career goals.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Technology Stack</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li><strong>Upstash Vector:</strong> Vector database for semantic search and efficient retrieval</li>
              <li><strong>Groq AI:</strong> Ultra-fast LLM inference for generating responses</li>
              <li><strong>Python Backend:</strong> RAG system implementation with embedding pipeline</li>
              <li><strong>Next.js Frontend:</strong> Modern, responsive web interface</li>
              <li><strong>STAR Methodology:</strong> Professional profile data structured for optimal retrieval</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">How It Works</h3>
            <ol className="list-decimal ml-6 text-gray-700 space-y-2">
              <li>Professional data is structured using the STAR methodology</li>
              <li>Content is converted into vector embeddings and stored in Upstash</li>
              <li>When a query is received, semantic search retrieves relevant information</li>
              <li>Groq AI generates a personalized, context-aware response</li>
              <li>The system is optimized for recruiter and hiring team interactions</li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Key Features</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Real-time response generation with high accuracy</li>
              <li>Semantic understanding of professional queries</li>
              <li>Comprehensive coverage of experience, skills, and projects</li>
              <li>Optimized for interview preparation and recruiter interactions</li>
              <li>Quality-assessed responses based on STAR methodology</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
