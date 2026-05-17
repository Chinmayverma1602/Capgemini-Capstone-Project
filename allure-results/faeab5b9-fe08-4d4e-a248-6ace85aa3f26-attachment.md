# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\accountValidation.spec.ts >> Validate account balance
- Location: tests\API\accountValidation.spec.ts:12:5

# Error details

```
SyntaxError: Unexpected token 'C', "Could not "... is not valid JSON
```

# Test source

```ts
  1  | import {
  2  |   test,
  3  |   expect,
  4  |   request
  5  | } from '@playwright/test';
  6  | 
  7  | import {
  8  | parseStringPromise
  9  | }
  10 | from 'xml2js';
  11 | 
  12 | test(
  13 | 'Validate account balance',
  14 | async () => {
  15 | 
  16 | const api =
  17 | await request.newContext();
  18 | 
  19 | //
  20 | // create account first
  21 | //
  22 | const createResponse =
  23 | await api.post(
  24 | 'http://localhost:9090/parabank/services/bank/createAccount',
  25 | {
  26 | params:{
  27 | customerId:12212,
  28 | newAccountType:0,
  29 | fromAccountId:12345
  30 | }
  31 | }
  32 | );
  33 | 
  34 | const account =
> 35 | await createResponse.json();
     |  ^ SyntaxError: Unexpected token 'C', "Could not "... is not valid JSON
  36 | 
  37 | const response =
  38 | await api.get(
  39 | `http://localhost:9090/parabank/services/bank/accounts/${account.id}`
  40 | );
  41 | 
  42 | const xml =
  43 | await response.text();
  44 | 
  45 | const parsed =
  46 | await parseStringPromise(
  47 | xml
  48 | );
  49 | 
  50 | const body =
  51 | parsed.account;
  52 | 
  53 | const balance =
  54 | Number(
  55 | body.balance[0]
  56 | );
  57 | 
  58 | expect(
  59 | typeof balance
  60 | ).toBe('number');
  61 | 
  62 | expect(balance)
  63 | .toBeGreaterThanOrEqual(
  64 | 0
  65 | );
  66 | 
  67 | });
```