# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> Hybrid E2E Tests >> TC-E2E-01 UI Registration + API Verification
- Location: tests\e2e.spec.ts:15:7

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
            - option "24444" [selected]
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
  51 |     // await page.waitForSelector('#newAccountId');
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
  66 |       `http://localhost:9090/parabank/services/bank/accounts/${newAccountId}`
  67 |     );
  68 | 
  69 |     logger.info('Accounts API Triggered');
  70 | 
  71 |     logger.info(`Response Status: ${response.status()}`);
  72 | 
> 73 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
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