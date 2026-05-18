// pages/RegisterPage.ts

import { Page, expect } from '@playwright/test';
import { logger } from '../utils/logger';

export class RegisterPage {
  private readonly BASE_URL = 'http://localhost:9090/parabank/register.htm';

  private readonly selectors = {
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
    welcomeText: 'text=Welcome',
  };

  private readonly mandatoryFieldErrors = [
    { field: 'firstName', message: 'First name is required.' },
    { field: 'lastName', message: 'Last name is required.' },
    { field: 'address', message: 'Address is required.' },
    { field: 'city', message: 'City is required.' },
    { field: 'state', message: 'State is required.' },
    { field: 'zipCode', message: 'Zip Code is required.' },
    { field: 'ssn', message: 'Social Security Number is required.' },
    { field: 'username', message: 'Username is required.' },
    { field: 'password', message: 'Password is required.' },
    { field: 'confirmPassword', message: 'Password confirmation is required.' },
  ];

  constructor(private page: Page) {}


  /**
   * Navigate to the ParaBank registration page
   */
  async navigateToRegisterPage(): Promise<void> {
    logger.info('Opening registration page');
    await this.page.goto(this.BASE_URL);
    await this.page.click('text=Register');
  }

  /**
   * Fill registration form with user data
   */
  private async fillRegistrationForm(userData: any, overrides?: { username?: string; confirmPassword?: string }): Promise<void> {
    logger.info('Filling registration form');
    const { username, confirmPassword } = overrides || {};

    await this.page.fill(this.selectors.firstName, userData.firstName);
    await this.page.fill(this.selectors.lastName, userData.lastName);
    await this.page.fill(this.selectors.address, userData.address);
    await this.page.fill(this.selectors.city, userData.city);
    await this.page.fill(this.selectors.state, userData.state);
    await this.page.fill(this.selectors.zipCode, userData.zipCode);
    await this.page.fill(this.selectors.phone, userData.phone);
    await this.page.fill(this.selectors.ssn, userData.ssn);
    await this.page.fill(this.selectors.username, username || userData.username);
    await this.page.fill(this.selectors.password, userData.password);
    await this.page.fill(this.selectors.confirmPassword, confirmPassword || userData.password);
  }

  /**
   * Register a new user with provided data
   */
  async registerUser(userData: any): Promise<void> {
    logger.info('Registering new user');
    await this.fillRegistrationForm(userData);
    await this.page.click(this.selectors.registerButton);
  }

  /**
   * Verify that registration was successful
   */
  async verifyRegistrationSuccess(): Promise<void> {
    logger.info('Verifying registration success');
    await expect(this.page.locator(this.selectors.welcomeText)).toBeVisible();
  }

  /**
   * Register with mismatched passwords and verify error
   */
  async registerWithMismatchedPassword(userData: any, wrongPassword: string): Promise<void> {
    logger.info('Registering with mismatched password');
    await this.fillRegistrationForm(userData, { confirmPassword: wrongPassword });
    await this.page.click(this.selectors.registerButton);
  }

  /**
   * Verify password mismatch error message
   */
  async verifyPasswordMismatchError(): Promise<void> {
    logger.info('Verifying password mismatch error');
    await expect(this.page.locator("//span[@id='repeatedPassword.errors']"))
      .toContainText('Passwords did not match.');
  }

  /**
   * Submit registration form with all blank fields
   */
  async registerWithBlankFields(): Promise<void> {
    logger.info('Submitting blank registration form');
    await this.page.click(this.selectors.registerButton);
  }

  /**
   * Verify all mandatory field validation errors
   */
  async verifyBlankFieldValidationErrors(): Promise<void> {
    logger.info('Verifying blank field errors');
    await this.verifyMandatoryFieldErrors();
  }

  /**
   * Register with special character username
   */
  async registerWithSpecialCharacterUsername(userData: any, specialUsername: string): Promise<void> {
    logger.info('Registering with special character username');
    await this.fillRegistrationForm(userData, { username: specialUsername });
    await this.page.click(this.selectors.registerButton);
  }

  /**
   * Verify special character username error
   */
  async verifySpecialCharacterUsernameError(): Promise<void> {
    logger.info('Verifying special character username error');
    await expect(this.page.locator("//span[@id='customer.username.errors']")).toBeVisible();
  }

  /**
   * Submit registration with only phone field filled
   */
  async registerWithOnlyPhoneField(userData: any): Promise<void> {
    logger.info('Submitting form with only phone field');
    await this.page.fill(this.selectors.phone, userData.phone);
    await this.page.click(this.selectors.registerButton);
  }

  /**
   * Verify all mandatory field validation errors
   */
  async verifyMandatoryFieldValidationMessages(): Promise<void> {
    logger.info('Verifying mandatory field errors');
    await this.verifyMandatoryFieldErrors();
  }

  /**
   * Verify error message for a specific field
   */
  private async verifyMandatoryFieldErrors(): Promise<void> {
    for (const { field, message } of this.mandatoryFieldErrors) {
      const errorLocator = `//span[@id='customer.${field}.errors'], //span[@id='repeatedPassword.errors']`;
      await expect(this.page.locator(errorLocator).first()).toContainText(message);
    }
  }
}