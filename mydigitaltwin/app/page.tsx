"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const sampleQuestions = [
    "Tell me about your work experience",
    "What are your technical skills?",
    "Describe your career goals",
    "What is your experience with .NET development?",
    "Tell me about your Azure experience",
    "What databases have you worked with?"
  ];

  const handleAsk = async () => {
    if (!question.trim()) return;
    
    setLoading(true);
    setAnswer('');
    
    try {
      const response = await fetch('/api/mcp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          jsonrpc: '2.0',
          method: 'tools/call',
          params: {
            name: 'query_digital_twin',
            arguments: { question }
          },
          id: 1
        })
      });
      
      const data = await response.json();
      setAnswer(data.result?.content?.[0]?.text || 'No response received');
    } catch {
      setAnswer('Error connecting to MCP server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSampleQuestion = (q: string) => {
    setQuestion(q);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">Digital Twin</h1>
          <p className="text-xl text-white">AI-Powered Professional Profile Assistant</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-4 justify-center mb-8">
          <Link href="/" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold flex items-center gap-2">
            🏠 Home
          </Link>
          <Link href="/about" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold flex items-center gap-2">
            📋 About
          </Link>
          <Link href="/testing" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold flex items-center gap-2">
            🧪 Testing
          </Link>
          <Link href="/profile-data" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold flex items-center gap-2">
            👤 Profile Data
          </Link>
          <Link href="/github" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold flex items-center gap-2">
            💻 GitHub
          </Link>
        </nav>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Ask About My Professional Background</h2>
          
          {/* Question Input */}
          <textarea
            className="w-full border-2 border-blue-300 rounded-lg p-4 mb-4 focus:outline-none focus:border-blue-500 text-gray-800"
            rows={4}
            placeholder="Ask me about my experience, skills, projects, or career goals..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          
          <button
            onClick={handleAsk}
            disabled={loading || !question.trim()}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed mb-6"
          >
            {loading ? 'Thinking...' : 'Ask Question'}
          </button>

          {/* Answer Display */}
          {answer && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">Answer:</h3>
              <p className="text-gray-700 whitespace-pre-wrap">{answer}</p>
            </div>
          )}

          {/* Sample Questions */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center gap-2">
              💬 Sample Questions:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {sampleQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSampleQuestion(q)}
                  className="text-left border-2 border-blue-300 rounded-lg p-3 hover:bg-blue-50 hover:border-blue-500 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
