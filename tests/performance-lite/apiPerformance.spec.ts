// import {
//   test,
//   expect,
//   request
// }
// from '@playwright/test';

// test(
// 'API response performance',
// async () => {

// const api =
// await request.newContext();

// const startTime =
// Date.now();

// const response =
// await api.get(
// 'http://localhost:9090/parabank/services/bank/accounts/13344'
// );

// const responseTime =
// Date.now() - startTime;

// console.log(
// `API Response Time:
// ${responseTime} ms`
// );

// expect(
// response.ok()
// ).toBeTruthy();

// expect(
// responseTime
// ).toBeLessThan(2000);

// });