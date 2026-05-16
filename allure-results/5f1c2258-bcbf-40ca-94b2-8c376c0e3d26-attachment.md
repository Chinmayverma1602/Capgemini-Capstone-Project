# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank_UI.spec.ts >> UI Test Cases >> TC-AC-UI-01 Create New User Account with Valid Data
- Location: tests\parabank_UI.spec.ts:6:7

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
  66  |     await this.page.fill(
  67  |       this.selectors.firstName,
  68  |       userData.firstName
  69  |     );
  70  | 
  71  |     await this.page.fill(
  72  |       this.selectors.lastName,
  73  |       userData.lastName
  74  |     );
  75  | 
  76  |     await this.page.fill(
  77  |       this.selectors.address,
  78  |       userData.address
  79  |     );
  80  | 
  81  |     await this.page.fill(
  82  |       this.selectors.city,
  83  |       userData.city
  84  |     );
  85  | 
  86  |     await this.page.fill(
  87  |       this.selectors.state,
  88  |       userData.state
  89  |     );
  90  | 
  91  |     await this.page.fill(
  92  |       this.selectors.zipCode,
  93  |       userData.zipCode
  94  |     );
  95  | 
  96  |     await this.page.fill(
  97  |       this.selectors.phone,
  98  |       userData.phone
  99  |     );
  100 | 
  101 |     await this.page.fill(
  102 |       this.selectors.ssn,
  103 |       userData.ssn
  104 |     );
  105 | 
  106 |     await this.page.fill(
  107 |       this.selectors.username,
  108 |       username || userData.username
  109 |     );
  110 | 
  111 |     await this.page.fill(
  112 |       this.selectors.password,
  113 |       userData.password
  114 |     );
  115 | 
  116 |     await this.page.fill(
  117 |       this.selectors.confirmPassword,
  118 |       confirmPassword || userData.password
  119 |     );
  120 |   }
  121 | 
  122 |   private async takeScreenshot(fileName: string) {
  123 | 
  124 |     await this.page.screenshot({
  125 |       path: `screenshots/${fileName}.png`,
  126 |     });
  127 | 
  128 |     logger.info(`Screenshot captured: ${fileName}.png`);
  129 |   }
  130 | 
  131 |   private async clickRegisterButton() {
  132 | 
  133 |     await this.page.click(this.selectors.registerButton);
  134 | 
  135 |     logger.info('Clicked Register button');
  136 |   }
  137 | 
  138 |   private async verifyErrorMessage(
  139 |     locator: string,
  140 |     expectedText: string
  141 |   ) {
  142 | 
  143 |     await expect(
  144 |       this.page.locator(locator)
  145 |     ).toContainText(expectedText);
  146 |   }
  147 | 
  148 | 
  149 |   async registerUser(userData: any) {
  150 | 
  151 |     logger.info('Registering new user');
  152 | 
  153 |     await this.fillRegistrationForm(userData);
  154 | 
  155 |     await this.takeScreenshot('register-filled');
  156 | 
  157 |     await this.clickRegisterButton();
  158 |   }
  159 | 
  160 |   async verifyRegistrationSuccess() {
  161 | 
  162 |     logger.info('Validating successful registration');
  163 | 
  164 |     await expect(
  165 |       this.page.locator(this.selectors.pageTitle)
> 166 |     ).toContainText('Welcome');
      |       ^ Error: expect(locator).toContainText(expected) failed
  167 |   }
  168 | 
  169 | 
  170 |   async registerUserWithMismatchedPassword(
  171 |     userData: any,
  172 |     wrongPassword: string
  173 |   ) {
  174 | 
  175 |     logger.info(
  176 |       'Registering user with mismatched password'
  177 |     );
  178 | 
  179 |     await this.fillRegistrationForm(userData, {
  180 |       confirmPassword: wrongPassword,
  181 |     });
  182 | 
  183 |     await this.takeScreenshot(
  184 |       'mismatched-password'
  185 |     );
  186 | 
  187 |     await this.clickRegisterButton();
  188 |   }
  189 | 
  190 |   async verifyPasswordMismatchError() {
  191 | 
  192 |     logger.info(
  193 |       'Validating password mismatch error'
  194 |     );
  195 | 
  196 |     await this.verifyErrorMessage(
  197 |       "//span[@id='repeatedPassword.errors']",
  198 |       'Passwords did not match.'
  199 |     );
  200 |   }
  201 | 
  202 | 
  203 |   async registerWithBlankFields() {
  204 | 
  205 |     logger.info(
  206 |       'Submitting registration form with blank fields'
  207 |     );
  208 | 
  209 |     await this.takeScreenshot(
  210 |       'blank-registration-form'
  211 |     );
  212 | 
  213 |     await this.clickRegisterButton();
  214 |   }
  215 | 
  216 |   async verifyBlankFieldValidationErrors() {
  217 | 
  218 |     logger.info(
  219 |       'Validating blank field error messages'
  220 |     );
  221 | 
  222 |     await this.verifyMandatoryFieldErrors();
  223 |   }
  224 | 
  225 | 
  226 |   async registerWithSpecialCharacterUsername(
  227 |     userData: any,
  228 |     specialUsername: string
  229 |   ) {
  230 | 
  231 |     logger.info(
  232 |       'Registering with special character username'
  233 |     );
  234 | 
  235 |     await this.fillRegistrationForm(userData, {
  236 |       username: specialUsername,
  237 |     });
  238 | 
  239 |     await this.takeScreenshot(
  240 |       'special-character-username'
  241 |     );
  242 | 
  243 |     await this.clickRegisterButton();
  244 |   }
  245 | 
  246 |   async verifySpecialCharacterUsernameError() {
  247 | 
  248 |     logger.info(
  249 |       'Validating username format error'
  250 |     );
  251 | 
  252 |     await expect(
  253 |       this.page.locator(
  254 |         "//span[@id='customer.username.errors']"
  255 |       )
  256 |     ).toBeVisible();
  257 |   }
  258 |   
  259 | 
  260 |   async registerWithMandatoryFieldsBlank(
  261 |     userData: any
  262 |   ) {
  263 | 
  264 |     logger.info(
  265 |       'Submitting form with mandatory fields blank'
  266 |     );
```