import { test, expect } from '../../fixtures/apiFixture';
import apiData from '../../test-data/api_Data.json';

import accountSchema from '../../schemas/accountSchema.json';

import { SchemaValidator }
from '../../utils/schemaValidator';

import { PerformanceHelper }
from '../../utils/performanceHelper';

test.describe('API Test Cases - Account Operations', () => {



  test('@api @smoke TC-API-01 Create SAVINGS account',
    async ({ apiContext }) => {

      const createResponse = await apiContext.post(
        `/parabank/services/bank/createAccount?customerId=${apiData.validCustomer.customerId}&newAccountType=${apiData.accountTypes.savings}&fromAccountId=${apiData.validCustomer.fromAccountId}`
      );

      expect(createResponse.status()).toBe(200);

      const createdAccount = await createResponse.json();

      const newAccountId = createdAccount.id;

      expect(createdAccount.type).toBe('SAVINGS');

      expect(createdAccount.customerId).toBe(
        apiData.validCustomer.customerId
      );

      expect(newAccountId).toBeDefined();

      const startTime = Date.now();

      const getResponse = await apiContext.get(
        `/parabank/services/bank/accounts/${newAccountId}`
      );

      const endTime = Date.now();

      const responseTime = endTime - startTime;

      PerformanceHelper.validateApiResponseTime(
        responseTime
      );

      expect(getResponse.status()).toBe(200);

      const fetchedAccount = await getResponse.json();

      SchemaValidator.validateSchema(
        accountSchema,
        fetchedAccount
      );

      expect(typeof fetchedAccount.balance)
        .toBe('number');

      expect(fetchedAccount.balance)
        .toBeGreaterThanOrEqual(0);

      expect(String(fetchedAccount.id))
        .toBe(String(newAccountId));

      expect(fetchedAccount.type)
        .toBe('SAVINGS');
  });



  test('@api @smoke TC-API-02 Create CHECKING account and response should reflect correct type',
    async ({ apiContext }) => {

      const startTime = Date.now();

      const response = await apiContext.post(
        `/parabank/services/bank/createAccount?customerId=${apiData.validCustomer.customerId}&newAccountType=${apiData.accountTypes.checking}&fromAccountId=${apiData.validCustomer.fromAccountId}`
      );

      const endTime = Date.now();

      const responseTime = endTime - startTime;

      PerformanceHelper.validateApiResponseTime(
        responseTime
      );

      expect(response.status()).toBe(200);

      const accountData = await response.json();

      SchemaValidator.validateSchema(
        accountSchema,
        accountData
      );

      expect(typeof accountData.balance)
        .toBe('number');

      expect(accountData.balance)
        .toBeGreaterThanOrEqual(0);

      expect(accountData.type)
        .toBe('CHECKING');

      expect(accountData.customerId)
        .toBe(apiData.validCustomer.customerId);

      expect(accountData.balance)
        .toBe(0);

      expect(accountData.id)
        .toBeDefined();
  });



  test('@api @negative @regression TC-API-03 GET non-existent account and should return an error response',
    async ({ apiContext }) => {

      const startTime = Date.now();

      const response = await apiContext.get(
        `/parabank/services/bank/accounts/${apiData.invalidData.fakeAccountId}`
      );

      const endTime = Date.now();

      const responseTime = endTime - startTime;

      PerformanceHelper.validateApiResponseTime(
        responseTime
      );

      const responseBody = await response.text();

      expect(response.status()).not.toBe(200);
  });



  test('@api @negative @regression TC-API-04 Create account with invalid customerId and should return an error response',
    async ({ apiContext }) => {

      const startTime = Date.now();

      const response = await apiContext.post(
        `/parabank/services/bank/createAccount?customerId=${apiData.invalidData.fakeCustomerId}&newAccountType=${apiData.accountTypes.savings}&fromAccountId=${apiData.validCustomer.fromAccountId}`
      );

      const endTime = Date.now();

      const responseTime = endTime - startTime;

      PerformanceHelper.validateApiResponseTime(
        responseTime
      );

      const responseBody = await response.text();

      expect(response.status()).not.toBe(200);
  });

});