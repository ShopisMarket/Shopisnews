import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface FeaturedArticleProps {
  title: string;
  description: string;
  imageSrc: string;
  path: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  title,
  description,
  imageSrc,
  path
}) => {
  return (
    <Link 
      to={path}
      className={cn(
        "group block rounded-lg overflow-hidden border",
        "hover:shadow-md transition-shadow duration-200",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      )}
    >
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default FeaturedArticle;