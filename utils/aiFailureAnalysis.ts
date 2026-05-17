import fs from 'fs';
import path from 'path';

const reportPath =
  path.join(
    process.cwd(),
    'test-results',
    'results.json'
  );

const historyPath =
  path.join(
    process.cwd(),
    'reports',
    'history.json'
  );

const outputPath =
  path.join(
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

function analyzeReason(reason: string) {

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
    return 'Null/undefined data issue';
  }

  return 'Unknown failure pattern';
}

report.suites.forEach((suite: any) => {

  suite.specs?.forEach((spec: any) => {

    spec.tests?.forEach((test: any) => {

      test.results?.forEach((result: any) => {

        if (result.status === 'failed') {

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

let history: any[] = [];

if (fs.existsSync(historyPath)) {

  history = JSON.parse(
    fs.readFileSync(historyPath, 'utf8')
  );
}

history.push({
  date: new Date()
    .toLocaleString(),
  failures: failureCount
});

fs.writeFileSync(
  historyPath,
  JSON.stringify(history, null, 2)
);

const html = `
<html>

<head>
<title>AI Failure Analysis</title>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<style>

body{
font-family:Arial;
padding:20px;
}

table{
border-collapse:collapse;
width:100%;
margin-top:20px;
}

td,th{
border:1px solid #ccc;
padding:10px;
text-align:left;
}

th{
background:#f5f5f5;
}

</style>

</head>

<body>

<h1>AI Failure Analysis Report</h1>

<h2>Total Failures: ${failureCount}</h2>

<canvas id="historyChart"></canvas>

<table>

<tr>
<th>Test Case</th>
<th>Failure Reason</th>
<th>AI Analysis</th>
</tr>

${failures.map(f => `
<tr>
<td>${f.title}</td>
<td>${f.reason}</td>
<td>${f.aiReason}</td>
</tr>
`).join('')}

</table>

<script>

const labels =
${JSON.stringify(
  history.map(x => x.date)
)};

const data =
${JSON.stringify(
  history.map(x => x.failures)
)};

new Chart(
document.getElementById('historyChart'),
{
type:'line',
data:{
labels,
datasets:[{
label:'Failure Trend',
data
}]
}
}
);

</script>

</body>
</html>
`;

fs.writeFileSync(outputPath, html);

console.log(
  'AI Failure Report Generated'
);