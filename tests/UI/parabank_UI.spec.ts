import { test, expect } from '../../fixtures/uiFixtures';
import { TestDataGenerator } from '../../utils/testDataGenerator';

import registerData from '../../test-data/registerData.json';

test.describe('UI Test Cases', () => {

  test.fail('@ui,@smoke @regression TC-AC-UI-01 Create New User Account with duplicate username', async ({ registerPage }) => {
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

  test('@ui ,@regression TC-NEG-01 Register with Mismatched Password', async ({ registerPage }) => {
    await registerPage.navigateToRegisterPage();
    await registerPage.registerUserWithMismatchedPassword(
      registerData.validUser,
      'WrongPass@123'
    );
    await registerPage.verifyPasswordMismatchError();
  });

  test('@ui @negative @regression TC-NEG-02 Register with All Blank Fields', async ({ registerPage }) => {
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

  test('@ui @negative @regression TC-NEG-03 Username with Special Characters', async ({ registerPage }) => {
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
 

  
  test('@ai @ui TC-AI-01 Register User with AI Generated Data',
async ({ registerPage }) => {

const aiUser = {

    firstName:
    TestDataGenerator.randomFirstName(),

    lastName:
    TestDataGenerator.randomLastName(),

    address:
    'New York Street',

    city:
    'New York',

    state:
    'NY',

    zipCode:
    '10001',

    phone:
    TestDataGenerator.randomPhone(),

    ssn:
    '123456789',

    username:
    TestDataGenerator.randomUsername(),

    password:
    TestDataGenerator.randomPassword()
};

await registerPage.navigateToRegisterPage();

await registerPage.registerUser(aiUser);

await registerPage.verifyRegistrationSuccess();

});
});