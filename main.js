/* async function processFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (!file) {
    showError('Please select a file.');
    return;
  } */

  setProgress('Processing...');
  clearOutput();
  try {
    let text;
    if (file.type === 'application/pdf') {
      text = await processPDF(file);
    } else {
      text = await performOCR(file);
    }
    showOutput(text || 'No text found.');
  } catch (error) {
    showError('Error processing file: ' + error.message);
  } finally {
    clearProgress();
  }
}
