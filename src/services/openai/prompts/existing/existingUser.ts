import type { UserProfile } from '../../../../types/profile';
import { formatCurrency } from '../../../../utils/formatters';
import { formatGoal } from '../formatters/goals';

export function generateExistingUserPrompt(profile: UserProfile): string {
  const { basicDetails, spendingHabits, goals } = profile;

  const sections = [
    '# Upgrade Analysis Request',
    '',
    '## Current Card Details',
    `- Current Card: ${basicDetails.existingCard || 'Not specified'}`,
    '',
    '## User Profile',
    `- Income: ${basicDetails.income}`,
    `- Occupation: ${basicDetails.occupation}`,
    `- Location: ${basicDetails.city}`,
    '',
    '## Monthly Spending Patterns',
    ...Object.entries(spendingHabits).map(
      ([category, amount]) => `- ${category.charAt(0).toUpperCase() + category.slice(1)}: ${formatCurrency(amount)}`
    ),
    '',
    '## Reward Preferences',
    ...goals.map(goal => `- ${formatGoal(goal)}`),
    '',
    'Please recommend ONE credit card that:',
    '1. Offers significantly better rewards than the current card',
    '2. Aligns with the spending pattern',
    '3. Provides clear upgrade benefits',
    '4. Matches the reward preferences',
    '5. Give me the result as mentioned in the system instruction ## Output Format only'
  ];

  return sections.join('\n');
}