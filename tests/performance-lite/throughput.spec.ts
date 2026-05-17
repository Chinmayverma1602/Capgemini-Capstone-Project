import { test, expect } from '@playwright/test';

test('Repeated GET Accounts API Calls',
  async ({ request }) => {

    const totalRequests = 20;

    const promises = [];

    for (let i = 0; i < totalRequests; i++) {

      promises.push(
        request.get(
          'https://parabank.parasoft.com/parabank/services/bank/accounts/12345'
        )
      );
    }

    const startTime = Date.now();

    const responses = await Promise.all(promises);

    const endTime = Date.now();

    const totalTime = endTime - startTime;

    console.log(
      `Total Throughput Time:
       ${totalTime} ms`
    );

    for (const response of responses) {

      expect(response.status()).toBe(200);
    }
});