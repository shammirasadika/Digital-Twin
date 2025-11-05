import Link from 'next/link';

export default function ProfileData() {
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
          <Link href="/testing" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">🧪 Testing</Link>
          <Link href="/profile-data" className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold">👤 Profile Data</Link>
          <Link href="/github" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">💻 GitHub</Link>
        </nav>

        <div className="bg-white rounded-lg shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-6">Professional Profile Data (STAR-Structured)</h2>
          
          <p className="text-gray-700 mb-6">
            The RAG system uses professional profile data structured using the STAR (Situation, Task, Action, Result) 
            methodology for optimal semantic search and response generation.
          </p>

          <div className="space-y-6">
            {/* Personal Info */}
            <section className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Personal Information</h3>
              <div className="text-gray-700 space-y-1">
                <p><strong>Name:</strong> Shammi Parussella</p>
                <p><strong>Location:</strong> Melbourne, Australia</p>
                <p><strong>Email:</strong> shammirasadika123@gmail.com</p>
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shammi-parussella-301603197" className="text-blue-600 hover:underline">linkedin.com/in/shammi-parussella</a></p>
                <p className="mt-2"><strong>Summary:</strong> A self-motivated and hardworking individual with over four years of valuable industrial experience in .NET consulting, training, and solution development.</p>
              </div>
            </section>

            {/* Experience */}
            <section className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Work Experience (STAR Format)</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-semibold text-blue-800">Technical Consultant/Software Engineer - CONIFS Global (May 2023 - April 2024)</h4>
                  <ul className="mt-2 space-y-2 text-sm text-gray-700">
                    <li><strong>Situation:</strong> Needed to optimize and maintain complex database structures for client projects.</li>
                    <li><strong>Task:</strong> Design, build, and upkeep database structures including tables, relationships, and data types.</li>
                    <li><strong>Action:</strong> Created advanced T-SQL queries, optimized performance, and coordinated with internal teams.</li>
                    <li><strong>Result:</strong> Enhanced data retrieval/manipulation performance and improved team technical capabilities.</li>
                  </ul>
                  <p className="mt-2 text-sm"><strong>Technologies:</strong> .Net Core, Azure DB, Asp.Net, Azure Functions, React Native, MS SQL</p>
                </div>

                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-semibold text-blue-800">Software Engineer - Acentura (April 2022 - May 2023)</h4>
                  <ul className="mt-2 space-y-2 text-sm text-gray-700">
                    <li><strong>Situation:</strong> Needed to improve existing software and design new applications.</li>
                    <li><strong>Task:</strong> Work with a team to enhance software and develop new solutions.</li>
                    <li><strong>Action:</strong> Developed SOPs, investigated new technologies, and drafted data models.</li>
                    <li><strong>Result:</strong> Improved software quality and team adoption of new technologies.</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-semibold text-blue-800">Associate Software Engineer - DMS Software Engineering (Feb 2021 - April 2022)</h4>
                  <ul className="mt-2 space-y-2 text-sm text-gray-700">
                    <li><strong>Situation:</strong> Tasked with developing a new software product from scratch.</li>
                    <li><strong>Task:</strong> Develop and improve software products and database queries.</li>
                    <li><strong>Action:</strong> Created advanced T-SQL queries and investigated database issues.</li>
                    <li><strong>Result:</strong> Successfully launched a new software product.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
                <span className="bg-green-50 px-3 py-1 rounded">.NET Framework/Core</span>
                <span className="bg-green-50 px-3 py-1 rounded">C#</span>
                <span className="bg-green-50 px-3 py-1 rounded">ASP.NET MVC/Core</span>
                <span className="bg-green-50 px-3 py-1 rounded">Entity Framework</span>
                <span className="bg-green-50 px-3 py-1 rounded">RESTful APIs</span>
                <span className="bg-green-50 px-3 py-1 rounded">React</span>
                <span className="bg-green-50 px-3 py-1 rounded">Angular</span>
                <span className="bg-green-50 px-3 py-1 rounded">SQL Server</span>
                <span className="bg-green-50 px-3 py-1 rounded">Azure</span>
                <span className="bg-green-50 px-3 py-1 rounded">Git</span>
                <span className="bg-green-50 px-3 py-1 rounded">Python</span>
                <span className="bg-green-50 px-3 py-1 rounded">RAG Systems</span>
              </div>
            </section>

            {/* Education */}
            <section className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-xl font-semibold text-yellow-700 mb-3">Education</h3>
              <div className="space-y-2 text-gray-700">
                <div className="bg-yellow-50 p-3 rounded">
                  <p><strong>Master of Science</strong> - Data Analytics and Artificial Intelligence</p>
                  <p className="text-sm">University of Tasmania, Australia (Present)</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <p><strong>Bachelor of Science</strong> - Information Technology</p>
                  <p className="text-sm">Sri Lanka Institute of Information Technology (2020)</p>
                </div>
              </div>
            </section>

            {/* Data Structure Note */}
            <section className="bg-purple-50 p-4 rounded">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">📊 Data Structure</h3>
              <p className="text-sm text-gray-700">
                All profile data is stored in JSON format with vector embeddings in Upstash Vector database. 
                The STAR methodology ensures each achievement is properly contextualized for semantic search 
                and accurate response generation.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
