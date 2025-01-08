/**
 * Normalizes a card name by:
 * 1. Converting to lowercase
 * 2. Removing common prefixes/suffixes
 * 3. Converting spaces to underscores
 */
function normalizeCardName(name: string): string {
  return name
    .toLowerCase()
    // Remove common bank prefixes
    .replace(/(hdfc|icici|sbi|yes)\s+bank\s+/i, '')
    // Remove common suffixes
    .replace(/\s+(credit|debit)\s+card$/i, '')
    // Replace spaces with underscores
    .replace(/\s+/g, '_')
    // Remove any special characters
    .replace(/[^a-z0-9_]/g, '')
    .trim();
}

/**
 * Calculates similarity between two strings using Levenshtein distance
 * and additional partial matching logic
 */
function calculateSimilarity(str1: string, str2: string): number {
  const s1 = normalizeCardName(str1);
  const s2 = normalizeCardName(str2);

  // Exact match
  if (s1 === s2) return 1;

  // Check if one string contains the other
  if (s1.includes(s2) || s2.includes(s1)) {
    const lengthDiff = Math.abs(s1.length - s2.length);
    const maxLength = Math.max(s1.length, s2.length);
    return 0.8 - (lengthDiff / maxLength * 0.2); // High similarity for contained strings
  }

  // Split into parts and check for matching segments
  const parts1 = s1.split('_');
  const parts2 = s2.split('_');
  
  // Count matching parts
  const matchingParts = parts1.filter(p1 => 
    parts2.some(p2 => p1 === p2 || p2.includes(p1) || p1.includes(p2))
  ).length;

  // Calculate part matching score
  const partScore = (matchingParts * 2) / (parts1.length + parts2.length);
  if (partScore > 0.5) {
    return partScore;
  }

  // Fallback to Levenshtein distance for low-matching strings
  const matrix: number[][] = Array(s1.length + 1).fill(null).map(() => 
    Array(s2.length + 1).fill(null)
  );

  // Initialize first row and column
  for (let i = 0; i <= s1.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= s2.length; j++) matrix[0][j] = j;

  // Fill matrix
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,      // deletion
        matrix[i][j - 1] + 1,      // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );
    }
  }

  const distance = matrix[s1.length][s2.length];
  const maxLength = Math.max(s1.length, s2.length);
  return 1 - (distance / maxLength);
}

/**
 * Finds the best matching filename for a given card name
 */
export function findBestMatch(cardName: string, availableFiles: string[]): string | null {
  const threshold = 0.5; // Lower threshold to allow more partial matches
  let bestMatch = null;
  let bestScore = 0;

  const normalizedCardName = normalizeCardName(cardName);
  console.log('🔍 Normalized card name:', normalizedCardName);

  for (const file of availableFiles) {
    const fileName = file.replace(/\.[^/.]+$/, ""); // Remove extension
    const similarity = calculateSimilarity(normalizedCardName, fileName);
    console.log(`📊 Comparing with ${fileName}, similarity: ${similarity}`);

    if (similarity > threshold && similarity > bestScore) {
      bestScore = similarity;
      bestMatch = file;
    }
  }

  console.log(`✨ Best match: ${bestMatch} (score: ${bestScore})`);
  return bestMatch;
}