import { test, expect } from '../../fixtures/uiFixtures';
import registerData from '../../test-data/registerData.json';

test.describe('UI Test Cases', () => {

  test('@ui,@smoke @regression TC-AC-UI-01 Create New User Account', async ({ registerPage }) => {
    await registerPage.navigateToRegisterPage();
    await registerPage.registerUser(registerData.validUser);
    await registerPage.verifyRegistrationSuccess();
  });

  test('@ui,@smoke @regression TC-LOGIN-01 Login with Valid Credentials', async ({ loginPage }) => {
    await loginPage.login(
      registerData.validUser.username,
      registerData.validUser.password
    );
    await loginPage.verifyLoginSuccess();
  });

  test('@ui ,@regression TC-NEG-02 Register with Mismatched Password', async ({ registerPage }) => {
    await registerPage.navigateToRegisterPage();
    await registerPage.registerUserWithMismatchedPassword(
      registerData.validUser,
      'WrongPass@123'
    );
    await registerPage.verifyPasswordMismatchError();
  });

  test('@ui @negative @regression TC-NEG-01 Register with All Blank Fields', async ({ registerPage }) => {
    await registerPage.navigateToRegisterPage();
    await registerPage.registerWithBlankFields();
    await registerPage.verifyBlankFieldValidationErrors();
  });

  test('@ui @negative @regression TC-LOGIN-02 Login with Invalid Password', async ({ loginPage }) => {
    await loginPage.loginWithInvalidPassword(
      registerData.validUser.username,
      registerData.invalidPasswordUser.password
    );
    await loginPage.verifyInvalidLoginError();
  });

  test('@ui @negative @regression TC-NEG-06 Username with Special Characters', async ({ registerPage }) => {
    await registerPage.navigateToRegisterPage();
    await registerPage.registerWithSpecialCharacterUsername(
      registerData.validUser,
      registerData.specialCharUser.username
    );
    await registerPage.verifySpecialCharacterUsernameError();
  });

  test('@ui @regression TC-AC-UI-02 Mandatory Field Validation', async ({ registerPage }) => {
    await registerPage.navigateToRegisterPage();
    await registerPage.registerWithMandatoryFieldsBlank(registerData.validUser);
    await registerPage.verifyMandatoryFieldValidationMessages();
  });
});