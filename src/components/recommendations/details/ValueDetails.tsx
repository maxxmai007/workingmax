import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';

interface ValueDetailsProps {
  annualFee: string;
  maximumValue: string;
}

export function ValueDetails({ annualFee, maximumValue }: ValueDetailsProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-gold-500">Annual Fee</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold text-white">{annualFee}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-gold-500">Maximum Value</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold text-white">{maximumValue}</p>
        </CardContent>
      </Card>
    </div>
  );
}