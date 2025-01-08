import type { CreditCardRecommendation } from '../../types';

function extractValue(content: string, pattern: RegExp): string {
  const match = content.match(pattern);
  return match?.[1]?.trim() || '';
}

export function extractFromMarkdown(content: string): CreditCardRecommendation {
  console.log('Extracting from markdown:', content);

  // Extract card name - try multiple patterns
  const cardName = 
    extractValue(content, /\*\*Card Name\*\*:\s*(.*?)(?:\n|$)/m) ||
    extractValue(content, /recommend the \*\*(.*?)\*\*/m) ||
    extractValue(content, /best fit for you is the \*\*(.*?)\*\*/m);

  // Extract annual fee
  const annualFee = 
    extractValue(content, /\*\*Annual Fee\*\*:\s*(.*?)(?:\n|$)/m) ||
    extractValue(content, /Annual Fee:\s*(₹[\d,]+)/m);

  // Extract sections using more flexible patterns
  const whyThisCard = 
    content.match(/## Why This Card\??\n\n([\s\S]*?)(?=\n\n##|$)/m)?.[1]?.trim() ||
    content.match(/The .* is (?:a perfect|an excellent) match[^.]*(?:\.|$)((?:[\s\S])*?)(?=\n\n##|$)/m)?.[1]?.trim();

  const realWorldBenefits = 
    content.match(/## (?:Real[- ]World|Gamified) (?:Benefits|Rewards)\n\n([\s\S]*?)(?=\n\n##|$)/m)?.[1]?.trim() ||
    content.match(/With the .* Card,\s*(.*?)(?=\n\n##|$)/m)?.[1]?.trim();

  const maxValueDesc = 
    content.match(/## Maximum Value (?:of Rewards|Description)\n\n([\s\S]*?)(?=\n\n##|$)/m)?.[1]?.trim() ||
    content.match(/Here's how you can maximize[^:]*:([\s\S]*?)(?=\n\n##|$)/m)?.[1]?.trim();

  // Extract maximum value
  const maxValue = 
    extractValue(content, /maximum value .* approximately (₹[\d,]+)/i) ||
    extractValue(content, /up to (₹[\d,]+)/i) ||
    'Value varies based on usage';

  // Extract apply link
  const applyLink = 
    content.match(/\[(?:Apply|Apply Here)[^\]]*\]\((.*?)\)/)?.[1] ||
    content.match(/application link[^:]*:\s*\[.*?\]\((.*?)\)/)?.[1] ||
    '#';

  const recommendation: CreditCardRecommendation = {
    card_name: cardName || 'Unnamed Card',
    annual_fee: annualFee || 'N/A',
    maximum_value_of_benefits: maxValue,
    real_world_benefits: realWorldBenefits || 'No benefits information available',
    why_this_card: whyThisCard || 'No information available',
    maximum_value_description: maxValueDesc || 'No description available',
    card_image: 'https://via.placeholder.com/300x200?text=Credit+Card',
    apply_link: applyLink
  };

  console.log('Extracted recommendation:', recommendation);
  return recommendation;
}