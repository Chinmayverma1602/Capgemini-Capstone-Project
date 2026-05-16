# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> Hybrid E2E Tests >> TC-E2E-01 UI Registration + API Verification
- Location: tests\e2e.spec.ts:11:7

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
      - generic [ref=e48]:
        - heading "Welcome jeo" [level=1] [ref=e49]
        - paragraph [ref=e50]: Your account was created successfully. You are now logged in.
  - generic [ref=e52]:
    - list [ref=e53]:
      - listitem [ref=e54]:
        - link "Home" [ref=e55] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e56]:
        - link "About Us" [ref=e57] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e58]:
        - link "Services" [ref=e59] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e60]:
        - link "Products" [ref=e61] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e62]:
        - link "Locations" [ref=e63] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e64]:
        - link "Forum" [ref=e65] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e66]:
        - link "Site Map" [ref=e67] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e68]:
        - link "Contact Us" [ref=e69] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e70]: © Parasoft. All rights reserved.
    - list [ref=e71]:
      - listitem [ref=e72]: "Visit us at:"
      - listitem [ref=e73]:
        - link "www.parasoft.com" [ref=e74] [cursor=pointer]:
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
  7  | import { createAPIContext } from '../fixtures/apiFixture';
  8  | 
  9  | test.describe('Hybrid E2E Tests', () => {
  10 | 
  11 |   test('TC-E2E-01 UI Registration + API Verification', async ({ page }) => {
  12 | 
  13 |     const registerPage = new RegisterPage(page);
  14 | 
  15 |     await registerPage.navigateToRegisterPage();
  16 | 
  17 |     await registerPage.registerUser(registerData.validUser);
  18 | 
  19 |     await registerPage.verifyRegistrationSuccess();
  20 | 
  21 |     const apiContext = await createAPIContext();
  22 | 
  23 |     const response = await apiContext.get('/accounts/13344');
  24 | 
> 25 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  26 | 
  27 |     const body = await response.text();
  28 | 
  29 |     expect(body).toContain('13344');
  30 |   });
  31 | });
```