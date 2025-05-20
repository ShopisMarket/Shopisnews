import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  articleCount: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  icon: Icon,
  path,
  articleCount
}) => {
  return (
    <Link 
      to={path}
      className={cn(
        "block rounded-lg border p-4",
        "hover:shadow-md transition-all duration-200",
        "hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary"
      )}
    >
      <div className="flex items-start">
        <div className={cn(
          "rounded-full p-2 mr-3 text-white",
          "bg-primary/90 dark:bg-primary/80"
        )}>
          <Icon className="h-5 w-5" />
        </div>
        
        <div>
          <h3 className="font-medium text-base mb-1 line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
            {description}
          </p>
          <div className="text-xs text-muted-foreground">
            {articleCount} article{articleCount !== 1 ? 's' : ''}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;