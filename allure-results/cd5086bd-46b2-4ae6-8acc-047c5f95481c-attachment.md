# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank_ui.spec.ts >> UI Test Cases >> TC-LOGIN-02 Login with Invalid Password
- Location: tests\parabank_ui.spec.ts:35:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=The username and password could not be verified')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=The username and password could not be verified')

```

```yaml
- link:
  - /url: admin.htm
  - img
- link "ParaBank":
  - /url: index.htm
  - img "ParaBank"
- paragraph: Experience the difference
- list:
  - listitem: Solutions
  - listitem:
    - link "About Us":
      - /url: about.htm
  - listitem:
    - link "Services":
      - /url: services.htm
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
  - listitem:
    - link "Admin Page":
      - /url: admin.htm
- list:
  - listitem:
    - link "home":
      - /url: index.htm
  - listitem:
    - link "about":
      - /url: about.htm
  - listitem:
    - link "contact":
      - /url: contact.htm
- paragraph: Welcome John Smith
- heading "Account Services" [level=2]
- list:
  - listitem:
    - link "Open New Account":
      - /url: openaccount.htm
  - listitem:
    - link "Accounts Overview":
      - /url: overview.htm
  - listitem:
    - link "Transfer Funds":
      - /url: transfer.htm
  - listitem:
    - link "Bill Pay":
      - /url: billpay.htm
  - listitem:
    - link "Find Transactions":
      - /url: findtrans.htm
  - listitem:
    - link "Update Contact Info":
      - /url: updateprofile.htm
  - listitem:
    - link "Request Loan":
      - /url: requestloan.htm
  - listitem:
    - link "Log Out":
      - /url: logout.htm
- heading "Accounts Overview" [level=1]
- table:
  - rowgroup:
    - row "Account Balance* Available Amount":
      - columnheader "Account"
      - columnheader "Balance*"
      - columnheader "Available Amount"
  - rowgroup:
    - row "12345 -$3790.00 $0.00":
      - cell "12345":
        - link "12345":
          - /url: activity.htm?id=12345
      - cell "-$3790.00"
      - cell "$0.00"
    - row "12456 $110.45 $110.45":
      - cell "12456":
        - link "12456":
          - /url: activity.htm?id=12456
      - cell "$110.45"
      - cell "$110.45"
    - row "12567 $2540.00 $2540.00":
      - cell "12567":
        - link "12567":
          - /url: activity.htm?id=12567
      - cell "$2540.00"
      - cell "$2540.00"
    - row "12678 -$100.00 $0.00":
      - cell "12678":
        - link "12678":
          - /url: activity.htm?id=12678
      - cell "-$100.00"
      - cell "$0.00"
    - row "12789 $100.00 $100.00":
      - cell "12789":
        - link "12789":
          - /url: activity.htm?id=12789
      - cell "$100.00"
      - cell "$100.00"
    - row "12900 $0.00 $0.00":
      - cell "12900":
        - link "12900":
          - /url: activity.htm?id=12900
      - cell "$0.00"
      - cell "$0.00"
    - row "13011 $100.00 $100.00":
      - cell "13011":
        - link "13011":
          - /url: activity.htm?id=13011
      - cell "$100.00"
      - cell "$100.00"
    - row "13122 $1100.00 $1100.00":
      - cell "13122":
        - link "13122":
          - /url: activity.htm?id=13122
      - cell "$1100.00"
      - cell "$1100.00"
    - row "13233 $100.00 $100.00":
      - cell "13233":
        - link "13233":
          - /url: activity.htm?id=13233
      - cell "$100.00"
      - cell "$100.00"
    - row "13344 $1231.10 $1231.10":
      - cell "13344":
        - link "13344":
          - /url: activity.htm?id=13344
      - cell "$1231.10"
      - cell "$1231.10"
    - row "14676 $100.00 $100.00":
      - cell "14676":
        - link "14676":
          - /url: activity.htm?id=14676
      - cell "$100.00"
      - cell "$100.00"
    - row "54321 $201.12 $201.12":
      - cell "54321":
        - link "54321":
          - /url: activity.htm?id=54321
      - cell "$201.12"
      - cell "$201.12"
    - row "Total $1692.67":
      - cell "Total"
      - cell "$1692.67"
      - cell
  - rowgroup:
    - row "*Balance includes deposits that may be subject to holds":
      - cell "*Balance includes deposits that may be subject to holds"
- list:
  - listitem:
    - link "Home":
      - /url: index.htm
    - text: "|"
  - listitem:
    - link "About Us":
      - /url: about.htm
    - text: "|"
  - listitem:
    - link "Services":
      - /url: services.htm
    - text: "|"
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
    - text: "|"
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
    - text: "|"
  - listitem:
    - link "Forum":
      - /url: http://forums.parasoft.com/
    - text: "|"
  - listitem:
    - link "Site Map":
      - /url: sitemap.htm
    - text: "|"
  - listitem:
    - link "Contact Us":
      - /url: contact.htm
- paragraph: © Parasoft. All rights reserved.
- list:
  - listitem: "Visit us at:"
  - listitem:
    - link "www.parasoft.com":
      - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import registerData from '../test-data/registerData.json';
  4  | 
  5  | import { RegisterPage } from '../pages/RegisterPage';
  6  | import { LoginPage } from '../pages/LoginPage';
  7  | 
  8  | test.describe('UI Test Cases', () => {
  9  | 
  10 |   test('TC-AC-UI-01 Create New User Account with Valid Data', async ({ page }) => {
  11 | 
  12 |     const registerPage = new RegisterPage(page);
  13 | 
  14 |     await registerPage.navigateToRegisterPage();
  15 | 
  16 |     await registerPage.registerUser(registerData.validUser);
  17 | 
  18 |     await registerPage.verifyRegistrationSuccess();
  19 |   });
  20 | 
  21 |   test('TC-LOGIN-01 Login with Valid Credentials', async ({ page }) => {
  22 | 
  23 |     const loginPage = new LoginPage(page);
  24 | 
  25 |     await page.goto('https://parabank.parasoft.com');
  26 | 
  27 |     await loginPage.login(
  28 |       registerData.validUser.username,
  29 |       registerData.validUser.password
  30 |     );
  31 | 
  32 |     await loginPage.verifyLoginSuccess();
  33 |   });
  34 | 
  35 |   test('TC-LOGIN-02 Login with Invalid Password', async ({ page }) => {
  36 | 
  37 |     const loginPage = new LoginPage(page);
  38 | 
  39 |     await page.goto('https://parabank.parasoft.com');
  40 | 
  41 |     await loginPage.login(
  42 |       registerData.validUser.username,
  43 |       registerData.invalidPasswordUser.password
  44 |     );
  45 | 
  46 |     await expect(
  47 |       page.locator('text=The username and password could not be verified')
> 48 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  49 |   });
  50 | 
  51 | });
```