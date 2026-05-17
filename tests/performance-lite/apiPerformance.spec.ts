import { test, expect } from '@playwright/test';
import { PerformanceHelper } from '../../utils/performanceHelper';

test('Validate API Response Time',
  async ({ request }) => {

    const startTime = Date.now();

    const response = await request.get(
      'https://parabank.parasoft.com/parabank/services/bank/accounts/12345'
    );

    const endTime = Date.now();

    const responseTime = endTime - startTime;

    PerformanceHelper.validateApiResponseTime(
      responseTime
    );

    expect(response.status()).toBe(200);
});