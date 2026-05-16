# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank_UI.spec.ts >> UI Test Cases >> TC-NEG-02 Register with Mismatched Passwords
- Location: tests\parabank_UI.spec.ts:20:7

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:9090/parabank/register.htm
Call log:
  - navigating to "http://localhost:9090/parabank/register.htm", waiting until "load"

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
> 32  |     await this.page.goto(
      |                     ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:9090/parabank/register.htm
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
  76  |     await this.page.fill(
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
```