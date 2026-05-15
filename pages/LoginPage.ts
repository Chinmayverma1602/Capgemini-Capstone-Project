    import { Page, expect } from '@playwright/test';
import { logger } from '../utils/logger';

export class LoginPage {

  constructor(private page: Page) {}

  async login(username: string, password: string) {

    logger.info('Performing login');

    await this.page.fill('input[name="username"]', username);

    await this.page.fill('input[name="password"]', password);

    await this.page.click('input[value="Log In"]');
  }

  async verifyLoginSuccess() {

    logger.info('Validating successful login');

    await expect(
      this.page.getByText('Welcome')
    ).toBeVisible();
  }

  async loginWithInvalidPassword(username: string, password: string) {

  logger.info('Logging in with invalid password');

  await this.page.fill('input[name="username"]', username);

  await this.page.fill('input[name="password"]', password);

  await this.page.screenshot({
    path: 'screenshots/invalid-login.png'
  });

  await this.page.click('input[value="Log In"]');
}

async verifyInvalidLoginError() {

  logger.info('Validating invalid login error message');

  await expect(
    this.page.locator('.error')
  ).toContainText('The username and password could not be verified.');
}


}