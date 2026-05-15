# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank_ui.spec.ts >> UI Test Cases >> TC-LOGIN-02 Login with Invalid Password
- Location: tests\parabank_ui.spec.ts:35:7

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://parabank.parasoft.com/index.htm", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import registerData from '../test-data/registerData.json';
  4  | 
  5  | import { RegisterPage } from '../pages/RegisterPage';
  6  | import { LoginPage } from '../pages/LoginPage';
  7  | 
  8  | test.describe('UI Test Cases', () => {
  9  | 
  10 |   test('TC-AC-UI-01 Create New User Account with Valid Data', async ({ page }) => {
  11 | 
  12 |     const registerPage = new RegisterPage(page);
  13 | 
  14 |     await registerPage.navigateToRegisterPage();
  15 | 
  16 |     await registerPage.registerUser(registerData.validUser);
  17 | 
  18 |     await registerPage.verifyRegistrationSuccess();
  19 |   });
  20 | 
  21 |   test('TC-LOGIN-01 Login with Valid Credentials', async ({ page }) => {
  22 | 
  23 |     const loginPage = new LoginPage(page);
  24 | 
  25 |     await page.goto('https://parabank.parasoft.com');
  26 | 
  27 |     await loginPage.login(
  28 |       registerData.validUser.username,
  29 |       registerData.validUser.password
  30 |     );
  31 | 
  32 |     await loginPage.verifyLoginSuccess();
  33 |   });
  34 | 
  35 |   test('TC-LOGIN-02 Login with Invalid Password', async ({ page }) => {
  36 | 
  37 |     const loginPage = new LoginPage(page);
  38 | 
> 39 |     await page.goto('/index.htm');
     |                ^ Error: page.goto: Target page, context or browser has been closed
  40 | 
  41 |     await loginPage.login(
  42 |       registerData.validUser.username,
  43 |       registerData.invalidPasswordUser.password
  44 |     );
  45 | 
  46 |     await expect(
  47 |       page.locator('text=The username and password could not be verified')
  48 |     ).toBeVisible();
  49 |   });
  50 | 
  51 | });
```