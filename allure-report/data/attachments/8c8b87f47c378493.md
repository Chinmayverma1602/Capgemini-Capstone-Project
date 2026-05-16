# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> Hybrid E2E Tests >> TC-E2E-01 UI Registration + API Verification
- Location: tests\e2e.spec.ts:9:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#newAccountId') to be visible
    54 × locator resolved to hidden <a href="" id="newAccountId"></a>

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - paragraph [ref=e29]: Welcome n D2oe
        - heading "Account Services" [level=2] [ref=e30]
        - list [ref=e31]:
          - listitem [ref=e32]:
            - link "Open New Account" [ref=e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=e34]:
            - link "Accounts Overview" [ref=e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=e36]:
            - link "Transfer Funds" [ref=e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=e38]:
            - link "Bill Pay" [ref=e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=e40]:
            - link "Find Transactions" [ref=e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=e42]:
            - link "Update Contact Info" [ref=e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=e44]:
            - link "Request Loan" [ref=e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=e46]:
            - link "Log Out" [ref=e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=e50]:
        - heading "Open New Account" [level=1] [ref=e51]
        - generic [ref=e52]:
          - paragraph [ref=e53]: What type of Account would you like to open?
          - combobox [ref=e54]:
            - option "CHECKING"
            - option "SAVINGS" [selected]
          - paragraph [ref=e55]: A minimum of $100.00 must be deposited into this account at time of opening. Please choose an existing account to transfer funds into the new account.
          - combobox [ref=e56]:
            - option "13788" [selected]
          - button "Open New Account" [active] [ref=e58] [cursor=pointer]
  - generic [ref=e60]:
    - list [ref=e61]:
      - listitem [ref=e62]:
        - link "Home" [ref=e63] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e64]:
        - link "About Us" [ref=e65] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e66]:
        - link "Services" [ref=e67] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e68]:
        - link "Products" [ref=e69] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e70]:
        - link "Locations" [ref=e71] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e72]:
        - link "Forum" [ref=e73] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e74]:
        - link "Site Map" [ref=e75] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e76]:
        - link "Contact Us" [ref=e77] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e78]: © Parasoft. All rights reserved.
    - list [ref=e79]:
      - listitem [ref=e80]: "Visit us at:"
      - listitem [ref=e81]:
        - link "www.parasoft.com" [ref=e82] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import registerData from '../test-data/registerData.json';
  4  | import { RegisterPage } from '../pages/RegisterPage';
  5  | import { logger } from '../utils/logger';
  6  | 
  7  | test.describe('Hybrid E2E Tests', () => {
  8  | 
  9  | test('TC-E2E-01 UI Registration + API Verification', async ({ page }) => {
  10 | 
  11 |     const registerPage = new RegisterPage(page);
  12 | 
  13 |     await registerPage.navigateToRegisterPage();
  14 | 
  15 |     await registerPage.registerUser(registerData.validUser);
  16 | 
  17 |     await registerPage.verifyRegistrationSuccess();
  18 | 
  19 |     logger.info('Creating Savings Account');
  20 | 
  21 |     // Open account page
  22 |     await page.getByRole('link', { name: 'Open New Account' }).click();
  23 | 
  24 |     // Select Savings account
  25 |     await page.selectOption('#type', '1');
  26 | 
  27 |     // Create account
  28 |     await page.locator("//input[@value='Open New Account']").click();
  29 | 
  30 |     // IMPORTANT: wait until account gets generated
> 31 |     await page.waitForSelector('#newAccountId');
     |                ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
  32 | 
  33 |     // Capture account id
  34 |     const newAccountId = (
  35 |       await page.locator('#newAccountId').innerText()
  36 |     ).trim();
  37 | 
  38 |     logger.info(`Generated Account ID: ${newAccountId}`);
  39 | 
  40 |     expect(newAccountId).not.toBe('');
  41 | 
  42 |     // small wait because backend may take a moment
  43 |     await page.waitForTimeout(3000);
  44 | 
  45 |     // API request using same browser session
  46 |     const response = await page.request.get(
  47 |       `http://localhost:9090/parabank/services/bank/accounts/${newAccountId}`,
  48 |       {
  49 |         headers: {
  50 |           Accept: 'application/xml'
  51 |         }
  52 |       }
  53 |     );
  54 | 
  55 |     logger.info(`API Status: ${response.status()}`);
  56 | 
  57 |     // Debug logging
  58 |     const body = await response.text();
  59 | 
  60 |     logger.info(body);
  61 | 
  62 |     expect(response.ok()).toBeTruthy();
  63 | 
  64 |     // verify account id
  65 |     expect(body).toContain(
  66 |       `<id>${newAccountId}</id>`
  67 |     );
  68 | 
  69 |     // verify savings account
  70 |     expect(body).toContain(
  71 |       '<type>SAVINGS</type>'
  72 |     );
  73 | 
  74 | });
  75 | 
  76 | });
```