import Link from 'next/link';

export default function ForbiddenPage() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-8">
        <div className="mb-8">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <span className="text-red-600 text-3xl font-bold">403</span>
          </div>
          <h1 className="text-4xl font-bold text-purple-900 mb-4">
            Access Forbidden
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Sorry, your IP address is not in the whitelist. 
            This application is restricted to specific IP addresses for security purposes.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-purple-100">
          <h2 className="text-xl font-semibold text-purple-800 mb-4">
            IP Whitelist Restrictions:
          </h2>
          <ul className="text-gray-700 space-y-2 text-left">
            <li>• Your IP address is not in the allowed list</li>
            <li>• Only whitelisted IPs can access this resource</li>
            <li>• Contact administrator to add your IP</li>
            <li>• Check if you&apos;re using a VPN or proxy</li>
          </ul>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Go Back Home
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>If you believe this is an error, please contact support with your IP address.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 