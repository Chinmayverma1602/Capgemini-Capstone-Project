import { test, expect } from '@playwright/test';

import registerData from '../test-data/registerData.json';

import { RegisterPage } from '../pages/RegisterPage';

import { createAPIContext } from '../fixtures/apiFixture';

test.describe('Hybrid E2E Tests', () => {

  test('TC-E2E-01 UI Registration + API Verification', async ({ page }) => {

    const registerPage = new RegisterPage(page);

    await registerPage.navigateToRegisterPage();

    await registerPage.registerUser(registerData.validUser);

    await registerPage.verifyRegistrationSuccess();

    const apiContext = await createAPIContext();

    const response = await apiContext.get('/accounts/13344');

    expect(response.status()).toBe(200);

    const body = await response.text();

    expect(body).toContain('13344');
  });
});