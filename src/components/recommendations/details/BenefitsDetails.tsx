import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';

interface BenefitsDetailsProps {
  realWorldBenefits: string;
  whyThisCard: string;
  maximumValueDescription: string;
}

export function BenefitsDetails({ 
  realWorldBenefits,
  whyThisCard,
  maximumValueDescription 
}: BenefitsDetailsProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-gold-500">Real World Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gold-500/80 leading-relaxed">{realWorldBenefits}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-gold-500">Why This Card?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gold-500/80 leading-relaxed">{whyThisCard}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-gold-500">Maximum Value Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gold-500/80 leading-relaxed">{maximumValueDescription}</p>
        </CardContent>
      </Card>
    </div>
  );
}