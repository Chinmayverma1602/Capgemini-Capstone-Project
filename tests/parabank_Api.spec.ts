import { test, expect, request } from '@playwright/test';
import { logger } from '../utils/logger';
import apiData from '../test-data/api_Data.json';

test.describe('API Test Cases - Account Operations', () => {

 
  test('TC-API-01 Create SAVINGS account then verify via GET', async () => {

    const apiContext = await request.newContext({
      baseURL: 'http://localhost:9090',
      extraHTTPHeaders: {
        'Accept': 'application/json',
      },
    });

    logger.info(`Calling API: POST /parabank/services/bank/createAccount — SAVINGS`);

    const createResponse = await apiContext.post(
      `/parabank/services/bank/createAccount?customerId=${apiData.validCustomer.customerId}&newAccountType=${apiData.accountTypes.savings}&fromAccountId=${apiData.validCustomer.fromAccountId}`
    );

    expect(createResponse.status()).toBe(200);

    const createdAccount = await createResponse.json();
    logger.info(`API response: ${JSON.stringify(createdAccount)}`);

    const newAccountId = createdAccount.id;

    expect(createdAccount.type).toBe('SAVINGS');
    logger.info(`Account type matches: expected="SAVINGS" API="${createdAccount.type}"`);

    expect(createdAccount.customerId).toBe(apiData.validCustomer.customerId);
    logger.info(`Customer ID matches: expected="${apiData.validCustomer.customerId}" API="${createdAccount.customerId}"`);

    expect(newAccountId).toBeDefined();
    logger.info(`New account ID received: ${newAccountId}`);

    logger.info(`Calling API: GET /parabank/services/bank/accounts/${newAccountId}`);

    const getResponse = await apiContext.get(
      `/parabank/services/bank/accounts/${newAccountId}`
    );

    expect(getResponse.status()).toBe(200);

    const fetchedAccount = await getResponse.json();
    logger.info(`API response: ${JSON.stringify(fetchedAccount)}`);

    expect(String(fetchedAccount.id)).toBe(String(newAccountId));
    logger.info(`Account ID matches: POST="${newAccountId}" GET="${fetchedAccount.id}"`);

    expect(fetchedAccount.type).toBe('SAVINGS');
    logger.info(`Account type matches: expected="SAVINGS" GET="${fetchedAccount.type}"`);

    await apiContext.dispose();
  });


 
  test('TC-API-02 Create CHECKING account — response should reflect correct type', async () => {

    const apiContext = await request.newContext({
      baseURL: 'http://localhost:9090',
      extraHTTPHeaders: {
        'Accept': 'application/json',
      },
    });

    logger.info(`Calling API: POST /parabank/services/bank/createAccount — CHECKING`);

    const response = await apiContext.post(
      `/parabank/services/bank/createAccount?customerId=${apiData.validCustomer.customerId}&newAccountType=${apiData.accountTypes.checking}&fromAccountId=${apiData.validCustomer.fromAccountId}`
    );

    expect(response.status()).toBe(200);

    const accountData = await response.json();
    logger.info(`API response: ${JSON.stringify(accountData)}`);

    expect(accountData.type).toBe('CHECKING');
    logger.info(`Account type matches: expected="CHECKING" API="${accountData.type}"`);

    expect(accountData.customerId).toBe(apiData.validCustomer.customerId);
    logger.info(`Customer ID matches: expected="${apiData.validCustomer.customerId}" API="${accountData.customerId}"`);

    expect(accountData.balance).toBe(0);
    logger.info(`Balance is 0 for a newly opened account`);

    expect(accountData.id).toBeDefined();
    logger.info(`New CHECKING account ID received: ${accountData.id}`);

    await apiContext.dispose();
  });


  test('TC-API-03 GET non-existent account — should return an error response', async () => {

    const apiContext = await request.newContext({
      baseURL: 'http://localhost:9090',
      extraHTTPHeaders: {
        'Accept': 'application/json',
      },
    });

    logger.info(`Calling API: GET /parabank/services/bank/accounts/${apiData.invalidData.fakeAccountId} — expecting failure`);

    const response = await apiContext.get(
      `/parabank/services/bank/accounts/${apiData.invalidData.fakeAccountId}`
    );

    const responseBody = await response.text();
    logger.info(`API response: ${responseBody}`);

    expect(response.status()).not.toBe(200);
    logger.info(`Confirmed: status was ${response.status()} — invalid account ID rejected`);

    await apiContext.dispose();
  });

  test('TC-API-04 Create account with invalid customerId — should return an error response', async () => {

    const apiContext = await request.newContext({
      baseURL: 'http://localhost:9090',
      extraHTTPHeaders: {
        'Accept': 'application/json',
      },
    });

    logger.info(`Calling API: POST /parabank/services/bank/createAccount — invalid customerId: ${apiData.invalidData.fakeCustomerId}`);

    const response = await apiContext.post(
      `/parabank/services/bank/createAccount?customerId=${apiData.invalidData.fakeCustomerId}&newAccountType=${apiData.accountTypes.savings}&fromAccountId=${apiData.validCustomer.fromAccountId}`
    );

    const responseBody = await response.text();
    logger.info(`API response: ${responseBody}`);

    expect(response.status()).not.toBe(200);
    logger.info(`Confirmed: status was ${response.status()} — invalid customer ID rejected`);

    await apiContext.dispose();
  });

});