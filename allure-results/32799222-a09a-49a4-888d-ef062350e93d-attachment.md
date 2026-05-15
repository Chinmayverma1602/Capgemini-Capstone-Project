# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parabank_ui.spec.ts >> UI Test Cases >> TC-LOGIN-02 Login with Invalid Password
- Location: tests\parabank_ui.spec.ts:35:7

# Error details

```
Error: browserContext.close: Test ended.
Browser logs:

<launching> C:\Users\chinm\AppData\Local\ms-playwright\firefox-1522\firefox\firefox.exe -no-remote -wait-for-browser -foreground -profile C:\Users\chinm\AppData\Local\Temp\playwright_firefoxdev_profile-7LegaG -juggler-pipe -silent
<launched> pid=12048
[pid=12048][err] JavaScript warning: resource://services-settings/Utils.sys.mjs, line 119: unreachable code after return statement
[pid=12048][out] 
[pid=12048][out] Juggler listening to the pipe
[pid=12048][out] console.error: "Warning: unrecognized command line flag" "-foreground"
```