# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> Hybrid E2E Tests >> TC-E2E-01 UI Registration + API Verification
- Location: tests\e2e.spec.ts:11:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
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
            - option "14121" [selected]
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
  5  | import { LoginPage } from '../pages/LoginPage';
  6  | import { logger } from '../utils/logger';
  7  | import { log } from 'console';
  8  | 
  9  | test.describe('Hybrid E2E Tests', () => {
  10 | 
  11 | test('TC-E2E-01 UI Registration + API Verification', async ({ page }) => {
  12 | 
  13 |     const registerPage = new RegisterPage(page);
  14 | 
  15 |     // const loginPage = new LoginPage(page);
  16 | 
  17 |     // Register user
  18 | 
  19 |     await registerPage.navigateToRegisterPage();
  20 | 
  21 |     await registerPage.registerUser(registerData.validUser);
  22 | 
  23 |     await registerPage.verifyRegistrationSuccess();
  24 | 
  25 |     logger.info('Creating new savings account');
  26 | 
  27 |     // Open account page
  28 |     await page.getByRole('link', { name: 'Open New Account' }).click();
  29 | 
  30 |     // Select savings
  31 |     await page.selectOption('#type', '1');
  32 | 
  33 |     // Create account
  34 |     await page.locator("//input[@value='Open New Account']").click();
  35 | 
  36 |     // Wait until account generated
  37 |     // await page.waitForSelector('#newAccountId');
  38 | 
  39 |     // Capture account id
  40 |     const newAccountId = (
  41 |       await page.locator('#newAccountId').textContent()
  42 |     )?.trim();
  43 | 
  44 |     logger.info(`New Account ID: ${newAccountId}`);
  45 | 
  46 |     expect(newAccountId).not.toBeNull();
  47 | 
  48 |     // IMPORTANT: use browser request context
  49 |     // This shares cookies/session from UI
  50 | console.log(newAccountId);
  51 | 
  52 |     const response = await page.request.get(
  53 |       `http://localhost:9090/parabank/services/bank/accounts/${newAccountId}`
  54 |     );
  55 | 
  56 |     logger.info(`Status = ${response.status()}`);
  57 | 
> 58 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  59 | 
  60 |     const responseBody = await response.text();
  61 | 
  62 |     logger.info(responseBody);
  63 | 
  64 |     expect(responseBody).toContain(
  65 |       `<id>${newAccountId}</id>`
  66 |     );
  67 | 
  68 |     expect(responseBody).toContain(
  69 |       '<type>SAVINGS</type>'
  70 |     );
  71 | 
  72 | });
  73 | 
  74 | });
```