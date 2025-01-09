import React, { useEffect, useRef } from 'react';
import { cn } from '../../../utils/cn';
import '../../../styles/gold-text.css';

interface CardDisplayProps {
  name: string;
  imageUrl: string;
  className?: string;
}

export function CardDisplay({ name, imageUrl, className }: CardDisplayProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Initial zoom animation
    card.style.opacity = '0';
    card.style.transform = 'perspective(2000px) scale(0.8) translateZ(-200px)';

    requestAnimationFrame(() => {
      card.style.transition = 'all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      card.style.opacity = '1';
      card.style.transform = 'perspective(2000px) scale(1) translateZ(0) rotateY(-5deg)';
    });

    // Add floating animation after initial animation
    card.addEventListener('transitionend', () => {
      card.style.animation = 'floatCard 6s ease-in-out infinite';
    }, { once: true });
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative aspect-[1.586] rounded-xl overflow-hidden",
        "bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]",
        "border-2 border-white/10",  // Added subtle border
        "shadow-[0_4px_8px_rgba(0,0,0,0.2),_0_0_30px_rgba(212,183,136,0.15)]", // Enhanced shadow
        "transition-all duration-700 ease-out",
        "group cursor-pointer",
        className
      )}
    >
      {/* Premium metallic shine effect */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          backgroundSize: '200% 200%',
          animation: 'shine 3s linear infinite'
        }}
      />

      {/* Card image with premium overlay */}
      <div className="relative w-full h-full">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent mix-blend-overlay" />
      </div>

      {/* Enhanced glowing border effect on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 border-2 border-white/20 rounded-xl" />
      </div>

      {/* Card name container with premium styling */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent backdrop-blur-sm">
        <div className="px-6 py-4">
          <h3 className="text-4xl font-medium tracking-wide gold-gradient-text card-title-glow">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
}