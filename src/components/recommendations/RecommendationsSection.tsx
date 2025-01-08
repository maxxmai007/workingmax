import React from 'react';
import { RecommendationsButton } from './RecommendationsButton';
import { useLocation } from 'react-router-dom';

export function RecommendationsSection() {
  const location = useLocation();
  const isExistingUser = location.pathname.includes('/existing');

  return (
    <div className="mt-12 max-w-[1440px] mx-auto px-4">
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <RecommendationsButton userType={isExistingUser ? 'existing' : 'new'} />
        </div>
      </div>
    </div>
  );
}