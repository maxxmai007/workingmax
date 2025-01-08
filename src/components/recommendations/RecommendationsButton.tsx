import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { LoadingModal } from '../ui/LoadingModal';
import { useOpenAI } from '../../hooks/useOpenAI';
import { useProfileStore } from '../../store/useProfileStore';

interface RecommendationsButtonProps {
  userType?: 'new' | 'existing';
}

export function RecommendationsButton({ userType = 'new' }: RecommendationsButtonProps) {
  const navigate = useNavigate();
  const { getRecommendations, isLoading, error } = useOpenAI();
  const { basicDetails, spendingHabits, goals } = useProfileStore();

  const handleGetRecommendations = async () => {
    if (!basicDetails || !spendingHabits || goals.length === 0) {
      return;
    }

    const isExisting = userType === 'existing';
    
    await getRecommendations({
      basicDetails,
      spendingHabits,
      goals
    }, isExisting);
  };

  const buttonText = userType === 'existing' ? 'Upgrade Your Card' : 'Get Recommendations';
  const loadingText = userType === 'existing' ? 'Finding Upgrades...' : 'Getting Recommendations...';

  return (
    <>
      <LoadingModal isOpen={isLoading} message={loadingText} />
      
      <div className="space-y-4">
        <Button
          onClick={handleGetRecommendations}
          disabled={isLoading || !basicDetails || !spendingHabits || goals.length === 0}
          className="w-full"
        >
          {buttonText}
        </Button>

        {error && (
          <p className="text-sm text-red-500 text-center">
            {error}
          </p>
        )}
      </div>
    </>
  );
}