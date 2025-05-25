import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, Search, ArrowRight } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would navigate to search results
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="mb-8 text-amber-500 animate-pulse">
        <AlertTriangle size={80} strokeWidth={1.5} />
      </div>
      
      <h1 className="text-4xl font-bold mb-4 text-gray-800">404 - Page Not Found</h1>
      
      <p className="text-gray-600 max-w-md mb-8 text-lg">
        The page you're looking for doesn't exist or has been moved. 
        You can search for it or return to the homepage.
      </p>
      
      <form onSubmit={handleSearch} className="max-w-sm w-full mb-8">
        <div className="relative group">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
          <input
            type="search"
            placeholder="Search for content..."
            className="w-full bg-white pl-12 pr-4 py-3 rounded-full border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 focus:outline-none transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
            type="submit" 
            className="absolute right-3 top-2.5 bg-blue-500 text-white p-1.5 rounded-full hover:bg-blue-600 transition-colors"
            aria-label="Search"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </form>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          to="/"
          className="flex items-center justify-center px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
        >
          <Home className="h-5 w-5 mr-2" />
          Return to Homepage
        </Link>
        
        <button
          onClick={() => window.history.back()}
          className="flex items-center justify-center px-6 py-3 rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
