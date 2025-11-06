import Link from 'next/link';

export default function GitHub() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">Digital Twin</h1>
          <p className="text-xl text-white">AI-Powered Professional Profile Assistant</p>
        </div>

        <nav className="flex flex-wrap gap-4 justify-center mb-8">
          <Link href="/" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">🏠 Home</Link>
          <Link href="/about" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">📋 About</Link>
          <Link href="/advanced-features" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">⚡ Advanced</Link>
          <Link href="/optimization" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">🚀 Optimization</Link>
          <Link href="/testing" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">🧪 Testing</Link>
          <Link href="/profile-data" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">👤 Profile</Link>
          <Link href="/github" className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold">💻 GitHub</Link>
        </nav>

        <div className="bg-white rounded-lg shadow-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">GitHub Repository</h2>
          
          <div className="mb-8">
            <svg className="w-24 h-24 mx-auto mb-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-700 mb-6">
              View the complete implementation and source code for this Digital Twin RAG System on GitHub:
            </p>
            <a
              href="https://github.com/shammirasadika/Digital-Twin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-700 font-semibold text-lg transition-colors"
            >
              View on GitHub →
            </a>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Repository Contents</h3>
            <ul className="text-left max-w-md mx-auto text-gray-700 space-y-2">
              <li>✅ Python RAG backend implementation</li>
              <li>✅ Next.js frontend application</li>
              <li>✅ STAR-structured professional profile data</li>
              <li>✅ Vector embedding pipeline</li>
              <li>✅ API integration code</li>
              <li>✅ Documentation and setup instructions</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
