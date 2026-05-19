# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\parabank_UI.spec.ts >> UI Test Cases >> @ui @negative @regression TC-LOGIN-02 Login with Invalid Password
- Location: tests\UI\parabank_UI.spec.ts:37:7

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:9090/parabank/index.htm
Call log:
  - navigating to "http://localhost:9090/parabank/index.htm", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: localhost
      - text: refused to connect.
    - generic [ref=e10]:
      - paragraph [ref=e11]: "Try:"
      - list [ref=e12]:
        - listitem [ref=e13]: Checking the connection
        - listitem [ref=e14]:
          - link "Checking the proxy and the firewall" [ref=e15] [cursor=pointer]:
            - /url: "#buttons"
    - generic [ref=e16]: ERR_CONNECTION_REFUSED
  - generic [ref=e17]:
    - button "Reload" [ref=e19] [cursor=pointer]
    - button "Details" [ref=e20] [cursor=pointer]
```

# Test source

```ts
  1  | // pages/LoginPage.ts
  2  | 
  3  | import { Page, expect } from '@playwright/test';
  4  | import { logger } from '../utils/logger';
  5  | 
  6  | export class LoginPage {
  7  |   private readonly BASE_URL = 'http://localhost:9090/parabank/index.htm';
  8  |   
  9  |   private readonly selectors = {
  10 |     usernameInput: 'input[name="username"]',
  11 |     passwordInput: 'input[name="password"]',
  12 |     loginButton: 'input[value="Log In"]',
  13 |     errorMessage: '.error',
  14 |     welcomeMessage: 'text=Welcome',
  15 |   };
  16 | 
  17 |   constructor(private page: Page) {}
  18 | 
  19 |   /**
  20 |    * Navigate to the ParaBank login page
  21 |    */
  22 |   async navigateToLoginPage(): Promise<void> {
  23 |     logger.info('Opening login page');
> 24 |     await this.page.goto(this.BASE_URL);
     |                     ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:9090/parabank/index.htm
  25 |   }
  26 | 
  27 |   /**
  28 |    * Perform a login with provided credentials
  29 |    */
  30 |   async login(username: string, password: string): Promise<void> {
  31 |     logger.info(`Logging in with username: ${username}`);
  32 |     await this.navigateToLoginPage();
  33 |     await this.page.fill(this.selectors.usernameInput, username);
  34 |     await this.page.fill(this.selectors.passwordInput, password);
  35 |     await this.page.click(this.selectors.loginButton);
  36 |   }
  37 | 
  38 |   /**
  39 |    * Verify that login was successful
  40 |    */
  41 |   async verifyLoginSuccess(): Promise<void> {
  42 |     logger.info('Verifying login success');
  43 |     await expect(this.page.locator(this.selectors.welcomeMessage)).toBeVisible();
  44 |   }
  45 | 
  46 |   /**
  47 |    * Perform a login with invalid credentials (without verification)
  48 |    */
  49 |   async loginWithInvalidPassword(username: string, password: string): Promise<void> {
  50 |     logger.info('Attempting login with invalid credentials');
  51 |     await this.login(username, password);
  52 |   }
  53 | 
  54 |   /**
  55 |    * Verify that login error message is displayed
  56 |    */
  57 |   async verifyInvalidLoginError(): Promise<void> {
  58 |     logger.info('Verifying login error message');
  59 |     await expect(this.page.locator(this.selectors.errorMessage))
  60 |       .toContainText('The username and password could not be verified.');
  61 |   }
  62 | }
```