import React, { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface WikiTableProps {
  headers: string[];
  rows: ReactNode[][];
  className?: string;
}

const WikiTable: React.FC<WikiTableProps> = ({ 
  headers, 
  rows,
  className
}) => {
  return (
    <div className={cn(
      "w-full overflow-x-auto mb-8",
      className
    )}>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted dark:bg-gray-800">
            {headers.map((header, i) => (
              <th 
                key={i} 
                className="border px-4 py-2 text-left font-medium"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr 
              key={i}
              className={cn(
                "border-b hover:bg-muted/50 dark:hover:bg-gray-800/50",
                i % 2 === 0 ? "bg-background" : "bg-muted/30 dark:bg-gray-800/30"
              )}
            >
              {row.map((cell, j) => (
                <td key={j} className="border px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WikiTable;