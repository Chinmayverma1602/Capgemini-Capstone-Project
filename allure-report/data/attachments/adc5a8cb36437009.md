# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank_ui.spec.ts >> UI Test Cases >> TC-LOGIN-01 Login with Valid Credentials
- Location: tests\parabank_ui.spec.ts:21:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Accounts Overview')
Expected: visible
Error: strict mode violation: locator('text=Accounts Overview') resolved to 2 elements:
    1) <a href="overview.htm">Accounts Overview</a> aka getByRole('link', { name: 'Accounts Overview' })
    2) <h1 class="title">↵⇆⇆⇆Accounts Overview↵⇆⇆</h1> aka getByRole('heading', { name: 'Accounts Overview' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Accounts Overview')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - paragraph [ref=e29]: Welcome John Doe
        - heading "Account Services" [level=2] [ref=e30]
        - list [ref=e31]:
          - listitem [ref=e32]:
            - link "Open New Account" [ref=e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=e34]:
            - link "Accounts Overview" [ref=e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=e36]:
            - link "Transfer Funds" [ref=e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=e38]:
            - link "Bill Pay" [ref=e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=e40]:
            - link "Find Transactions" [ref=e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=e42]:
            - link "Update Contact Info" [ref=e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=e44]:
            - link "Request Loan" [ref=e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=e46]:
            - link "Log Out" [ref=e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=e50]:
        - heading "Accounts Overview" [level=1] [ref=e51]
        - table [ref=e52]:
          - rowgroup [ref=e53]:
            - row "Account Balance* Available Amount" [ref=e54]:
              - columnheader "Account" [ref=e55]
              - columnheader "Balance*" [ref=e56]
              - columnheader "Available Amount" [ref=e57]
          - rowgroup [ref=e58]:
            - row "15009 $5150.50 $5150.50" [ref=e59]:
              - cell "15009" [ref=e60]:
                - link "15009" [ref=e61] [cursor=pointer]:
                  - /url: activity.htm?id=15009
              - cell "$5150.50" [ref=e62]
              - cell "$5150.50" [ref=e63]
            - row "Total $5150.50" [ref=e64]:
              - cell "Total" [ref=e65]
              - cell "$5150.50" [ref=e66]
              - cell [ref=e67]
          - rowgroup [ref=e68]:
            - row "*Balance includes deposits that may be subject to holds" [ref=e69]:
              - cell "*Balance includes deposits that may be subject to holds" [ref=e70]
  - generic [ref=e72]:
    - list [ref=e73]:
      - listitem [ref=e74]:
        - link "Home" [ref=e75] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e76]:
        - link "About Us" [ref=e77] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e78]:
        - link "Services" [ref=e79] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e80]:
        - link "Products" [ref=e81] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e82]:
        - link "Locations" [ref=e83] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e84]:
        - link "Forum" [ref=e85] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e86]:
        - link "Site Map" [ref=e87] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e88]:
        - link "Contact Us" [ref=e89] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e90]: © Parasoft. All rights reserved.
    - list [ref=e91]:
      - listitem [ref=e92]: "Visit us at:"
      - listitem [ref=e93]:
        - link "www.parasoft.com" [ref=e94] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  |     import { Page, expect } from '@playwright/test';
  2  | import { logger } from '../utils/logger';
  3  | 
  4  | export class LoginPage {
  5  | 
  6  |   constructor(private page: Page) {}
  7  | 
  8  |   async login(username: string, password: string) {
  9  | 
  10 |     logger.info('Performing login');
  11 | 
  12 |     await this.page.fill('input[name="username"]', username);
  13 | 
  14 |     await this.page.fill('input[name="password"]', password);
  15 | 
  16 |     await this.page.click('input[value="Log In"]');
  17 |   }
  18 | 
  19 |   async verifyLoginSuccess() {
  20 | 
  21 |     logger.info('Validating successful login');
  22 | 
  23 |     await expect(
  24 |       this.page.locator('text=Accounts Overview')
> 25 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  26 |   }
  27 | }
```