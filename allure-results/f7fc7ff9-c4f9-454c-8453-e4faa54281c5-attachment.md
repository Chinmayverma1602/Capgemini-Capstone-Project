# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E\e2e.spec.ts >> Hybrid E2E Tests >> @e2e @regression TC-E2E-01 Register user via UI and validate API
- Location: tests\E2E\e2e.spec.ts:10:8

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Open New Account' }) to be visible

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
        - heading "Customer Login" [level=2] [ref=e29]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - paragraph [ref=e32]: Username
            - textbox [active] [ref=e34]
            - paragraph [ref=e35]: Password
            - textbox [ref=e37]
            - button "Log In" [ref=e39] [cursor=pointer]
          - paragraph [ref=e40]:
            - link "Forgot login info?" [ref=e41] [cursor=pointer]:
              - /url: lookup.htm
          - paragraph [ref=e42]:
            - link "Register" [ref=e43] [cursor=pointer]:
              - /url: register.htm
      - generic [ref=e44]:
        - heading "Signing up is easy!" [level=1] [ref=e45]
        - paragraph [ref=e46]: If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
        - table [ref=e48]:
          - rowgroup [ref=e49]:
            - 'row "First Name: Chinmay" [ref=e50]':
              - cell "First Name:" [ref=e51]
              - cell "Chinmay" [ref=e52]:
                - textbox [ref=e53]: Chinmay
              - cell [ref=e54]
            - 'row "Last Name: Verma" [ref=e55]':
              - cell "Last Name:" [ref=e56]
              - cell "Verma" [ref=e57]:
                - textbox [ref=e58]: Verma
              - cell [ref=e59]
            - 'row "Address: Hinoo" [ref=e60]':
              - cell "Address:" [ref=e61]
              - cell "Hinoo" [ref=e62]:
                - textbox [ref=e63]: Hinoo
              - cell [ref=e64]
            - 'row "City: Ranchi" [ref=e65]':
              - cell "City:" [ref=e66]
              - cell "Ranchi" [ref=e67]:
                - textbox [ref=e68]: Ranchi
              - cell [ref=e69]
            - 'row "State: Jharkhand" [ref=e70]':
              - cell "State:" [ref=e71]
              - cell "Jharkhand" [ref=e72]:
                - textbox [ref=e73]: Jharkhand
              - cell [ref=e74]
            - 'row "Zip Code: 834002" [ref=e75]':
              - cell "Zip Code:" [ref=e76]
              - cell "834002" [ref=e77]:
                - textbox [ref=e78]: "834002"
              - cell [ref=e79]
            - 'row "Phone #: 989897562" [ref=e80]':
              - 'cell "Phone #:" [ref=e81]'
              - cell "989897562" [ref=e82]:
                - textbox [ref=e83]: "989897562"
              - cell [ref=e84]
            - 'row "SSN: 89745244" [ref=e85]':
              - cell "SSN:" [ref=e86]
              - cell "89745244" [ref=e87]:
                - textbox [ref=e88]: "89745244"
              - cell [ref=e89]
            - row [ref=e90]:
              - cell [ref=e91]
            - 'row "Username: Mukul01 This username already exists." [ref=e92]':
              - cell "Username:" [ref=e93]
              - cell "Mukul01" [ref=e94]:
                - textbox [ref=e95]: Mukul01
              - cell "This username already exists." [ref=e96]
            - row "Password:" [ref=e97]:
              - cell "Password:" [ref=e98]
              - cell [ref=e99]:
                - textbox [ref=e100]
              - cell [ref=e101]
            - row "Confirm:" [ref=e102]:
              - cell "Confirm:" [ref=e103]
              - cell [ref=e104]:
                - textbox [ref=e105]
              - cell [ref=e106]
            - row "Register" [ref=e107]:
              - cell [ref=e108]
              - cell "Register" [ref=e109]:
                - button "Register" [ref=e110] [cursor=pointer]
  - generic [ref=e112]:
    - list [ref=e113]:
      - listitem [ref=e114]:
        - link "Home" [ref=e115] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e116]:
        - link "About Us" [ref=e117] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e118]:
        - link "Services" [ref=e119] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e120]:
        - link "Products" [ref=e121] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e122]:
        - link "Locations" [ref=e123] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e124]:
        - link "Forum" [ref=e125] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e126]:
        - link "Site Map" [ref=e127] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e128]:
        - link "Contact Us" [ref=e129] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e130]: © Parasoft. All rights reserved.
    - list [ref=e131]:
      - listitem [ref=e132]: "Visit us at:"
      - listitem [ref=e133]:
        - link "www.parasoft.com" [ref=e134] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1   | 
  2   | import { test, expect } from '../../fixtures/apiFixture';
  3   | 
  4   | import registerData from '../../test-data/registerData.json';
  5   | import { RegisterPage } from '../../pages/RegisterPage';
  6   | import { logger } from '../../utils/logger';
  7   | 
  8   | test.describe('Hybrid E2E Tests', () => {
  9   | 
  10  |   test.fail('@e2e @regression TC-E2E-01 Register user via UI and validate API',
  11  |     async ({ page, apiContext }) => {
  12  | 
  13  |       logger.info('Launching registration flow');
  14  | 
  15  |       const registerPage = new RegisterPage(page);
  16  | 
  17  |       await registerPage.navigateToRegisterPage();
  18  | 
  19  |       logger.info('Registering a new user');
  20  | 
  21  |       await registerPage.registerUser(registerData.validUser);
  22  | 
  23  |       await registerPage.verifyRegistrationSuccess();
  24  | 
  25  |       logger.info('User registration completed successfully');
  26  | 
  27  |       logger.info('Navigating to Open New Account page');
  28  | 
  29  |       const createacc = page.getByRole('link', { name: 'Open New Account' });
  30  | 
> 31  |       await createacc.waitFor({
      |                       ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  32  |         state: 'visible',
  33  |       });
  34  | 
  35  |       await createacc.click();
  36  | 
  37  |       await page.waitForSelector('#type', {
  38  |         state: 'visible',
  39  |       });
  40  | 
  41  |       await page.selectOption('#type', '1');
  42  | 
  43  |       logger.info('Selected account type: SAVINGS');
  44  | 
  45  |       const fromAccountDropdown = page.locator('#fromAccountId');
  46  | 
  47  |       await fromAccountDropdown.waitFor({
  48  |         state: 'visible',
  49  |       });
  50  | 
  51  |       await page.waitForFunction(() => {
  52  |         const dropdown =
  53  |           document.querySelector('#fromAccountId') as HTMLSelectElement;
  54  | 
  55  |         return dropdown && dropdown.options.length > 0;
  56  |       });
  57  | 
  58  |       const fromAccountId = await fromAccountDropdown.evaluate(
  59  |         (dropdown: HTMLSelectElement) => {
  60  | 
  61  |           dropdown.selectedIndex = 0;
  62  | 
  63  |           return dropdown.value;
  64  |         }
  65  |       );
  66  | 
  67  |       logger.info(`Selected source account ID: ${fromAccountId}`);
  68  | 
  69  |       const openAccountButton = page.locator(
  70  |         "//input[@value='Open New Account']"
  71  |       );
  72  | 
  73  |       await openAccountButton.click();
  74  | 
  75  |       logger.info('Submitting account creation request');
  76  | 
  77  |       const newAccountIdLocator = page.locator('#newAccountId');
  78  | 
  79  |       await expect(newAccountIdLocator).toBeVisible({
  80  |         timeout: 10_000,
  81  |       });
  82  | 
  83  |       const newAccountId = (
  84  |         await newAccountIdLocator.innerText()
  85  |       ).trim();
  86  | 
  87  |       logger.info(`New account created successfully: ${newAccountId}`);
  88  | 
  89  |       await page.screenshot({
  90  |         path: 'screenshots/new-account-created.png',
  91  |       });
  92  | 
  93  |       logger.info('Screenshot captured successfully');
  94  | 
  95  |       logger.info(
  96  |         `Calling API: GET /parabank/services/bank/accounts/${newAccountId}`
  97  |       );
  98  | 
  99  |       const response = await apiContext.get(
  100 |         `/parabank/services/bank/accounts/${newAccountId}`
  101 |       );
  102 | 
  103 |       expect(response.status()).toBe(200);
  104 | 
  105 |       const accountData = await response.json();
  106 | 
  107 |       logger.info(`API response: ${JSON.stringify(accountData)}`);
  108 | 
  109 |       expect(String(accountData.id)).toBe(newAccountId);
  110 | 
  111 |       logger.info(
  112 |         `Account ID validation successful | UI="${newAccountId}" API="${accountData.id}"`
  113 |       );
  114 | 
  115 |       expect(accountData.type).toBe('SAVINGS');
  116 | 
  117 |       logger.info(
  118 |         `Account type validation successful | Expected="SAVINGS" API="${accountData.type}"`
  119 |       );
  120 | 
  121 |       logger.info('Hybrid E2E test completed successfully');
  122 |     }
  123 |   );
  124 | 
  125 | });
```