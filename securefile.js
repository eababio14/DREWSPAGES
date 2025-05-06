const fileInput = document.getElementById('fileInput');
const dropArea = document.getElementById('dropArea');
const fileNameDisplay = document.getElementById('fileName');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const passwordInput = document.getElementById('passwordInput');
const algorithmSelect = document.getElementById('algorithmSelect');
const expiryTimeInput = document.getElementById('expiryTime');
const progressBar = document.getElementById('progressBar');
const fileHash = document.getElementById('fileHash');
const qrCodeElement = document.getElementById('qrcode');
const fileMetadata = document.getElementById('fileMetadata');

// Handle drag and drop
dropArea.addEventListener('click', () => fileInput.click());
dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.style.borderColor = "#333";
});
dropArea.addEventListener('dragleave', () => dropArea.style.borderColor = "#4CAF50");
dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    fileInput.files = e.dataTransfer.files;
    handleFile(fileInput.files[0]);
});

// Handle file input
fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    handleFile(file);
});

// Handle file display
function handleFile(file) {
    if (file) {
        fileNameDisplay.textContent = `Selected File: ${file.name}`;
        computeFileHash(file);
        displayFileMetadata(file);
    } else {
        fileNameDisplay.textContent = 'No file selected';
        fileHash.textContent = 'File Hash: N/A';
        fileMetadata.innerHTML = '';
    }
}

// Display file metadata
function displayFileMetadata(file) {
    const metadata = `
        <p>Size: ${file.size} bytes</p>
        <p>Type: ${file.type}</p>
        <p>Last Modified: ${new Date(file.lastModified).toLocaleDateString()}</p>
    `;
    fileMetadata.innerHTML = metadata;
}

// Compute hash
async function computeFileHash(file) {
    const fileBuffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', fileBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    fileHash.textContent = `File Hash: ${hashHex}`;
}

// Password strength checker
passwordInput.addEventListener('input', function () {
    const strength = zxcvbn(passwordInput.value);
    const strengthMeter = document.getElementById('passwordStrengthMeter');
    const strengthText = document.getElementById('passwordStrength');
    
    strengthText.textContent = `Strength: ${strength.score}/4 - ${strength.feedback.suggestions.join(' ')}`;
    
    const colors = ['red', 'orange', 'yellow', 'green', 'green'];
    const widths = ['20%', '40%', '60%', '80%', '100%'];

    strengthMeter.style.backgroundColor = colors[strength.score];
    strengthMeter.style.width = widths[strength.score];
});

// Encrypt button
encryptBtn.addEventListener('click', async () => {
    const file = fileInput.files[0];
    if (!file) return alert("Please select a file.");
    const password = passwordInput.value;
    const algorithm = algorithmSelect.value;
    if (!password) return alert("Please enter a password.");

    try {
        const encryptedData = await encryptFile(file, password, algorithm);
        saveFile(file.name + '.encrypted', encryptedData);
       addToHistory("Encrypted", file);
    } catch (error) {
        console.error('Encryption error:', error);
        alert('An error occurred during encryption.');
    }
});

// Decrypt button
decryptBtn.addEventListener('click', async () => {
    const file = fileInput.files[0];
    if (!file) return alert("Please select a file.");
    const password = passwordInput.value;
    const algorithm = algorithmSelect.value;
    if (!password) return alert("Please enter a password.");

    try {
        const decryptedData = await decryptFile(file, password, algorithm);
        saveFile(file.name.replace('.encrypted', ''), decryptedData);
      addToHistory("Decrypted", file); 
    } catch (error) {
        console.error('Decryption error:', error);
        alert('An error occurred during decryption.');
    }
});

async function encryptFile(file, password, algorithm) {
    const fileBuffer = await file.arrayBuffer();

    const iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await getKey(password, algorithm);
    const encoder = new TextEncoder();
    const authTag = await crypto.subtle.digest("SHA-256", encoder.encode("AUTH" + password));

    const combinedBuffer = new Uint8Array(fileBuffer.byteLength + authTag.byteLength);
    combinedBuffer.set(new Uint8Array(fileBuffer), 0);
    combinedBuffer.set(new Uint8Array(authTag), fileBuffer.byteLength);

    const encrypted = await crypto.subtle.encrypt({ name: algorithm, iv }, key, combinedBuffer);
    return new Blob([iv, new Uint8Array(encrypted)]);
}


// Decryption
async function decryptFile(file, password, algorithm) {
    const fileBuffer = await file.arrayBuffer();
    const iv = fileBuffer.slice(0, 12);
    const encryptedContent = fileBuffer.slice(12);

    const key = await getKey(password, algorithm);

    let decrypted;
    try {
        decrypted = await crypto.subtle.decrypt({ name: algorithm, iv }, key, encryptedContent);
    } catch (err) {
        throw new Error("Incorrect password or corrupted file.");
    }

    const decryptedArray = new Uint8Array(decrypted);
    const authTagLength = 32;
    const fileContent = decryptedArray.slice(0, -authTagLength);
    const receivedTag = decryptedArray.slice(-authTagLength);

    const encoder = new TextEncoder();
    const expectedTagBuffer = await crypto.subtle.digest("SHA-256", encoder.encode("AUTH" + password));
    const expectedTag = new Uint8Array(expectedTagBuffer);

    for (let i = 0; i < authTagLength; i++) {
        if (receivedTag[i] !== expectedTag[i]) {
            throw new Error("Incorrect password. Authentication failed.");
        }
    }

    return new Blob([fileContent]);
}


// Key generation
async function getKey(password, algorithm) {
    const enc = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey(
        "raw", enc.encode(password),
        { name: "PBKDF2" }, false, ["deriveKey"]
    );
    return crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: enc.encode("salt"),
            iterations: 100000,
            hash: "SHA-256"
        },
        keyMaterial,
        { name: algorithm, length: 256 },
        false,
        ["encrypt", "decrypt"]
    );
}

// Save file
function saveFile(filename, blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// Progress bar update
function updateProgress(percentage) {
    progressBar.value = percentage;
}

// Clear board
function clearBoard() {
    fileInput.value = '';
    fileNameDisplay.textContent = 'No file selected';
    fileHash.textContent = 'File Hash: N/A';
    progressBar.value = 0;
    qrCodeElement.innerHTML = '';
    fileMetadata.innerHTML = '';
}

// Store encrypted/decrypted files in history
let encryptionHistory = [];

function addToHistory(action, file) {
    encryptionHistory.push({
        action,
        fileName: file.name,
        timestamp: new Date().toLocaleString()
    });
    displayHistory();
}

function displayHistory() {
    const historyElement = document.getElementById('history');
    historyElement.innerHTML = encryptionHistory.map(entry => {
        return `<p>${entry.action}: ${entry.fileName} at ${entry.timestamp}</p>`;
    }).join('');
}

document.getElementById("openModalBtn").onclick = function () {
    document.getElementById("infoModal").style.display = "flex";
};

document.querySelector(".closeBtn").onclick = function () {
    document.getElementById("infoModal").style.display = "none";
};

window.onclick = function (e) {
    if (e.target === document.getElementById("infoModal")) {
        document.getElementById("infoModal").style.display = "none";
    }
};
