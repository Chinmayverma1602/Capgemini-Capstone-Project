import { APIRequestContext, request } from '@playwright/test';
import { logger } from '../utils/logger';

export async function createAPIContext(): Promise<APIRequestContext> {

  const apiContext = await request.newContext({
    baseURL: 'http://localhost:9090'
  });

  logger.info('API Context Created');

  return apiContext;
}