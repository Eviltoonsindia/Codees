function convertFile() {
  const fileInput = document.getElementById('fileInput');
  const outputBox = document.getElementById('output');

  if (fileInput.files.length === 0) {
    alert('Please select a file.');
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  // Read the file as an ArrayBuffer for binary data
  reader.onload = function (event) {
    const arrayBuffer = event.target.result;
    const byteArray = new Uint8Array(arrayBuffer);
    const binaryData = Array.from(byteArray)
      .map(byte => byte.toString(2).padStart(8, '0')) // Convert each byte to binary
      .join(''); // Combine into one long binary string

    const encodedData = encodeBinary(binaryData);
    outputBox.value = encodedData;
  };

  reader.onerror = function () {
    alert('Error reading file.');
  };

  reader.readAsArrayBuffer(file);
}

function encodeBinary(data) {
  let encoded = '';
  const zeroMapping = ['A', 'B', 'C', 'D'];
  const oneMapping = ['Q', 'K', 'L', 'O'];

  for (const bit of data) {
    if (bit === '0') {
      encoded += zeroMapping[Math.floor(Math.random() * zeroMapping.length)];
    } else if (bit === '1') {
      encoded += oneMapping[Math.floor(Math.random() * oneMapping.length)];
    }
  }

  return encoded;
        }
