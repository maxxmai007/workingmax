import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface LoadingModalProps {
  isOpen: boolean;
  message?: string;
}

export function LoadingModal({ isOpen, message = 'Upgrading...' }: LoadingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-dark-900/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div
        className="bg-dark-800 border border-gold-500/20 rounded-lg flex flex-col items-center gap-4"
        style={{
          width: '600px', // Adjust width
          height: '600px', // Adjust height
          padding: '24px', // Adjust padding
        }}
      >
        <LoadingSpinner size="lg" />
        <p className="text-gold-500">{message}</p>
        <div style={{ width: '100%', height: '60%', position: 'relative' }}>
          <iframe
            src="https://giphy.com/embed/ycANs3udEsdsdgDIDZ"
            width="100%"
            height="100%"
            style={{ position: 'absolute' }}
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
        <p>
          <a href="https://giphy.com/gifs/Vitracash-vitracash-debit-cards-concept-ycANs3udEsdsdgDIDZ">
            via GIPHY
          </a>
        </p>
      </div>
    </div>
  );
}
