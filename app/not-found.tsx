import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-8">
        <div className="mb-8">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <span className="text-blue-600 text-3xl font-bold">404</span>
          </div>
          <h1 className="text-4xl font-bold text-purple-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Sorry, the page you&apos;re looking for doesn&apos;t exist. 
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-purple-100">
          <h2 className="text-xl font-semibold text-purple-800 mb-4">
            What you can do:
          </h2>
          <ul className="text-gray-700 space-y-2 text-left">
            <li>• Check the URL for typos</li>
            <li>• Go back to the previous page</li>
            <li>• Return to the homepage</li>
            <li>• Contact support if needed</li>
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
            <p>If you believe this is an error, please contact support.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 