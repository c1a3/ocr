pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

async function processPDF(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
  let text = '';

for (let i = 1; i <= pdf.numPages; i++) {
    setProgress(`Processing page ${i} of ${pdf.numPages}...`);
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
