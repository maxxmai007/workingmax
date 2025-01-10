import React from 'react';
import { AnimatedLogo } from './AnimatedLogo';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={className}>
      <AnimatedLogo />
    </div>
  );
}