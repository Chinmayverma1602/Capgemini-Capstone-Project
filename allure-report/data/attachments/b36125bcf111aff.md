# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank_Api.spec.ts >> API Test Cases >> TC-API-01 Get Accounts API Validation
- Location: tests\parabank_Api.spec.ts:9:7

# Error details

```
SyntaxError: Unexpected token '<', "<html>
<h"... is not valid JSON
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
  12 | 
  13 |     const response = await apiContext.get('/accounts/13344');
  14 | 
  15 |     logger.info('GET Accounts API Triggered');
  16 | 
> 17 |     const responseBody = await response.json();
     |                          ^ SyntaxError: Unexpected token '<', "<html>
  18 | 
  19 |     logger.info(JSON.stringify(responseBody));
  20 | 
  21 |     expect(response.status()).toBe(200);
  22 |   });
  23 | 
  24 |   test('TC-API-03 API Response Time Validation', async () => {
  25 | 
  26 |     const apiContext = await createAPIContext();
  27 | 
  28 |     const start = Date.now();
  29 | 
  30 |     const response = await apiContext.get('/accounts/13344');
  31 | 
  32 |     const end = Date.now();
  33 | 
  34 |     const responseTime = end - start;
  35 | 
  36 |     logger.info(`API Response Time: ${responseTime}`);
  37 | 
  38 |     expect(response.status()).toBe(200);
  39 | 
  40 |     expect(responseTime).toBeLessThan(3000);
  41 |   });
  42 | 
  43 | });
```