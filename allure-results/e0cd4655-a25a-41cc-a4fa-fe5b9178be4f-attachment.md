# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance-lite\performance.spec.ts >> @performance Login page load time
- Location: tests\performance-lite\performance.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:9090/parabank/index.htm
Call log:
  - navigating to "http://localhost:9090/parabank/index.htm", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: localhost
      - text: refused to connect.
    - generic [ref=e10]:
      - paragraph [ref=e11]: "Try:"
      - list [ref=e12]:
        - listitem [ref=e13]: Checking the connection
        - listitem [ref=e14]:
          - link "Checking the proxy and the firewall" [ref=e15] [cursor=pointer]:
            - /url: "#buttons"
    - generic [ref=e16]: ERR_CONNECTION_REFUSED
  - generic [ref=e17]:
    - button "Reload" [ref=e19] [cursor=pointer]
    - button "Details" [ref=e20] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('@performance Login page load time', async ({ page }) => {
  4  | 
  5  |     const start=Date.now();
  6  | 
> 7  |     await page.goto(
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:9090/parabank/index.htm
  8  |         'http://localhost:9090/parabank/index.htm'
  9  |     );
  10 | 
  11 |     const end=Date.now();
  12 | 
  13 |     const loadTime=end-start;
  14 | 
  15 |     console.log(
  16 |       `Load time=${loadTime}`
  17 |     );
  18 | 
  19 |     expect(loadTime).toBeLessThan(5000);
  20 | 
  21 | });
```