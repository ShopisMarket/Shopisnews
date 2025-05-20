import React from 'react';
import { Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoriesProps {
  categories: string[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  if (categories.length === 0) return null;
  
  return (
    <div className="mt-8 pt-4 border-t">
      <div className="flex items-center text-sm text-muted-foreground mb-2">
        <Tag className="h-4 w-4 mr-1" />
        <span>Categories:</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category, i) => (
          <Link 
            key={i}
            to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-xs px-2 py-1 rounded-md bg-accent hover:bg-accent/80 transition-colors"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;