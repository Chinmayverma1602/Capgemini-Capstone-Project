# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank_ui.spec.ts >> UI Test Cases >> TC-AC-UI-01 Create New User Account with Valid Data
- Location: tests\parabank_ui.spec.ts:10:7

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
    14 × locator resolved to <h1 class="title">Signing up is easy!</h1>
       - unexpected value "Signing up is easy!"

```

```yaml
- heading "Signing up is easy!" [level=1]
```

# Test source

```ts
  41  |   }
  42  | 
  43  | 
  44  |   async registerUserWithMismatchedPassword(userData: any, wrongPassword: string) {
  45  | 
  46  |   logger.info('Entering registration details with mismatched passwords');
  47  | 
  48  |   await this.page.fill('input[id="customer.firstName"]', userData.firstName);
  49  |   await this.page.fill('input[id="customer.lastName"]', userData.lastName);
  50  |   await this.page.fill('input[id="customer.address.street"]', userData.address);
  51  |   await this.page.fill('input[id="customer.address.city"]', userData.city);
  52  |   await this.page.fill('input[id="customer.address.state"]', userData.state);
  53  |   await this.page.fill('input[id="customer.address.zipCode"]', userData.zipCode);
  54  |   await this.page.fill('input[id="customer.phoneNumber"]', userData.phone);
  55  |   await this.page.fill('input[id="customer.ssn"]', userData.ssn);
  56  | 
  57  |   await this.page.fill('input[id="customer.username"]', userData.username);
  58  |   await this.page.fill('input[id="customer.password"]', userData.password);
  59  | 
  60  |   await this.page.fill('input[id="repeatedPassword"]', wrongPassword);
  61  | 
  62  |   await this.page.screenshot({
  63  |     path: 'screenshots/mismatched-password.png'
  64  |   });
  65  | 
  66  |   await this.page.click('input[value="Register"]');
  67  | }
  68  | 
  69  | async verifyPasswordMismatchError() {
  70  | 
  71  |   logger.info('Validating password mismatch error');
  72  | 
  73  |   await expect(
  74  |     this.page.locator("//span[@id='repeatedPassword.errors']")
  75  |   )
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
> 141 |     ).toContainText('Welcome');
      |       ^ Error: expect(locator).toContainText(expected) failed
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
  175 |     this.page.locator("//span[@id='customer.username.errors']"))
  176 | }
  177 |   
  178 | async registerWithMandatoryFieldsBlank(userData: any) {
  179 | 
  180 |   logger.info('Submitting form with mandatory fields blank');
  181 | 
  182 |   // Filling only optional/non-mandatory fields
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