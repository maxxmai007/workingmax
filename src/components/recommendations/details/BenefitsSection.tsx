import React from 'react';

interface BenefitsSectionProps {
  whyThisCard: string;
  maximumValueDescription: string;
}

export function BenefitsSection({ whyThisCard, maximumValueDescription }: BenefitsSectionProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-white mb-2">Why This Card?</h3>
        <p className="text-gold-500/80 leading-relaxed">{whyThisCard}</p>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-white mb-2">Maximum Value Details</h3>
        <p className="text-gold-500/80 leading-relaxed">{maximumValueDescription}</p>
      </div>
    </div>
  );
}