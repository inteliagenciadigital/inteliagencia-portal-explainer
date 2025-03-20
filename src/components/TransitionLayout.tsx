
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TransitionLayoutProps {
  children: ReactNode;
  className?: string;
}

const TransitionLayout: React.FC<TransitionLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("transition-opacity duration-500 animate-fade-in", className)}>
      {children}
    </div>
  );
};

export default TransitionLayout;
