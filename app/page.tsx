import Image from "next/image";
import { headers } from 'next/headers';

export default async function Home() {
  // Get the current URL directly from the request
  const getBaseUrl = async () => {
    try {
      const headersList = await headers();
      // Try to get the full request URL from headers
      const referer = headersList.get('referer');
      const host = headersList.get('host');
      const protocol = headersList.get('x-forwarded-proto') || 'http';
      
      if (referer) {
        const url = new URL(referer);
        return `${url.protocol}//${url.host}`;
      }
      
      if (host) {
        return `${protocol}://${host}`;
      }
    } catch (error) {
      // Fallback if headers are not available
    }
    
    // Fallback for development
    return 'http://localhost:3000';
  };
  
  const baseUrl = await getBaseUrl();
  const curlCommand = `curl -H "X-Forwarded-For: 192.168.1.100" ${baseUrl}/`;
  
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-8 py-16">
        <main className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Contentstack Logo */}
          <div className="mb-8">
            <Image
              src="/Contentstack_Logo.jpg"
              alt="Contentstack Logo"
              width={180}
              height={90}
              className="mb-4 mx-auto"
              priority
            />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-8">
            IP Whitelist & Blacklist Edge Function Example
          </h1>

          {/* Description */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-purple-100">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">
              What are Edge Functions?
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Edge Functions are serverless functions that run at the edge of Contentstack&apos;s global network, 
              closest to your users. They allow you to modify requests and responses, implement custom logic, 
              and enhance your applications with real-time processing capabilities.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="text-purple-800 font-semibold mb-3">Key Features</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Modify requests and responses</li>
                  <li>• Implement custom authentication</li>
                  <li>• A/B testing and personalization</li>
                  <li>• Real-time content transformation</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="text-purple-800 font-semibold mb-3">Benefits</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Global edge deployment</li>
                  <li>• Low latency performance</li>
                  <li>• Serverless architecture</li>
                  <li>• Easy integration with Contentstack</li>
                </ul>
              </div>
            </div>
          </div>

          {/* IP Access Control Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-purple-100">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">
              IP Whitelist & Blacklist Access Control
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              With Edge Functions, you can implement sophisticated IP-based access control mechanisms. 
              This allows you to whitelist trusted IP addresses, blacklist malicious ones, and create 
              secure perimeters around your applications and APIs.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="text-purple-800 font-semibold mb-3">IP Access Management</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Whitelist trusted IP addresses</li>
                  <li>• Blacklist malicious IPs</li>
                  <li>• Geo-based access control</li>
                  <li>• Real-time IP validation</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="text-purple-800 font-semibold mb-3">Use Cases</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• API security and protection</li>
                  <li>• Admin panel access control</li>
                  <li>• DDoS attack prevention</li>
                  <li>• Compliance and audit trails</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Test Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-purple-100">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">
              Test Your IP Access Control
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Use the curl commands below to test how your Edge Function responds to different IP addresses. 
              Try different IPs to see how the whitelist and blacklist behave.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-gray-900 rounded-lg p-6">
                <div className="mb-2">
                  <span className="text-green-400 text-sm font-mono">Whitelisted IP Test</span>
                </div>
                <code className="text-green-400 font-mono text-sm break-all">
                  curl -H &quot;X-Forwarded-For: 127.0.0.1&quot; {baseUrl}/
                </code>
                <p className="text-gray-400 text-xs mt-2">
                  Should return 200 OK (localhost is whitelisted)
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <div className="mb-2">
                  <span className="text-red-400 text-sm font-mono">Blocked IP Test</span>
                </div>
                <code className="text-red-400 font-mono text-sm break-all">
                  curl -H &quot;X-Forwarded-For: 8.8.8.8&quot; {baseUrl}/
                </code>
                <p className="text-gray-400 text-xs mt-2">
                  Should return 403 Forbidden (Google DNS not in whitelist)
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="text-green-800 font-semibold mb-2">Whitelisted IPs</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 127.0.0.1 (localhost)</li>
                  <li>• 192.168.1.100</li>
                  <li>• 10.0.0.50</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="text-red-800 font-semibold mb-2">Blocked IPs</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• 8.8.8.8 (Google DNS)</li>
                  <li>• 1.1.1.1 (Cloudflare)</li>
                  <li>• Any other IP</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="text-blue-800 font-semibold mb-2">Headers Used</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• X-Forwarded-For</li>
                  <li>• X-Real-IP</li>
                  <li>• CF-Connecting-IP</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Learn More Button */}
          <a
            href="https://www.contentstack.com/docs/developers/launch/edge-functions"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Learn More About Edge Functions
          </a>
        </main>
      </div>
    </div>
  );
}
