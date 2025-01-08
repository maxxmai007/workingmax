import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface BackButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function BackButton({ className, ...props }: BackButtonProps) {
  const navigate = useNavigate();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className={cn(
        'inline-flex items-center gap-2 px-3 py-2',
        'text-gold-500/80 hover:text-gold-500',
        'transition-all duration-200',
        'rounded-lg hover:bg-gold-500/5',
        className
      )}
      {...props}
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="text-sm font-medium">Back</span>
    </button>
  );
}