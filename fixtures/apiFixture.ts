import { test as base, APIRequestContext, request } from '@playwright/test';
import { logger } from '../utils/logger';

type ApiFixture = {
  apiContext: APIRequestContext;
};

export const test = base.extend<ApiFixture>({
  apiContext: async ({}, use) => {

    const apiContext = await request.newContext({
      baseURL: 'http://localhost:9090',
      extraHTTPHeaders: {
        Accept: 'application/json',
      },
    });

    logger.info('API Context Created');

    await use(apiContext);

    await apiContext.dispose();

    logger.info('API Context Disposed');
  },
});

export { expect } from '@playwright/test';