# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank_ui.spec.ts >> UI Test Cases >> TC-NEG-06 Username with Special Characters
- Location: tests\parabank_ui.spec.ts:74:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://parabank.parasoft.com/parabank/register.htm", waiting until "load"

```

# Test source

```ts
  1   | import { Page, expect } from '@playwright/test';
  2   | import { logger } from '../utils/logger';
  3   | 
  4   | export class RegisterPage {
  5   | 
  6   |   constructor(private page: Page) {}
  7   | 
  8   |   async navigateToRegisterPage() {
  9   | 
  10  |     logger.info('Opening registration page');
  11  | 
> 12  |     await this.page.goto('https://parabank.parasoft.com/parabank/register.htm');
      |                     ^ Error: page.goto: Target page, context or browser has been closed
  13  | 
  14  |     await this.page.click('text=Register');
  15  |   }
  16  | 
  17  |   async registerUser(userData: any) {
  18  | 
  19  |     logger.info('Entering registration details');
  20  | 
  21  |     await this.page.fill('input[id="customer.firstName"]', userData.firstName);
  22  |     await this.page.fill('input[id="customer.lastName"]', userData.lastName);
  23  |     await this.page.fill('input[id="customer.address.street"]', userData.address);
  24  |     await this.page.fill('input[id="customer.address.city"]', userData.city);
  25  |     await this.page.fill('input[id="customer.address.state"]', userData.state);
  26  |     await this.page.fill('input[id="customer.address.zipCode"]', userData.zipCode);
  27  |     await this.page.fill('input[id="customer.phoneNumber"]', userData.phone);
  28  |     await this.page.fill('input[id="customer.ssn"]', userData.ssn);
  29  | 
  30  |     await this.page.fill('input[id="customer.username"]', userData.username);
  31  |     await this.page.fill('input[id="customer.password"]', userData.password);
  32  | 
  33  |     await this.page.fill('input[id="repeatedPassword"]', userData.password);
  34  | 
  35  | 
  36  |     await this.page.screenshot({
  37  |       path: 'screenshots/register-filled.png'
  38  |     });
  39  | 
  40  |     await this.page.click('input[value="Register"]');
  41  |   }
  42  | 
  43  | 
  44  |   async registerUserWithMismatchedPassword(userData: any, wrongPassword: string) {
  45  | 
  46  |   logger.info('Entering registration details with mismatched passwords');
  47  | 
  48  |   await this.page.fill('input[id="customer.firstName"]', userData.firstName);
  49  |   await this.page.fill('input[id="customer.lastName"]', userData.lastName);
  50  |   await this.page.fill('input[id="customer.address.street"]', userData.address);
  51  |   await this.page.fill('input[id="customer.address.city"]', userData.city);
  52  |   await this.page.fill('input[id="customer.address.state"]', userData.state);
  53  |   await this.page.fill('input[id="customer.address.zipCode"]', userData.zipCode);
  54  |   await this.page.fill('input[id="customer.phoneNumber"]', userData.phone);
  55  |   await this.page.fill('input[id="customer.ssn"]', userData.ssn);
  56  | 
  57  |   await this.page.fill('input[id="customer.username"]', userData.username);
  58  |   await this.page.fill('input[id="customer.password"]', userData.password);
  59  | 
  60  |   await this.page.fill('input[id="repeatedPassword"]', wrongPassword);
  61  | 
  62  |   await this.page.screenshot({
  63  |     path: 'screenshots/mismatched-password.png'
  64  |   });
  65  | 
  66  |   await this.page.click('input[value="Register"]');
  67  | }
  68  | 
  69  | async verifyPasswordMismatchError() {
  70  | 
  71  |   logger.info('Validating password mismatch error');
  72  | 
  73  |   await expect(
  74  |     this.page.locator("//span[@id='repeatedPassword.errors']")
  75  |   )
  76  | }
  77  | 
  78  | 
  79  | async registerWithBlankFields() {
  80  | 
  81  |   logger.info('Submitting registration form with blank fields');
  82  | 
  83  |   await this.page.screenshot({
  84  |     path: 'screenshots/blank-registration-form.png'
  85  |   });
  86  | 
  87  |   await this.page.click('input[value="Register"]');
  88  | }
  89  | 
  90  | async verifyBlankFieldValidationErrors() {
  91  | 
  92  |   logger.info('Validating blank field error messages');
  93  | 
  94  |   await expect(
  95  |     this.page.locator("//span[@id='customer.firstName.errors']")
  96  |   ).toContainText('First name is required.');
  97  | 
  98  |   await expect(
  99  |     this.page.locator("//span[@id='customer.lastName.errors']")
  100 |   ).toContainText('Last name is required.');
  101 | 
  102 |   await expect(
  103 |     this.page.locator("//span[@id='customer.address.street.errors']")
  104 |   ).toContainText('Address is required.');
  105 | 
  106 |   await expect(
  107 |     this.page.locator("//span[@id='customer.address.city.errors']")
  108 |   ).toContainText('City is required.');
  109 | 
  110 |   await expect(
  111 |     this.page.locator("//span[@id='customer.address.state.errors']")
  112 |   ).toContainText('State is required.');
```