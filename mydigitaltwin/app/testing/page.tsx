"use client";
import Link from 'next/link';
import { useState } from 'react';

export const dynamic = 'force-dynamic';

export default function Testing() {
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [testedQuestions, setTestedQuestions] = useState<Set<number>>(new Set());

  const testQueries = [
    "Tell me about your work experience",
    "What are your technical skills?",
    "Describe your career goals",
    "How did you use the STAR methodology in your projects?",
    "What is your experience with RAG systems?",
    "Explain a challenging technical problem you solved",
    "How do you approach learning new technologies?",
    "What leadership examples can you share?",
    "Describe a successful project you completed",
    "How do you handle remote work?",
    "What are your salary expectations?",
    "What industries are you interested in?",
    "How do you manage your time?",
    "What is your experience with APIs?",
    "How do you handle feedback?",
    "What are your soft skills?",
    "Describe your education background",
    "What certifications do you have?",
    "How do you prepare for interviews?",
    "What motivates you in your career?",
    "How do you contribute to team success?",
    "What are your long-term goals?",
    "Tell me about your experience with .NET",
    "What cloud platforms have you worked with?"
  ];

  const handleTest = async (question: string, index: number) => {
    setSelectedQuestion(question);
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
      setTestedQuestions(prev => new Set([...prev, index]));
    } catch {
      setAnswer('Error connecting to MCP server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">Digital Twin</h1>
          <p className="text-xl text-white">AI-Powered Professional Profile Assistant</p>
        </div>

        <nav className="flex flex-wrap gap-4 justify-center mb-8">
          <Link href="/" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">🏠 Home</Link>
          <Link href="/about" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">📋 About</Link>
          <Link href="/advanced-features" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">⚡ Advanced</Link>
          <Link href="/optimization" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">🚀 Optimization</Link>
          <Link href="/testing" className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold">🧪 Testing</Link>
          <Link href="/profile-data" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">👤 Profile</Link>
          <Link href="/github" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">💻 GitHub</Link>
        </nav>

        <div className="bg-white rounded-lg shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Testing & Quality Assessment</h2>
          
          <p className="text-gray-700 mb-6">
            Test the Digital Twin RAG system with {testQueries.length}+ recruiter-style queries. 
            Click any question below to see the system&apos;s response. Tested questions are marked with ✅
          </p>

          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Progress:</strong> {testedQuestions.size} / {testQueries.length} questions tested
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all"
                style={{ width: `${(testedQuestions.size / testQueries.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {testQueries.map((query, idx) => (
              <button
                key={idx}
                onClick={() => handleTest(query, idx)}
                disabled={loading}
                className={`text-left border-2 rounded-lg p-3 transition-colors ${
                  testedQuestions.has(idx)
                    ? 'border-green-500 bg-green-50'
                    : 'border-blue-300 hover:bg-blue-50 hover:border-blue-500'
                } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span className="mr-2">{testedQuestions.has(idx) ? '✅' : '❓'}</span>
                {query}
              </button>
            ))}
          </div>

          {selectedQuestion && (
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Selected Question:</h3>
              <p className="text-gray-800 mb-4 font-medium">{selectedQuestion}</p>
              
              {loading && (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                  <p className="mt-4 text-gray-600">Generating response...</p>
                </div>
              )}
              
              {answer && !loading && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Response:</h4>
                  <p className="text-gray-700 whitespace-pre-wrap">{answer}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
