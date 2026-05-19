# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\parabank_API.spec.ts >> API Test Cases - Account Operations >> @api @smoke TC-API-01 Create SAVINGS account
- Location: tests\API\parabank_API.spec.ts:16:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
```

# Test source

```ts
  1   | import { test, expect } from '../../fixtures/apiFixture';
  2   | import apiData from '../../test-data/api_Data.json';
  3   | 
  4   | import accountSchema from '../../schemas/accountSchema.json';
  5   | 
  6   | import { SchemaValidator }
  7   | from '../../utils/schemaValidator';
  8   | 
  9   | import { PerformanceHelper }
  10  | from '../../utils/performanceHelper';
  11  | 
  12  | test.describe('API Test Cases - Account Operations', () => {
  13  | 
  14  | 
  15  | 
  16  |   test('@api @smoke TC-API-01 Create SAVINGS account',
  17  |     async ({ apiContext }) => {
  18  | 
  19  |       const createResponse = await apiContext.post(
  20  |         `/parabank/services/bank/createAccount?customerId=${apiData.validCustomer.customerId}&newAccountType=${apiData.accountTypes.savings}&fromAccountId=${apiData.validCustomer.fromAccountId}`
  21  |       );
  22  | 
> 23  |       expect(createResponse.status()).toBe(200);
      |                                       ^ Error: expect(received).toBe(expected) // Object.is equality
  24  | 
  25  |       const createdAccount = await createResponse.json();
  26  | 
  27  |       const newAccountId = createdAccount.id;
  28  | 
  29  |       expect(createdAccount.type).toBe('SAVINGS');
  30  | 
  31  |       expect(createdAccount.customerId).toBe(
  32  |         apiData.validCustomer.customerId
  33  |       );
  34  | 
  35  |       expect(newAccountId).toBeDefined();
  36  | 
  37  |       const startTime = Date.now();
  38  | 
  39  |       const getResponse = await apiContext.get(
  40  |         `/parabank/services/bank/accounts/${newAccountId}`
  41  |       );
  42  | 
  43  |       const endTime = Date.now();
  44  | 
  45  |       const responseTime = endTime - startTime;
  46  | 
  47  |       PerformanceHelper.validateApiResponseTime(
  48  |         responseTime
  49  |       );
  50  | 
  51  |       expect(getResponse.status()).toBe(200);
  52  | 
  53  |       const fetchedAccount = await getResponse.json();
  54  | 
  55  |       SchemaValidator.validateSchema(
  56  |         accountSchema,
  57  |         fetchedAccount
  58  |       );
  59  | 
  60  |       expect(typeof fetchedAccount.balance)
  61  |         .toBe('number');
  62  | 
  63  |       expect(fetchedAccount.balance)
  64  |         .toBeGreaterThanOrEqual(0);
  65  | 
  66  |       expect(String(fetchedAccount.id))
  67  |         .toBe(String(newAccountId));
  68  | 
  69  |       expect(fetchedAccount.type)
  70  |         .toBe('SAVINGS');
  71  |   });
  72  | 
  73  | 
  74  | 
  75  |   test('@api @smoke TC-API-02 Create CHECKING account and response should reflect correct type',
  76  |     async ({ apiContext }) => {
  77  | 
  78  |       const startTime = Date.now();
  79  | 
  80  |       const response = await apiContext.post(
  81  |         `/parabank/services/bank/createAccount?customerId=${apiData.validCustomer.customerId}&newAccountType=${apiData.accountTypes.checking}&fromAccountId=${apiData.validCustomer.fromAccountId}`
  82  |       );
  83  | 
  84  |       const endTime = Date.now();
  85  | 
  86  |       const responseTime = endTime - startTime;
  87  | 
  88  |       PerformanceHelper.validateApiResponseTime(
  89  |         responseTime
  90  |       );
  91  | 
  92  |       expect(response.status()).toBe(200);
  93  | 
  94  |       const accountData = await response.json();
  95  | 
  96  |       SchemaValidator.validateSchema(
  97  |         accountSchema,
  98  |         accountData
  99  |       );
  100 | 
  101 |       expect(typeof accountData.balance)
  102 |         .toBe('number');
  103 | 
  104 |       expect(accountData.balance)
  105 |         .toBeGreaterThanOrEqual(0);
  106 | 
  107 |       expect(accountData.type)
  108 |         .toBe('CHECKING');
  109 | 
  110 |       expect(accountData.customerId)
  111 |         .toBe(apiData.validCustomer.customerId);
  112 | 
  113 |       expect(accountData.balance)
  114 |         .toBe(0);
  115 | 
  116 |       expect(accountData.id)
  117 |         .toBeDefined();
  118 |   });
  119 | 
  120 | 
  121 | 
  122 |   test('@api @negative @regression TC-API-03 GET non-existent account and should return an error response',
  123 |     async ({ apiContext }) => {
```