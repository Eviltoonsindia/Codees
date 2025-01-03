function convertFile() {
  const fileInput = document.getElementById('fileInput');
  const outputBox = document.getElementById('output');

  if (fileInput.files.length === 0) {
    alert('Please select a file.');
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const binaryData = event.target.result; // File content as binary
    const encodedData = encodeBinary(binaryData);
    outputBox.value = encodedData;
  };

  reader.onerror = function() {
    alert('Error reading file.');
  };

  reader.readAsBinaryString(file);
}

function encodeBinary(data) {
  let encoded = '';
  const zeroMapping = ['A', 'B', 'C', 'D'];
  const oneMapping = ['Q', 'K', 'L', 'O'];

  for (const char of data) {
    const binary = char.charCodeAt(0).toString(2).padStart(8, '0'); // Convert to binary
    for (const bit of binary) {
      if (bit === '0') {
        encoded += zeroMapping[Math.floor(Math.random() * zeroMapping.length)];
      } else {
        encoded += oneMapping[Math.floor(Math.random() * oneMapping.length)];
      }
    }
    encoded += '\n'; // Add a line break after each character
  }

  return encoded;
          }
