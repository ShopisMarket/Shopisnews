import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="mb-8 text-primary">
        <AlertTriangle size={64} />
      </div>
      
      <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
      
      <p className="text-muted-foreground max-w-md mb-8">
        The article you're looking for doesn't exist or has been moved. You can search for it or browse our categories.
      </p>
      
      <div className="max-w-sm w-full mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search wiki..."
            className="w-full bg-background pl-9 pr-4 py-2 rounded-md border border-input"
          />
        </div>
      </div>
      
      <div className="flex space-x-4">
        <Link
          to="/"
          className="flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Home className="h-4 w-4 mr-2" />
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;