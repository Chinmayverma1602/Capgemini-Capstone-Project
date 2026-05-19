// pages/LoginPage.ts

import { Page, expect } from '@playwright/test';
import { logger } from '../utils/logger';

export class LoginPage {
  private readonly BASE_URL = 'https://parabank.parasoft.com/index.htm';
  
  private readonly selectors = {
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    loginButton: 'input[value="Log In"]',
    errorMessage: '.error',
    welcomeMessage: 'text=Welcome',
  };

  constructor(private page: Page) {}


  async navigateToLoginPage(): Promise<void> {
    logger.info('Opening login page');
    await this.page.goto(this.BASE_URL);
  }

  
  async login(username: string, password: string): Promise<void> {
    logger.info(`Logging in with username: ${username}`);
    await this.navigateToLoginPage();
    await this.page.fill(this.selectors.usernameInput, username);
    await this.page.fill(this.selectors.passwordInput, password);
    await this.page.click(this.selectors.loginButton);
  }

  
  async verifyLoginSuccess(): Promise<void> {
    logger.info('Verifying login success');
    await expect(this.page.locator(this.selectors.welcomeMessage)).toBeVisible();
  }

  
  async loginWithInvalidPassword(username: string, password: string): Promise<void> {
    logger.info('Attempting login with invalid credentials');
    await this.login(username, password);
  }

  
  async verifyInvalidLoginError(): Promise<void> {
    logger.info('Verifying login error message');
    await expect(this.page.locator(this.selectors.errorMessage))
      .toContainText('The username and password could not be verified.');
  }
}