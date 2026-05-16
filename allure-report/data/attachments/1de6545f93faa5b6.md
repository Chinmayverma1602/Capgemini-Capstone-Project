# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank_ui.spec.ts >> UI Test Cases >> TC-LOGIN-02 Login with Invalid Password
- Location: tests\parabank_ui.spec.ts:59:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.error')
Expected substring: "An internal error has occurred and has been logged."
Received string:    "The username and password could not be verified."
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.error')
    12 × locator resolved to <p class="error">The username and password could not be verified.</p>
       - unexpected value "The username and password could not be verified."

```

```yaml
- paragraph: The username and password could not be verified.
```

# Test source

```ts
  1  |     import { Page, expect } from '@playwright/test';
  2  | import { logger } from '../utils/logger';
  3  | 
  4  | export class LoginPage {
  5  | 
  6  |   constructor(private page: Page) {}
  7  | 
  8  |   async login(username: string, password: string) {
  9  | 
  10 |     logger.info('Performing login');
  11 |       await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  12 | 
  13 | 
  14 |     await this.page.fill('input[name="username"]', username);
  15 | 
  16 |     await this.page.fill('input[name="password"]', password);
  17 | 
  18 |     await this.page.click('input[value="Log In"]');
  19 |   }
  20 | 
  21 |   async verifyLoginSuccess() {
  22 | 
  23 |     logger.info('Validating successful login');
  24 | 
  25 |     await expect(
  26 |       this.page.getByText('Welcome')
  27 |     )
  28 |   }
  29 | 
  30 |   async loginWithInvalidPassword(username: string, password: string) {
  31 | 
  32 |   logger.info('Logging in with invalid password');
  33 |         await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  34 | 
  35 | 
  36 |   await this.page.fill('input[name="username"]', username);
  37 | 
  38 |   await this.page.fill('input[name="password"]', password);
  39 | 
  40 |   await this.page.screenshot({
  41 |     path: 'screenshots/invalid-login.png'
  42 |   });
  43 | 
  44 |   await this.page.click('input[value="Log In"]');
  45 | }
  46 | 
  47 | async verifyInvalidLoginError() {
  48 | 
  49 |   logger.info('Validating invalid login error message');
  50 | 
  51 |   await expect(
  52 |     this.page.locator('.error')
> 53 |   ).toContainText('An internal error has occurred and has been logged.');
     |     ^ Error: expect(locator).toContainText(expected) failed
  54 | }
  55 | 
  56 | 
  57 | }
```