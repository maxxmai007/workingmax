import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';

interface CardInfoSectionProps {
  title: string;
  value: string;
}

export function CardInfoSection({ title, value }: CardInfoSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-gold-500">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gold-500/80 leading-relaxed">{value}</p>
      </CardContent>
    </Card>
  );
}