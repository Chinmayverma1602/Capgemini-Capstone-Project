# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> Hybrid E2E Tests >> TC-E2E-01 UI Registration + API Verification
- Location: tests\e2e.spec.ts:10:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: apiRequestContext.get: Target page, context or browser has been closed
Call log:
  - → GET https://parabank.parasoft.com/parabank/services/bank/accounts/29217
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:150.0.2) Gecko/20100101 Firefox/150.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - cookie: JSESSIONID=879B89759B8D481C0CFA1B9FF171156D

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import registerData from '../test-data/registerData.json';
  4  | import { RegisterPage } from '../pages/RegisterPage';
  5  | import { LoginPage } from '../pages/LoginPage';
  6  | import { logger } from '../utils/logger';
  7  | 
  8  | test.describe('Hybrid E2E Tests', () => {
  9  | 
  10 | test('TC-E2E-01 UI Registration + API Verification', async ({ page }) => {
  11 | 
  12 |     const registerPage = new RegisterPage(page);
  13 | 
  14 |     const loginPage = new LoginPage(page);
  15 | 
  16 |     // Register user
  17 | 
  18 |     await registerPage.navigateToRegisterPage();
  19 | 
  20 |     await registerPage.registerUser(registerData.validUser);
  21 | 
  22 |     await registerPage.verifyRegistrationSuccess();
  23 | 
  24 |     logger.info('Creating new savings account');
  25 | 
  26 |     // Open account page
  27 |     await page.getByRole('link', { name: 'Open New Account' }).click();
  28 | 
  29 |     // Select savings
  30 |     await page.selectOption('#type', '1');
  31 | 
  32 |     // Create account
  33 |     await page.locator("//input[@value='Open New Account']").click();
  34 | 
  35 |     // Wait until account generated
  36 |     await page.waitForSelector('#newAccountId');
  37 | 
  38 |     // Capture account id
  39 |     const newAccountId = (
  40 |       await page.locator('#newAccountId').textContent()
  41 |     )?.trim();
  42 | 
  43 |     logger.info(`New Account ID: ${newAccountId}`);
  44 | 
  45 |     expect(newAccountId).not.toBeNull();
  46 | 
  47 |     // IMPORTANT: use browser request context
  48 |     // This shares cookies/session from UI
  49 | 
> 50 |     const response = await page.request.get(
     |                                         ^ Error: apiRequestContext.get: Target page, context or browser has been closed
  51 |       `https://parabank.parasoft.com/parabank/services/bank/accounts/${newAccountId}`
  52 |     );
  53 | 
  54 |     logger.info(`Status = ${response.status()}`);
  55 | 
  56 |     expect(response.status()).toBe(200);
  57 | 
  58 |     const responseBody = await response.text();
  59 | 
  60 |     logger.info(responseBody);
  61 | 
  62 |     expect(responseBody).toContain(
  63 |       `<id>${newAccountId}</id>`
  64 |     );
  65 | 
  66 |     expect(responseBody).toContain(
  67 |       '<type>SAVINGS</type>'
  68 |     );
  69 | 
  70 | });
  71 | 
  72 | });
```