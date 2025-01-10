import React, { useEffect, useRef } from 'react';
import '../../styles/confetti.css';

export function GoldConfetti() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createConfetti = () => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';

      // Random starting position
      const startX = Math.random() * window.innerWidth;
      confetti.style.left = `${startX}px`;
      confetti.style.top = '-20px';

      // Random animation properties
      const duration = 1.5 + Math.random();
      const delay = Math.random();
      confetti.style.animation = `confettiDrop ${duration}s ${delay}s ease-in forwards`;

      // Random rotation and scale
      const rotation = Math.random() * 360;
      const scale = 0.5 + Math.random() * 0.5;
      confetti.style.transform = `rotate(${rotation}deg) scale(${scale})`;

      container.appendChild(confetti);

      // Cleanup
      confetti.addEventListener('animationend', () => {
        confetti.remove();
      });
    };

    // Create initial burst of confetti
    for (let i = 0; i < 100; i++) {
      createConfetti();
    }

    // Add more confetti periodically
    const interval = setInterval(() => {
      for (let i = 0; i < 5; i++) {
        createConfetti();
      }
    }, 300);

    // Cleanup after 3 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return <div ref={containerRef} className="confetti-container" />;
}