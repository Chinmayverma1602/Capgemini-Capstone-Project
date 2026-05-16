// pages/LoginPage.ts

import { Page, expect } from '@playwright/test';
import { logger } from '../utils/logger';

export class LoginPage {

  constructor(private page: Page) {}


  private selectors = {
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    loginButton: 'input[value="Log In"]',
    errorMessage: '.error',
  };


  private async navigateToLoginPage() {

    logger.info('Opening login page');

    await this.page.goto(
      'http://localhost:9090/parabank/index.htm'
    );
  }

  private async enterCredentials(
    username: string,
    password: string
  ) {

    logger.info('Entering login credentials');

    await this.page.fill(
      this.selectors.usernameInput,
      username
    );

    await this.page.fill(
      this.selectors.passwordInput,
      password
    );
  }

  private async clickLoginButton() {

    logger.info('Clicking login button');

    await this.page.click(
      this.selectors.loginButton
    );
  }

  private async captureScreenshot(
    fileName: string
  ) {

    await this.page.screenshot({
      path: `screenshots/${fileName}.png`,
    });

    logger.info(
      `Screenshot captured: ${fileName}.png`
    );
  }


  async login(
    username: string,
    password: string
  ) {

    logger.info('Starting valid login flow');

    await this.navigateToLoginPage();

    await this.enterCredentials(
      username,
      password
    );

    await this.clickLoginButton();
  }

  async verifyLoginSuccess() {

    logger.info(
      'Validating successful login'
    );

    await expect(
      this.page.getByText('Welcome')
    );

    logger.info(
      'User logged in successfully'
    );
  }


  async loginWithInvalidPassword(
    username: string,
    password: string
  ) {

    logger.info(
      'Starting invalid login scenario'
    );

    await this.navigateToLoginPage();

    await this.enterCredentials(
      username,
      password
    );

    await this.captureScreenshot(
      'invalid-login'
    );

    await this.clickLoginButton();
  }

  async verifyInvalidLoginError() {

    logger.info(
      'Validating invalid login error message'
    );

    await expect(
      this.page.locator(
        this.selectors.errorMessage
      )
    ).toContainText(
      'The username and password could not be verified.'
    );

    logger.info(
      'Invalid login error message displayed correctly'
    );
  }
}