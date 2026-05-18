# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\parabank_UI.spec.ts >> UI Test Cases >> @ai @ui TC-AI-01 Register User with AI Generated Data
- Location: tests\UI\parabank_UI.spec.ts:60:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Welcome')
Expected: visible
Error: strict mode violation: locator('text=Welcome') resolved to 2 elements:
    1) <b>Welcome</b> aka getByText('Welcome', { exact: true })
    2) <h1 class="title">Welcome user1779086166573</h1> aka getByRole('heading', { name: 'Welcome user1779086166573' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Welcome')

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
        - paragraph [ref=e29]: Welcome David Brown
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
        - heading "Welcome user1779086166573" [level=1] [ref=e49]
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
  1   | // pages/RegisterPage.ts
  2   | 
  3   | import { Page, expect } from '@playwright/test';
  4   | import { logger } from '../utils/logger';
  5   | 
  6   | export class RegisterPage {
  7   |   private readonly BASE_URL = 'http://localhost:9090/parabank/register.htm';
  8   | 
  9   |   private readonly selectors = {
  10  |     firstName: 'input[id="customer.firstName"]',
  11  |     lastName: 'input[id="customer.lastName"]',
  12  |     address: 'input[id="customer.address.street"]',
  13  |     city: 'input[id="customer.address.city"]',
  14  |     state: 'input[id="customer.address.state"]',
  15  |     zipCode: 'input[id="customer.address.zipCode"]',
  16  |     phone: 'input[id="customer.phoneNumber"]',
  17  |     ssn: 'input[id="customer.ssn"]',
  18  |     username: 'input[id="customer.username"]',
  19  |     password: 'input[id="customer.password"]',
  20  |     confirmPassword: 'input[id="repeatedPassword"]',
  21  |     registerButton: 'input[value="Register"]',
  22  |     pageTitle: 'h1.title',
  23  |     welcomeText: 'text=Welcome',
  24  |   };
  25  | 
  26  |   private readonly mandatoryFieldErrors = [
  27  |     { field: 'firstName', message: 'First name is required.' },
  28  |     { field: 'lastName', message: 'Last name is required.' },
  29  |     { field: 'address', message: 'Address is required.' },
  30  |     { field: 'city', message: 'City is required.' },
  31  |     { field: 'state', message: 'State is required.' },
  32  |     { field: 'zipCode', message: 'Zip Code is required.' },
  33  |     { field: 'ssn', message: 'Social Security Number is required.' },
  34  |     { field: 'username', message: 'Username is required.' },
  35  |     { field: 'password', message: 'Password is required.' },
  36  |     { field: 'confirmPassword', message: 'Password confirmation is required.' },
  37  |   ];
  38  | 
  39  |   constructor(private page: Page) {}
  40  | 
  41  | 
  42  |   /**
  43  |    * Navigate to the ParaBank registration page
  44  |    */
  45  |   async navigateToRegisterPage(): Promise<void> {
  46  |     logger.info('Opening registration page');
  47  |     await this.page.goto(this.BASE_URL);
  48  |     await this.page.click('text=Register');
  49  |   }
  50  | 
  51  |   /**
  52  |    * Fill registration form with user data
  53  |    */
  54  |   private async fillRegistrationForm(userData: any, overrides?: { username?: string; confirmPassword?: string }): Promise<void> {
  55  |     logger.info('Filling registration form');
  56  |     const { username, confirmPassword } = overrides || {};
  57  | 
  58  |     await this.page.fill(this.selectors.firstName, userData.firstName);
  59  |     await this.page.fill(this.selectors.lastName, userData.lastName);
  60  |     await this.page.fill(this.selectors.address, userData.address);
  61  |     await this.page.fill(this.selectors.city, userData.city);
  62  |     await this.page.fill(this.selectors.state, userData.state);
  63  |     await this.page.fill(this.selectors.zipCode, userData.zipCode);
  64  |     await this.page.fill(this.selectors.phone, userData.phone);
  65  |     await this.page.fill(this.selectors.ssn, userData.ssn);
  66  |     await this.page.fill(this.selectors.username, username || userData.username);
  67  |     await this.page.fill(this.selectors.password, userData.password);
  68  |     await this.page.fill(this.selectors.confirmPassword, confirmPassword || userData.password);
  69  |   }
  70  | 
  71  |   /**
  72  |    * Register a new user with provided data
  73  |    */
  74  |   async registerUser(userData: any): Promise<void> {
  75  |     logger.info('Registering new user');
  76  |     await this.fillRegistrationForm(userData);
  77  |     await this.page.click(this.selectors.registerButton);
  78  |   }
  79  | 
  80  |   /**
  81  |    * Verify that registration was successful
  82  |    */
  83  |   async verifyRegistrationSuccess(): Promise<void> {
  84  |     logger.info('Verifying registration success');
> 85  |     await expect(this.page.locator(this.selectors.welcomeText)).toBeVisible();
      |                                                                 ^ Error: expect(locator).toBeVisible() failed
  86  |   }
  87  | 
  88  |   /**
  89  |    * Register with mismatched passwords and verify error
  90  |    */
  91  |   async registerWithMismatchedPassword(userData: any, wrongPassword: string): Promise<void> {
  92  |     logger.info('Registering with mismatched password');
  93  |     await this.fillRegistrationForm(userData, { confirmPassword: wrongPassword });
  94  |     await this.page.click(this.selectors.registerButton);
  95  |   }
  96  | 
  97  |   /**
  98  |    * Verify password mismatch error message
  99  |    */
  100 |   async verifyPasswordMismatchError(): Promise<void> {
  101 |     logger.info('Verifying password mismatch error');
  102 |     await expect(this.page.locator("//span[@id='repeatedPassword.errors']"))
  103 |       .toContainText('Passwords did not match.');
  104 |   }
  105 | 
  106 |   /**
  107 |    * Submit registration form with all blank fields
  108 |    */
  109 |   async registerWithBlankFields(): Promise<void> {
  110 |     logger.info('Submitting blank registration form');
  111 |     await this.page.click(this.selectors.registerButton);
  112 |   }
  113 | 
  114 |   /**
  115 |    * Verify all mandatory field validation errors
  116 |    */
  117 |   async verifyBlankFieldValidationErrors(): Promise<void> {
  118 |     logger.info('Verifying blank field errors');
  119 |     await this.verifyMandatoryFieldErrors();
  120 |   }
  121 | 
  122 |   /**
  123 |    * Register with special character username
  124 |    */
  125 |   async registerWithSpecialCharacterUsername(userData: any, specialUsername: string): Promise<void> {
  126 |     logger.info('Registering with special character username');
  127 |     await this.fillRegistrationForm(userData, { username: specialUsername });
  128 |     await this.page.click(this.selectors.registerButton);
  129 |   }
  130 | 
  131 |   /**
  132 |    * Verify special character username error
  133 |    */
  134 |   async verifySpecialCharacterUsernameError(): Promise<void> {
  135 |     logger.info('Verifying special character username error');
  136 |     await expect(this.page.locator("//span[@id='customer.username.errors']")).toBeVisible();
  137 |   }
  138 | 
  139 |   /**
  140 |    * Submit registration with only phone field filled (for mandatory field testing)
  141 |    */
  142 |   async registerWithMandatoryFieldsBlank(userData: any): Promise<void> {
  143 |     logger.info('Submitting form with mandatory fields blank');
  144 |     await this.page.fill(this.selectors.phone, userData.phone);
  145 |     await this.page.click(this.selectors.registerButton);
  146 |   }
  147 | 
  148 |   /**
  149 |    * Verify all mandatory field validation errors
  150 |    */
  151 |   async verifyMandatoryFieldValidationMessages(): Promise<void> {
  152 |     logger.info('Verifying mandatory field errors');
  153 |     await this.verifyMandatoryFieldErrors();
  154 |   }
  155 | 
  156 |   /**
  157 |    * Verify error message for a specific field
  158 |    */
  159 |   private async verifyMandatoryFieldErrors(): Promise<void> {
  160 |     for (const { field, message } of this.mandatoryFieldErrors) {
  161 |       const errorLocator = `//span[@id='customer.${field}.errors'], //span[@id='repeatedPassword.errors']`;
  162 |       await expect(this.page.locator(errorLocator).first()).toContainText(message);
  163 |     }
  164 |   }
  165 | }
```