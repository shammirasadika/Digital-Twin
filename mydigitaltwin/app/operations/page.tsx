"use client";
import Link from 'next/link';

export default function Operations() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">Digital Twin</h1>
          <p className="text-xl text-white">Production Operations & Maintenance</p>
        </div>

        <nav className="flex flex-wrap gap-4 justify-center mb-8">
          <Link href="/" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">🏠 Home</Link>
          <Link href="/about" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">📋 About</Link>
          <Link href="/advanced-features" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">⚡ Advanced</Link>
          <Link href="/monitoring" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">📊 Monitoring</Link>
          <Link href="/scalability" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">📈 Scalability</Link>
          <Link href="/operations" className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold">⚙️ Operations</Link>
          <Link href="/testing" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">🧪 Testing</Link>
          <Link href="/github" className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-semibold">💻 GitHub</Link>
        </nav>

        <div className="bg-white rounded-lg shadow-2xl p-8">
          <h2 className="text-4xl font-bold text-purple-700 mb-6">⚙️ Production Operations</h2>

          {/* Overview */}
          <section className="mb-8">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-l-4 border-purple-500 mb-6">
              <h3 className="text-2xl font-bold text-purple-800 mb-3">Operations Overview</h3>
              <p className="text-gray-700">
                This Digital Twin system is deployed on Vercel&apos;s edge network with automated CI/CD, 
                comprehensive monitoring, and enterprise-grade operational procedures for 24/7 production reliability.
              </p>
            </div>
          </section>

          {/* Deployment Workflow */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">🚀 Deployment Workflow (CI/CD)</h3>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">Automated Deployment Pipeline</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Code Commit</h5>
                    <p className="text-sm text-gray-600">Developer pushes code to GitHub main branch</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h5 className="font-semibold text-gray-800">GitHub Webhook</h5>
                    <p className="text-sm text-gray-600">Triggers Vercel deployment via integration webhook</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Build Process</h5>
                    <p className="text-sm text-gray-600">Next.js build, TypeScript compilation, optimization (8-12s)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Edge Deployment</h5>
                    <p className="text-sm text-gray-600">Deploy to 90+ global edge locations automatically</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Live Production</h5>
                    <p className="text-sm text-gray-600">Instant go-live at https://digital-twin-vert-nu.vercel.app</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-green-200 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-700 mb-3">Deployment Configuration</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Platform:</strong> Vercel (Next.js 15.5.6)</li>
                  <li>• <strong>Framework:</strong> React 19, TypeScript</li>
                  <li>• <strong>Build Command:</strong> npm run build</li>
                  <li>• <strong>Deploy Trigger:</strong> Git push to main</li>
                  <li>• <strong>Deploy Time:</strong> ~30 seconds</li>
                  <li>• <strong>Rollback:</strong> Instant (one-click)</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-blue-200 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-700 mb-3">Environment Variables</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>UPSTASH_VECTOR_REST_URL:</strong> Vector DB endpoint</li>
                  <li>• <strong>UPSTASH_VECTOR_REST_TOKEN:</strong> Auth token</li>
                  <li>• <strong>GROQ_API_KEY:</strong> LLM inference key</li>
                  <li>• <strong>NODE_ENV:</strong> production</li>
                  <li>• <strong>Storage:</strong> Vercel secure vault</li>
                  <li>• <strong>Rotation:</strong> Manual (90-day policy)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Monitoring & Alerts */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">📊 Monitoring & Alerting</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-700 mb-3">Critical Alerts</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Service downtime (&gt;1 min)</li>
                  <li>• Error rate &gt; 5%</li>
                  <li>• Response time &gt; 5s</li>
                  <li>• Vector DB connection failure</li>
                  <li>• LLM API quota exceeded</li>
                </ul>
                <p className="text-xs text-red-600 mt-3 font-semibold">Notification: Email + SMS</p>
              </div>

              <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-semibold text-yellow-700 mb-3">Warning Alerts</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Error rate &gt; 2%</li>
                  <li>• Response time &gt; 3s</li>
                  <li>• Cache hit rate &lt; 70%</li>
                  <li>• Concurrent users &gt; 500</li>
                  <li>• Memory usage &gt; 80%</li>
                </ul>
                <p className="text-xs text-yellow-600 mt-3 font-semibold">Notification: Email</p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-700 mb-3">Info Monitoring</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Deployment success</li>
                  <li>• Daily traffic reports</li>
                  <li>• Weekly uptime summary</li>
                  <li>• Performance benchmarks</li>
                  <li>• Usage analytics</li>
                </ul>
                <p className="text-xs text-blue-600 mt-3 font-semibold">Notification: Dashboard</p>
              </div>
            </div>
          </section>

          {/* Incident Response */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">🚨 Incident Response Procedures</h3>
            
            <div className="space-y-4">
              <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-700 mb-2">Severity 1: Production Outage</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Service completely unavailable or critical functionality broken affecting all users.
                </p>
                <div className="text-sm text-gray-700">
                  <p className="font-semibold mb-2">Response Steps:</p>
                  <ol className="list-decimal ml-5 space-y-1">
                    <li>Acknowledge alert immediately (&lt;5 min)</li>
                    <li>Check Vercel deployment status dashboard</li>
                    <li>Verify external dependencies (Upstash, Groq)</li>
                    <li>Rollback to last stable deployment (one-click)</li>
                    <li>Notify users via status page</li>
                    <li>Root cause analysis within 24h</li>
                  </ol>
                </div>
                <p className="text-xs text-red-600 mt-3"><strong>SLA:</strong> Resolution within 1 hour</p>
              </div>

              <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-700 mb-2">Severity 2: Degraded Performance</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Service functional but slow or intermittent errors affecting subset of users.
                </p>
                <div className="text-sm text-gray-700">
                  <p className="font-semibold mb-2">Response Steps:</p>
                  <ol className="list-decimal ml-5 space-y-1">
                    <li>Investigate monitoring dashboard (&lt;15 min)</li>
                    <li>Check load testing results and capacity</li>
                    <li>Review error logs and traces</li>
                    <li>Apply hot-fixes or configuration changes</li>
                    <li>Monitor recovery and performance metrics</li>
                    <li>Document findings and mitigation</li>
                  </ol>
                </div>
                <p className="text-xs text-orange-600 mt-3"><strong>SLA:</strong> Resolution within 4 hours</p>
              </div>

              <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-semibold text-yellow-700 mb-2">Severity 3: Minor Issues</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Non-critical issues, cosmetic bugs, or minor performance degradation.
                </p>
                <div className="text-sm text-gray-700">
                  <p className="font-semibold mb-2">Response Steps:</p>
                  <ol className="list-decimal ml-5 space-y-1">
                    <li>Log issue in GitHub Issues</li>
                    <li>Prioritize in backlog</li>
                    <li>Schedule fix in next sprint</li>
                    <li>Test fix in development environment</li>
                    <li>Deploy via standard CI/CD pipeline</li>
                    <li>Verify fix in production</li>
                  </ol>
                </div>
                <p className="text-xs text-yellow-600 mt-3"><strong>SLA:</strong> Resolution within 7 days</p>
              </div>
            </div>
          </section>

          {/* Backup & Recovery */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">💾 Backup & Disaster Recovery</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="text-lg font-semibold text-green-700 mb-3">Backup Strategy</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <div><strong>Source Code:</strong> GitHub (main branch + releases)</div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <div><strong>Vector DB:</strong> Upstash daily snapshots</div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <div><strong>Profile Data:</strong> digitaltwin.json in git</div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <div><strong>Environment Vars:</strong> Vercel secure vault</div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <div><strong>Deployment History:</strong> Vercel (unlimited)</div>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-lg font-semibold text-blue-700 mb-3">Recovery Procedures</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">→</span>
                    <div><strong>Rollback:</strong> One-click to previous deployment</div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">→</span>
                    <div><strong>RTO (Recovery Time):</strong> &lt;5 minutes</div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">→</span>
                    <div><strong>RPO (Data Loss):</strong> 0 (git-tracked)</div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">→</span>
                    <div><strong>Vector DB Restore:</strong> 10-15 minutes</div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">→</span>
                    <div><strong>Full Redeploy:</strong> 30 seconds (new instance)</div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Maintenance Windows */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">🔧 Maintenance Procedures</h3>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-indigo-800 mb-3">Scheduled Maintenance</h4>
              <p className="text-sm text-gray-700 mb-4">
                Most maintenance is zero-downtime. For critical updates requiring downtime, maintenance is scheduled 
                during low-traffic periods (Sunday 2-4 AM UTC) with 48-hour advance notice.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-gray-800 text-sm mb-2">Zero-Downtime Updates:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Feature deployments</li>
                    <li>• Bug fixes</li>
                    <li>• UI improvements</li>
                    <li>• Configuration changes</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 text-sm mb-2">Scheduled Downtime:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Major framework upgrades</li>
                    <li>• Database migrations</li>
                    <li>• Infrastructure changes</li>
                    <li>• Security patches</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Operational Checklist */}
          <section>
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">✅ Daily Operations Checklist</h3>
            
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Morning Checks (9 AM)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Review overnight error logs</span>
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Check system uptime (target 99.8%)</span>
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Verify MCP server health</span>
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Test production endpoints</span>
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Monitor response times (&lt;2s)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Weekly Maintenance (Monday)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Run load testing suite</span>
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Review weekly uptime report</span>
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Check dependency updates (npm audit)</span>
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Verify vector DB sync status</span>
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Backup environment variables</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
