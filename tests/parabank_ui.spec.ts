import { test, expect } from '../fixtures/uiFixtures';
import registerData from '../test-data/registerData.json';

test.describe('UI Test Cases', () => {

  test.fail('TC-AC-UI-01 Create New User Account with Valid Data', async ({ registerPage }) => {
    await registerPage.navigateToRegisterPage();
    await registerPage.registerUser(registerData.validUser);
    await registerPage.verifyRegistrationSuccess();
  });

  test('TC-LOGIN-01 Login with Valid Credentials', async ({ loginPage }) => {
    await loginPage.login(
      registerData.validUser.username,
      registerData.validUser.password
    );
    await loginPage.verifyLoginSuccess();
  });

  test('TC-NEG-02 Register with Mismatched Passwords', async ({ registerPage }) => {
    await registerPage.navigateToRegisterPage();
    await registerPage.registerUserWithMismatchedPassword(
      registerData.validUser,
      'WrongPass@123'
    );
    await registerPage.verifyPasswordMismatchError();
  });

  test('TC-NEG-01 Register with All Blank Fields', async ({ registerPage }) => {
    await registerPage.navigateToRegisterPage();
    await registerPage.registerWithBlankFields();
    await registerPage.verifyBlankFieldValidationErrors();
  });

  test('TC-LOGIN-02 Login with Invalid Password', async ({ loginPage }) => {
    await loginPage.loginWithInvalidPassword(
      registerData.validUser.username,
      registerData.invalidPasswordUser.password
    );
    await loginPage.verifyInvalidLoginError();
  });

  test('TC-NEG-06 Username with Special Characters', async ({ registerPage }) => {
    await registerPage.navigateToRegisterPage();
    await registerPage.registerWithSpecialCharacterUsername(
      registerData.validUser,
      registerData.specialCharUser.username
    );
    await registerPage.verifySpecialCharacterUsernameError();
  });

  test('TC-AC-UI-02 Mandatory Field Validation', async ({ registerPage }) => {
    await registerPage.navigateToRegisterPage();
    await registerPage.registerWithMandatoryFieldsBlank(registerData.validUser);
    await registerPage.verifyMandatoryFieldValidationMessages();
  });
});