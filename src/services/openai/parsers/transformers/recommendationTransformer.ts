import type { CreditCardRecommendation } from '../../types';

export function transformToRecommendation(data: any): CreditCardRecommendation {
  return {
    card_name: data.card_name || 'Unnamed Card',
    annual_fee: data.annual_fee || 'N/A',
    maximum_value_of_benefits: data.maximum_value_of_rewards || data.maximum_value_of_benefits || 'N/A',
    real_world_rewards: data.real_world_rewards || 'No benefits information available',
    why_this_card: data.why_this_card || '',
    maximum_value_description: data.maximum_value_description || '',
    card_image: data.card_image || 'https://via.placeholder.com/300x200?text=Credit+Card',
    apply_link: data.apply_link || '#'
  };
}