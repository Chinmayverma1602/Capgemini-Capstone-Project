import { Page, expect } from '@playwright/test';
import { logger } from '../utils/logger';

export class RegisterPage {

  constructor(private page: Page) {}

  async navigateToRegisterPage() {

    logger.info('Opening registration page');

    await this.page.goto('https://parabank.parasoft.com/parabank/register.htm');

    await this.page.click('text=Register');
  }

  async registerUser(userData: any) {

    logger.info('Entering registration details');

    await this.page.fill('input[id="customer.firstName"]', userData.firstName);
    await this.page.fill('input[id="customer.lastName"]', userData.lastName);
    await this.page.fill('input[id="customer.address.street"]', userData.address);
    await this.page.fill('input[id="customer.address.city"]', userData.city);
    await this.page.fill('input[id="customer.address.state"]', userData.state);
    await this.page.fill('input[id="customer.address.zipCode"]', userData.zipCode);
    await this.page.fill('input[id="customer.phoneNumber"]', userData.phone);
    await this.page.fill('input[id="customer.ssn"]', userData.ssn);

    await this.page.fill('input[id="customer.username"]', userData.username);
    await this.page.fill('input[id="customer.password"]', userData.password);

    await this.page.fill('input[id="repeatedPassword"]', userData.password);


    await this.page.screenshot({
      path: 'screenshots/register-filled.png'
    });

    await this.page.click('input[value="Register"]');
  }


  async registerUserWithMismatchedPassword(userData: any, wrongPassword: string) {

  logger.info('Entering registration details with mismatched passwords');

  await this.page.fill('input[id="customer.firstName"]', userData.firstName);
  await this.page.fill('input[id="customer.lastName"]', userData.lastName);
  await this.page.fill('input[id="customer.address.street"]', userData.address);
  await this.page.fill('input[id="customer.address.city"]', userData.city);
  await this.page.fill('input[id="customer.address.state"]', userData.state);
  await this.page.fill('input[id="customer.address.zipCode"]', userData.zipCode);
  await this.page.fill('input[id="customer.phoneNumber"]', userData.phone);
  await this.page.fill('input[id="customer.ssn"]', userData.ssn);

  await this.page.fill('input[id="customer.username"]', userData.username);
  await this.page.fill('input[id="customer.password"]', userData.password);

  await this.page.fill('input[id="repeatedPassword"]', wrongPassword);

  await this.page.screenshot({
    path: 'screenshots/mismatched-password.png'
  });

  await this.page.click('input[value="Register"]');
}

async verifyPasswordMismatchError() {

  logger.info('Validating password mismatch error');

  await expect(
    this.page.locator("//span[@id='repeatedPassword.errors']")
  )
}


async registerWithBlankFields() {

  logger.info('Submitting registration form with blank fields');

  await this.page.screenshot({
    path: 'screenshots/blank-registration-form.png'
  });

  await this.page.click('input[value="Register"]');
}

async verifyBlankFieldValidationErrors() {

  logger.info('Validating blank field error messages');

  await expect(
    this.page.locator("//span[@id='customer.firstName.errors']")
  ).toContainText('First name is required.');

  await expect(
    this.page.locator("//span[@id='customer.lastName.errors']")
  ).toContainText('Last name is required.');

  await expect(
    this.page.locator("//span[@id='customer.address.street.errors']")
  ).toContainText('Address is required.');

  await expect(
    this.page.locator("//span[@id='customer.address.city.errors']")
  ).toContainText('City is required.');

  await expect(
    this.page.locator("//span[@id='customer.address.state.errors']")
  ).toContainText('State is required.');

  await expect(
    this.page.locator("//span[@id='customer.address.zipCode.errors']")
  ).toContainText('Zip Code is required.');

  await expect(
    this.page.locator("//span[@id='customer.ssn.errors']")
  ).toContainText('Social Security Number is required.');

  await expect(
    this.page.locator("//span[@id='customer.username.errors']")
  ).toContainText('Username is required.');

  await expect(
    this.page.locator("//span[@id='customer.password.errors']")
  ).toContainText('Password is required.');

  await expect(
    this.page.locator("//span[@id='repeatedPassword.errors']")
  ).toContainText('Password confirmation is required.');
}

  async verifyRegistrationSuccess() {

    logger.info('Validating successful registration');

    await expect(
      this.page.locator('h1.title')
    ).toContainText('Welcome');
  }

async registerWithSpecialCharacterUsername(userData: any, specialUsername: string) {

  logger.info('Entering special characters in username field');

  await this.page.fill('input[id="customer.firstName"]', userData.firstName);
  await this.page.fill('input[id="customer.lastName"]', userData.lastName);
  await this.page.fill('input[id="customer.address.street"]', userData.address);
  await this.page.fill('input[id="customer.address.city"]', userData.city);
  await this.page.fill('input[id="customer.address.state"]', userData.state);
  await this.page.fill('input[id="customer.address.zipCode"]', userData.zipCode);
  await this.page.fill('input[id="customer.phoneNumber"]', userData.phone);
  await this.page.fill('input[id="customer.ssn"]', userData.ssn);

  await this.page.fill('input[id="customer.username"]', specialUsername);

  await this.page.fill('input[id="customer.password"]', userData.password);

  await this.page.fill('input[id="repeatedPassword"]', userData.password);

  await this.page.screenshot({
    path: 'screenshots/special-character-username.png'
  });

  await this.page.click('input[value="Register"]');
}

async verifySpecialCharacterUsernameError() {

  logger.info('Validating username special character error');

  await expect(
    this.page.locator("//span[@id='customer.username.errors']"))
}
  
async registerWithMandatoryFieldsBlank(userData: any) {

  logger.info('Submitting form with mandatory fields blank');

  // Filling only optional/non-mandatory fields
  await this.page.fill('input[id="customer.phoneNumber"]', userData.phone);

  await this.page.screenshot({
    path: 'screenshots/mandatory-fields-blank.png'
  });

  await this.page.click('input[value="Register"]');
}

async verifyMandatoryFieldValidationMessages() {

  logger.info('Validating mandatory field validation messages');

  await expect(
    this.page.locator("//span[@id='customer.firstName.errors']")
  ).toContainText('First name is required.');

  await expect(
    this.page.locator("//span[@id='customer.lastName.errors']")
  ).toContainText('Last name is required.');

  await expect(
    this.page.locator("//span[@id='customer.address.street.errors']")
  ).toContainText('Address is required.');

  await expect(
    this.page.locator("//span[@id='customer.address.city.errors']")
  ).toContainText('City is required.');

  await expect(
    this.page.locator("//span[@id='customer.address.state.errors']")
  ).toContainText('State is required.');

  await expect(
    this.page.locator("//span[@id='customer.address.zipCode.errors']")
  ).toContainText('Zip Code is required.');

  await expect(
    this.page.locator("//span[@id='customer.ssn.errors']")
  ).toContainText('Social Security Number is required.');

  await expect(
    this.page.locator("//span[@id='customer.username.errors']")
  ).toContainText('Username is required.');

  await expect(
    this.page.locator("//span[@id='customer.password.errors']")
  ).toContainText('Password is required.');

  await expect(
    this.page.locator("//span[@id='repeatedPassword.errors']")
  ).toContainText('Password confirmation is required.');
}

 

 
}