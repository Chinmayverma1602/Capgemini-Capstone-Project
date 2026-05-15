# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank_ui.spec.ts >> UI Test Cases >> TC-AC-UI-01 Create New User Account with Valid Data
- Location: tests\parabank_ui.spec.ts:10:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h1.title')
Expected substring: "Welcome"
Received string:    "Signing up is easy!"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('h1.title')
    13 × locator resolved to <h1 class="title">Signing up is easy!</h1>
       - unexpected value "Signing up is easy!"

```

```yaml
- heading "Signing up is easy!" [level=1]
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | import { logger } from '../utils/logger';
  3  | 
  4  | export class RegisterPage {
  5  | 
  6  |   constructor(private page: Page) {}
  7  | 
  8  |   async navigateToRegisterPage() {
  9  | 
  10 |     logger.info('Opening registration page');
  11 | 
  12 |     await this.page.goto('https://parabank.parasoft.com');
  13 | 
  14 |     await this.page.click('text=Register');
  15 |   }
  16 | 
  17 |   async registerUser(userData: any) {
  18 | 
  19 |     logger.info('Entering registration details');
  20 | 
  21 |     await this.page.fill('input[id="customer.firstName"]', userData.firstName);
  22 |     await this.page.fill('input[id="customer.lastName"]', userData.lastName);
  23 |     await this.page.fill('input[id="customer.address.street"]', userData.address);
  24 |     await this.page.fill('input[id="customer.address.city"]', userData.city);
  25 |     await this.page.fill('input[id="customer.address.state"]', userData.state);
  26 |     await this.page.fill('input[id="customer.address.zipCode"]', userData.zipCode);
  27 |     await this.page.fill('input[id="customer.phoneNumber"]', userData.phone);
  28 |     await this.page.fill('input[id="customer.ssn"]', userData.ssn);
  29 | 
  30 |     await this.page.fill('input[id="customer.username"]', userData.username);
  31 |     await this.page.fill('input[id="customer.password"]', userData.password);
  32 | 
  33 |     await this.page.fill('input[id="repeatedPassword"]', userData.password);
  34 | 
  35 |     await this.page.screenshot({
  36 |       path: 'screenshots/register-filled.png'
  37 |     });
  38 | 
  39 |     await this.page.click('input[value="Register"]');
  40 |   }
  41 | 
  42 |   async verifyRegistrationSuccess() {
  43 | 
  44 |     logger.info('Validating successful registration');
  45 | 
  46 |     await expect(
  47 |       this.page.locator('h1.title')
> 48 |     ).toContainText('Welcome');
     |       ^ Error: expect(locator).toContainText(expected) failed
  49 |   }
  50 | }
```