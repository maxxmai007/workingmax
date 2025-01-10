import Confetti from 'react-confetti';
import { useWindowSize } from '../../hooks/useWindowSize';

export function GoldConfetti() {
  const { width, height } = useWindowSize();

  return (
    <Confetti
      width={width}
      height={height}
      gravity={0.1}         // Made even slower
      numberOfPieces={100}  // Reduced for better visibility of individual pieces
      colors={[
        '#FFD700',   // Gold
        '#C0C0C0',   // Silver
        '#E5E4E2',   // Platinum
        '#DAA520',   // Goldenrod
        '#C4CACE',   // Silver metallic
        '#B8860B',   // Dark goldenrod
      ]}
      drawShape={ctx => {
        // Draw a card shape
        ctx.beginPath();
        ctx.roundRect(-15, -20, 30, 40, 3); // Rectangle with rounded corners
        ctx.fill();
      }}
      recycle={false}
      tweenDuration={10000}  // Even slower animation
    />
  );
}