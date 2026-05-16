# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> Hybrid E2E Tests >> TC-E2E-01 UI Registration + API Verification
- Location: tests\e2e.spec.ts:15:7

# Error details

```
Error: page.waitForSelector: Target page, context or browser has been closed
Call log:
  - waiting for locator('#newAccountId') to be visible
    30 × locator resolved to hidden <a href="" id="newAccountId"></a>

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import registerData from '../test-data/registerData.json';
  4  | 
  5  | import { RegisterPage } from '../pages/RegisterPage';
  6  | 
  7  | import { LoginPage } from '../pages/LoginPage';
  8  | 
  9  | import { createAPIContext } from '../fixtures/apiFixture';
  10 | 
  11 | import { logger } from '../utils/logger';
  12 | 
  13 | test.describe('Hybrid E2E Tests', () => {
  14 | 
  15 |   test('TC-E2E-01 UI Registration + API Verification', async ({ page }) => {
  16 | 
  17 |     const registerPage = new RegisterPage(page);
  18 | 
  19 |     const loginPage = new LoginPage(page);
  20 | 
  21 |     const apiContext = await createAPIContext();
  22 | 
  23 |     // Step 1 - Register User
  24 | 
  25 |     await registerPage.navigateToRegisterPage();
  26 | 
  27 |     await registerPage.registerUser(registerData.validUser);
  28 | 
  29 |     await registerPage.verifyRegistrationSuccess();
  30 | 
  31 |     // Step 2 - Open New Account
  32 | 
  33 |     logger.info('Creating new savings account');
  34 | 
  35 |     const button = page.getByRole('link', { name: 'Open New Account' });
  36 | 
  37 |     await button.click();
  38 | 
  39 |     // Select SAVINGS account type
  40 | 
  41 |     await page.selectOption('#type', '1');
  42 | 
  43 |     // Click Open New Account button
  44 | 
  45 |     const button2 = page.locator("//input[@value='Open New Account']");
  46 | 
  47 |     await button2.click();
  48 | 
  49 |     // Wait for account creation
  50 | 
> 51 |     await page.waitForSelector('#newAccountId');
     |                ^ Error: page.waitForSelector: Target page, context or browser has been closed
  52 | 
  53 |     // Step 3 - Capture Account ID
  54 | 
  55 |     const newAccountId = (
  56 |       await page.locator('#newAccountId').textContent()
  57 |     )?.trim();
  58 | 
  59 |     logger.info(`New Savings Account Created: ${newAccountId}`);
  60 | 
  61 |     expect(newAccountId).not.toBeNull();
  62 | 
  63 |     // Step 4 - API Validation
  64 | 
  65 |     const response = await apiContext.get(
  66 |       `https://parabank.parasoft.com/parabank/services/bank/accounts/${newAccountId}`
  67 |     );
  68 | 
  69 |     logger.info('Accounts API Triggered');
  70 | 
  71 |     logger.info(`Response Status: ${response.status()}`);
  72 | 
  73 |     expect(response.status()).toBe(200);
  74 | 
  75 |     // API returns XML sometimes
  76 | 
  77 |     const responseBody = await response.text();
  78 | 
  79 |     logger.info(responseBody);
  80 | 
  81 |     // Verify Account ID exists
  82 | 
  83 |     expect(responseBody).toContain(
  84 |       `<id>${newAccountId}</id>`
  85 |     );
  86 | 
  87 |     // Verify account type
  88 | 
  89 |     expect(responseBody).toContain(
  90 |       '<type>SAVINGS</type>'
  91 |     );
  92 |   });
  93 | 
  94 | });
```