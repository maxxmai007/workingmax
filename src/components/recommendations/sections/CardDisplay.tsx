import React from 'react';
import { Card } from '../../ui/card';
import { getCardImage } from '../../../utils/cardImages';

interface CardDisplayProps {
  name: string;
  className?: string;
}

export function CardDisplay({ name, className }: CardDisplayProps) {
  const imageSrc = getCardImage(name);

  return (
    <Card className={className}>
      <div className="relative aspect-[1.586] rounded-lg overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
      </div>
      <h3 className="text-xl font-medium text-white text-center mt-4">{name}</h3>
    </Card>
  );
}