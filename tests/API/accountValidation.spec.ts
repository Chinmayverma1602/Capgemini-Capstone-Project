import { test, expect }
from '../../fixtures/apiFixture';

import accountSchema
from '../../schemas/accountSchema.json';

import { SchemaValidator }
from '../../utils/schemaValidator';

test(
  'Validate Account Schema & Data Types',

  async ({ apiContext }) => {

    const response = await apiContext.get(
      '/parabank/services/bank/accounts/12345'
    );

    expect(response.status()).toBe(200);

    const data = await response.json();

    SchemaValidator.validateSchema(
      accountSchema,
      data
    );

    expect(typeof data.balance)
      .toBe('number');

    expect(data.balance)
      .toBeGreaterThanOrEqual(-20000);

    expect(data.id)
      .toBeDefined();

    expect(data.customerId)
      .toBeDefined();
});