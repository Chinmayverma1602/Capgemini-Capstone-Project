# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\accountSchema.spec.ts >> Validate account schema
- Location: tests\API\accountSchema.spec.ts:15:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import {
  2  |   test,
  3  |   expect,
  4  |   request
  5  | } from '@playwright/test';
  6  | 
  7  | import Ajv from 'ajv';
  8  | import { parseStringPromise }
  9  | from 'xml2js';
  10 | // @ts-ignore
  11 | 
  12 | import schema
  13 | from '../../schemas/accountSchema.json';
  14 | 
  15 | test(
  16 | 'Validate account schema',
  17 | async () => {
  18 | 
  19 | const api =
  20 | await request.newContext();
  21 | 
  22 | //
  23 | // Step 1: create account first
  24 | //
  25 | const createResponse =
  26 | await api.post(
  27 | 'http://localhost:9090/parabank/services/bank/createAccount',
  28 | {
  29 | params:{
  30 | customerId:12212,
  31 | newAccountType:0,
  32 | fromAccountId:12345
  33 | }
  34 | }
  35 | );
  36 | 
  37 | expect(
  38 | createResponse.ok()
> 39 | ).toBeTruthy();
     |   ^ Error: expect(received).toBeTruthy()
  40 | 
  41 | const createdAccount =
  42 | await createResponse.json();
  43 | 
  44 | const accountId =
  45 | createdAccount.id;
  46 | 
  47 | //
  48 | // Step 2: fetch account
  49 | //
  50 | const response =
  51 | await api.get(
  52 | `http://localhost:9090/parabank/services/bank/accounts/${accountId}`
  53 | );
  54 | 
  55 | expect(
  56 | response.ok()
  57 | ).toBeTruthy();
  58 | 
  59 | //
  60 | // Step 3: parse XML
  61 | //
  62 | const xml =
  63 | await response.text();
  64 | 
  65 | const parsed =
  66 | await parseStringPromise(
  67 | xml
  68 | );
  69 | 
  70 | const account =
  71 | parsed.account;
  72 | 
  73 | const body = {
  74 | id:Number(account.id[0]),
  75 | balance:Number(
  76 | account.balance[0]
  77 | )
  78 | };
  79 | 
  80 | //
  81 | // Step 4: schema validation
  82 | //
  83 | const ajv =
  84 | new Ajv();
  85 | 
  86 | const validate =
  87 | ajv.compile(schema);
  88 | 
  89 | const valid =
  90 | validate(body);
  91 | 
  92 | expect(valid)
  93 | .toBeTruthy();
  94 | 
  95 | });
```