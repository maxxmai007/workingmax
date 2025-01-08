import { ParserError } from '../errors/ParserError';
import type { CreditCardRecommendation } from '../types';

export function parseOpenAIResponse(content: string): any {
  try {
    console.log('Parsing OpenAI response content:', content);

    // Parse the JSON content
    const parsed = JSON.parse(content.trim());
    console.log('Parsed JSON:', parsed);

    // Check if this is an existing card comparison response
    if (parsed.existing_card_name && parsed.recommended_card_name) {
      // Return the existing card comparison format directly
      return parsed;
    }

    // Handle new credit card recommendation format
    const recommendation: CreditCardRecommendation = {
      card_name: parsed.card_name || 'Unnamed Card',
      annual_fee: parsed.annual_fee || 'N/A',
      maximum_value_of_benefits: parsed.maximum_value_of_rewards || 'N/A',
      real_world_benefits: parsed.real_world_rewards || 'No benefits information available',
      why_this_card: parsed.why_this_card || 'No information available',
      maximum_value_description: parsed.maximum_value_description || 'No description available',
      card_image: getCardImage(parsed.card_name),
      apply_link: parsed.apply_link || '#'
    };

    console.log('Final recommendation:', recommendation);
    return { recommendations: [recommendation] };

  } catch (error) {
    console.error('Error parsing OpenAI response:', error);
    throw new ParserError(
      'Failed to parse recommendation data: ' + (error instanceof Error ? error.message : 'Unknown error'),
      'PARSER_ERROR',
      error
    );
  }
}

// Helper function to get card image based on card name
function getCardImage(cardName: string): string {
  if (!cardName) return '/src/assets/images/cards/default-card.png';
  
  // Convert card name to filename format
  const filename = cardName
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
    
  return `/src/assets/images/cards/${filename}.png`;
}