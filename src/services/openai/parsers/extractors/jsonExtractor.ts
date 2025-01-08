export function extractJsonFromContent(content: string): string | null {
  // Try to find JSON block with json tag
  if (content.includes('```json')) {
    return content.split('```json')[1].split('```')[0].trim();
  }
  
  // Try to find JSON block without tag
  if (content.includes('```')) {
    return content.split('```')[1].split('```')[0].trim();
  }
  
  return null;
}