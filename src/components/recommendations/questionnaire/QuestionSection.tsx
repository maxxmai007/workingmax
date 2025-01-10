import React from 'react';
import { cn } from '../../../utils/cn';

interface QuestionSectionProps {
  title: string;
  children: React.ReactNode;
}

export function QuestionSection({ title, children }: QuestionSectionProps) {
  const [isOpen, setIsOpen] = React.useState(true); // Changed to true for default expanded state

  return (
    <div className="border-b border-gold-500/10 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <h3 className="text-2xl font-medium text-gold-500">{title}</h3>
        <span className={cn(
          "text-gold-500/80 transition-transform duration-200", // Changed color to match theme
          isOpen ? "rotate-180" : ""
        )}>
          ▼
        </span>
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-[500px] opacity-100 mb-4" : "max-h-0 opacity-0"
        )}
      >
        <div className="text-lg text-white/90 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}