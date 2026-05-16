# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank_API.spec.ts >> API Test Cases - Account Operations >> TC-API-01 Create SAVINGS account then verify via GET
- Location: tests\parabank_API.spec.ts:9:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
```

# Test source

```ts
  1   | // tests/accountOperations.spec.ts
  2   | 
  3   | import { test, expect } from '../fixtures/apiFixture';
  4   | import { logger } from '../utils/logger';
  5   | import apiData from '../test-data/api_Data.json';
  6   | 
  7   | test.describe('API Test Cases - Account Operations', () => {
  8   | 
  9   |   test('TC-API-01 Create SAVINGS account then verify via GET', async ({ apiContext }) => {
  10  | 
  11  |     logger.info(
  12  |       `Calling API: POST /parabank/services/bank/createAccount — SAVINGS`
  13  |     );
  14  | 
  15  |     const createResponse = await apiContext.post(
  16  |       `/parabank/services/bank/createAccount?customerId=${apiData.validCustomer.customerId}&newAccountType=${apiData.accountTypes.savings}&fromAccountId=${apiData.validCustomer.fromAccountId}`
  17  |     );
  18  | 
> 19  |     expect(createResponse.status()).toBe(200);
      |                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  20  | 
  21  |     const createdAccount = await createResponse.json();
  22  | 
  23  |     logger.info(`API response: ${JSON.stringify(createdAccount)}`);
  24  | 
  25  |     const newAccountId = createdAccount.id;
  26  | 
  27  |     expect(createdAccount.type).toBe('SAVINGS');
  28  | 
  29  |     logger.info(
  30  |       `Account type matches: expected="SAVINGS" API="${createdAccount.type}"`
  31  |     );
  32  | 
  33  |     expect(createdAccount.customerId).toBe(
  34  |       apiData.validCustomer.customerId
  35  |     );
  36  | 
  37  |     logger.info(
  38  |       `Customer ID matches: expected="${apiData.validCustomer.customerId}" API="${createdAccount.customerId}"`
  39  |     );
  40  | 
  41  |     expect(newAccountId).toBeDefined();
  42  | 
  43  |     logger.info(`New account ID received: ${newAccountId}`);
  44  | 
  45  |     logger.info(
  46  |       `Calling API: GET /parabank/services/bank/accounts/${newAccountId}`
  47  |     );
  48  | 
  49  |     const getResponse = await apiContext.get(
  50  |       `/parabank/services/bank/accounts/${newAccountId}`
  51  |     );
  52  | 
  53  |     expect(getResponse.status()).toBe(200);
  54  | 
  55  |     const fetchedAccount = await getResponse.json();
  56  | 
  57  |     logger.info(`API response: ${JSON.stringify(fetchedAccount)}`);
  58  | 
  59  |     expect(String(fetchedAccount.id)).toBe(String(newAccountId));
  60  | 
  61  |     logger.info(
  62  |       `Account ID matches: POST="${newAccountId}" GET="${fetchedAccount.id}"`
  63  |     );
  64  | 
  65  |     expect(fetchedAccount.type).toBe('SAVINGS');
  66  | 
  67  |     logger.info(
  68  |       `Account type matches: expected="SAVINGS" GET="${fetchedAccount.type}"`
  69  |     );
  70  |   });
  71  | 
  72  |   test('TC-API-02 Create CHECKING account — response should reflect correct type',
  73  |     async ({ apiContext }) => {
  74  | 
  75  |       logger.info(
  76  |         `Calling API: POST /parabank/services/bank/createAccount — CHECKING`
  77  |       );
  78  | 
  79  |       const response = await apiContext.post(
  80  |         `/parabank/services/bank/createAccount?customerId=${apiData.validCustomer.customerId}&newAccountType=${apiData.accountTypes.checking}&fromAccountId=${apiData.validCustomer.fromAccountId}`
  81  |       );
  82  | 
  83  |       expect(response.status()).toBe(200);
  84  | 
  85  |       const accountData = await response.json();
  86  | 
  87  |       logger.info(`API response: ${JSON.stringify(accountData)}`);
  88  | 
  89  |       expect(accountData.type).toBe('CHECKING');
  90  | 
  91  |       logger.info(
  92  |         `Account type matches: expected="CHECKING" API="${accountData.type}"`
  93  |       );
  94  | 
  95  |       expect(accountData.customerId).toBe(
  96  |         apiData.validCustomer.customerId
  97  |       );
  98  | 
  99  |       logger.info(
  100 |         `Customer ID matches: expected="${apiData.validCustomer.customerId}" API="${accountData.customerId}"`
  101 |       );
  102 | 
  103 |       expect(accountData.balance).toBe(0);
  104 | 
  105 |       logger.info(`Balance is 0 for a newly opened account`);
  106 | 
  107 |       expect(accountData.id).toBeDefined();
  108 | 
  109 |       logger.info(
  110 |         `New CHECKING account ID received: ${accountData.id}`
  111 |       );
  112 |     }
  113 |   );
  114 | 
  115 |   test('TC-API-03 GET non-existent account — should return an error response',
  116 |     async ({ apiContext }) => {
  117 | 
  118 |       logger.info(
  119 |         `Calling API: GET /parabank/services/bank/accounts/${apiData.invalidData.fakeAccountId} — expecting failure`
```