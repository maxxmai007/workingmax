import React from 'react';
import { RecommendationDisplay } from '../components/recommendations/RecommendationDisplay';
import { LoadingSpinner } from '../components/ui/loading';
import { useRecommendationsStore } from '../store/useRecommendationsStore';
import { parseRecommendations } from '../utils/parseRecommendations';

export function Recommendations() {
  const { recommendations } = useRecommendationsStore();
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const parsedData = React.useMemo(() => {
    if (!recommendations) return null;
    try {
      return parseRecommendations(recommendations);
    } catch (err) {
      setError('Failed to parse recommendation data');
      return null;
    }
  }, [recommendations]);

  React.useEffect(() => {
    if (parsedData) {
      setIsLoading(false);
    }
  }, [parsedData]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!parsedData || !parsedData.recommendations[0]) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <p className="text-gold-500/60">No recommendation available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <RecommendationDisplay recommendation={parsedData.recommendations[0]} />
      </div>
    </div>
  );
}