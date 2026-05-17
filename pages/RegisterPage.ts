// pages/RegisterPage.ts

import { Page, expect } from '@playwright/test';
import { logger } from '../utils/logger';

export class RegisterPage {

  constructor(private page: Page) {}


  private selectors = {
    firstName: 'input[id="customer.firstName"]',
    lastName: 'input[id="customer.lastName"]',
    address: 'input[id="customer.address.street"]',
    city: 'input[id="customer.address.city"]',
    state: 'input[id="customer.address.state"]',
    zipCode: 'input[id="customer.address.zipCode"]',
    phone: 'input[id="customer.phoneNumber"]',
    ssn: 'input[id="customer.ssn"]',
    username: 'input[id="customer.username"]',
    password: 'input[id="customer.password"]',
    confirmPassword: 'input[id="repeatedPassword"]',
    registerButton: 'input[value="Register"]',
    pageTitle: 'h1.title',
  };


  async navigateToRegisterPage() {

    logger.info('Opening registration page');

    await this.page.goto(
      'http://localhost:9090/parabank/register.htm'
    );

    await this.page.click('text=Register');
  }

  private async fillRegistrationForm(
    userData: any,
    options?: {
      username?: string;
      confirmPassword?: string;
      fillMandatoryOnly?: boolean;
    }
  ) {

    const {
      username,
      confirmPassword,
      fillMandatoryOnly = false,
    } = options || {};

    logger.info('Filling registration form');

    if (fillMandatoryOnly) {

      await this.page.fill(
        this.selectors.phone,
        userData.phone
      );

      return;
    }

    await this.page.fill(
      this.selectors.firstName,
      userData.firstName
    );

    await this.page.fill(
      this.selectors.lastName,
      userData.lastName
    );

    await this.page.fill(
      this.selectors.address,
      userData.address
    );

    await this.page.fill(
      this.selectors.city,
      userData.city
    );

    await this.page.fill(
      this.selectors.state,
      userData.state
    );

    await this.page.fill(
      this.selectors.zipCode,
      userData.zipCode
    );

    await this.page.fill(
      this.selectors.phone,
      userData.phone
    );

    await this.page.fill(
      this.selectors.ssn,
      userData.ssn
    );

    await this.page.fill(
      this.selectors.username,
      username || userData.username
    );

    await this.page.fill(
      this.selectors.password,
      userData.password
    );

    await this.page.fill(
      this.selectors.confirmPassword,
      confirmPassword || userData.password
    );
  }

  private async takeScreenshot(fileName: string) {

    await this.page.screenshot({
      path: `screenshots/${fileName}.png`,
    });

    logger.info(`Screenshot captured: ${fileName}.png`);
  }

  private async clickRegisterButton() {

    await this.page.click(this.selectors.registerButton);

    logger.info('Clicked Register button');
  }

  private async verifyErrorMessage(
    locator: string,
    expectedText: string
  ) {

    await expect(
      this.page.locator(locator)
    ).toContainText(expectedText);
  }


  async registerUser(userData: any) {

    logger.info('Registering new user');

    await this.fillRegistrationForm(userData);

    await this.takeScreenshot('register-filled');

    await this.clickRegisterButton();
  }

  async verifyRegistrationSuccess() {

    logger.info('Validating successful registration');

    await expect(
      this.page.locator(this.selectors.pageTitle)
    ).toContainText('Welcome');

  }


  async registerUserWithMismatchedPassword(
    userData: any,
    wrongPassword: string
  ) {

    logger.info(
      'Registering user with mismatched password'
    );

    await this.fillRegistrationForm(userData, {
      confirmPassword: wrongPassword,
    });

    await this.takeScreenshot(
      'mismatched-password'
    );

    await this.clickRegisterButton();
  }

  async verifyPasswordMismatchError() {

    logger.info(
      'Validating password mismatch error'
    );

    await this.verifyErrorMessage(
      "//span[@id='repeatedPassword.errors']",
      'Passwords did not match.'
    );
  }


  async registerWithBlankFields() {

    logger.info(
      'Submitting registration form with blank fields'
    );

    await this.takeScreenshot(
      'blank-registration-form'
    );

    await this.clickRegisterButton();
  }

  async verifyBlankFieldValidationErrors() {

    logger.info(
      'Validating blank field error messages'
    );

    await this.verifyMandatoryFieldErrors();
  }


  async registerWithSpecialCharacterUsername(
    userData: any,
    specialUsername: string
  ) {

    logger.info(
      'Registering with special character username'
    );

    await this.fillRegistrationForm(userData, {
      username: specialUsername,
    });

    await this.takeScreenshot(
      'special-character-username'
    );

    await this.clickRegisterButton();
  }

  async verifySpecialCharacterUsernameError() {

    logger.info(
      'Validating username format error'
    );

    await expect(
      this.page.locator(
        "//span[@id='customer.username.errors']"
      )
    ).toBeVisible();
  }
  

  async registerWithMandatoryFieldsBlank(
    userData: any
  ) {

    logger.info(
      'Submitting form with mandatory fields blank'
    );

    await this.fillRegistrationForm(userData, {
      fillMandatoryOnly: true,
    });

    await this.takeScreenshot(
      'mandatory-fields-blank'
    );

    await this.clickRegisterButton();
  }

  async verifyMandatoryFieldValidationMessages() {

    logger.info(
      'Validating mandatory field messages'
    );

    await this.verifyMandatoryFieldErrors();
  }


  private async verifyMandatoryFieldErrors() {

    const validationMessages = [
      {
        locator:
          "//span[@id='customer.firstName.errors']",
        message: 'First name is required.',
      },
      {
        locator:
          "//span[@id='customer.lastName.errors']",
        message: 'Last name is required.',
      },
      {
        locator:
          "//span[@id='customer.address.street.errors']",
        message: 'Address is required.',
      },
      {
        locator:
          "//span[@id='customer.address.city.errors']",
        message: 'City is required.',
      },
      {
        locator:
          "//span[@id='customer.address.state.errors']",
        message: 'State is required.',
      },
      {
        locator:
          "//span[@id='customer.address.zipCode.errors']",
        message: 'Zip Code is required.',
      },
      {
        locator:
          "//span[@id='customer.ssn.errors']",
        message:
          'Social Security Number is required.',
      },
      {
        locator:
          "//span[@id='customer.username.errors']",
        message: 'Username is required.',
      },
      {
        locator:
          "//span[@id='customer.password.errors']",
        message: 'Password is required.',
      },
      {
        locator:
          "//span[@id='repeatedPassword.errors']",
        message:
          'Password confirmation is required.',
      },
    ];

    for (const field of validationMessages) {

      await this.verifyErrorMessage(
        field.locator,
        field.message
      );
    }
  }
}