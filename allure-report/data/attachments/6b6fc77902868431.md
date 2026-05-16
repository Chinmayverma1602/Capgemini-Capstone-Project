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
- generic [active] [ref=e1]:
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
        - paragraph [ref=e29]: Welcome n Doe
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
        - heading "Error!" [level=1] [ref=e51]
        - paragraph [ref=e52]: An internal error has occurred and has been logged.
  - generic [ref=e54]:
    - list [ref=e55]:
      - listitem [ref=e56]:
        - link "Home" [ref=e57] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e58]:
        - link "About Us" [ref=e59] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e60]:
        - link "Services" [ref=e61] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e62]:
        - link "Products" [ref=e63] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e64]:
        - link "Locations" [ref=e65] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e66]:
        - link "Forum" [ref=e67] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e68]:
        - link "Site Map" [ref=e69] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e70]:
        - link "Contact Us" [ref=e71] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e72]: © Parasoft. All rights reserved.
    - list [ref=e73]:
      - listitem [ref=e74]: "Visit us at:"
      - listitem [ref=e75]:
        - link "www.parasoft.com" [ref=e76] [cursor=pointer]:
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
  10 | import { logger } from '../utils/logger';
  11 | 
  12 | 
  13 | test.describe('Hybrid E2E Tests', () => {
  14 | 
  15 |   test('TC-E2E-01 UI Registration + API Verification', async ({ page }) => {
  16 | 
  17 |   const registerPage = new RegisterPage(page);
  18 | 
  19 |   const loginPage = new LoginPage(page);
  20 | 
  21 |   const apiContext = await createAPIContext();
  22 | 
  23 |   // Step 1 - Register User through UI
  24 | 
  25 |   await registerPage.navigateToRegisterPage();
  26 | 
  27 |   await registerPage.registerUser(registerData.validUser);
  28 | 
  29 |   await registerPage.verifyRegistrationSuccess();
  30 | 
  31 |   // Step 2 - Login with Registered User
  32 | 
  33 |   // await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  34 | 
  35 |   // await loginPage.login(
  36 |   //   registerData.validUser.username,
  37 |   //   registerData.validUser.password
  38 |   // );
  39 | 
  40 |   // await loginPage.verifyLoginSuccess();
  41 | 
  42 |   // Step 3 - Create Savings Account
  43 | 
  44 |   logger.info('Creating new savings account');
  45 | 
  46 |  const button =await page.getByRole('link', { name: 'Open New Account' });
  47 |  button.click();
  48 | 
  49 |   // Select SAVINGS account type
  50 |   await page.selectOption('#type', '1');
  51 | 
  52 |   // Click Open New Account button
  53 |   // await page.click('input[value="Open New Account"]');
  54 | const button2 = await page.locator("//input[@value='Open New Account']")
  55 | button2.click();
  56 |   // Step 4 - Capture newly created account ID
  57 | 
  58 |   const newAccountId = await page.locator('#newAccountId').textContent();
  59 | 
  60 |   logger.info(`New Savings Account Created: ${newAccountId}`);
  61 | 
  62 |   expect(newAccountId).not.toBeNull();
  63 | 
  64 |   // Step 5 - Call Accounts API
  65 | 
  66 |   const response = await apiContext.get(`https://parabank.parasoft.com/parabank/services/bank/accounts/${newAccountId}`);
  67 | 
  68 |   logger.info('Accounts API Triggered');
  69 | 
> 70 |   expect(response.status()).toBe(200);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  71 | 
  72 |   // Step 6 - Validate API Response
  73 | 
  74 |   const responseBody = await response.json();
  75 | 
  76 |   logger.info(JSON.stringify(responseBody));
  77 | 
  78 |   // Verify account exists
  79 |   expect(responseBody.id.toString()).toBe(newAccountId);
  80 | 
  81 |   // Verify account type is SAVINGS
  82 |   expect(responseBody.type).toBe('SAVINGS');
  83 |   });
  84 | });
```