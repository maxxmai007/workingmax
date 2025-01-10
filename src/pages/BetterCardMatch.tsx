import React, { useState, useEffect } from 'react';
import { useRecommendationsStore } from '../store/useRecommendationsStore';
import { Logo } from '../components/layout/Logo';
import { BackButton } from '../components/ui/BackButton';
import { Card } from '../components/ui/card';
import { getCardImagePath } from '../utils/cards/imageMapper';
import { GoldSparks } from '../components/animations/GoldSparks';
import { GoldConfetti } from '../components/animations/GoldConfetti';;

export function BetterCardMatch() {
  const { recommendations } = useRecommendationsStore();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowConfetti(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (!recommendations) {
    return null;
  }

  const data = JSON.parse(recommendations);
  console.log('Better Card Match data:', data);

  const existingCardImage = getCardImagePath(data.existing_card_name);
  const recommendedCardImage = getCardImagePath(data.recommended_card_name);

  return (
    <div className="min-h-screen bg-dark-900">
      {showConfetti && <GoldConfetti />}

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Logo />
          <BackButton />
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display text-white mb-2">
            Your Card Upgrade Analysis
          </h1>
          <p className="text-gold-500/80">
            Here's how your new card compares to your current one
          </p>
        </div>

        {/* Card Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Current Card */}
          <Card className="p-6 space-y-6">
            <h2 className="text-xl font-medium text-white">Current Card</h2>
            <div className="aspect-[1.586] relative rounded-lg overflow-hidden bg-dark-800">
              <img
                src={existingCardImage}
                alt={data.existing_card_name}
                className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
              />
            </div>
            <dl className="space-y-4">
              <div>
                <dt className="text-gold-500/60">Card Name</dt>
                <dd className="text-white font-medium">{data.existing_card_name}</dd>
              </div>
              <div>
                <dt className="text-gold-500/60">Annual Fee</dt>
                <dd className="text-white">{data.existing_card_annual_fee}</dd>
              </div>
              <div>
                <dt className="text-gold-500/60">Benefits Value</dt>
                <dd className="text-white">{data.existing_card_benefit_in_reward_category}</dd>
              </div>
              <div>
                <dt className="text-gold-500/60">Reward Redemption</dt>
                <dd className="text-white">{data.existing_card_reward_redemption}</dd>
              </div>
            </dl>
          </Card>

          {/* Recommended Card */}
          <Card className="relative p-6 space-y-6">
            <GoldSparks />
            <div className="relative">
              <h2 className="text-xl font-medium text-gold-500">Recommended Upgrade</h2>
              <div className="absolute inset-0 blur-xl bg-gold-500/20 animate-pulse" />
            </div>

            <div className="aspect-[1.586] relative rounded-lg overflow-hidden bg-dark-800">
              <img
                src={recommendedCardImage}
                alt={data.recommended_card_name}
                className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
              />
            </div>

            <dl className="space-y-4">
              <div>
                <dt className="text-gold-500/60">Card Name</dt>
                <dd className="text-white font-medium">{data.recommended_card_name}</dd>
              </div>
              <div>
                <dt className="text-gold-500/60">Annual Fee</dt>
                <dd className="text-white">{data.recommended_card_annual_fee}</dd>
              </div>
              <div>
                <dt className="text-gold-500/60">Benefits Value</dt>
                <dd className="text-white">{data.recommended_card_benefit_in_reward_category}</dd>
              </div>
              <div>
                <dt className="text-gold-500/60">Reward Redemption</dt>
                <dd className="text-white">{data.recommended_card_reward_redemption}</dd>
              </div>
            </dl>
          </Card>
        </div>

        {/* Apply Now Button - Full Width */}
        <div className="max-w-4xl mx-auto mt-8">
          <a
            href={data.apply_here_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-16 py-6 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black rounded-lg tracking-wider transition-all duration-200 hover:scale-[1.02] font-montserrat text-2xl normal-case flex items-center justify-center"
          >
            Get your upgraded card now
          </a>
        </div>
      </div>
    </div>
  );
}