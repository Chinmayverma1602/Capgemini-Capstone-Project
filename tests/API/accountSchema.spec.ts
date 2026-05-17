// import {
//   test,
//   expect,
//   request
// } from '@playwright/test';

// import Ajv from 'ajv';
// import { parseStringPromise }
// from 'xml2js';
// // @ts-ignore

// import schema
// from '../../schemas/accountSchema.json';

// test(
// 'Validate account schema',
// async () => {

// const api =
// await request.newContext();

// //
// // Step 1: create account first
// //
// const createResponse =
// await api.post(
// 'http://localhost:9090/parabank/services/bank/createAccount',
// {
// params:{
// customerId:12212,
// newAccountType:0,
// fromAccountId:12345
// }
// }
// );

// expect(
// createResponse.ok()
// ).toBeTruthy();

// const createdAccount =
// await createResponse.json();

// const accountId =
// createdAccount.id;

// //
// // Step 2: fetch account
// //
// const response =
// await api.get(
// `http://localhost:9090/parabank/services/bank/accounts/${accountId}`
// );

// expect(
// response.ok()
// ).toBeTruthy();

// //
// // Step 3: parse XML
// //
// const xml =
// await response.text();

// const parsed =
// await parseStringPromise(
// xml
// );

// const account =
// parsed.account;

// const body = {
// id:Number(account.id[0]),
// balance:Number(
// account.balance[0]
// )
// };

// //
// // Step 4: schema validation
// //
// const ajv =
// new Ajv();

// const validate =
// ajv.compile(schema);

// const valid =
// validate(body);

// expect(valid)
// .toBeTruthy();

// });