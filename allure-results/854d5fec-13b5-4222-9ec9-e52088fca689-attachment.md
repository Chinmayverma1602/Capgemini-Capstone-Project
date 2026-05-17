# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\parabank_API.spec.ts >> API Test Cases - Account Operations >> @api @smoke TC-API-02 Create CHECKING account — response should reflect correct type
- Location: tests\API\parabank_API.spec.ts:124:7

# Error details

```
Error: apiRequestContext.post: connect ECONNREFUSED ::1:9090
Call log:
  - → POST http://localhost:9090/parabank/services/bank/createAccount?customerId=12212&newAccountType=0&fromAccountId=12345
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: application/json
    - accept-encoding: gzip,deflate,br

```