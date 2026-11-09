const fs = require('fs');
const { execSync } = require('child_process');

const htmlBrochure = fs.readFileSync('brochure-commerciale.html', 'utf8');

const headMatch = htmlBrochure.match(/<head>(.*?)<\/head>/s)[1];
const styleMatch = htmlBrochure.match(/<style>(.*?)<\/style>/s)[1];

function renderPage(pageNum) {
  const pageRegex = new RegExp(`(<section[^>]*id="page-${pageNum}"[\\s\\S]*?<\\/section>)`);
  const match = htmlBrochure.match(pageRegex);
  if (!match) return;

  const singleHtml = `<!DOCTYPE html>
<html>
<head>
  ${headMatch}
  <style>
    ${styleMatch}
    body { background: #f1f5f9; padding: 0; margin: 0; display: flex; justify-content: center; }
    .a4-page { margin: 0 !important; box-shadow: none !important; }
  </style>
</head>
<body>
  ${match[1]}
</body>
</html>`;

  fs.writeFileSync(`temp_page_${pageNum}.html`, singleHtml, 'utf8');
  execSync(`powershell -Command "Start-Process -FilePath 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe' -ArgumentList '--headless', '--disable-gpu', '--window-size=800,1131', '--screenshot=c:\\Users\\rayan\\Desktop\\lbrconcept-main\\page_${pageNum}.png', 'c:\\Users\\rayan\\Desktop\\lbrconcept-main\\temp_page_${pageNum}.html' -Wait"`);
}

const pagesToTest = [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 25];
for (const p of pagesToTest) {
  renderPage(p);
  console.log('Rendered page', p);
}
