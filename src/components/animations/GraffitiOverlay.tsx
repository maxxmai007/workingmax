import React, { useEffect, useRef } from 'react';

export function GraffitiOverlay() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    // Create graffiti elements
    const createGraffitiElement = () => {
      const element = document.createElement('div');
      element.className = 'graffiti-element';
      
      // Randomize properties
      const size = 20 + Math.random() * 60;
      const startX = Math.random() * window.innerWidth;
      const rotation = Math.random() * 360;
      const delay = Math.random() * 0.5;
      
      // Apply styles
      element.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${startX}px;
        top: -100px;
        background: radial-gradient(circle at center, rgba(212,183,136,0.3), transparent);
        transform: rotate(${rotation}deg);
        animation: fallAndFade 2s ease-in-out ${delay}s forwards;
      `;
      
      return element;
    };

    // Add multiple graffiti elements
    const elements = Array.from({ length: 15 }, createGraffitiElement);
    elements.forEach(element => container.appendChild(element));

    // Cleanup
    return () => {
      elements.forEach(element => element.remove());
    };
  }, []);

  return (
    <div 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ perspective: '1000px' }}
    />
  );
}