import React, { useState, useEffect } from 'react';
import { CardDisplay } from './card/CardDisplay';
import { Questionnaire } from './questionnaire/Questionnaire';
import { BackButton } from '../ui/BackButton';
import { Logo } from '../layout/Logo';
import { GraffitiOverlay } from '../animations/GraffitiOverlay';
import { GoldConfetti } from '../animations/GoldConfetti';
import type { CreditCardRecommendation } from '../../services/openai/types';
import { useLocation } from 'react-router-dom';

interface RecommendationDisplayProps {
  recommendation: CreditCardRecommendation;
}

export function RecommendationDisplay({ recommendation }: RecommendationDisplayProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const location = useLocation();
  const isUpgrade = location.pathname.includes('/existing');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowConfetti(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative">
      {showConfetti && <GoldConfetti />}
      <GraffitiOverlay />

      <div className="flex items-center justify-between mb-8">
        <Logo />
        <BackButton />
      </div>

      <h1 className="text-4xl font-display text-white text-center mb-12">
        {isUpgrade ? 'Your Recommended Upgrade' : 'Your Perfect Credit Card'}
      </h1>

      <div className="grid grid-cols-2 gap-12">
        <div className="relative">
          <div className="absolute inset-0 bg-gold-500/10 blur-xl rounded-2xl" />
          <div className="relative flex flex-col space-y-4">
            <CardDisplay
              name={recommendation.card_name}
              imageUrl={recommendation.card_image}
              className="shadow-[0_0_30px_rgba(212,183,136,0.15)]"
              isUpgrade={isUpgrade}
            />
            <a
              href={recommendation.apply_link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 rounded-lg font-medium text-center transition-all duration-200 hover:scale-[1.02]"
            >
              Apply Now
            </a>
          </div>
        </div>

        <div className="py-4">
          <Questionnaire recommendation={recommendation} />
        </div>
      </div>
    </div>
  );
}