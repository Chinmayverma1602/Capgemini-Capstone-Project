import { APIRequestContext, request } from '@playwright/test';
import { logger } from '../utils/logger';

export async function createAPIContext(): Promise<APIRequestContext> {

  const apiContext = await request.newContext({
    baseURL: 'https://parabank.parasoft.com/parabank/api-docs/index.html'
  });

  logger.info('API Context Created');

  return apiContext;
}