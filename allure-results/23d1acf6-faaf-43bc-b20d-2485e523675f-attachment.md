# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\parabank_UI.spec.ts >> UI Test Cases >> @ui @negative @regression TC-NEG-02 Register with All Blank Fields
- Location: tests\UI\parabank_UI.spec.ts:31:7

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
  1   | 
  2   | import { Page, expect } from '@playwright/test';
  3   | import { logger } from '../utils/logger';
  4   | 
  5   | export class RegisterPage {
  6   | 
  7   |   constructor(private page: Page) {}
  8   | 
  9   | 
  10  |   private selectors = {
  11  |     firstName: 'input[id="customer.firstName"]',
  12  |     lastName: 'input[id="customer.lastName"]',
  13  |     address: 'input[id="customer.address.street"]',
  14  |     city: 'input[id="customer.address.city"]',
  15  |     state: 'input[id="customer.address.state"]',
  16  |     zipCode: 'input[id="customer.address.zipCode"]',
  17  |     phone: 'input[id="customer.phoneNumber"]',
  18  |     ssn: 'input[id="customer.ssn"]',
  19  |     username: 'input[id="customer.username"]',
  20  |     password: 'input[id="customer.password"]',
  21  |     confirmPassword: 'input[id="repeatedPassword"]',
  22  |     registerButton: 'input[value="Register"]',
  23  |     pageTitle: 'h1.title',
  24  |   };
  25  | 
  26  | 
  27  |   async navigateToRegisterPage() {
  28  | 
  29  |     logger.info('Opening registration page');
  30  | 
> 31  |     await this.page.goto(
      |                     ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:9090/parabank/register.htm
  32  |       'http://localhost:9090/parabank/register.htm'
  33  |     );
  34  | 
  35  |     await this.page.click('text=Register');
  36  |   }
  37  | 
  38  |   private async fillRegistrationForm(
  39  |     userData: any,
  40  |     options?: {
  41  |       username?: string;
  42  |       confirmPassword?: string;
  43  |       fillMandatoryOnly?: boolean;
  44  |     }
  45  |   ) {
  46  | 
  47  |     const {
  48  |       username,
  49  |       confirmPassword,
  50  |       fillMandatoryOnly = false,
  51  |     } = options || {};
  52  | 
  53  |     logger.info('Filling registration form');
  54  | 
  55  |     if (fillMandatoryOnly) {
  56  | 
  57  |       await this.page.fill(
  58  |         this.selectors.phone,
  59  |         userData.phone
  60  |       );
  61  | 
  62  |       return;
  63  |     }
  64  | 
  65  |     await this.page.fill(
  66  |       this.selectors.firstName,
  67  |       userData.firstName
  68  |     );
  69  | 
  70  |     await this.page.fill(
  71  |       this.selectors.lastName,
  72  |       userData.lastName
  73  |     );
  74  | 
  75  |     await this.page.fill(
  76  |       this.selectors.address,
  77  |       userData.address
  78  |     );
  79  | 
  80  |     await this.page.fill(
  81  |       this.selectors.city,
  82  |       userData.city
  83  |     );
  84  | 
  85  |     await this.page.fill(
  86  |       this.selectors.state,
  87  |       userData.state
  88  |     );
  89  | 
  90  |     await this.page.fill(
  91  |       this.selectors.zipCode,
  92  |       userData.zipCode
  93  |     );
  94  | 
  95  |     await this.page.fill(
  96  |       this.selectors.phone,
  97  |       userData.phone
  98  |     );
  99  | 
  100 |     await this.page.fill(
  101 |       this.selectors.ssn,
  102 |       userData.ssn
  103 |     );
  104 | 
  105 |     await this.page.fill(
  106 |       this.selectors.username,
  107 |       username || userData.username
  108 |     );
  109 | 
  110 |     await this.page.fill(
  111 |       this.selectors.password,
  112 |       userData.password
  113 |     );
  114 | 
  115 |     await this.page.fill(
  116 |       this.selectors.confirmPassword,
  117 |       confirmPassword || userData.password
  118 |     );
  119 |   }
  120 | 
  121 |   private async takeScreenshot(fileName: string) {
  122 | 
  123 |     await this.page.screenshot({
  124 |       path: `screenshots/${fileName}.png`,
  125 |     });
  126 | 
  127 |     logger.info(`Screenshot captured: ${fileName}.png`);
  128 |   }
  129 | 
  130 |   private async clickRegisterButton() {
  131 | 
```