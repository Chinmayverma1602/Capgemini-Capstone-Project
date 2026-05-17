# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\accountValidation.spec.ts >> Validate Account Schema & Data Types
- Location: tests\API\accountValidation.spec.ts:10:5

# Error details

```
Error: apiRequestContext.get: connect ECONNREFUSED ::1:9090
Call log:
  - → GET http://localhost:9090/parabank/services/bank/accounts/12345
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: application/json
    - accept-encoding: gzip,deflate,br

```