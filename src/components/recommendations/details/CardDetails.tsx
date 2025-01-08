import React from 'react';
import { cn } from '../../../utils/cn';

interface CardDetailsProps {
  title: string;
  value: string;
  className?: string;
}

export function CardDetails({ title, value, className }: CardDetailsProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <h4 className="text-sm font-medium text-gold-500/60">{title}</h4>
      <p className="text-base text-gold-500">{value}</p>
    </div>
  );
}