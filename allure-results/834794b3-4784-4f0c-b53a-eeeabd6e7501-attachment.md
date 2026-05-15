# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank_ui.spec.ts >> UI Test Cases >> TC-LOGIN-02 Login with Invalid Password
- Location: tests\parabank_ui.spec.ts:35:7

# Error details

```
Error: page.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('input[name="username"]')

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
> 12 |     await this.page.fill('input[name="username"]', username);
     |                     ^ Error: page.fill: Target page, context or browser has been closed
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
  24 |       this.page.locator('text=Accounts Overview')
  25 |     ).toBeVisible();
  26 |   }
  27 | }
```