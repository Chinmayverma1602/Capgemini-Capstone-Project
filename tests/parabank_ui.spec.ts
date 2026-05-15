import { test, expect } from '@playwright/test';

import registerData from '../test-data/registerData.json';

import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';

test.describe('UI Test Cases', () => {

  test('TC-AC-UI-01 Create New User Account with Valid Data', async ({ page }) => {

    const registerPage = new RegisterPage(page);

    await registerPage.navigateToRegisterPage();

    await registerPage.registerUser(registerData.validUser);

    await registerPage.verifyRegistrationSuccess();
  });

  test('TC-LOGIN-01 Login with Valid Credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    await loginPage.login(
      registerData.validUser.username,
      registerData.validUser.password
    );

    await loginPage.verifyLoginSuccess();
  });

test('TC-NEG-02 Register with Mismatched Passwords', async ({ page }) => {

  const registerPage = new RegisterPage(page);

  await registerPage.navigateToRegisterPage();

  await registerPage.registerUserWithMismatchedPassword(
    registerData.validUser,
    'WrongPass@123'
  );

  await registerPage.verifyPasswordMismatchError();
});

test('TC-NEG-01 Register with All Blank Fields', async ({ page }) => {

  const registerPage = new RegisterPage(page);

  await registerPage.navigateToRegisterPage();

  await registerPage.registerWithBlankFields();

  await registerPage.verifyBlankFieldValidationErrors();
});

test('TC-LOGIN-02 Login with Invalid Password', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await loginPage.loginWithInvalidPassword(
    registerData.validUser.username,
    registerData.invalidPasswordUser.password
  );

  await loginPage.verifyInvalidLoginError();
});

test('TC-NEG-06 Username with Special Characters', async ({ page }) => {

  const registerPage = new RegisterPage(page);

  await registerPage.navigateToRegisterPage();

  await registerPage.registerWithSpecialCharacterUsername(
    registerData.validUser,
    registerData.specialCharUser.username
  );

  await registerPage.verifySpecialCharacterUsernameError();
});

test('TC-AC-UI-02 Mandatory Field Validation', async ({ page }) => {

  const registerPage = new RegisterPage(page);

  await registerPage.navigateToRegisterPage();

  await registerPage.registerWithMandatoryFieldsBlank(
    registerData.validUser
  );

  await registerPage.verifyMandatoryFieldValidationMessages();
});
});