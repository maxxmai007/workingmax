import { logger } from '../../utils/logger';

// Environment validation
export function validateApiKey(key: string | undefined): string {
  // Always use mock data when no API key is present
  if (!key) {
    logger.info('No OpenAI API key found. Using mock data.');
    return 'mock-key';
  }

  if (!key.startsWith('sk-')) {
    logger.warn('Invalid OpenAI API key format. Using mock data.');
    return 'mock-key';
  }

  return key;
}

// OpenAI configuration
export const OPENAI_CONFIG = {
  model: "gpt-4",
  temperature: 0.7,
  max_tokens: 2000,
  presence_penalty: 0.1,
  frequency_penalty: 0.1
} as const;

// Key management
let currentApiKey: string | null = null;

export function getApiKey(): string {
  if (!currentApiKey) {
    const key = import.meta.env.VITE_OPENAI_API_KEY;
    currentApiKey = validateApiKey(key);
    logger.debug('OpenAI API key validated');
  }
  return currentApiKey;
}

// Check if we're in test/mock mode
export function isTestMode(): boolean {
  return !import.meta.env.VITE_OPENAI_API_KEY || currentApiKey === 'mock-key';
}