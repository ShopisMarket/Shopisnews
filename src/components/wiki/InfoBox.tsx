import React, { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface InfoBoxProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, children, className }) => {
  return (
    <div className={cn(
      "border rounded-md overflow-hidden mb-6 max-w-sm",
      "bg-muted/50 dark:bg-gray-800/50",
      className
    )}>
      <div className="bg-primary/10 p-3 border-b">
        <h3 className="text-base font-medium">{title}</h3>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default InfoBox;