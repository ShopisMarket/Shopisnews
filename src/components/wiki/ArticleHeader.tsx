import React from 'react';
import { History, Edit, MessageSquare } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ArticleHeaderProps {
  title: string;
  lastModified: string;
  author: string;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ 
  title,
  lastModified,
  author
}) => {
  return (
    <div className="mb-8 border-b pb-4">
      <h1 className="text-3xl font-bold mb-3">{title}</h1>
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center space-x-1">
          <span>From</span>
          <a href="https://shopiswiki.netlify.app/" className="text-primary hover:underline">Shopis Wiki</a>
        </div>
        
        <div className="flex items-center space-x-3 mt-2 sm:mt-0">
          <button className={cn(
            "flex items-center hover:text-foreground",
          )}>
            <History className="h-4 w-4 mr-1" />
            <span>View history</span>
          </button>
          
          <button className={cn(
            "flex items-center hover:text-foreground",
          )}>
            <Edit className="h-4 w-4 mr-1" />
            <span>Edit</span>
          </button>
          
          <button className={cn(
            "flex items-center hover:text-foreground",
          )}>
            <MessageSquare className="h-4 w-4 mr-1" />
            <span>Discussion</span>
          </button>
        </div>
      </div>
      
      <div className="text-xs text-muted-foreground mt-2">
        Last modified on {lastModified} by {author}
      </div>
    </div>
  );
};

export default ArticleHeader;
