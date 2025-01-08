import { openai } from './client';
import { OPENAI_CONFIG, isTestMode } from './config';
import { parseOpenAIResponse } from './parsers/responseParser';
import { OpenAIError } from './errors/OpenAIError';
import { logger } from '../../utils/logger';
import type { UserProfile } from '../../types/profile';
import type { RecommendationsResponse } from './types';
import { mockRecommendations } from '../mock/recommendations';

export async function getRecommendations(
  profile: UserProfile,
  systemPrompt: string,
  userPrompt: string
): Promise<RecommendationsResponse> {
  try {
    logger.debug('Starting recommendation request');

    // Return mock data in test mode
    if (isTestMode()) {
      logger.info('Running in test mode - returning mock recommendations');
      return mockRecommendations;
    }

    const completion = await openai.chat.completions.create({
      ...OPENAI_CONFIG,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ]
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new OpenAIError('No recommendations received', 'EMPTY_RESPONSE');
    }

    logger.debug('Received OpenAI response:', content);
    return parseOpenAIResponse(content);

  } catch (error) {
    logger.error('OpenAI API error:', error);
    throw OpenAIError.fromError(error);
  }
}