# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank_ui.spec.ts >> UI Test Cases >> TC-LOGIN-02 Login with Invalid Password
- Location: tests\parabank_ui.spec.ts:60:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.error')
Expected substring: "The username and password could not be verified."
Received string:    "An internal error has occurred and has been logged."
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.error')
    9 × locator resolved to <p class="error">An internal error has occurred and has been logge…</p>
      - unexpected value "An internal error has occurred and has been logged."

```

```yaml
- paragraph: An internal error has occurred and has been logged.
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
  11 | 
  12 |     await this.page.fill('input[name="username"]', username);
  13 | 
  14 |     await this.page.fill('input[name="password"]', password);
  15 | 
  16 |     await this.page.click('input[value="Log In"]');
  17 |   }
  18 | 
  19 |   async verifyLoginSuccess() {
  20 | 
  21 |     logger.info('Validating successful login');
  22 | 
  23 |     await expect(
  24 |       this.page.getByText('Welcome')
  25 |     ).toBeVisible();
  26 |   }
  27 | 
  28 |   async loginWithInvalidPassword(username: string, password: string) {
  29 | 
  30 |   logger.info('Logging in with invalid password');
  31 | 
  32 |   await this.page.fill('input[name="username"]', username);
  33 | 
  34 |   await this.page.fill('input[name="password"]', password);
  35 | 
  36 |   await this.page.screenshot({
  37 |     path: 'screenshots/invalid-login.png'
  38 |   });
  39 | 
  40 |   await this.page.click('input[value="Log In"]');
  41 | }
  42 | 
  43 | async verifyInvalidLoginError() {
  44 | 
  45 |   logger.info('Validating invalid login error message');
  46 | 
  47 |   await expect(
  48 |     this.page.locator('.error')
> 49 |   ).toContainText('The username and password could not be verified.');
     |     ^ Error: expect(locator).toContainText(expected) failed
  50 | }
  51 | 
  52 | 
  53 | }
```