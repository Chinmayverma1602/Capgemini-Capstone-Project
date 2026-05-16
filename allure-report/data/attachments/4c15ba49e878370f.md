# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank_UI.spec.ts >> UI Test Cases >> TC-LOGIN-01 Login with Valid Credentials
- Location: tests\parabank_UI.spec.ts:21:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[value="Log In"]')
    - locator resolved to <input type="submit" class="button" value="Log In"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC
    - generic [ref=e27]:
      - generic [ref=e28]:
        - heading "Customer Login" [level=2] [ref=e29]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - paragraph [ref=e32]: Username
            - textbox [ref=e34]
            - paragraph [ref=e35]: Password
            - textbox [ref=e37]
            - button "Log In" [ref=e39] [cursor=pointer]
          - paragraph [ref=e40]:
            - link "Forgot login info?" [ref=e41] [cursor=pointer]:
              - /url: lookup.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC
          - paragraph [ref=e42]:
            - link "Register" [ref=e43] [cursor=pointer]:
              - /url: register.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC
      - generic [ref=e44]:
        - list [ref=e46]:
          - listitem [ref=e47]: ATM Services
          - listitem [ref=e48]:
            - link "Withdraw Funds" [ref=e49] [cursor=pointer]:
              - /url: services/ParaBank;jsessionid=4B1793AFF0FC7282455DBB0725328DCC?wsdl
          - listitem [ref=e50]:
            - link "Transfer Funds" [ref=e51] [cursor=pointer]:
              - /url: services/ParaBank;jsessionid=4B1793AFF0FC7282455DBB0725328DCC?wsdl
          - listitem [ref=e52]:
            - link "Check Balances" [ref=e53] [cursor=pointer]:
              - /url: services/ParaBank;jsessionid=4B1793AFF0FC7282455DBB0725328DCC?wsdl
          - listitem [ref=e54]:
            - link "Make Deposits" [ref=e55] [cursor=pointer]:
              - /url: services/ParaBank;jsessionid=4B1793AFF0FC7282455DBB0725328DCC?wsdl
        - list [ref=e56]:
          - listitem [ref=e57]: Online Services
          - listitem [ref=e58]:
            - link "Bill Pay" [ref=e59] [cursor=pointer]:
              - /url: services/bank;jsessionid=4B1793AFF0FC7282455DBB0725328DCC?_wadl&_type=xml
          - listitem [ref=e60]:
            - link "Account History" [ref=e61] [cursor=pointer]:
              - /url: services/bank;jsessionid=4B1793AFF0FC7282455DBB0725328DCC?_wadl&_type=xml
          - listitem [ref=e62]:
            - link "Transfer Funds" [ref=e63] [cursor=pointer]:
              - /url: services/bank;jsessionid=4B1793AFF0FC7282455DBB0725328DCC?_wadl&_type=xml
        - paragraph [ref=e64]:
          - link "Read More" [ref=e65] [cursor=pointer]:
            - /url: services.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC
        - heading "Latest News" [level=4] [ref=e66]
        - list [ref=e67]:
          - listitem [ref=e68]: 05/16/2026
          - listitem [ref=e69]:
            - link "ParaBank Is Now Re-Opened" [ref=e70] [cursor=pointer]:
              - /url: news.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC#6
          - listitem [ref=e71]:
            - link "New! Online Bill Pay" [ref=e72] [cursor=pointer]:
              - /url: news.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC#5
          - listitem [ref=e73]:
            - link "New! Online Account Transfers" [ref=e74] [cursor=pointer]:
              - /url: news.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC#4
        - paragraph [ref=e75]:
          - link "Read More" [ref=e76] [cursor=pointer]:
            - /url: news.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC
  - generic [ref=e78]:
    - list [ref=e79]:
      - listitem [ref=e80]:
        - link "Home" [ref=e81] [cursor=pointer]:
          - /url: index.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC
        - text: "|"
      - listitem [ref=e82]:
        - link "About Us" [ref=e83] [cursor=pointer]:
          - /url: about.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC
        - text: "|"
      - listitem [ref=e84]:
        - link "Services" [ref=e85] [cursor=pointer]:
          - /url: services.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC
        - text: "|"
      - listitem [ref=e86]:
        - link "Products" [ref=e87] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e88]:
        - link "Locations" [ref=e89] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e90]:
        - link "Forum" [ref=e91] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e92]:
        - link "Site Map" [ref=e93] [cursor=pointer]:
          - /url: sitemap.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC
        - text: "|"
      - listitem [ref=e94]:
        - link "Contact Us" [ref=e95] [cursor=pointer]:
          - /url: contact.htm;jsessionid=4B1793AFF0FC7282455DBB0725328DCC
    - paragraph [ref=e96]: © Parasoft. All rights reserved.
    - list [ref=e97]:
      - listitem [ref=e98]: "Visit us at:"
      - listitem [ref=e99]:
        - link "www.parasoft.com" [ref=e100] [cursor=pointer]:
          - /url: http://www.parasoft.com/
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
  11 |       await this.page.goto('http://localhost:9090/parabank/index.htm');
  12 | 
  13 | 
  14 |     await this.page.fill('input[name="username"]', username);
  15 | 
  16 |     await this.page.fill('input[name="password"]', password);
  17 | 
> 18 |     await this.page.click('input[value="Log In"]');
     |                     ^ Error: page.click: Test timeout of 30000ms exceeded.
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
  33 |         await this.page.goto('http://localhost:9090/parabank/index.htm');
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
  53 |   ).toContainText('The username and password could not be verified.');
  54 | }
  55 | 
  56 | 
  57 | }
```