import OpenAI from 'openai';
import { getApiKey, OPENAI_CONFIG, isTestMode } from './config';
import { logger } from '../../utils/logger';

// Create OpenAI client with validated key
function createClient(): OpenAI {
  try {
    const apiKey = getApiKey();
    
    // If in test mode, return null client
    if (isTestMode()) {
      logger.warn('Running in test mode - OpenAI client will not be initialized');
      return null as unknown as OpenAI;
    }

    logger.debug('Creating OpenAI client with config:', {
      model: OPENAI_CONFIG.model
    });

    return new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true
    });
  } catch (error) {
    logger.error('Failed to create OpenAI client:', error);
    return null as unknown as OpenAI;
  }
}

// Export singleton instance
export const openai = createClient();