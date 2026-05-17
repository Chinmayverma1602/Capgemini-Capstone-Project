# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\accountSchema.spec.ts >> Validate account schema
- Location: tests\API\accountSchema.spec.ts:13:5

# Error details

```
SyntaxError: Unexpected token '<', "<?xml vers"... is not valid JSON
```

# Test source

```ts
  1  | import {
  2  |  test,
  3  |  expect,
  4  |  request
  5  | }
  6  | from '@playwright/test';
  7  | 
  8  | import Ajv from 'ajv';
  9  | 
  10 | import schema
  11 | from '../../schemas/accountSchema.json';
  12 | 
  13 | test(
  14 | 'Validate account schema',
  15 | async () => {
  16 | 
  17 | const api =
  18 | await request.newContext();
  19 | 
  20 | const response =
  21 | await api.get(
  22 | 'http://localhost:9090/parabank/services/bank/accounts/13344'
  23 | );
  24 | 
  25 | const body =
> 26 | await response.json();
     |  ^ SyntaxError: Unexpected token '<', "<?xml vers"... is not valid JSON
  27 | 
  28 | const ajv =
  29 | new Ajv();
  30 | 
  31 | const validate =
  32 | ajv.compile(
  33 | schema
  34 | );
  35 | 
  36 | const valid =
  37 | validate(body);
  38 | 
  39 | expect(
  40 | valid
  41 | ).toBeTruthy();
  42 | 
  43 | });
```