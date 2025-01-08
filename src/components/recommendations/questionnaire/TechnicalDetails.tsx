import React from 'react';

interface TechnicalDetailsProps {
  annualFee: string;
  rewardPotential: string;
}

export function TechnicalDetails({ annualFee, rewardPotential }: TechnicalDetailsProps) {
  return (
    <dl className="space-y-2">
      <div>
        <dt className="text-gold-500/60">Your Reward Potential</dt>
        <dd className="text-white">{rewardPotential || 'N/A'}</dd>
      </div>
      <div>
        <dt className="text-gold-500/60">Annual Fee</dt>
        <dd className="text-white">{annualFee || 'N/A'}</dd>
      </div>
    </dl>
  );
}