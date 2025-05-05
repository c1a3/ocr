function setProgress(message) {
  document.getElementById('progress').textContent = message;
}

function clearProgress() {
  document.getElementById('progress').textContent = '';
}

function showOutput(text) {
  document.getElementById('output').textContent = text;
}
