import fs from 'fs';
import path from 'path';

const reportPath = path.join(
  process.cwd(),
  'test-results',
  'results.json'
);

const historyPath = path.join(
  process.cwd(),
  'reports',
  'history.json'
);

const outputPath = path.join(
  process.cwd(),
  'reports',
  'aiFailureReport.html'
);

if (!fs.existsSync(reportPath)) {
  console.log(
    'results.json not found. Run tests first.'
  );
  process.exit(1);
}

const report = JSON.parse(
  fs.readFileSync(reportPath, 'utf8')
);

let failureCount = 0;

const failures: any[] = [];

// AI Failure Reason Analysis
function analyzeReason(reason: string): string {

  const lower = reason.toLowerCase();

  if (
    lower.includes('timeout')
  ) {
    return 'Timing issue / slow loading element';
  }

  if (
    lower.includes('locator') ||
    lower.includes('element')
  ) {
    return 'Locator issue or DOM changed';
  }

  if (
    lower.includes('expect')
  ) {
    return 'Assertion mismatch';
  }

  if (
    lower.includes('null')
  ) {
    return 'Null or undefined data issue';
  }

  if (
    lower.includes('network')
  ) {
    return 'Network/API communication issue';
  }

  return 'Unknown failure pattern';
}

report.suites?.forEach((suite: any) => {

  suite.specs?.forEach((spec: any) => {

    spec.tests?.forEach((test: any) => {

      test.results?.forEach((result: any) => {

        if (
          result.status === 'failed'
        ) {

          failureCount++;

          const reason =
            result.error?.message ||
            'Unknown failure';

          failures.push({
            title: spec.title,
            reason,
            aiReason:
              analyzeReason(reason)
          });
        }
      });
    });
  });
});

// Read/Create History File
let history: any[] = [];

if (fs.existsSync(historyPath)) {

  try {
    history = JSON.parse(
      fs.readFileSync(
        historyPath,
        'utf8'
      )
    );
  } catch {
    history = [];
  }
}

history.push({
  date: new Date()
    .toLocaleString(),
  failures: failureCount
});

fs.writeFileSync(
  historyPath,
  JSON.stringify(
    history,
    null,
    2
  )
);

const html = `
<html>

<head>

<title>
AI Failure Analysis Report
</title>

<style>

body{
font-family:Arial,sans-serif;
padding:20px;
background:#f4f6f9;
}

h1{
color:#333;
}

.card{
background:white;
padding:20px;
border-radius:10px;
box-shadow:
0 2px 6px rgba(0,0,0,0.1);
margin-bottom:20px;
}

table{
border-collapse:collapse;
width:100%;
margin-top:15px;
background:white;
}

th,td{
border:1px solid #ddd;
padding:12px;
text-align:left;
}

th{
background:#f5f5f5;
}

.success{
color:green;
font-weight:bold;
}

.fail{
color:red;
font-weight:bold;
}

.warning{
color:#ff9800;
font-weight:bold;
}

</style>

</head>

<body>

<h1>
AI Failure Analysis Report
</h1>

<div class="card">

<h2>
Total Failures:
${failureCount}
</h2>

</div>

<div class="card">

<h2>
Failure Analysis
</h2>

<table>

<tr>
<th>Test Case</th>
<th>Failure Reason</th>
<th>AI Analysis</th>
</tr>

${
failures.length > 0
? failures.map(f => `
<tr>
<td>${f.title}</td>
<td>${f.reason}</td>
<td>${f.aiReason}</td>
</tr>
`).join('')
: `
<tr>
<td colspan="3"
class="success">
No Failures Found 
</td>
</tr>
`
}

</table>

</div>

<div class="card">

<h2>
Historical Analysis
</h2>

<table>

<tr>
<th>Date</th>
<th>Failure Count</th>
<th>Status</th>
</tr>

${history.map(h => `
<tr>
<td>${h.date}</td>
<td>${h.failures}</td>
<td class="${
h.failures > 0
? 'fail'
: 'success'
}">
${
h.failures > 0
? 'Failed'
: 'Passed'
}
</td>
</tr>
`).join('')}

</table>

</div>

</body>
</html>
`;

// Save HTML report
fs.writeFileSync(
  outputPath,
  html
);

console.log(
  'AI Failure Report Generated Successfully'
);