# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\parabank_API.spec.ts >> API Test Cases - Account Operations >> @api @smoke TC-API-02 Create CHECKING account — response should reflect correct type
- Location: tests\API\parabank_API.spec.ts:71:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
```

# Test source

```ts
  1   | 
  2   | import { test, expect } from '../../fixtures/apiFixture';
  3   | import { logger } from '../../utils/logger';
  4   | import apiData from '../../test-data/api_Data.json';
  5   | 
  6   | test.describe('API Test Cases - Account Operations', () => {
  7   | 
  8   |   test('@api @smoke TC-API-01 Create SAVINGS account', async ({ apiContext }) => {
  9   | 
  10  |     logger.info(
  11  |       `Calling API: POST /parabank/services/bank/createAccount — SAVINGS`
  12  |     );
  13  | 
  14  |     const createResponse = await apiContext.post(
  15  |       `/parabank/services/bank/createAccount?customerId=${apiData.validCustomer.customerId}&newAccountType=${apiData.accountTypes.savings}&fromAccountId=${apiData.validCustomer.fromAccountId}`
  16  |     );
  17  | 
  18  |     expect(createResponse.status()).toBe(200);
  19  | 
  20  |     const createdAccount = await createResponse.json();
  21  | 
  22  |     logger.info(`API response: ${JSON.stringify(createdAccount)}`);
  23  | 
  24  |     const newAccountId = createdAccount.id;
  25  | 
  26  |     expect(createdAccount.type).toBe('SAVINGS');
  27  | 
  28  |     logger.info(
  29  |       `Account type matches: expected="SAVINGS" API="${createdAccount.type}"`
  30  |     );
  31  | 
  32  |     expect(createdAccount.customerId).toBe(
  33  |       apiData.validCustomer.customerId
  34  |     );
  35  | 
  36  |     logger.info(
  37  |       `Customer ID matches: expected="${apiData.validCustomer.customerId}" API="${createdAccount.customerId}"`
  38  |     );
  39  | 
  40  |     expect(newAccountId).toBeDefined();
  41  | 
  42  |     logger.info(`New account ID received: ${newAccountId}`);
  43  | 
  44  |     logger.info(
  45  |       `Calling API: GET /parabank/services/bank/accounts/${newAccountId}`
  46  |     );
  47  | 
  48  |     const getResponse = await apiContext.get(
  49  |       `/parabank/services/bank/accounts/${newAccountId}`
  50  |     );
  51  | 
  52  |     expect(getResponse.status()).toBe(200);
  53  | 
  54  |     const fetchedAccount = await getResponse.json();
  55  | 
  56  |     logger.info(`API response: ${JSON.stringify(fetchedAccount)}`);
  57  | 
  58  |     expect(String(fetchedAccount.id)).toBe(String(newAccountId));
  59  | 
  60  |     logger.info(
  61  |       `Account ID matches: POST="${newAccountId}" GET="${fetchedAccount.id}"`
  62  |     );
  63  | 
  64  |     expect(fetchedAccount.type).toBe('SAVINGS');
  65  | 
  66  |     logger.info(
  67  |       `Account type matches: expected="SAVINGS" GET="${fetchedAccount.type}"`
  68  |     );
  69  |   });
  70  | 
  71  |   test('@api @smoke TC-API-02 Create CHECKING account — response should reflect correct type',
  72  |     async ({ apiContext }) => {
  73  | 
  74  |       logger.info(
  75  |         `Calling API: POST /parabank/services/bank/createAccount — CHECKING`
  76  |       );
  77  | 
  78  |       const response = await apiContext.post(
  79  |         `/parabank/services/bank/createAccount?customerId=${apiData.validCustomer.customerId}&newAccountType=${apiData.accountTypes.checking}&fromAccountId=${apiData.validCustomer.fromAccountId}`
  80  |       );
  81  | 
> 82  |       expect(response.status()).toBe(200);
      |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  83  | 
  84  |       const accountData = await response.json();
  85  | 
  86  |       logger.info(`API response: ${JSON.stringify(accountData)}`);
  87  | 
  88  |       expect(accountData.type).toBe('CHECKING');
  89  | 
  90  |       logger.info(
  91  |         `Account type matches: expected="CHECKING" API="${accountData.type}"`
  92  |       );
  93  | 
  94  |       expect(accountData.customerId).toBe(
  95  |         apiData.validCustomer.customerId
  96  |       );
  97  | 
  98  |       logger.info(
  99  |         `Customer ID matches: expected="${apiData.validCustomer.customerId}" API="${accountData.customerId}"`
  100 |       );
  101 | 
  102 |       expect(accountData.balance).toBe(0);
  103 | 
  104 |       logger.info(`Balance is 0 for a newly opened account`);
  105 | 
  106 |       expect(accountData.id).toBeDefined();
  107 | 
  108 |       logger.info(
  109 |         `New CHECKING account ID received: ${accountData.id}`
  110 |       );
  111 |     }
  112 |   );
  113 | 
  114 |   test('@api @negative @regression TC-API-03 GET non-existent account — should return an error response',
  115 |     async ({ apiContext }) => {
  116 | 
  117 |       logger.info(
  118 |         `Calling API: GET /parabank/services/bank/accounts/${apiData.invalidData.fakeAccountId} — expecting failure`
  119 |       );
  120 | 
  121 |       const response = await apiContext.get(
  122 |         `/parabank/services/bank/accounts/${apiData.invalidData.fakeAccountId}`
  123 |       );
  124 | 
  125 |       const responseBody = await response.text();
  126 | 
  127 |       logger.info(`API response: ${responseBody}`);
  128 | 
  129 |       expect(response.status()).not.toBe(200);
  130 | 
  131 |       logger.info(
  132 |         `Confirmed: status was ${response.status()} — invalid account ID rejected`
  133 |       );
  134 |     }
  135 |   );
  136 | 
  137 |   test('@api @negative @regression TC-API-04 Create account with invalid customerId — should return an error response',
  138 |     async ({ apiContext }) => {
  139 | 
  140 |       logger.info(
  141 |         `Calling API: POST /parabank/services/bank/createAccount — invalid customerId: ${apiData.invalidData.fakeCustomerId}`
  142 |       );
  143 | 
  144 |       const response = await apiContext.post(
  145 |         `/parabank/services/bank/createAccount?customerId=${apiData.invalidData.fakeCustomerId}&newAccountType=${apiData.accountTypes.savings}&fromAccountId=${apiData.validCustomer.fromAccountId}`
  146 |       );
  147 | 
  148 |       const responseBody = await response.text();
  149 | 
  150 |       logger.info(`API response: ${responseBody}`);
  151 | 
  152 |       expect(response.status()).not.toBe(200);
  153 | 
  154 |       logger.info(
  155 |         `Confirmed: status was ${response.status()} — invalid customer ID rejected`
  156 |       );
  157 |     }
  158 |   );
  159 | 
  160 | });
```