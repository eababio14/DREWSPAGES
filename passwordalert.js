let timeout;
let countdownTime = 10 * 60; // Default: 10 minutes in seconds
let countdownDisplay = document.createElement("div");

// Create input field for user to set custom timer
let timerInput = document.createElement("input");
timerInput.type = "number";
timerInput.min = "1";
timerInput.placeholder = "Set timer (mins)";
timerInput.style.marginRight = "10px";
timerInput.style.padding = "5px";
timerInput.style.borderRadius = "5px";

// Create button to update timer
let setTimerButton = document.createElement("button");
setTimerButton.innerText = "Set Timer";
setTimerButton.style.padding = "5px 10px";
setTimerButton.style.borderRadius = "5px";
setTimerButton.style.background = "#28a745";
setTimerButton.style.color = "white";
setTimerButton.style.border = "none";
setTimerButton.style.cursor = "pointer";

// Style the countdown display
countdownDisplay.style.position = "fixed";
countdownDisplay.style.bottom = "10px";
countdownDisplay.style.right = "10px";
countdownDisplay.style.background = "rgba(0,0,0,0.7)";
countdownDisplay.style.color = "white";
countdownDisplay.style.padding = "10px";
countdownDisplay.style.borderRadius = "5px";
countdownDisplay.style.fontSize = "16px";

// Add elements to page
document.body.appendChild(timerInput);
document.body.appendChild(setTimerButton);
document.body.appendChild(countdownDisplay);

// Function to update countdown display
function updateCountdown() {
    let minutes = Math.floor(countdownTime / 60);
    let seconds = countdownTime % 60;
    countdownDisplay.innerText = `Auto logout in: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Function to reset the timer
function resetTimer() {
    clearTimeout(timeout);
    countdownTime = parseInt(localStorage.getItem("userTimer")) || 10 * 60; // Get user-defined timer or default 10 mins
    updateCountdown();
    timeout = setTimeout(logout, countdownTime * 1000);
}

// Function to decrement countdown
setInterval(() => {
    if (countdownTime > 0) {
        countdownTime--;
        updateCountdown();
    }
}, 1000);

// Function to set a custom timer
setTimerButton.addEventListener("click", () => {
    let userTime = parseInt(timerInput.value);
    if (!isNaN(userTime) && userTime > 0) {
        countdownTime = userTime * 60; // Convert minutes to seconds
        localStorage.setItem("userTimer", countdownTime); // Store in localStorage
        resetTimer();
    } else {
        alert("Please enter a valid number of minutes.");
    }
});

// Function to log out user
function logout() {
    alert("You have been logged out due to inactivity.");
    window.location.href = "logout.html"; // Change as needed
}

// Event listeners for resetting timer
document.addEventListener("mousemove", resetTimer);
document.addEventListener("keydown", resetTimer);

// Initialize countdown
resetTimer();

const cryptoUtils = {
    async deriveKey(pin) {
        const enc = new TextEncoder();
        const keyMaterial = await window.crypto.subtle.importKey(
            "raw",
            enc.encode(pin),
            { name: "PBKDF2" },
            false,
            ["deriveKey"]
        );

        return window.crypto.subtle.deriveKey(
            {
                name: "PBKDF2",
                salt: enc.encode("secure-salt"), // Consider using a unique salt per user
                iterations: 100000,
                hash: "SHA-256"
            },
            keyMaterial,
            { name: "AES-GCM", length: 256 },
            false,
            ["encrypt", "decrypt"]
        );
    },

    async encrypt(text, password) {
        const enc = new TextEncoder();
        const pwUtf8 = enc.encode(password);
        const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8);
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const alg = { name: 'AES-GCM', iv: iv };
        const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['encrypt']);
        const plainText = enc.encode(text);
        const cipherText = await crypto.subtle.encrypt(alg, key, plainText);

        const encryptedArray = new Uint8Array([...iv, ...new Uint8Array(cipherText)]);
        return btoa(String.fromCharCode(...encryptedArray));
    },

    async decrypt(encryptedData, pin) {
        const encryptedBytes = Uint8Array.from(atob(encryptedData), c => c.charCodeAt(0));
        const iv = encryptedBytes.slice(0, 12);
        const ciphertext = encryptedBytes.slice(12);

        const pwUtf8 = new TextEncoder().encode(pin);
        const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8);
        const alg = { name: 'AES-GCM', iv: iv };
        const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['decrypt']);

        const decrypted = await crypto.subtle.decrypt(alg, key, ciphertext);
        return new TextDecoder().decode(decrypted);
    }
};

function isStrongPassword(password) {
    const minLength = 12;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
}

function checkMasterPassword() {
    const storedPassword = localStorage.getItem('masterPassword');
    if (!storedPassword) {
        document.getElementById('setup-container').style.display = 'block';
    } else {
        document.getElementById('login-container').style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkMasterPassword();

   // Event handler for setting master password
document.getElementById('setup-password-btn').addEventListener('click', async () => {
    const newMasterPassword = document.getElementById('new-master-password').value.trim();
    if (!newMasterPassword) {
        alert("Please enter a master password.");
        return;
    }

    if (isStrongPassword(newMasterPassword)) {
        const pwnedCount = await checkPasswordPwned(newMasterPassword);

        if (pwnedCount > 0) {
            alert(`⚠️ This password has appeared in ${pwnedCount.toLocaleString()} data breaches. Please choose a more unique password.`);
            return;
        } else if (pwnedCount === -1) {
            alert("Couldn't check for breached passwords. Please try again later.");
            return;
        }

        const encryptedPassword = await cryptoUtils.encrypt(newMasterPassword, newMasterPassword);
        localStorage.setItem('masterPassword', encryptedPassword);
        alert("Master password set successfully!");
        document.getElementById('setup-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'block';
    } else {
        alert("Your master password must be at least 12 characters long, include upper and lower case letters, numbers, and special characters.");
    }
});
    
    document.getElementById('login-btn').addEventListener('click', async () => {
        const masterPassword = document.getElementById('master-password').value.trim();
        const storedPassword = localStorage.getItem('masterPassword');

        if (!masterPassword) {
            alert("Please enter your master password.");
            return;
        }

        if (!storedPassword) {
            alert("No master password found. Please set it up first.");
            return;
        }

        try {
            const decrypted = await cryptoUtils.decrypt(storedPassword, masterPassword);

            if (decrypted === masterPassword) {
                alert("Login successful!");
                document.getElementById('login-container').style.display = 'none';
                document.getElementById('dashboard').style.display = 'block';
                displayPasswords();
            } else {
                alert("Invalid master password. Please try again.");
            }
        } catch (e) {
            console.error(e);
            alert("Invalid master password or corrupted data.");
        }
    });

    document.getElementById('add-password-btn').addEventListener('click', async () => {
        const site = document.getElementById('site').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const notes = document.getElementById('notes').value;

        const pin = prompt("Set a PIN to encrypt this password:");

        if (site && username && password && pin) {
            const encryptedPassword = await cryptoUtils.encrypt(password, pin);
            const passwordList = JSON.parse(localStorage.getItem('passwords')) || [];
            passwordList.push({ site, username, encryptedPassword, notes });
            localStorage.setItem('passwords', JSON.stringify(passwordList));
            displayPasswords();
            clearInputFields();
        } else {
            alert("Please fill out all fields and enter a PIN.");
        }
    });

    document.getElementById('generate-password-btn').addEventListener('click', () => {
        const length = parseInt(document.getElementById('password-length').value) || 12;
        const generatedPassword = generateRandomPassword(length);
        document.getElementById('password').value = generatedPassword;
    });
});

function displayPasswords() {
    const passwordList = JSON.parse(localStorage.getItem('passwords')) || [];
    const passwordTable = document.getElementById('password-list');
    passwordTable.innerHTML = '';

    passwordList.forEach((item, index) => {
        const row = passwordTable.insertRow();
        row.insertCell(0).textContent = item.site;
        row.insertCell(1).textContent = item.username;

        const passwordCell = row.insertCell(2);
        const viewButton = document.createElement('button');
        viewButton.textContent = 'View Password';
        viewButton.onclick = async () => {
            const pin = prompt("Enter PIN to view this password:");
            try {
                const decrypted = await cryptoUtils.decrypt(item.encryptedPassword, pin);
                passwordCell.textContent = decrypted;
            } catch (e) {
                alert("Incorrect PIN or decryption error.");
            }
        };
        passwordCell.appendChild(viewButton);

        row.insertCell(3).textContent = item.notes;

        const actionsCell = row.insertCell(4);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deletePassword(index);
        actionsCell.appendChild(deleteButton);
    });
}

function clearInputFields() {
    document.getElementById('site').value = '';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('notes').value = '';
}

function deletePassword(index) {
    const passwordList = JSON.parse(localStorage.getItem('passwords')) || [];
    passwordList.splice(index, 1);
    localStorage.setItem('passwords', JSON.stringify(passwordList));
    displayPasswords();
}

function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;':\",.<>?/";
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}


// Search passwords
function searchPasswords() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const passwordList = JSON.parse(localStorage.getItem('passwords')) || [];
    const filteredPasswords = passwordList.filter(item => item.site.toLowerCase().includes(searchTerm));

    const passwordTable = document.getElementById('password-list');
    passwordTable.innerHTML = '';
    
    filteredPasswords.forEach((item, index) => {
        const row = passwordTable.insertRow();
        row.insertCell(0).textContent = item.site;
        row.insertCell(1).textContent = item.username;

        // View password button
        const passwordCell = row.insertCell(2);
        const viewButton = document.createElement('button');
        viewButton.textContent = 'View Password';
        viewButton.onclick = () => {
            const pin = prompt("Enter PIN to view this password:");
            try {
                const decrypted = crypto.decrypt(item.encryptedPassword, pin);
                passwordCell.textContent = decrypted;
            } catch (e) {
                alert("Incorrect PIN or decryption failed.");
            }
        };
        passwordCell.appendChild(viewButton);

        row.insertCell(3).textContent = item.notes;

        const actionsCell = row.insertCell(4);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deletePassword(index);
        actionsCell.appendChild(deleteButton);
    });
}




// Analyze password strength
document.getElementById('analyze-strength-btn').addEventListener('click', () => {
    const passwordToAnalyze = document.getElementById('strength-password').value;
    const strengthResult = analyzePasswordStrength(passwordToAnalyze);
    document.getElementById('strength-result').textContent = strengthResult;
});

// Password strength analysis function
function analyzePasswordStrength(password) {
    if (isStrongPassword(password)) {
        return "Strong password!";
    }
    return "Weak password. Consider using a longer password with a mix of letters, numbers, and symbols.";
}

// Check for master password on page load
window.onload = checkMasterPassword;

function logout() {
    // Clear session data
    localStorage.removeItem(''); // Remove the master password from localStorage
    
    // Optional: Clear other related data if necessary
    // localStorage.removeItem('passwords'); // Uncomment this if you want to clear saved passwords too
    
    // Redirect to login page or show the login container
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
    
    alert('You have been logged out successfully.');
}

document.getElementById('logout-btn').addEventListener('click', logout);

document.getElementById('setup-link').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    
    // Hide login container and show setup container
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('setup-container').style.display = 'block';
});

function checkMasterPassword() {
    const storedPassword = localStorage.getItem('masterPassword');
    if (!storedPassword) {
        // No master password set, show the setup container
        document.getElementById('setup-container').style.display = 'block';
        document.getElementById('login-container').style.display = 'none';
    } else {
        // Show login container
        document.getElementById('login-container').style.display = 'block';
        document.getElementById('setup-container').style.display = 'none';
    }
}

// Call this function on page load to show the correct container
window.onload = checkMasterPassword;

async function checkPasswordBreach(password) {
    const hash = await hashPassword(password);
    const response = await fetch(`https://api.pwnedpasswords.com/range/${hash.slice(0, 5)}`);
    const data = await response.text();
    return data.includes(hash.slice(5)); // True if breached
}

function exportPasswords() {
    const passwordList = localStorage.getItem('passwords');
    const blob = new Blob([passwordList], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "passwords_backup.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function importPasswords(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => localStorage.setItem('passwords', reader.result);
    reader.readAsText(file);
}

document.getElementById('setup-link').addEventListener('click', () => {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('setup-container').style.display = 'block';
});

async function sha1(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest("SHA-1", data);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, "0")).join("").toUpperCase();
}

// Function to check if the password has been pwned
async function checkPasswordPwned(password) {
    const enc = new TextEncoder();
    const hashed = await crypto.subtle.digest('SHA-1', enc.encode(password));
    const hashArray = Array.from(new Uint8Array(hashed))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('')
        .toUpperCase();

    const prefix = hashArray.slice(0, 5);
    const suffix = hashArray.slice(5);

    try {
        const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
        const text = await response.text();
        const found = text.split('\n').some(line => line.split(':')[0] === suffix);
        
        if (found) {
            addBreachAlert(password);
            return true;
        }
        return false;
    } catch (e) {
        console.error("Breach check failed:", e);
        return false;
    }
}


function addBreachAlert(password) {
    const alerts = JSON.parse(localStorage.getItem('breachAlerts')) || [];
    alerts.push({
        id: Date.now(),
        message: `⚠️ Possible breach detected for password: "${password}".`,
        timestamp: new Date().toLocaleString(),
        read: false
    });
    localStorage.setItem('breachAlerts', JSON.stringify(alerts));
}


document.getElementById('view-alerts-btn').addEventListener('click', () => {
    const alertBox = document.getElementById('alert-inbox');
    const alertList = document.getElementById('alert-list');
    alertList.innerHTML = '';

    const alerts = JSON.parse(localStorage.getItem('breachAlerts')) || [];

    if (alerts.length === 0) {
        alertList.innerHTML = '<li>No alerts.</li>';
    } else {
        alerts.forEach((alert, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${alert.timestamp}</strong>: ${alert.message}
                <button onclick="markAlertAsRead(${index})">Mark as Read</button>
                <button onclick="deleteAlert(${index})">Delete</button>
            `;
            alertList.appendChild(li);
        });
    }

    alertBox.style.display = 'block';
});

function closeAlertInbox() {
    document.getElementById('alert-inbox').style.display = 'none';
}

function markAlertAsRead(index) {
    const alerts = JSON.parse(localStorage.getItem('breachAlerts')) || [];
    alerts[index].read = true;
    localStorage.setItem('breachAlerts', JSON.stringify(alerts));
    document.getElementById('view-alerts-btn').click(); // Refresh inbox
}

function deleteAlert(index) {
    const alerts = JSON.parse(localStorage.getItem('breachAlerts')) || [];
    alerts.splice(index, 1);
    localStorage.setItem('breachAlerts', JSON.stringify(alerts));
    document.getElementById('view-alerts-btn').click(); // Refresh inbox
}

