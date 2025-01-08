import React from 'react';
import { cn } from '../../../utils/cn';

interface SpendingSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  error?: string;
}

export function SpendingSlider({ label, value, onChange, error }: SpendingSliderProps) {
  const maxValue = 500000; // ₹5,00,000

  return (
    <div className={cn(
      "w-full flex flex-col",
      "px-6 py-5 rounded-xl border min-h-[60px]",
      "bg-dark-800/50 border-gold-500/10",
      "transition-all duration-300"
    )}>
      <div className="flex justify-between items-center mb-4">
        <span className="text-base font-medium text-white/60">{label}</span>
        <span className="text-base font-medium text-gold-500">₹{value.toLocaleString('en-IN')}</span>
      </div>
      
      <div className="relative w-full">
        <input
          type="range"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min={0}
          max={maxValue}
          step={1000}
          className={cn(
            "w-full h-1 bg-dark-800 rounded-full appearance-none cursor-pointer",
            "range-slider"
          )}
          style={{
            background: `linear-gradient(to right, #D4B788 0%, #D4B788 ${(value / maxValue) * 100}%, rgba(212, 183, 136, 0.1) ${(value / maxValue) * 100}%, rgba(212, 183, 136, 0.1) 100%)`
          }}
        />
      </div>

      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
}