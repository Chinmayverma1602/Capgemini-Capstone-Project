import { test, expect, request } from '@playwright/test';

import registerData from '../test-data/registerData.json';
import { RegisterPage } from '../pages/RegisterPage';
import { logger } from '../utils/logger';

test.describe('Hybrid E2E Tests', () => {

  test('TC-E2E-01 UI Registration + API Verification', async ({ page }) => {

    const registerPage = new RegisterPage(page);

    await registerPage.navigateToRegisterPage();
    await registerPage.registerUser(registerData.validUser);
    await registerPage.verifyRegistrationSuccess();

    logger.info('Navigating to Open New Account page');
    await page.getByRole('link', { name: 'Open New Account' }).click();

    await page.waitForSelector('#type', { state: 'visible' });

    await page.selectOption('#type', '1');
    logger.info('Selected account type: SAVINGS (value=1)');

    // Pick the "from" account — select the first available option
    const fromAccountSelect = page.locator('#fromAccountId');
    await fromAccountSelect.waitFor({ state: 'visible' });

    await page.waitForFunction(() => {
      const sel = document.querySelector('#fromAccountId') as HTMLSelectElement;
      return sel && sel.options.length > 0;
    });

    const firstAccountId = await fromAccountSelect.evaluate((sel: HTMLSelectElement) => {
      sel.selectedIndex = 0;
      return sel.value;
    });
    logger.info(`Selected from-account ID: ${firstAccountId}`);

    const openAccBtn = page.locator("//input[@value='Open New Account']");
    await openAccBtn.click();

    const newAccountIdLocator = page.locator('#newAccountId');
    await expect(newAccountIdLocator).toBeVisible({ timeout: 10_000 });

    const newAccountIdText = await newAccountIdLocator.innerText();
    const newAccountId = newAccountIdText.trim();
    logger.info(`New account created via UI — ID: ${newAccountId}`);

    await page.screenshot({ path: 'screenshots/new-account-created.png' });

    logger.info(`Calling API: GET /parabank/services/bank/accounts/${newAccountId}`);

    const apiContext = await request.newContext({
      baseURL: 'http://localhost:9090',
      extraHTTPHeaders: {
        'Accept': 'application/json',
      },
    });

    const response = await apiContext.get(
      `/parabank/services/bank/accounts/${newAccountId}`
    );

    expect(response.status()).toBe(200);

    const accountData = await response.json();
    logger.info(`API response: ${JSON.stringify(accountData)}`);

   
    expect(String(accountData.id)).toBe(newAccountId);
    logger.info(`✅ Account ID matches: UI="${newAccountId}" API="${accountData.id}"`);

   
    expect(accountData.type).toBe('SAVINGS');
    logger.info(`✅ Account type matches: expected="SAVINGS" API="${accountData.type}"`);

    await apiContext.dispose();
  });

});