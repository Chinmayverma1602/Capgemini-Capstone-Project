// tests/hybridE2E.spec.ts

import { test, expect } from '../fixtures/apiFixture';

import registerData from '../test-data/registerData.json';
import { RegisterPage } from '../pages/RegisterPage';
import { logger } from '../utils/logger';

test.describe('Hybrid E2E Tests', () => {

  test('TC-E2E-01 Register user via UI and validate account using API',
    async ({ page, apiContext }) => {

      logger.info('Launching registration flow');

      const registerPage = new RegisterPage(page);

      // Navigate to registration page
      await registerPage.navigateToRegisterPage();

      // Register a new user
      logger.info('Registering a new user');

      await registerPage.registerUser(registerData.validUser);

      // Validate successful registration
      await registerPage.verifyRegistrationSuccess();

      logger.info('User registration completed successfully');

      // Navigate to Open New Account page
      logger.info('Navigating to Open New Account page');

      await page.getByRole('link', { name: 'Open New Account' }).click();

      // Wait for account type dropdown
      await page.waitForSelector('#type', {
        state: 'visible',
      });

      // Select SAVINGS account
      await page.selectOption('#type', '1');

      logger.info('Selected account type: SAVINGS');

      // Wait for from-account dropdown
      const fromAccountDropdown = page.locator('#fromAccountId');

      await fromAccountDropdown.waitFor({
        state: 'visible',
      });

      // Ensure dropdown options are loaded
      await page.waitForFunction(() => {
        const dropdown =
          document.querySelector('#fromAccountId') as HTMLSelectElement;

        return dropdown && dropdown.options.length > 0;
      });

      // Select first available account
      const fromAccountId = await fromAccountDropdown.evaluate(
        (dropdown: HTMLSelectElement) => {

          dropdown.selectedIndex = 0;

          return dropdown.value;
        }
      );

      logger.info(`Selected source account ID: ${fromAccountId}`);

      // Click Open New Account button
      const openAccountButton = page.locator(
        "//input[@value='Open New Account']"
      );

      await openAccountButton.click();

      logger.info('Submitting account creation request');

      // Capture newly created account ID
      const newAccountIdLocator = page.locator('#newAccountId');

      await expect(newAccountIdLocator).toBeVisible({
        timeout: 10_000,
      });

      const newAccountId = (
        await newAccountIdLocator.innerText()
      ).trim();

      logger.info(`New account created successfully: ${newAccountId}`);

      // Capture evidence screenshot
      await page.screenshot({
        path: 'screenshots/new-account-created.png',
      });

      logger.info('Screenshot captured successfully');

      // Validate account using API
      logger.info(
        `Calling API: GET /parabank/services/bank/accounts/${newAccountId}`
      );

      const response = await apiContext.get(
        `/parabank/services/bank/accounts/${newAccountId}`
      );

      expect(response.status()).toBe(200);

      const accountData = await response.json();

      logger.info(`API response: ${JSON.stringify(accountData)}`);

      // Validate account ID
      expect(String(accountData.id)).toBe(newAccountId);

      logger.info(
        `Account ID validation successful | UI="${newAccountId}" API="${accountData.id}"`
      );

      // Validate account type
      expect(accountData.type).toBe('SAVINGS');

      logger.info(
        `Account type validation successful | Expected="SAVINGS" API="${accountData.type}"`
      );

      logger.info('Hybrid E2E test completed successfully');
    }
  );

});