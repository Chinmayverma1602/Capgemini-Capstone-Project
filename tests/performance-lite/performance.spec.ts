import { test, expect } from '@playwright/test';

test('@performance Login page load time', async ({ page }) => {

    const start=Date.now();

    await page.goto(
        'http://localhost:9090/parabank/index.htm'
    );

    const end=Date.now();

    const loadTime=end-start;

    console.log(
      `Load time=${loadTime}`
    );

    expect(loadTime).toBeLessThan(3000);

});