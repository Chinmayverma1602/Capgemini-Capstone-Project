import { test as base, Page } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { logger } from '../utils/logger';

type UiFixture = {
  registerPage: RegisterPage;
  loginPage: LoginPage;
};

export const test = base.extend<UiFixture>({
  registerPage: async ({ page }, use) => {
    logger.info('RegisterPage instance created');
    const registerPage = new RegisterPage(page);
    await use(registerPage);
    logger.info('RegisterPage instance disposed');
  },

  loginPage: async ({ page }, use) => {
    logger.info('LoginPage instance created');
    const loginPage = new LoginPage(page);
    await use(loginPage);
    logger.info('LoginPage instance disposed');
  },
});

export { expect } from '@playwright/test';