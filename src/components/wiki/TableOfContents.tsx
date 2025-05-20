import React from 'react';
import { cn } from '../../lib/utils';
import { List } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  return (
    <div className="mb-8 p-4 border rounded-md bg-muted/50">
      <div className="flex items-center mb-2">
        <List className="h-4 w-4 mr-2" />
        <h3 className="text-sm font-medium">Contents</h3>
      </div>
      <ul className="space-y-1 text-sm">
        {items.map((item) => (
          <li 
            key={item.id} 
            className={cn(
              "hover:text-primary",
              item.level === 2 ? "ml-0" : "ml-4"
            )}
          >
            <a 
              href={`#${item.id}`} 
              className="hover:underline block py-1"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;