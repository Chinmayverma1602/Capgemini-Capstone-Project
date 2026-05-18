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
  },

  loginPage: async ({ page }, use) => {
    logger.info('LoginPage instance created');
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';