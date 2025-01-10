import React from 'react';
import { QuestionSection } from './QuestionSection';
import { TechnicalDetails } from './TechnicalDetails';
import type { QuestionnaireProps } from './types';
import { GoldenText } from '../../animations/GoldenText';

export function Questionnaire({ recommendation }: QuestionnaireProps) {
  return (
    <div className="divide-y divide-gold-500/10">
      <QuestionSection title="Why this card is right for you?">
        <GoldenText>
          <div className="prose prose-gold whitespace-pre-wrap">
            {recommendation.why_this_card || 'Maximizes travel rewards with your spending pattern.'}
          </div>
        </GoldenText>
      </QuestionSection>

      <QuestionSection title="What can your rewards do for you?">
        <GoldenText>
          <div className="prose prose-gold whitespace-pre-wrap">
            {recommendation.real_world_benefits || 'Earn enough miles for a round trip to Europe!'}
          </div>
        </GoldenText>
      </QuestionSection>

      <QuestionSection title="Card details">
        <TechnicalDetails
          annualFee={recommendation.annual_fee}
          rewardPotential={recommendation.maximum_value_of_benefits}
        />
      </QuestionSection>
    </div>
  );
}