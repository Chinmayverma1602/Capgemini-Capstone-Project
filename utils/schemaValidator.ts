import Ajv from 'ajv';

const ajv = new Ajv();

export class SchemaValidator {

  static validateSchema(
    schema: object,
    data: object
  ) {

    const validate = ajv.compile(schema);

    const valid = validate(data);

    if (!valid) {

      console.log(validate.errors);

      throw new Error(
        'Schema validation failed'
      );
    }

    return true;
  }
}