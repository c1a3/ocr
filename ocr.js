pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

async function processPDF(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
  let text = '';

for (let i = 1; i <= pdf.numPages; i++) {
    setProgress(`Processing page ${i} of ${pdf.numPages}...`);
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
 
if (content.items.length > 0) {
      text += content.items.map(item => item.str).join(' ') + '\n';
    } else {
      const viewport = page.getViewport({ scale: 1.0 });
      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const context = canvas.getContext('2d');
  
      await page.render({ canvasContext: context, viewport }).promise;
      const imageData = canvas.toDataURL('image/png');
      const { data: { text: ocrText } } = await Tesseract.recognize(imageData, 'eng', {
        logger: m => console.log(m)
      });
      text += ocrText + '\n';
    }
}
 
