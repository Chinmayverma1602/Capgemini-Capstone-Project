
import { test, expect } from '../../fixtures/apiFixture';

import registerData from '../../test-data/registerData.json';
import { RegisterPage } from '../../pages/RegisterPage';
import { logger } from '../../utils/logger';

test.describe('Hybrid E2E Tests', () => {

  test('@e2e @regression TC-E2E-01 Register user via UI and validate API',
    async ({ page, apiContext }) => {

      logger.info('Launching registration flow');

      const registerPage = new RegisterPage(page);

      await registerPage.navigateToRegisterPage();

      logger.info('Registering a new user');

      await registerPage.registerUser(registerData.validUser);

      await registerPage.verifyRegistrationSuccess();

      logger.info('User registration completed successfully');

      logger.info('Navigating to Open New Account page');

      const createacc = page.getByRole('link', { name: 'Open New Account' });

      await createacc.waitFor({
        state: 'visible',
      });

      await createacc.click();

      await page.waitForSelector('#type', {
        state: 'visible',
      });

      await page.selectOption('#type', '1');

      logger.info('Selected account type: SAVINGS');

      const fromAccountDropdown = page.locator('#fromAccountId');

      await fromAccountDropdown.waitFor({
        state: 'visible',
      });

      await page.waitForFunction(() => {
        const dropdown =
          document.querySelector('#fromAccountId') as HTMLSelectElement;

        return dropdown && dropdown.options.length > 0;
      });

      const fromAccountId = await fromAccountDropdown.evaluate(
        (dropdown: HTMLSelectElement) => {

          dropdown.selectedIndex = 0;

          return dropdown.value;
        }
      );

      logger.info(`Selected source account ID: ${fromAccountId}`);

      const openAccountButton = page.locator(
        "//input[@value='Open New Account']"
      );

      await openAccountButton.click();

      logger.info('Submitting account creation request');

      const newAccountIdLocator = page.locator('#newAccountId');

      await expect(newAccountIdLocator).toBeVisible({
        timeout: 10_000,
      });

      const newAccountId = (
        await newAccountIdLocator.innerText()
      ).trim();

      logger.info(`New account created successfully: ${newAccountId}`);

      await page.screenshot({
        path: 'screenshots/new-account-created.png',
      });

      logger.info('Screenshot captured successfully');

      logger.info(
        `Calling API: GET /parabank/services/bank/accounts/${newAccountId}`
      );

      const response = await apiContext.get(
        `/parabank/services/bank/accounts/${newAccountId}`
      );

      expect(response.status()).toBe(200);

      const accountData = await response.json();

      logger.info(`API response: ${JSON.stringify(accountData)}`);

      expect(String(accountData.id)).toBe(newAccountId);

      logger.info(
        `Account ID validation successful | UI="${newAccountId}" API="${accountData.id}"`
      );

      expect(accountData.type).toBe('SAVINGS');

      logger.info(
        `Account type validation successful | Expected="SAVINGS" API="${accountData.type}"`
      );

      logger.info('Hybrid E2E test completed successfully');
    }
  );

});