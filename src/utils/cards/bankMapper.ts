// Map of common bank name variations to folder names
export const bankFolderMap: Record<string, string> = {
  'american express': 'amex',
  'amex': 'amex',
  'axis bank': 'axis',
  'axis': 'axis',
  'standard chartered': 'standard',
  'sc': 'standard',
  'yes bank': 'yes',
  'citi': 'citi',
  'citibank': 'citi',
  'hdfc': 'hdfc',
  'hdfc bank': 'hdfc',
  'icici': 'icici',
  'icici bank': 'icici',
  'sbi': 'sbi',
  'sbi card': 'sbi',
  'hsbc': 'hsbc'
};

export function getBankFolder(cardName: string): string {
  // Handle special cases first
  if (cardName.toLowerCase().includes('hdfc bank')) {
    return 'hdfc';
  }

  // Extract first two words and try matching
  const words = cardName.toLowerCase().split(' ');
  const twoWordBank = words.slice(0, 2).join(' ');
  
  if (bankFolderMap[twoWordBank]) {
    return bankFolderMap[twoWordBank];
  }

  // Try first word
  if (bankFolderMap[words[0]]) {
    return bankFolderMap[words[0]];
  }

  return words[0];
}