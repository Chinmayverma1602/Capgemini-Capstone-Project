# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank_ui.spec.ts >> UI Test Cases >> TC-NEG-06 Username with Special Characters
- Location: tests\parabank_ui.spec.ts:74:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//span[@id=\'customer.username.errors\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//span[@id=\'customer.username.errors\']')

```

```yaml
- link:
  - /url: admin.htm
  - img
- link "ParaBank":
  - /url: index.htm
  - img "ParaBank"
- paragraph: Experience the difference
- list:
  - listitem: Solutions
  - listitem:
    - link "About Us":
      - /url: about.htm
  - listitem:
    - link "Services":
      - /url: services.htm
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
  - listitem:
    - link "Admin Page":
      - /url: admin.htm
- list:
  - listitem:
    - link "home":
      - /url: index.htm
  - listitem:
    - link "about":
      - /url: about.htm
  - listitem:
    - link "contact":
      - /url: contact.htm
- paragraph: Welcome John Doe
- heading "Account Services" [level=2]
- list:
  - listitem:
    - link "Open New Account":
      - /url: openaccount.htm
  - listitem:
    - link "Accounts Overview":
      - /url: overview.htm
  - listitem:
    - link "Transfer Funds":
      - /url: transfer.htm
  - listitem:
    - link "Bill Pay":
      - /url: billpay.htm
  - listitem:
    - link "Find Transactions":
      - /url: findtrans.htm
  - listitem:
    - link "Update Contact Info":
      - /url: updateprofile.htm
  - listitem:
    - link "Request Loan":
      - /url: requestloan.htm
  - listitem:
    - link "Log Out":
      - /url: logout.htm
- heading "Welcome @@@###" [level=1]
- paragraph: Your account was created successfully. You are now logged in.
- list:
  - listitem:
    - link "Home":
      - /url: index.htm
    - text: "|"
  - listitem:
    - link "About Us":
      - /url: about.htm
    - text: "|"
  - listitem:
    - link "Services":
      - /url: services.htm
    - text: "|"
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
    - text: "|"
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
    - text: "|"
  - listitem:
    - link "Forum":
      - /url: http://forums.parasoft.com/
    - text: "|"
  - listitem:
    - link "Site Map":
      - /url: sitemap.htm
    - text: "|"
  - listitem:
    - link "Contact Us":
      - /url: contact.htm
- paragraph: © Parasoft. All rights reserved.
- list:
  - listitem: "Visit us at:"
  - listitem:
    - link "www.parasoft.com":
      - /url: http://www.parasoft.com/
```

# Test source

```ts
  76  | }
  77  | 
  78  | 
  79  | async registerWithBlankFields() {
  80  | 
  81  |   logger.info('Submitting registration form with blank fields');
  82  | 
  83  |   await this.page.screenshot({
  84  |     path: 'screenshots/blank-registration-form.png'
  85  |   });
  86  | 
  87  |   await this.page.click('input[value="Register"]');
  88  | }
  89  | 
  90  | async verifyBlankFieldValidationErrors() {
  91  | 
  92  |   logger.info('Validating blank field error messages');
  93  | 
  94  |   await expect(
  95  |     this.page.locator("//span[@id='customer.firstName.errors']")
  96  |   ).toContainText('First name is required.');
  97  | 
  98  |   await expect(
  99  |     this.page.locator("//span[@id='customer.lastName.errors']")
  100 |   ).toContainText('Last name is required.');
  101 | 
  102 |   await expect(
  103 |     this.page.locator("//span[@id='customer.address.street.errors']")
  104 |   ).toContainText('Address is required.');
  105 | 
  106 |   await expect(
  107 |     this.page.locator("//span[@id='customer.address.city.errors']")
  108 |   ).toContainText('City is required.');
  109 | 
  110 |   await expect(
  111 |     this.page.locator("//span[@id='customer.address.state.errors']")
  112 |   ).toContainText('State is required.');
  113 | 
  114 |   await expect(
  115 |     this.page.locator("//span[@id='customer.address.zipCode.errors']")
  116 |   ).toContainText('Zip Code is required.');
  117 | 
  118 |   await expect(
  119 |     this.page.locator("//span[@id='customer.ssn.errors']")
  120 |   ).toContainText('Social Security Number is required.');
  121 | 
  122 |   await expect(
  123 |     this.page.locator("//span[@id='customer.username.errors']")
  124 |   ).toContainText('Username is required.');
  125 | 
  126 |   await expect(
  127 |     this.page.locator("//span[@id='customer.password.errors']")
  128 |   ).toContainText('Password is required.');
  129 | 
  130 |   await expect(
  131 |     this.page.locator("//span[@id='repeatedPassword.errors']")
  132 |   ).toContainText('Password confirmation is required.');
  133 | }
  134 | 
  135 |   async verifyRegistrationSuccess() {
  136 | 
  137 |     logger.info('Validating successful registration');
  138 | 
  139 |     await expect(
  140 |       this.page.locator('h1.title')
  141 |     ).toContainText('Welcome');
  142 |   }
  143 | 
  144 | async registerWithSpecialCharacterUsername(userData: any, specialUsername: string) {
  145 | 
  146 |   logger.info('Entering special characters in username field');
  147 | 
  148 |   await this.page.fill('input[id="customer.firstName"]', userData.firstName);
  149 |   await this.page.fill('input[id="customer.lastName"]', userData.lastName);
  150 |   await this.page.fill('input[id="customer.address.street"]', userData.address);
  151 |   await this.page.fill('input[id="customer.address.city"]', userData.city);
  152 |   await this.page.fill('input[id="customer.address.state"]', userData.state);
  153 |   await this.page.fill('input[id="customer.address.zipCode"]', userData.zipCode);
  154 |   await this.page.fill('input[id="customer.phoneNumber"]', userData.phone);
  155 |   await this.page.fill('input[id="customer.ssn"]', userData.ssn);
  156 | 
  157 |   await this.page.fill('input[id="customer.username"]', specialUsername);
  158 | 
  159 |   await this.page.fill('input[id="customer.password"]', userData.password);
  160 | 
  161 |   await this.page.fill('input[id="repeatedPassword"]', userData.password);
  162 | 
  163 |   await this.page.screenshot({
  164 |     path: 'screenshots/special-character-username.png'
  165 |   });
  166 | 
  167 |   await this.page.click('input[value="Register"]');
  168 | }
  169 | 
  170 | async verifySpecialCharacterUsernameError() {
  171 | 
  172 |   logger.info('Validating username special character error');
  173 | 
  174 |   await expect(
  175 |     this.page.locator("//span[@id='customer.username.errors']")
> 176 |   ).toBeVisible();
      |     ^ Error: expect(locator).toBeVisible() failed
  177 | }
  178 |   
  179 | 
  180 |  
  181 | 
  182 |  
  183 | }
```