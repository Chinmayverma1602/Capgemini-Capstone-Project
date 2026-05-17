// import {
//   test,
//   expect
// } from '@playwright/test';

// test(
// 'UI Page Load Performance',
// async ({ page }) => {

//   await page.goto(
//     'http://localhost:9090/parabank'
//   );

//   const loadTime =
//     await page.evaluate(() => {

//       const timing =
//         performance.timing;

//       return (
//         timing.loadEventEnd -
//         timing.navigationStart
//       );
//     });

//   console.log(
//     `UI Page Load Time:
//     ${loadTime} ms`
//   );

//   expect(loadTime)
//     .toBeLessThan(5000);

// });