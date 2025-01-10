import { GoldenText } from '../../animations/GoldenText';

interface TechnicalDetailsProps {
  annualFee?: string | number;
  rewardPotential?: string | number;
}

export function TechnicalDetails({ annualFee, rewardPotential }: TechnicalDetailsProps) {
  return (
    <dl className="space-y-4">
      <div>
        <dt className="text-gold-500/60">Annual Fee</dt>
        <GoldenText>
          <dd className="text-white">{annualFee}</dd>
        </GoldenText>
      </div>
      <div>
        <dt className="text-gold-500/60">Potential Value</dt>
        <GoldenText>
          <dd className="text-white">{rewardPotential}</dd>
        </GoldenText>
      </div>
    </dl>
  );
}