
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TransitionLayoutProps {
  children: ReactNode;
  className?: string;
}

const TransitionLayout: React.FC<TransitionLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("transition-opacity duration-500 animate-fade-in min-h-screen bg-white dark:bg-slate-900", className)}>
      {children}
      <footer className="py-6 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-muted-foreground">
        © 2025 Inteliagencia Digital. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default TransitionLayout;
