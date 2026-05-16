# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> Hybrid E2E Tests >> TC-E2E-01 Register user via UI and validate account using API
- Location: tests\e2e.spec.ts:11:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h1.title')
Expected substring: "Welcome"
Received string:    "Signing up is easy!"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('h1.title')
    13 × locator resolved to <h1 class="title">Signing up is easy!</h1>
       - unexpected value "Signing up is easy!"

```

```yaml
- heading "Signing up is easy!" [level=1]
```

# Test source

```ts
  42  |   }
  43  | 
  44  | 
  45  |   async registerUserWithMismatchedPassword(userData: any, wrongPassword: string) {
  46  | 
  47  |   logger.info('Entering registration details with mismatched passwords');
  48  | 
  49  |   await this.page.fill('input[id="customer.firstName"]', userData.firstName);
  50  |   await this.page.fill('input[id="customer.lastName"]', userData.lastName);
  51  |   await this.page.fill('input[id="customer.address.street"]', userData.address);
  52  |   await this.page.fill('input[id="customer.address.city"]', userData.city);
  53  |   await this.page.fill('input[id="customer.address.state"]', userData.state);
  54  |   await this.page.fill('input[id="customer.address.zipCode"]', userData.zipCode);
  55  |   await this.page.fill('input[id="customer.phoneNumber"]', userData.phone);
  56  |   await this.page.fill('input[id="customer.ssn"]', userData.ssn);
  57  | 
  58  |   await this.page.fill('input[id="customer.username"]', userData.username);
  59  |   await this.page.fill('input[id="customer.password"]', userData.password);
  60  | 
  61  |   await this.page.fill('input[id="repeatedPassword"]', wrongPassword);
  62  | 
  63  |   await this.page.screenshot({
  64  |     path: 'screenshots/mismatched-password.png'
  65  |   });
  66  | 
  67  |   await this.page.click('input[value="Register"]');
  68  | }
  69  | 
  70  | async verifyPasswordMismatchError() {
  71  | 
  72  |   logger.info('Validating password mismatch error');
  73  | 
  74  |   await expect(
  75  |     this.page.locator("//span[@id='repeatedPassword.errors']")
  76  |   )
  77  | }
  78  | 
  79  | 
  80  | async registerWithBlankFields() {
  81  | 
  82  |   logger.info('Submitting registration form with blank fields');
  83  | 
  84  |   await this.page.screenshot({
  85  |     path: 'screenshots/blank-registration-form.png'
  86  |   });
  87  | 
  88  |   await this.page.click('input[value="Register"]');
  89  | }
  90  | 
  91  | async verifyBlankFieldValidationErrors() {
  92  | 
  93  |   logger.info('Validating blank field error messages');
  94  | 
  95  |   await expect(
  96  |     this.page.locator("//span[@id='customer.firstName.errors']")
  97  |   ).toContainText('First name is required.');
  98  | 
  99  |   await expect(
  100 |     this.page.locator("//span[@id='customer.lastName.errors']")
  101 |   ).toContainText('Last name is required.');
  102 | 
  103 |   await expect(
  104 |     this.page.locator("//span[@id='customer.address.street.errors']")
  105 |   ).toContainText('Address is required.');
  106 | 
  107 |   await expect(
  108 |     this.page.locator("//span[@id='customer.address.city.errors']")
  109 |   ).toContainText('City is required.');
  110 | 
  111 |   await expect(
  112 |     this.page.locator("//span[@id='customer.address.state.errors']")
  113 |   ).toContainText('State is required.');
  114 | 
  115 |   await expect(
  116 |     this.page.locator("//span[@id='customer.address.zipCode.errors']")
  117 |   ).toContainText('Zip Code is required.');
  118 | 
  119 |   await expect(
  120 |     this.page.locator("//span[@id='customer.ssn.errors']")
  121 |   ).toContainText('Social Security Number is required.');
  122 | 
  123 |   await expect(
  124 |     this.page.locator("//span[@id='customer.username.errors']")
  125 |   ).toContainText('Username is required.');
  126 | 
  127 |   await expect(
  128 |     this.page.locator("//span[@id='customer.password.errors']")
  129 |   ).toContainText('Password is required.');
  130 | 
  131 |   await expect(
  132 |     this.page.locator("//span[@id='repeatedPassword.errors']")
  133 |   ).toContainText('Password confirmation is required.');
  134 | }
  135 | 
  136 |   async verifyRegistrationSuccess() {
  137 | 
  138 |     logger.info('Validating successful registration');
  139 | 
  140 |     await expect(
  141 |       this.page.locator('h1.title')
> 142 |     ).toContainText('Welcome');
      |       ^ Error: expect(locator).toContainText(expected) failed
  143 |   }
  144 | 
  145 | async registerWithSpecialCharacterUsername(userData: any, specialUsername: string) {
  146 | 
  147 |   logger.info('Entering special characters in username field');
  148 | 
  149 |   await this.page.fill('input[id="customer.firstName"]', userData.firstName);
  150 |   await this.page.fill('input[id="customer.lastName"]', userData.lastName);
  151 |   await this.page.fill('input[id="customer.address.street"]', userData.address);
  152 |   await this.page.fill('input[id="customer.address.city"]', userData.city);
  153 |   await this.page.fill('input[id="customer.address.state"]', userData.state);
  154 |   await this.page.fill('input[id="customer.address.zipCode"]', userData.zipCode);
  155 |   await this.page.fill('input[id="customer.phoneNumber"]', userData.phone);
  156 |   await this.page.fill('input[id="customer.ssn"]', userData.ssn);
  157 | 
  158 |   await this.page.fill('input[id="customer.username"]', specialUsername);
  159 | 
  160 |   await this.page.fill('input[id="customer.password"]', userData.password);
  161 | 
  162 |   await this.page.fill('input[id="repeatedPassword"]', userData.password);
  163 | 
  164 |   await this.page.screenshot({
  165 |     path: 'screenshots/special-character-username.png'
  166 |   });
  167 | 
  168 |   await this.page.click('input[value="Register"]');
  169 | }
  170 | 
  171 | async verifySpecialCharacterUsernameError() {
  172 | 
  173 |   logger.info('Validating username special character error');
  174 | 
  175 |   await expect(
  176 |     this.page.locator("//span[@id='customer.username.errors']"))
  177 | }
  178 |   
  179 | async registerWithMandatoryFieldsBlank(userData: any) {
  180 | 
  181 |   logger.info('Submitting form with mandatory fields blank');
  182 | 
  183 |   await this.page.fill('input[id="customer.phoneNumber"]', userData.phone);
  184 | 
  185 |   await this.page.screenshot({
  186 |     path: 'screenshots/mandatory-fields-blank.png'
  187 |   });
  188 | 
  189 |   await this.page.click('input[value="Register"]');
  190 | }
  191 | 
  192 | async verifyMandatoryFieldValidationMessages() {
  193 | 
  194 |   logger.info('Validating mandatory field validation messages');
  195 | 
  196 |   await expect(
  197 |     this.page.locator("//span[@id='customer.firstName.errors']")
  198 |   ).toContainText('First name is required.');
  199 | 
  200 |   await expect(
  201 |     this.page.locator("//span[@id='customer.lastName.errors']")
  202 |   ).toContainText('Last name is required.');
  203 | 
  204 |   await expect(
  205 |     this.page.locator("//span[@id='customer.address.street.errors']")
  206 |   ).toContainText('Address is required.');
  207 | 
  208 |   await expect(
  209 |     this.page.locator("//span[@id='customer.address.city.errors']")
  210 |   ).toContainText('City is required.');
  211 | 
  212 |   await expect(
  213 |     this.page.locator("//span[@id='customer.address.state.errors']")
  214 |   ).toContainText('State is required.');
  215 | 
  216 |   await expect(
  217 |     this.page.locator("//span[@id='customer.address.zipCode.errors']")
  218 |   ).toContainText('Zip Code is required.');
  219 | 
  220 |   await expect(
  221 |     this.page.locator("//span[@id='customer.ssn.errors']")
  222 |   ).toContainText('Social Security Number is required.');
  223 | 
  224 |   await expect(
  225 |     this.page.locator("//span[@id='customer.username.errors']")
  226 |   ).toContainText('Username is required.');
  227 | 
  228 |   await expect(
  229 |     this.page.locator("//span[@id='customer.password.errors']")
  230 |   ).toContainText('Password is required.');
  231 | 
  232 |   await expect(
  233 |     this.page.locator("//span[@id='repeatedPassword.errors']")
  234 |   ).toContainText('Password confirmation is required.');
  235 | }
  236 | 
  237 |  
  238 | 
  239 |  
  240 | }
```