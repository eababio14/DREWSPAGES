const canvas = document.getElementById('logoCanvas');
const ctx = canvas.getContext('2d');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const descriptionInput = document.getElementById('description');
const secondaryTextInput = document.getElementById('secondaryText');
const colorPicker = document.getElementById('colorPicker');
const fontSelectorMain = document.getElementById('fontSelectorMain');
const fontSelectorSymbol = document.getElementById('fontSelectorSymbol');
const fontSizeMain = document.getElementById('fontSizeMain');
const fontSizeSymbol = document.getElementById('fontSizeSymbol');
const borderToggle = document.getElementById('borderToggle');
const textShadowToggle = document.getElementById('textShadowToggle');
const symbolSelector = document.getElementById('symbolSelector');
const symbolRotation = document.getElementById('symbolRotation');
const randomLogoBtn = document.getElementById('randomLogoBtn');
const gradientToggle = document.getElementById('gradientToggle');
const textOutlineToggle = document.getElementById('textOutlineToggle');
const glowToggle = document.getElementById('glowToggle');
const imageUpload = document.getElementById('imageUpload');
const imgX = document.getElementById('imgX');
const imgY = document.getElementById('imgY');
const imgWidth = document.getElementById('imgWidth');
const imgHeight = document.getElementById('imgHeight');
const curveText = document.getElementById('curveText');
const resetBtn = document.getElementById('resetBtn');
const symbolScale = document.getElementById('symbolScale');
const qrcodeCheckbox = document.getElementById('qrcodeCheckbox');
const urlInput = document.getElementById('urlInput');


// Populate Symbol Selector
const symbols = [
  '★', '✦', '⚡', '🔥', '✔', '💡', '🔆', '🌟', '🌙', '🌈', '🏆', '🎨', '🎯', 
  '🎵', '📢', '🛡', '🔮', '🕹', '🚀', '💎', '📡', '🔗', '📌', '🎬', '🔔', 
  '🔑', '🌍', '🖥', '💾', '☁', '🔓', '🧿', '🛠', '📊', '🎖', '🚨', '🖊', 
  '🧩', '🧪', '⚙', '🕵', '🔍', '💰', '🗂', '🛜', '🛰', '🦾', '👾', '🔰',
  '🔨', '💡', '📡', '💼', '🛑', '🔄', '🖱', '🔬', '📜', '💻', '🎛', '🚦',
  '🛎', '📥', '📤', '🎚', '🔊', '🎵', '🎼', '💠', '⚖', '🗳', '📝', '🛃', 
  '🏗', '🔍', '🛠', '🔎', '📶', '🌐', '🕶', '🔏', '🗝', '📎', '🔗', '🏁', 
  '🎟', '🏅', '📍', '⏳', '⌛', '🕒', '🕰', '📊', '📈', '📉', '📡', '💬', 
  '📑', '📕', '🛡️', '🛸', '🚔', '💣', '🧱', '🔩', '🗜', '📱', '📞', '📧',
  '🐱', '🐶', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🦄', '🐸', '🐯', '🐷', 
  '🐒', '🐧', '🐤', '🐦', '🐙', '🦖', '🦕', '👦', '👧', '👨‍🚀', '👩‍🎨', 
  '👽', '🤖', '👻', '💀', '🎭', '🦸‍♂️', '🦸‍♀️', '🦹‍♂️', '🦹‍♀️', '🕵️‍♂️'
];

symbols.forEach(symbol => {
    let option = document.createElement("option");
    option.value = symbol;
    option.textContent = symbol;
    symbolSelector.appendChild(option);
});

function generateLogo() {
    const desc = descriptionInput.value || "Creative Logo";
    const secondaryText = secondaryTextInput.value || "";
    const chosenColor = colorPicker.value;
    const chosenFontMain = fontSelectorMain.value;
    const chosenFontSymbol = fontSelectorSymbol.value;
    const chosenSizeMain = fontSizeMain.value;
    const chosenSizeSymbol = fontSizeSymbol.value;
    const chosenSymbol = symbolSelector.value || "★";
    const addBorder = borderToggle.checked;
    const addShadow = textShadowToggle.checked;
    const addGradient = gradientToggle.checked;
    const addTextOutline = textOutlineToggle.checked;
    const addGlow = glowToggle.checked;
    const rotationAngle = parseInt(symbolRotation.value) || 0;
    const scaleFactor = parseFloat(symbolScale.value);
    const urlForQRCode = urlInput.value || "";

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background gradient or solid color
    if (addGradient) {
        let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(1, chosenColor);
        ctx.fillStyle = gradient;
    } else {
        ctx.fillStyle = chosenColor;
    }
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000";
    ctx.font = `bold ${chosenSizeMain}px ${chosenFontMain}`;
    ctx.textAlign = "center";

    // Apply shadow if enabled
    if (addShadow) {
        ctx.shadowColor = "rgba(0,0,0,0.5)";
        ctx.shadowOffsetX = 4;
        ctx.shadowOffsetY = 4;
        ctx.shadowBlur = 6;
    } else {
        ctx.shadowColor = "transparent";
    }

    // Apply text outline if enabled
    if (addTextOutline) {
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.strokeText(desc, canvas.width / 2, canvas.height / 2 - 40);
    }

    // Apply glow if enabled
    if (addGlow) {
        ctx.shadowColor = "yellow";
        ctx.shadowBlur = 10;
    }

    // Draw main text (curved or straight)
    if (curveText.checked) {
        drawCurvedText(ctx, desc, canvas.width / 2, canvas.height / 2, 100);
    } else {
        ctx.fillText(desc, canvas.width / 2, canvas.height / 2 - 40);
    }

    // Draw secondary text
    if (secondaryText) {
        ctx.font = `italic ${chosenSizeSymbol}px ${chosenFontSymbol}`;
        ctx.fillText(secondaryText, canvas.width / 2, canvas.height / 2);
    }

    // Handle QR code generation
    if (qrcodeCheckbox.checked && urlForQRCode) {
        generateQRCode(urlForQRCode);
    }

    // Handle image upload
    if (imageUpload.files.length > 0) {
        const file = imageUpload.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function () {
                const x = parseInt(imgX.value) || canvas.width / 2 - 25;
                const y = parseInt(imgY.value) || canvas.height / 2 + 20;
                const width = parseInt(imgWidth.value) || 50;
                const height = parseInt(imgHeight.value) || 50;
                ctx.drawImage(img, x, y, width, height);
            };
        };
        reader.readAsDataURL(file);
    } else {
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2 + 50);
        ctx.rotate((rotationAngle * Math.PI) / 180);
        ctx.scale(scaleFactor, scaleFactor);
        ctx.font = `bold ${chosenSizeSymbol}px ${chosenFontSymbol}`;
        ctx.fillText(chosenSymbol, 0, 0);
        ctx.restore();
    }
}

// Function to draw text on a circular path
function drawCurvedText(ctx, text, centerX, centerY, radius, startAngle = -Math.PI / 0.5) {
    const angleStep = Math.PI / text.length;
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(startAngle);  // Allow user to define the starting angle

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        ctx.save();
        const charAngle = i * angleStep - (angleStep * (text.length / 2));
        ctx.rotate(charAngle);
        ctx.translate(0, -radius);
        ctx.fillText(char, 0, 0);
        ctx.restore();
    }

    ctx.restore();
}



// Random Logo Generator
randomLogoBtn.addEventListener('click', function () {
    fontSelectorMain.value = ["Arial", "Verdana", "Courier", "Georgia", "Tahoma", "Trebuchet MS", "Times New Roman", "Georgia"][Math.floor(Math.random() * 4)];
    fontSelectorSymbol.value = ["Arial", "Verdana", "Courier", "Georgia", "Tahoma", "Trebuchet MS", "Times New Roman"][Math.floor(Math.random() * 4)];
    colorPicker.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
    descriptionInput.value = "Random Logo";
    secondaryTextInput.value = [
    // Tech & AI
    "Innovation", "Tech", "Vision", "AI-Driven", "Neural", "Quantum", "HyperTech", "Digital", "Futuristic", "NextGen",
    "Cyber", "DataCore", "Nano", "CodeCraft", "IntelliGen", "Byte", "Meta", "CloudSphere", "Smart", "Xcelerate",

    // Business & Consulting
    "Strategic", "Enterprise", "Leadership", "Solutions", "Growth", "Consulting", "Synergy", "Global", "Success", "Elite",
    "Pivot", "Elevate", "Ascend", "Prime", "Momentum", "Achieve", "Impact", "Dominate", "Profit", "Expand",

    // Creative & Design
    "Aesthetic", "Artistic", "Bold", "Expressive", "Visualize", "Design", "Creative", "Modern", "Minimal", "Vibrant",
    "Flow", "Inspire", "Canvas", "Doodle", "Abstract", "Fusion", "Illusion", "Imagine", "Iconic", "Horizon",

    // Cybersecurity & IT
    "Secure", "Encrypted", "Firewall", "CyberShield", "Fortify", "Defender", "Lockdown", "ThreatShield", "Stealth", "CodeSafe",
    "IronWall", "BreachProof", "Sentinel", "Guardian", "DarkWeb", "CyberSentinel", "Hex", "FirewallX", "Anonymize", "Cloak",

    // Finance & Investment
    "Capital", "Wealth", "Prosper", "Legacy", "Venture", "Equity", "GrowthFund", "Titan", "Invest", "MoneyMatters",
    "Revenue", "StockRise", "EliteFunds", "Bank", "RiskControl", "Assets", "Opulence", "FinancialEdge", "GoldStandard", "ROI",

    // General & Abstract
    "Dynamic", "Elevate", "Revolution", "Impact", "Inspire", "Empower", "Pioneer", "Catalyst", "Brilliance", "Infinity",
    "Alpha", "Summit", "Momentum", "Strive", "Trailblazer", "Horizon", "Breakthrough", "Epoch", "Vortex", "Ascension",

    // Science & Medical
    "BioGen", "NeuroTech", "Genome", "MedicalEdge", "Cure", "Breakthrough", "Wellness", "MediCore", "HealthFirst", "Precision",
    "Anatomy", "Cellular", "NanoMed", "PharmaGen", "Biotech", "LifeScience", "StemCell", "CureX", "Pulse", "Regeneration",

    // Adventure & Outdoors
    "Summit", "Expedition", "Wander", "Trek", "Explore", "Adventure", "Trail", "Pioneer", "Quest", "Elevation",
    "Wild", "Wilderness", "Survivor", "Venture", "Peak", "Mountaineer", "Uncharted", "Odyssey", "Roam", "Nomad",

    // Energy & Sustainability
    "Eco", "Solar", "GreenTech", "Renewable", "Sustain", "Earth", "ZeroCarbon", "CleanEnergy", "Nature", "Hydro",
    "Geothermal", "EcoHorizon", "GreenFuture", "WindPower", "EcoSphere", "SolarX", "BluePlanet", "Gaia", "Harmony", "Evolve"
][Math.floor(Math.random() * 120)];

    generateLogo();
});

generateBtn.addEventListener("click", generateLogo);

downloadBtn.addEventListener('click', function () {
    const link = document.createElement('a');
    link.download = 'logo.png';
    link.href = canvas.toDataURL("image/png");
    link.click();
});

resetBtn.addEventListener('click', function () {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Reset all input fields to their default values
    descriptionInput.value = "";
    secondaryTextInput.value = "";
    colorPicker.value = "#000000"; // Default black color
    fontSelectorMain.value = "Arial"; // Default font
    fontSelectorSymbol.value = "Arial"; // Default font
    fontSizeMain.value = 30; // Default font size
    fontSizeSymbol.value = 20; // Default font size
    borderToggle.checked = false;
    textShadowToggle.checked = false;
    gradientToggle.checked = false;
    textOutlineToggle.checked = false;
    glowToggle.checked = false;
    symbolSelector.value = "★"; // Default symbol
    symbolRotation.value = 0; // Default rotation
    curveText.checked = false; // Default to not curve the text
    imageUpload.value = ""; // Clear image upload
    imgX.value = ""; // Reset image X position
    imgY.value = ""; // Reset image Y position
    imgWidth.value = ""; // Reset image width
    imgHeight.value = ""; // Reset image height
});


generateLogo();

function generateQRCode(url) {
    const qrCodeSize = 100; // Size of the QR code
    const qrCode = new QRCode(canvas, {
        text: url,
        width: qrCodeSize,
        height: qrCodeSize,
        correctLevel: QRCode.CorrectLevel.H,
    });

    const qrCanvas = qrCode._oDrawing._elCanvas;
    const qrContext = qrCanvas.getContext('2d');
    const xPos = canvas.width - qrCodeSize - 10; // Position it at the bottom right
    const yPos = canvas.height - qrCodeSize - 10;
    ctx.drawImage(qrCanvas, xPos, yPos, qrCodeSize, qrCodeSize);
}

function signOut() {
    // Clear any stored authentication data (localStorage/sessionStorage)
    localStorage.removeItem("authToken"); // Adjust based on your auth implementation
    sessionStorage.removeItem("authToken"); 

    // Redirect to authentication page
    window.location.href = "auth.html"; // Change to your auth page URL
}
