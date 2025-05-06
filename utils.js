function setProgress(message) {
  document.getElementById('progress').textContent = message;
}

function clearProgress() {
  document.getElementById('progress').textContent = '';
}

function showOutput(text) {
  document.getElementById('output').textContent = text;
}

function clearOutput() {
  document.getElementById('output').textContent = '';
}

function showError(message) {
  alert(message);
  console.error(message);
}
