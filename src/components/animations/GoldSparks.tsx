import React, { useEffect, useRef } from 'react';
import '../../styles/sparks.css';

export function GoldSparks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createSpark = () => {
      const spark = document.createElement('div');
      spark.className = 'spark';

      // Random starting position along the card edges
      const side = Math.floor(Math.random() * 4);
      let xStart = 0, yStart = 0;
      
      switch(side) {
        case 0: // top
          xStart = Math.random() * 100;
          yStart = -10;
          break;
        case 1: // right
          xStart = 110;
          yStart = Math.random() * 100;
          break;
        case 2: // bottom
          xStart = Math.random() * 100;
          yStart = 110;
          break;
        case 3: // left
          xStart = -10;
          yStart = Math.random() * 100;
          break;
      }

      // Random end position with more outward trajectory
      const angle = Math.random() * Math.PI * 2;
      const distance = 100 + Math.random() * 150;
      const xEnd = xStart + Math.cos(angle) * distance;
      const yEnd = yStart + Math.sin(angle) * distance;

      spark.style.setProperty('--x-start', `${xStart}%`);
      spark.style.setProperty('--y-start', `${yStart}%`);
      spark.style.setProperty('--x-end', `${xEnd}%`);
      spark.style.setProperty('--y-end', `${yEnd}%`);

      // Randomize animation duration between 1-2 seconds
      spark.style.animation = `spark ${1 + Math.random()}s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
      container.appendChild(spark);

      spark.addEventListener('animationend', () => {
        spark.remove();
      });
    };

    // Create more sparks more frequently
    const interval = setInterval(() => {
      for (let i = 0; i < 4; i++) {
        createSpark();
      }
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="spark-container" />;
}