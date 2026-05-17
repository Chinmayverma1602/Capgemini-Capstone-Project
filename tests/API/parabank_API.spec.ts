import { test, expect } from '../../fixtures/apiFixture';
import { logger } from '../../utils/logger';
import apiData from '../../test-data/api_Data.json';

import accountSchema from '../../schemas/accountSchema.json';

import { SchemaValidator }
from '../../utils/schemaValidator';

import { PerformanceHelper }
from '../../utils/performanceHelper';

test.describe('API Test Cases - Account Operations', () => {

  // =========================================================
  // TC-API-01
  // Create SAVINGS Account
  // =========================================================

  test('@api @smoke TC-API-01 Create SAVINGS account',
    async ({ apiContext }) => {

      logger.info(
        `Calling API: POST /parabank/services/bank/createAccount — SAVINGS`
      );

      const createResponse = await apiContext.post(
        `/parabank/services/bank/createAccount?customerId=${apiData.validCustomer.customerId}&newAccountType=${apiData.accountTypes.savings}&fromAccountId=${apiData.validCustomer.fromAccountId}`
      );

      expect(createResponse.status()).toBe(200);

      const createdAccount = await createResponse.json();

      logger.info(
        `API response: ${JSON.stringify(createdAccount)}`
      );

      const newAccountId = createdAccount.id;

      expect(createdAccount.type).toBe('SAVINGS');

      logger.info(
        `Account type matches: expected="SAVINGS" API="${createdAccount.type}"`
      );

      expect(createdAccount.customerId).toBe(
        apiData.validCustomer.customerId
      );

      logger.info(
        `Customer ID matches: expected="${apiData.validCustomer.customerId}" API="${createdAccount.customerId}"`
      );

      expect(newAccountId).toBeDefined();

      logger.info(
        `New account ID received: ${newAccountId}`
      );

      logger.info(
        `Calling API: GET /parabank/services/bank/accounts/${newAccountId}`
      );

      // PERFORMANCE START
      const startTime = Date.now();

      const getResponse = await apiContext.get(
        `/parabank/services/bank/accounts/${newAccountId}`
      );

      // PERFORMANCE END
      const endTime = Date.now();

      const responseTime = endTime - startTime;

      // PERFORMANCE VALIDATION
      PerformanceHelper.validateApiResponseTime(
        responseTime
      );

      expect(getResponse.status()).toBe(200);

      const fetchedAccount = await getResponse.json();

      logger.info(
        `API response: ${JSON.stringify(fetchedAccount)}`
      );

      // SCHEMA VALIDATION
      SchemaValidator.validateSchema(
        accountSchema,
        fetchedAccount
      );

      // DATA TYPE VALIDATION
      expect(typeof fetchedAccount.balance)
        .toBe('number');

      // NUMERIC CORRECTNESS VALIDATION
      expect(fetchedAccount.balance)
        .toBeGreaterThanOrEqual(0);

      expect(String(fetchedAccount.id))
        .toBe(String(newAccountId));

      logger.info(
        `Account ID matches: POST="${newAccountId}" GET="${fetchedAccount.id}"`
      );

      expect(fetchedAccount.type)
        .toBe('SAVINGS');

      logger.info(
        `Account type matches: expected="SAVINGS" GET="${fetchedAccount.type}"`
      );
  });

  // =========================================================
  // TC-API-02
  // Create CHECKING Account
  // =========================================================

  test('@api @smoke TC-API-02 Create CHECKING account — response should reflect correct type',
    async ({ apiContext }) => {

      logger.info(
        `Calling API: POST /parabank/services/bank/createAccount — CHECKING`
      );

      // PERFORMANCE START
      const startTime = Date.now();

      const response = await apiContext.post(
        `/parabank/services/bank/createAccount?customerId=${apiData.validCustomer.customerId}&newAccountType=${apiData.accountTypes.checking}&fromAccountId=${apiData.validCustomer.fromAccountId}`
      );

      // PERFORMANCE END
      const endTime = Date.now();

      const responseTime = endTime - startTime;

      // PERFORMANCE VALIDATION
      PerformanceHelper.validateApiResponseTime(
        responseTime
      );

      expect(response.status()).toBe(200);

      const accountData = await response.json();

      logger.info(
        `API response: ${JSON.stringify(accountData)}`
      );

      // SCHEMA VALIDATION
      SchemaValidator.validateSchema(
        accountSchema,
        accountData
      );

      // DATA TYPE VALIDATION
      expect(typeof accountData.balance)
        .toBe('number');

      // NUMERIC CORRECTNESS VALIDATION
      expect(accountData.balance)
        .toBeGreaterThanOrEqual(0);

      expect(accountData.type)
        .toBe('CHECKING');

      logger.info(
        `Account type matches: expected="CHECKING" API="${accountData.type}"`
      );

      expect(accountData.customerId)
        .toBe(apiData.validCustomer.customerId);

      logger.info(
        `Customer ID matches: expected="${apiData.validCustomer.customerId}" API="${accountData.customerId}"`
      );

      expect(accountData.balance)
        .toBe(0);

      logger.info(
        `Balance is 0 for a newly opened account`
      );

      expect(accountData.id)
        .toBeDefined();

      logger.info(
        `New CHECKING account ID received: ${accountData.id}`
      );
  });

  // =========================================================
  // TC-API-03
  // GET Invalid Account
  // =========================================================

  test('@api @negative @regression TC-API-03 GET non-existent account — should return an error response',
    async ({ apiContext }) => {

      logger.info(
        `Calling API: GET /parabank/services/bank/accounts/${apiData.invalidData.fakeAccountId} — expecting failure`
      );

      // PERFORMANCE START
      const startTime = Date.now();

      const response = await apiContext.get(
        `/parabank/services/bank/accounts/${apiData.invalidData.fakeAccountId}`
      );

      // PERFORMANCE END
      const endTime = Date.now();

      const responseTime = endTime - startTime;

      // PERFORMANCE VALIDATION
      PerformanceHelper.validateApiResponseTime(
        responseTime
      );

      const responseBody = await response.text();

      logger.info(`API response: ${responseBody}`);

      expect(response.status()).not.toBe(200);

      logger.info(
        `Confirmed: status was ${response.status()} — invalid account ID rejected`
      );
  });

  // =========================================================
  // TC-API-04
  // Invalid Customer ID
  // =========================================================

  test('@api @negative @regression TC-API-04 Create account with invalid customerId — should return an error response',
    async ({ apiContext }) => {

      logger.info(
        `Calling API: POST /parabank/services/bank/createAccount — invalid customerId: ${apiData.invalidData.fakeCustomerId}`
      );

      // PERFORMANCE START
      const startTime = Date.now();

      const response = await apiContext.post(
        `/parabank/services/bank/createAccount?customerId=${apiData.invalidData.fakeCustomerId}&newAccountType=${apiData.accountTypes.savings}&fromAccountId=${apiData.validCustomer.fromAccountId}`
      );

      // PERFORMANCE END
      const endTime = Date.now();

      const responseTime = endTime - startTime;

      // PERFORMANCE VALIDATION
      PerformanceHelper.validateApiResponseTime(
        responseTime
      );

      const responseBody = await response.text();

      logger.info(`API response: ${responseBody}`);

      expect(response.status()).not.toBe(200);

      logger.info(
        `Confirmed: status was ${response.status()} — invalid customer ID rejected`
      );
  });

});