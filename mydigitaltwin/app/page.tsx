"use client";
import Link from 'next/link';
import { useState } from 'react';
import { enhancedDigitalTwinQuery } from './actions/digital-twin-actions';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [enhancedQuery, setEnhancedQuery] = useState('');

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
    setEnhancedQuery('');
    
    try {
      const result = await enhancedDigitalTwinQuery(question);
      
      if (result.success) {
        setAnswer(result.answer);
        if ('metadata' in result && result.metadata?.enhancedQuery) {
          setEnhancedQuery(result.metadata.enhancedQuery as string);
        }
      } else {
        setAnswer(result.answer || 'Unable to get response. Please try again.');
      }
    } catch (error) {
      setAnswer(`Error: ${error instanceof Error ? error.message : 'Unable to process your question'}`);
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
          <Link href="/" className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold">
            🏠 Home
          </Link>
          <Link href="/about" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">
            📋 About
          </Link>
          <Link href="/advanced-features" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">
            ⚡ Advanced
          </Link>
          <Link href="/monitoring" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">
            📊 Monitoring
          </Link>
          <Link href="/scalability" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">
            📈 Scalability
          </Link>
          <Link href="/operations" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">
            ⚙️ Operations
          </Link>
          <Link href="/testing" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">
            🧪 Testing
          </Link>
          <Link href="/github" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">
            💻 GitHub
          </Link>
        </nav>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-blue-700 mb-2">Ask About My Professional Background</h2>
            <div className="flex items-center gap-2 text-sm">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-semibold">✨ Enhanced RAG</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">🎯 STAR Format</span>
            </div>
          </div>
          
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
            {loading ? '✨ Generating Response...' : '🎯 Ask Question'}
          </button>

          {/* Enhanced Query Display */}
          {enhancedQuery && (
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
              <h3 className="font-semibold text-purple-800 mb-2">🔍 Enhanced Search Query:</h3>
              <p className="text-sm text-gray-700 italic">{enhancedQuery}</p>
            </div>
          )}

          {/* Answer Display */}
          {answer && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">✨ Answer:</h3>
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
