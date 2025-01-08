import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';

interface ValueSectionProps {
  annualFee: string;
  maximumValue: string;
}

export function ValueSection({ annualFee, maximumValue }: ValueSectionProps) {
  return (
    <div className="grid grid-cols-2 gap-6 w-full">
      <Card className="bg-dark-800/80 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-gold-500">Annual Fee</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-semibold text-white">{annualFee}</p>
        </CardContent>
      </Card>

      <Card className="bg-dark-800/80 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-gold-500">Maximum Value</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-semibold text-white">{maximumValue}</p>
        </CardContent>
      </Card>
    </div>
  );
}