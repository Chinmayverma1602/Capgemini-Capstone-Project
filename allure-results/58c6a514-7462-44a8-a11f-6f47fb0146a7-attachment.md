# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\accountValidation.spec.ts >> Validate account balance
- Location: tests\API\accountValidation.spec.ts:8:5

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
  8  | test(
  9  | 'Validate account balance',
  10 | async () => {
  11 | 
  12 | const api =
  13 | await request.newContext();
  14 | 
  15 | const response =
  16 | await api.get(
  17 | 'http://localhost:9090/parabank/services/bank/accounts/13344'
  18 | );
  19 | 
  20 | const body =
> 21 | await response.json();
     |  ^ SyntaxError: Unexpected token '<', "<?xml vers"... is not valid JSON
  22 | 
  23 | expect(
  24 | typeof body.balance
  25 | ).toBe('number');
  26 | 
  27 | expect(
  28 | body.balance
  29 | ).toBeGreaterThanOrEqual(
  30 | 0
  31 | );
  32 | 
  33 | });
```