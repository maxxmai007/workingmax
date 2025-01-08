import { useCallback } from 'react';

export function useCardAnimation() {
  const animateCard = useCallback((element: HTMLElement, index: number) => {
    // Initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(-100vh) rotateX(45deg) scale(0.8)';

    // Use requestAnimationFrame for animation
    requestAnimationFrame(() => {
      element.style.transition = 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0) rotateX(10deg) scale(1)';

      // Add floating animation after landing
      element.addEventListener('transitionend', () => {
        element.style.animation = `float-card-${index + 1} 3s ease-in-out infinite`;
      }, { once: true });
    });
  }, []);

  return { animateCard };
}