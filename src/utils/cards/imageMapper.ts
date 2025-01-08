import { getBankFolder } from './bankMapper';
import { findBestMatch } from './fuzzyMatch';

const DEFAULT_CARD_IMAGE = './images/cards/default-card.png';

// Complete mock file system mapping
const mockFileSystem: Record<string, string[]> = {
  'amex': [
    'express_membership.png',
    'gold.png',
    'platinum_card.png',
    'platinum_charge_card.png',
    'reserve.png',
    'rewards.png'
  ],
  'axis': [
    'ace.png',
    'atlas.png',
    'bank_vistara_infinite.png',
    'flipkart.png',
    'magnus.png',
    'myzone.png',
    'neo.png'
  ],
  'citi': [
    'cashback.png',
    'premiermiles.png',
    'prestige_card.png',
    'prestige.png',
    'rewards.png',
    'ultimate.png',
  ],
  'hdfc': [
    'diners_club_black.png',
    'diners_club_privilege.png',
    'diners_club_rewardz.png',
    'infinia.png',
    'millennia.png',
    'moneyback.png',
    'regalia.png'
  ],
  'hsbc': [
    'cashback.png',
    'platinum.png',
    'smart_value.png'
  ],
  'icici': [
    'amazon_pay.png',
    'coral.png',
    'emeralde_private_metal.png',
    'platinum_chip.png',
    'rubyx.png',
    'sapphiro.png'
  ],
  'sbi': [
    'aurum.png',
    'elite.png',
    'prime.png',
    'simplyclick.png',
    'simplysave.png'
  ],
  'standard': [
    'emirates.png',
    'manhattan.png',
    'platinum.png',
    'super_value.png',
    'ultimate.png'
  ],
  'yes': [
    'prosperity.png'
  ]
};

export function getCardImagePath(cardName: string): string {
  try {
    if (!cardName) {
      console.warn('No card name provided for image lookup');
      return DEFAULT_CARD_IMAGE;
    }

    const bankFolder = getBankFolder(cardName);
    console.log('🏦 Bank folder:', bankFolder);

    const availableFiles = mockFileSystem[bankFolder] || [];
    console.log('📁 Available files:', availableFiles);

    const matchedFile = findBestMatch(cardName, availableFiles);
    console.log('🎯 Matched file:', matchedFile);

    if (!matchedFile) {
      console.warn('No matching card image found for:', cardName);
      return DEFAULT_CARD_IMAGE;
    }

    // Use absolute path from public directory
    const imagePath = `./images/cards/${bankFolder.toLowerCase()}/${matchedFile.toLowerCase()}`;
    console.log('🖼️ Image path:', imagePath);
    return imagePath;

  } catch (error) {
    console.error('Error finding card image:', error);
    return DEFAULT_CARD_IMAGE;
  }
}
