const { spawn } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const inputHtml = 'file:///' + path.resolve(__dirname, 'brochure-commerciale.html').replace(/\\/g, '/');
const outputPdf = path.resolve(__dirname, 'LBR_CONCEPT_Brochure_Commerciale_2026.pdf');

console.log('Input:', inputHtml);
console.log('Output:', outputPdf);

const args = [
  '--headless',
  '--disable-gpu',
  '--no-sandbox',
  '--run-all-compositor-stages-before-draw',
  '--no-pdf-header-footer',
  `--print-to-pdf=${outputPdf}`,
  inputHtml
];

const proc = spawn(chromePath, args);

proc.stdout.on('data', (d) => console.log('stdout:', d.toString()));
proc.stderr.on('data', (d) => console.error('stderr:', d.toString()));

proc.on('close', (code) => {
  console.log('Process exited with code:', code);
  const fs = require('fs');
  if (fs.existsSync(outputPdf)) {
    console.log('SUCCESS! File exists, size:', fs.statSync(outputPdf).size);
  } else {
    console.log('FAILURE! File not found.');
  }
});
