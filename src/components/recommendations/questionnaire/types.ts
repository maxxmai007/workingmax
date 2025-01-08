import type { CreditCardRecommendation } from '../../../services/openai/types';

export interface QuestionnaireProps {
  recommendation: CreditCardRecommendation;
}

export interface QuestionSectionProps {
  title: string;
  children: React.ReactNode;
}