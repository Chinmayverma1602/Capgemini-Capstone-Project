# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\parabank_UI.spec.ts >> UI Test Cases >> @ai @ui TC-AI-01 Register User with AI Generated Data
- Location: tests\UI\parabank_UI.spec.ts:60:8

# Error details

```
Error: page.fill: value: expected string, got undefined
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
            - textbox [ref=e34]
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
            - 'row "First Name: Alex" [ref=e50]':
              - cell "First Name:" [ref=e51]
              - cell "Alex" [ref=e52]:
                - textbox [ref=e53]: Alex
              - cell [ref=e54]
            - 'row "Last Name: Wilson" [ref=e55]':
              - cell "Last Name:" [ref=e56]
              - cell "Wilson" [ref=e57]:
                - textbox [active] [ref=e58]: Wilson
              - cell [ref=e59]
            - row "Address:" [ref=e60]:
              - cell "Address:" [ref=e61]
              - cell [ref=e62]:
                - textbox [ref=e63]
              - cell [ref=e64]
            - row "City:" [ref=e65]:
              - cell "City:" [ref=e66]
              - cell [ref=e67]:
                - textbox [ref=e68]
              - cell [ref=e69]
            - row "State:" [ref=e70]:
              - cell "State:" [ref=e71]
              - cell [ref=e72]:
                - textbox [ref=e73]
              - cell [ref=e74]
            - row "Zip Code:" [ref=e75]:
              - cell "Zip Code:" [ref=e76]
              - cell [ref=e77]:
                - textbox [ref=e78]
              - cell [ref=e79]
            - 'row "Phone #:" [ref=e80]':
              - 'cell "Phone #:" [ref=e81]'
              - cell [ref=e82]:
                - textbox [ref=e83]
              - cell [ref=e84]
            - row "SSN:" [ref=e85]:
              - cell "SSN:" [ref=e86]
              - cell [ref=e87]:
                - textbox [ref=e88]
              - cell [ref=e89]
            - row [ref=e90]:
              - cell [ref=e91]
            - row "Username:" [ref=e92]:
              - cell "Username:" [ref=e93]
              - cell [ref=e94]:
                - textbox [ref=e95]
              - cell [ref=e96]
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
  1   | // pages/RegisterPage.ts
  2   | 
  3   | import { Page, expect } from '@playwright/test';
  4   | import { logger } from '../utils/logger';
  5   | 
  6   | export class RegisterPage {
  7   | 
  8   |   constructor(private page: Page) {}
  9   | 
  10  | 
  11  |   private selectors = {
  12  |     firstName: 'input[id="customer.firstName"]',
  13  |     lastName: 'input[id="customer.lastName"]',
  14  |     address: 'input[id="customer.address.street"]',
  15  |     city: 'input[id="customer.address.city"]',
  16  |     state: 'input[id="customer.address.state"]',
  17  |     zipCode: 'input[id="customer.address.zipCode"]',
  18  |     phone: 'input[id="customer.phoneNumber"]',
  19  |     ssn: 'input[id="customer.ssn"]',
  20  |     username: 'input[id="customer.username"]',
  21  |     password: 'input[id="customer.password"]',
  22  |     confirmPassword: 'input[id="repeatedPassword"]',
  23  |     registerButton: 'input[value="Register"]',
  24  |     pageTitle: 'h1.title',
  25  |   };
  26  | 
  27  | 
  28  |   async navigateToRegisterPage() {
  29  | 
  30  |     logger.info('Opening registration page');
  31  | 
  32  |     await this.page.goto(
  33  |       'http://localhost:9090/parabank/register.htm'
  34  |     );
  35  | 
  36  |     await this.page.click('text=Register');
  37  |   }
  38  | 
  39  |   private async fillRegistrationForm(
  40  |     userData: any,
  41  |     options?: {
  42  |       username?: string;
  43  |       confirmPassword?: string;
  44  |       fillMandatoryOnly?: boolean;
  45  |     }
  46  |   ) {
  47  | 
  48  |     const {
  49  |       username,
  50  |       confirmPassword,
  51  |       fillMandatoryOnly = false,
  52  |     } = options || {};
  53  | 
  54  |     logger.info('Filling registration form');
  55  | 
  56  |     if (fillMandatoryOnly) {
  57  | 
  58  |       await this.page.fill(
  59  |         this.selectors.phone,
  60  |         userData.phone
  61  |       );
  62  | 
  63  |       return;
  64  |     }
  65  | 
  66  |     await this.page.fill(
  67  |       this.selectors.firstName,
  68  |       userData.firstName
  69  |     );
  70  | 
  71  |     await this.page.fill(
  72  |       this.selectors.lastName,
  73  |       userData.lastName
  74  |     );
  75  | 
> 76  |     await this.page.fill(
      |                     ^ Error: page.fill: value: expected string, got undefined
  77  |       this.selectors.address,
  78  |       userData.address
  79  |     );
  80  | 
  81  |     await this.page.fill(
  82  |       this.selectors.city,
  83  |       userData.city
  84  |     );
  85  | 
  86  |     await this.page.fill(
  87  |       this.selectors.state,
  88  |       userData.state
  89  |     );
  90  | 
  91  |     await this.page.fill(
  92  |       this.selectors.zipCode,
  93  |       userData.zipCode
  94  |     );
  95  | 
  96  |     await this.page.fill(
  97  |       this.selectors.phone,
  98  |       userData.phone
  99  |     );
  100 | 
  101 |     await this.page.fill(
  102 |       this.selectors.ssn,
  103 |       userData.ssn
  104 |     );
  105 | 
  106 |     await this.page.fill(
  107 |       this.selectors.username,
  108 |       username || userData.username
  109 |     );
  110 | 
  111 |     await this.page.fill(
  112 |       this.selectors.password,
  113 |       userData.password
  114 |     );
  115 | 
  116 |     await this.page.fill(
  117 |       this.selectors.confirmPassword,
  118 |       confirmPassword || userData.password
  119 |     );
  120 |   }
  121 | 
  122 |   private async takeScreenshot(fileName: string) {
  123 | 
  124 |     await this.page.screenshot({
  125 |       path: `screenshots/${fileName}.png`,
  126 |     });
  127 | 
  128 |     logger.info(`Screenshot captured: ${fileName}.png`);
  129 |   }
  130 | 
  131 |   private async clickRegisterButton() {
  132 | 
  133 |     await this.page.click(this.selectors.registerButton);
  134 | 
  135 |     logger.info('Clicked Register button');
  136 |   }
  137 | 
  138 |   private async verifyErrorMessage(
  139 |     locator: string,
  140 |     expectedText: string
  141 |   ) {
  142 | 
  143 |     await expect(
  144 |       this.page.locator(locator)
  145 |     ).toContainText(expectedText);
  146 |   }
  147 | 
  148 | 
  149 |   async registerUser(userData: any) {
  150 | 
  151 |     logger.info('Registering new user');
  152 | 
  153 |     await this.fillRegistrationForm(userData);
  154 | 
  155 |     await this.takeScreenshot('register-filled');
  156 | 
  157 |     await this.clickRegisterButton();
  158 |   }
  159 | 
  160 |   async verifyRegistrationSuccess() {
  161 | 
  162 |     logger.info('Validating successful registration');
  163 | 
  164 |     await expect(
  165 |       this.page.locator(this.selectors.pageTitle)
  166 |     ).toContainText('Signing up is easy!');
  167 | 
  168 |   }
  169 | 
  170 | 
  171 |   async registerUserWithMismatchedPassword(
  172 |     userData: any,
  173 |     wrongPassword: string
  174 |   ) {
  175 | 
  176 |     logger.info(
```