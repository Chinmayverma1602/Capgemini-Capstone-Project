// import {
//   test,
//   expect,
//   request
// }
// from '@playwright/test';

// test(
// 'Basic throughput validation',
// async () => {

// const api =
// await request.newContext();

// const requests =
// Array.from(
// { length: 20 },
// () =>
// api.get(
// 'http://localhost:9090/parabank/services/bank/accounts/13344'
// )
// );

// const responses =
// await Promise.all(
// requests
// );

// responses.forEach(
// response => {

// expect(
// response.ok()
// ).toBeTruthy();

// });

// console.log(
// '20 async API calls passed'
// );

// });