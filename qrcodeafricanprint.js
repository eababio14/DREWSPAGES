// Initialize global variables for logo
let uploadedLogo = null;

// Preview the uploaded logo
function previewLogo() {
    const logoInput = document.getElementById('logoUpload');
    const file = logoInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            uploadedLogo = e.target.result; // Store the image data
            const imgElement = document.getElementById('logoPreview');
            imgElement.src = uploadedLogo; // Display logo
            imgElement.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

function addBorderToQRCode(qrCanvas, borderWidth, borderColor, borderStyle) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size including border
    canvas.width = qrCanvas.width + (2 * borderWidth);
    canvas.height = qrCanvas.height + (2 * borderWidth);

    // Draw border based on selected style
    ctx.lineWidth = borderWidth;
    ctx.strokeStyle = borderColor;
    ctx.fillStyle = borderColor;

    // Apply border style
    switch (borderStyle) {
        case 'dashed':
            ctx.setLineDash([10, 5]);
            break;
        case 'dotted':
            ctx.setLineDash([2, 2]);
            break;
        case 'double':
            ctx.lineWidth = borderWidth * 2; // Double thickness
            break;
        case 'groove':
        case 'ridge':
        case 'inset':
        case 'outset':
            // These styles are complex in CSS and not directly replicable in canvas.
            // As an alternative, we can simulate an embossed effect.
            ctx.shadowColor = borderColor;
            ctx.shadowBlur = borderWidth / 2;
            break;
        case 'none':
        case 'hidden':
            return qrCanvas; // No border needed
        default:
            ctx.setLineDash([]); // Solid border (default)
    }

    // Draw the border
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Reset shadow for normal QR code rendering
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;

    // Draw the original QR code centered inside the border
    ctx.drawImage(qrCanvas, borderWidth, borderWidth);

    return canvas;
}

function generateQRCode() {
    const qrText = document.getElementById('qrText').value.trim();
    const qrCodeContainer = document.getElementById('qrCodeContainer');

    if (!qrText) {
        alert('Please enter text or URL to generate a QR code.');
        return;
    }

    qrCodeContainer.innerHTML = ''; // Clear previous QR code
    const qrSize = parseInt(document.getElementById('qrSize').value) || 256;
    
    // Create a QR Code instance
    const qrCanvas = document.createElement('canvas');
    const qr = new QRCode(qrCanvas, {
        text: qrText,
        width: qrSize,
        height: qrSize,
        colorDark: document.getElementById('qrFgColor').value,
        colorLight: document.getElementById('qrBgColor').value,
        correctLevel: QRCode.CorrectLevel.H,
       
    });

    setTimeout(() => {
        const qrCanvasElement = qrCanvas.getElementsByTagName('canvas')[0];
        if (!qrCanvasElement) {
            console.error("QR code canvas not found!");
            return;
        }
        

        const borderWidth = document.getElementById('borderWidth').value || 10;
        const borderColor = document.getElementById('borderColor').value || '#000000';
        const borderStyle = document.getElementById('borderStyle').value || 'solid';

        const finalCanvas = addBorderToQRCode(qrCanvasElement, borderWidth, borderColor, borderStyle);

        const fileNameInput = document.getElementById('customFileName');
        const customName = fileNameInput ? fileNameInput.value.trim() : "";

        if (customName) {
            addCustomNameToQRCode(finalCanvas, customName, (newCanvas) => {
                finalizeQRCode(newCanvas);
            });
        } else {
            finalizeQRCode(finalCanvas);
        }

        function finalizeQRCode(finalCanvas) {
            if (uploadedLogo) {
                overlayLogoOnQRCode(finalCanvas, (dataUrlWithLogo) => {
                    let tempCanvas = document.createElement('canvas');
                    let ctx = tempCanvas.getContext('2d');
                    let tempImage = new Image();
                    tempImage.onload = function () {
                        tempCanvas.width = tempImage.width;
                        tempCanvas.height = tempImage.height;
                        ctx.drawImage(tempImage, 0, 0);
                        appendQRCode(tempCanvas);
                    };
                    tempImage.src = dataUrlWithLogo;
                });
            } else {
                appendQRCode(finalCanvas);
            }
        }


        function appendQRCode(canvas) {
            const dataUrl = canvas.toDataURL();
            const qrImage = document.createElement('img');
            qrImage.src = dataUrl;
            qrImage.id = 'qrCode';

            const link = document.createElement('a');
            link.href = qrText;
            link.target = '_blank';
            link.appendChild(qrImage);

            qrCodeContainer.innerHTML = ''; // Clear previous content
            qrCodeContainer.appendChild(link);

             // Enable share button after QR code generation
             document.getElementById('shareButton').style.display = 'block';
        }
    }, 500);
}

async function shareQRCode() {
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const qrImage = qrCodeContainer.querySelector('img');
    const qrLink = qrImage ? qrImage.parentElement.href : null; // Get the associated link

    if (!qrImage || !qrLink) {
        alert("Generate the QR code first!");
        return;
    }

    try {
        const response = await fetch(qrImage.src);
        const blob = await response.blob();
        const file = new File([blob], "QRCode.png", { type: "image/png" });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            navigator.share({
                title: "Scan this QR Code",
                text: `Scan the QR code or click the link: ${qrLink}`,
                files: [file]
            }).catch(error => console.error("Error sharing:", error));
        } else {
            alert("Sharing is not supported on this device.");
        }
    } catch (error) {
        console.error("Error fetching QR image:", error);
    }
}

function overlayLogoOnQRCode(qrCanvas, callback) {
    const logo = new Image();
    logo.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = qrCanvas.width;
        canvas.height = qrCanvas.height;

        // Draw the QR code first
        ctx.drawImage(qrCanvas, 0, 0);

        // Get user-selected logo frame settings
        const logoPercentage = document.getElementById('logoSize').value || 20; // Default 20%
        const logoSize = canvas.width * (logoPercentage / 100);
        const logoX = (canvas.width - logoSize) / 2;
        const logoOffsetY = 20; // Adjust this value to move the logo up
        const logoY = (canvas.height - logoSize) / 2 - logoOffsetY; // Moves the logo up

        // Draw the logo
        ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);

        // Draw frame around the logo
        const frameStyle = document.getElementById('logoFrameStyle').value || 'solid';
        const frameColor = document.getElementById('logoFrameColor').value || '#000000';
        const frameWidth = parseInt(document.getElementById('logoFrameWidth').value, 10) || 5;

        ctx.lineWidth = frameWidth;
        ctx.strokeStyle = frameColor;
        ctx.setLineDash([]); // Reset line dash

        switch (frameStyle) {
            case 'dashed':
                ctx.setLineDash([10, 5]);
                break;
            case 'dotted':
                ctx.setLineDash([2, 2]);
                break;
            case 'double':
                ctx.lineWidth = frameWidth * 2; // Make it double thickness
                break;
            case 'circle':
                ctx.beginPath();
                ctx.arc(logoX + logoSize / 2, logoY + logoSize / 2, logoSize / 2 + frameWidth, 0, 2 * Math.PI);
                ctx.stroke();
                return callback(canvas.toDataURL()); // Exit early for circular frame
            default:
                ctx.setLineDash([]); // Solid border (default)
        }

        // Draw the rectangular frame
        ctx.strokeRect(logoX - frameWidth / 2, logoY - frameWidth / 2, logoSize + frameWidth, logoSize + frameWidth);

        callback(canvas.toDataURL());
    };
    logo.src = uploadedLogo; // Load the uploaded logo image
}




// Function to add a custom file name (as text) onto the QR code canvas.
function addCustomNameToQRCode(qrCanvas, customName, callback) {
    const margin = 40; // Extra margin for the text
    const newCanvas = document.createElement('canvas');
    newCanvas.width = qrCanvas.width;
    newCanvas.height = qrCanvas.height + margin;
    const ctx = newCanvas.getContext('2d');

    // Draw the original QR code onto the new canvas
    ctx.drawImage(qrCanvas, 0, 0);

    // Get user-defined styling for custom name
    const font = document.getElementById('customFont').value || "Arial";
    const fontSize = document.getElementById('customFontSize').value || "20px";
    const nameColor = document.getElementById('customNameColor').value || "#000";

    // Set up the text properties using user inputs
    ctx.font = `${fontSize}px ${font}`;
    ctx.fillStyle = nameColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Draw the custom file name in the extra margin at the bottom
    ctx.fillText(customName, newCanvas.width / 2, qrCanvas.height + margin / 2);

    // Return the new canvas via callback
    callback(newCanvas);
}

// Copy QR Code to clipboard
async function CopyQRCode() {
    const qrCode = document.getElementById('qrCode');

    if (!qrCode || !qrCode.src) {
        alert('No QR Code generated to copy!');
        return;
    }

    try {
        const response = await fetch(qrCode.src); // Fetch the image as a Blob
        const blob = await response.blob();

        // Write the image Blob to the clipboard
        await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);

        alert('QR Code copied to clipboard!');
    } catch (error) {
        console.error('Failed to copy QR Code:', error);
        alert('Unable to copy QR Code. Please try again.');
    }
}

function downloadMainQRCode(format) {
    const qrCode = document.getElementById('qrCode');
    if (!qrCode || !qrCode.src) {
        alert('No QR Code generated to download!');
        return;
    }

    // Ensure the element exists and the value is trimmed
    const fileNameInput = document.getElementById('customFileName');
    if (!fileNameInput) {
        alert('Filename input not found!');
        return;
    }

    // Declare customName in the correct scope
    const customName = fileNameInput.value.trim();
    const fileName = customName ? `${customName}.${format}` : `qrcode.${format}`;

    // Debug log
    console.log("Downloading QR Code as:", fileName);

    const link = document.createElement('a');
    link.href = qrCode.src;
    link.download = fileName;
    document.body.appendChild(link);  // Append link to the DOM
    link.click();
    document.body.removeChild(link);
}

function generateBulkQRCode() {
    const bulkInput = document.getElementById("bulkInput").value.trim();
    const bulkContainer = document.getElementById("bulkQRCodeContainer");
    bulkContainer.innerHTML = ""; // Clear previous QR codes

    if (!bulkInput) {
        alert("Please enter some text or URLs to generate QR codes.");
        return;
    }
    
    const items = bulkInput.split(",").map(item => item.trim()).filter(item => item);
    if (items.length === 0) {
        alert("Please enter valid text or URLs.");
        return;
    }

    items.forEach((text, index) => {
        const qrDiv = document.createElement("div");
        const qrCanvas = document.createElement("div");
        const qrLabel = document.createElement("p");
        const downloadBtn = document.createElement("button");
        const copyBtn = document.createElement("button");

        qrDiv.classList.add("bulk-qrcode-wrapper");
        qrLabel.textContent = text;
        qrLabel.style.fontWeight = "bold";

        // Generate QR Code
        const qrCode = new QRCode(qrCanvas, {
            text: text,
            width: 150,
            height: 150,
        });

        // Wait for the QR code to render
        setTimeout(() => {
            const qrImg = qrCanvas.querySelector("img"); // Get the QR code image

            // Create a clickable QR code
            const qrLink = document.createElement("a");
            qrLink.href = text; // Set href to the QR code's text
            qrLink.target = "_blank"; // Open in a new tab
            qrLink.appendChild(qrImg.cloneNode(true)); // Clone the QR image

            // Download button
            downloadBtn.textContent = "Download QR Code";
            downloadBtn.classList.add("bulk-download-btn");
            downloadBtn.onclick = () => downloadQRCode(qrImg, `QRCode_${index + 1}`);

            // Copy button
            copyBtn.textContent = "Copy QR Code";
            copyBtn.classList.add("bulk-copy-btn");
            copyBtn.onclick = () => copyQRCode(qrImg);

            qrDiv.appendChild(qrLink); // Add clickable QR code
            qrDiv.appendChild(qrLabel);
            qrDiv.appendChild(downloadBtn);
            qrDiv.appendChild(copyBtn);
            bulkContainer.appendChild(qrDiv);
        }, 500); // Delay to ensure QR code is generated
    });
}

// Function to download the QR code
function downloadQRCode(qrImg, filename) {
    const link = document.createElement("a");
    link.href = qrImg.src;
    link.download = `${filename}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function copyQRCode(qrImg) {
    fetch(qrImg.src)
        .then(res => res.blob())
        .then(blob => {
            const item = new ClipboardItem({ "image/png": blob });
            navigator.clipboard.write([item]).then(() => {
                showNotification("QR Code copied to clipboard!");
            }).catch(err => {
                console.error("Error copying QR Code:", err);
            });
        });
}

// Function to show a notification message
function showNotification(message) {
    const notification = document.createElement("div");
    notification.textContent = message;
    notification.classList.add("notification");
    
    document.body.appendChild(notification);
    
    // Show and then fade out notification
    setTimeout(() => {
        notification.style.opacity = "0";
        setTimeout(() => notification.remove(), 500);
    }, 2000);
}

// Add basic CSS for the notification
const style = document.createElement("style");
style.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
        font-size: 16px;
    }
`;
document.head.appendChild(style);


document.getElementById('darkModeToggle').addEventListener('change', (e) => {
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});



function signOut() {
    // Clear any stored authentication data (localStorage/sessionStorage)
    localStorage.removeItem("authToken"); // Adjust based on your auth implementation
    sessionStorage.removeItem("authToken"); 

    // Redirect to authentication page
    window.location.href = "auth.html"; // Change to your auth page URL
}

console.log("Custom File Name:", customName);





