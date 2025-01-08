import React from 'react';
import { useLocation } from 'react-router-dom';
import { useProfileStore } from '../../store/useProfileStore';
import { useOpenAI } from '../../hooks/useOpenAI';
import { BasicDetails } from './BasicDetails';
import { SpendingHabits } from './SpendingHabits';
import { Goals } from './Goals';
import { LoadingModal } from '../ui/LoadingModal';
import { ProfileHeader } from './ProfileHeader';

interface ProfileBuilderProps {
  userType?: 'new' | 'existing';
}

export function ProfileBuilder({ userType = 'new' }: ProfileBuilderProps) {
  const { basicDetails, spendingHabits, goals } = useProfileStore();
  const { getRecommendations, isLoading } = useOpenAI();
  const location = useLocation();
  const isExistingUser = location.pathname.includes('/existing');

  const headerTitle = isExistingUser 
    ? "Upgrade Your Credit Card" 
    : "Discover Your Match";
  
  const headerSubtitle = isExistingUser
    ? "Let's find a better card for your needs"
    : "Let's find your perfect credit card match";

  const handleAction = async () => {
    if (!basicDetails || !spendingHabits || !goals.length) return;

    await getRecommendations({
      basicDetails,
      spendingHabits,
      goals
    }, isExistingUser);
  };

  const loadingText = isExistingUser ? "Finding Upgrades..." : "Getting Recommendations...";

  return (
    <div className="min-h-screen bg-dark-900">
      <LoadingModal isOpen={isLoading} message={loadingText} />
      
      <div className="max-w-[1440px] mx-auto px-4 py-6">
        <ProfileHeader title={headerTitle} subtitle={headerSubtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-dark-800/50 border border-gold-500/10 rounded-xl p-6">
            <h2 className="text-xl font-medium text-white mb-4">Basic Details</h2>
            <BasicDetails userType={isExistingUser ? 'existing' : 'new'} />
          </div>

          <div className="bg-dark-800/50 border border-gold-500/10 rounded-xl p-6">
            <h2 className="text-xl font-medium text-white mb-4">Monthly Spends</h2>
            <SpendingHabits />
          </div>

          <div className="bg-dark-800/50 border border-gold-500/10 rounded-xl p-6">
            <h2 className="text-xl font-medium text-white mb-4">Reward Preferences</h2>
            <Goals />
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={handleAction}
            disabled={!basicDetails || !spendingHabits || !goals.length || isLoading}
            className="w-full px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 rounded-lg font-medium transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isExistingUser ? 'Upgrade Your Card' : 'Get Recommendations'}
          </button>
        </div>
      </div>
    </div>
  );
}