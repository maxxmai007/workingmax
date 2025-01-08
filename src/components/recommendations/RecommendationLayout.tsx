import React from 'react';
import { Logo } from '../layout/Logo';
import { BackButton } from '../ui/BackButton';
import { ApplyButton } from './ApplyButton';
import { CardDisplay } from './sections/CardDisplay';
import { ValueSection } from './sections/ValueSection';
import { BenefitsSection } from './sections/BenefitsSection';
import type { CreditCardRecommendation } from '../../services/openai/types';

interface RecommendationLayoutProps {
  recommendation: CreditCardRecommendation;
}

export function RecommendationLayout({ recommendation }: RecommendationLayoutProps) {
  return (
    <div className="min-h-screen bg-dark-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <BackButton className="mb-8" />
        
        <div className="text-center mb-16">
          <Logo className="mx-auto" />
          <h2 className="mt-6 text-3xl font-display tracking-tight text-white">
            Your Perfect Match
          </h2>
          <p className="mt-2 text-sm text-gold-500/80">
            Tailored to your spending habits and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Card visualization */}
          <div className="flex flex-col items-center space-y-8">
            <CardDisplay name={recommendation.card_name} />
            <ValueSection 
              annualFee={recommendation.annual_fee}
              maximumValue={recommendation.maximum_value_of_benefits}
            />
          </div>

          {/* Right side - Detailed information */}
          <div className="space-y-8">
            <BenefitsSection 
              realWorldBenefits={recommendation.real_world_rewards}
              whyThisCard={recommendation.why_this_card}
              maximumValueDescription={recommendation.maximum_value_description}
            />
            
            <div className="text-center mt-8">
              <ApplyButton href={recommendation.apply_link} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}