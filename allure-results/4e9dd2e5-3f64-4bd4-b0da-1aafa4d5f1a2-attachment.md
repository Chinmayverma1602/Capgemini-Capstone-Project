# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\parabank_API.spec.ts >> API Test Cases - Account Operations >> @api @negative @regression TC-API-03 GET non-existent account — should return an error response
- Location: tests\API\parabank_API.spec.ts:204:7

# Error details

```
Error: apiRequestContext.get: connect ECONNREFUSED ::1:9090
Call log:
  - → GET http://localhost:9090/parabank/services/bank/accounts/999999999
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: application/json
    - accept-encoding: gzip,deflate,br

```