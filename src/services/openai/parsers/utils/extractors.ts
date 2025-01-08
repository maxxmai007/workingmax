import { cardPatterns, sectionPatterns } from '../patterns';
import { cleanMarkdown } from './cleanMarkdown';

export function extractPattern(content: string, patterns: RegExp[]): string {
  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match?.[1]) {
      return cleanMarkdown(match[1]);
    }
  }
  return '';
}

export function extractSection(content: string, section: string): string {
  // Try exact section match first
  const exactRegex = new RegExp(`## ${section}\\n\\n(.*?)(?=\\n\\n##|$)`, 's');
  const exactMatch = content.match(exactRegex);
  if (exactMatch?.[1]) {
    return cleanMarkdown(exactMatch[1]);
  }

  // Try alternative patterns
  const patterns = sectionPatterns[section as keyof typeof sectionPatterns] || [];
  return extractPattern(content, patterns);
}