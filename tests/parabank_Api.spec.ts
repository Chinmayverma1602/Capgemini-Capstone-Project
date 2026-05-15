import { test, expect } from '@playwright/test';

import { createAPIContext } from '../fixtures/apiFixture';

import { logger } from '../utils/logger';

test.describe('API Test Cases', () => {

  test('TC-API-01 Get Accounts API Validation', async () => {

    const apiContext = await createAPIContext();

    const response = await apiContext.get('/accounts/13344');

    logger.info('GET Accounts API Triggered');

    const responseBody = await response.json();

    logger.info(JSON.stringify(responseBody));

    expect(response.status()).toBe(200);
  });

  test('TC-API-03 API Response Time Validation', async () => {

    const apiContext = await createAPIContext();

    const start = Date.now();

    const response = await apiContext.get('/accounts/13344');

    const end = Date.now();

    const responseTime = end - start;

    logger.info(`API Response Time: ${responseTime}`);

    expect(response.status()).toBe(200);

    expect(responseTime).toBeLessThan(3000);
  });

});