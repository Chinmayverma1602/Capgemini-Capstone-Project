# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank_Api.spec.ts >> API Test Cases >> TC-API-01 Get Accounts API Validation
- Location: tests\parabank_Api.spec.ts:9:7

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import { createAPIContext } from '../fixtures/apiFixture';
  4  | 
  5  | import { logger } from '../utils/logger';
  6  | 
  7  | test.describe('API Test Cases', () => {
  8  | 
  9  |   test('TC-API-01 Get Accounts API Validation', async () => {
  10 | 
  11 |     const apiContext = await createAPIContext();
  12 |     const accountId = 12345;
  13 | 
  14 |     const response = await apiContext.get(`/accounts/${accountId}`);
  15 | 
  16 |     logger.info(`GET Accounts API Triggered for account ${accountId}`);
  17 | 
> 18 |     expect(response.ok()).toBeTruthy();
     |                           ^ Error: expect(received).toBeTruthy()
  19 | 
  20 |     const responseBody = await response.json();
  21 |     logger.info(JSON.stringify(responseBody));
  22 | 
  23 |     expect(responseBody.id).toBe(accountId);
  24 |     await apiContext.dispose();
  25 |   });
  26 | 
  27 | 
  28 | 
  29 | });
```