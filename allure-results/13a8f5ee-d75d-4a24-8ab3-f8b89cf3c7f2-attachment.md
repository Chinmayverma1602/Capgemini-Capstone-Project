# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\parabank_UI.spec.ts >> UI Test Cases >> @ui,@smoke @regression TC-AC-UI-01 Create New User Account with old username
- Location: tests\UI\parabank_UI.spec.ts:8:8

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Welcome')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Welcome')

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
- heading "Customer Login" [level=2]
- paragraph: Username
- textbox
- paragraph: Password
- textbox
- button "Log In"
- paragraph:
  - link "Forgot login info?":
    - /url: lookup.htm
- paragraph:
  - link "Register":
    - /url: register.htm
- heading "Signing up is easy!" [level=1]
- paragraph: If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
- table:
  - rowgroup:
    - 'row "First Name: Chinmay"':
      - cell "First Name:"
      - cell "Chinmay":
        - textbox: Chinmay
      - cell
    - 'row "Last Name: Verma"':
      - cell "Last Name:"
      - cell "Verma":
        - textbox: Verma
      - cell
    - 'row "Address: Hinoo"':
      - cell "Address:"
      - cell "Hinoo":
        - textbox: Hinoo
      - cell
    - 'row "City: Ranchi"':
      - cell "City:"
      - cell "Ranchi":
        - textbox: Ranchi
      - cell
    - 'row "State: Jharkhand"':
      - cell "State:"
      - cell "Jharkhand":
        - textbox: Jharkhand
      - cell
    - 'row "Zip Code: 834002"':
      - cell "Zip Code:"
      - cell "834002":
        - textbox: "834002"
      - cell
    - 'row "Phone #: 989897562"':
      - 'cell "Phone #:"'
      - cell "989897562":
        - textbox: "989897562"
      - cell
    - 'row "SSN: 89745244"':
      - cell "SSN:"
      - cell "89745244":
        - textbox: "89745244"
      - cell
    - row:
      - cell
    - 'row "Username: Mukul01 This username already exists."':
      - cell "Username:"
      - cell "Mukul01":
        - textbox: Mukul01
      - cell "This username already exists."
    - row "Password:":
      - cell "Password:"
      - cell:
        - textbox
      - cell
    - row "Confirm:":
      - cell "Confirm:"
      - cell:
        - textbox
      - cell
    - row "Register":
      - cell
      - cell "Register":
        - button "Register"
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