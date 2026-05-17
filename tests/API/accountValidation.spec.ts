// import {
//   test,
//   expect,
//   request
// } from '@playwright/test';

// import {
// parseStringPromise
// }
// from 'xml2js';

// test(
// 'Validate account balance',
// async () => {

// const api =
// await request.newContext();

// //
// // create account first
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

// const account =
// await createResponse.json();

// const response =
// await api.get(
// `http://localhost:9090/parabank/services/bank/accounts/${account.id}`
// );

// const xml =
// await response.text();

// const parsed =
// await parseStringPromise(
// xml
// );

// const body =
// parsed.account;

// const balance =
// Number(
// body.balance[0]
// );

// expect(
// typeof balance
// ).toBe('number');

// expect(balance)
// .toBeGreaterThanOrEqual(
// 0
// );

// });