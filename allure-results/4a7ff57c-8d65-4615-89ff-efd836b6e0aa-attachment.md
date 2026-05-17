# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\accountValidation.spec.ts >> Validate Account Schema & Data Types
- Location: tests\API\accountValidation.spec.ts:10:5

# Error details

```
Error: expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 20000
Received:    -3300
```

# Test source

```ts
  1  | import { test, expect }
  2  | from '../../fixtures/apiFixture';
  3  | 
  4  | import accountSchema
  5  | from '../../schemas/accountSchema.json';
  6  | 
  7  | import { SchemaValidator }
  8  | from '../../utils/schemaValidator';
  9  | 
  10 | test(
  11 |   'Validate Account Schema & Data Types',
  12 | 
  13 |   async ({ apiContext }) => {
  14 | 
  15 |     const response = await apiContext.get(
  16 |       '/parabank/services/bank/accounts/12345'
  17 |     );
  18 | 
  19 |     expect(response.status()).toBe(200);
  20 | 
  21 |     const data = await response.json();
  22 | 
  23 |     SchemaValidator.validateSchema(
  24 |       accountSchema,
  25 |       data
  26 |     );
  27 | 
  28 |     expect(typeof data.balance)
  29 |       .toBe('number');
  30 | 
  31 |     expect(data.balance)
> 32 |       .toBeGreaterThanOrEqual(20000);
     |        ^ Error: expect(received).toBeGreaterThanOrEqual(expected)
  33 | 
  34 |     expect(data.id)
  35 |       .toBeDefined();
  36 | 
  37 |     expect(data.customerId)
  38 |       .toBeDefined();
  39 | });
```