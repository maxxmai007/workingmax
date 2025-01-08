import { useEffect, useRef } from 'react';

export function useCardStackAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.getElementsByClassName('credit-card');
    Array.from(cards).forEach((card, index) => {
      const element = card as HTMLElement;
      
      // Initial state
      element.style.transform = 'translateY(-200%) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      element.style.transition = 'none';
      element.style.opacity = '0';

      // Force reflow
      element.offsetHeight;

      // Add transition and animate
      requestAnimationFrame(() => {
        element.style.transition = 'all 1500ms ease-out';
        element.style.opacity = '1';
        
        const transforms = [
          'translateX(0) translateY(0) translateZ(-100px) rotateX(20deg) rotateY(-15deg)',
          'translateX(-30px) translateY(-30px) translateZ(-50px) rotateX(20deg) rotateY(-15deg)',
          'translateX(-60px) translateY(-60px) translateZ(0) rotateX(20deg) rotateY(-15deg)'
        ];

        element.style.transform = transforms[index] || transforms[0];
      });
    });
  }, []);

  return containerRef;
}