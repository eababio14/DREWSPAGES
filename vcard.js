let vCardData = "";

function previewVCard() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const linkedin = document.getElementById('linkedin').value.trim();
    const twitter = document.getElementById('twitter').value.trim();
    const facebook = document.getElementById('facebook').value.trim();
    const instagram = document.getElementById('instagram').value.trim();
    const address = document.getElementById('address').value.trim();
    const website = document.getElementById('website').value.trim();
    const imageUrl = document.getElementById('imageUrl').value.trim(); // New field for profile picture

    // Format vCard Data
    vCardData = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\n`;

    if (imageUrl) vCardData += `PHOTO;TYPE=JPEG;VALUE=URI:${imageUrl}\n`;
    if (email) vCardData += `EMAIL:${email}\n`;
    if (phone) vCardData += `TEL:${phone}\n`;

    // Social Media Links (using URL field to ensure better compatibility)
    if (linkedin) vCardData += `URL:${linkedin}\n`;
    if (twitter) vCardData += `URL:${twitter}\n`;
    if (facebook) vCardData += `URL:${facebook}\n`;
    if (instagram) vCardData += `URL:${instagram}\n`;

    if (address) vCardData += `ADR:${address}\n`;
    if (website) vCardData += `URL:${website}\n`;

    vCardData += 'END:VCARD';

    // Display Preview
    let previewHTML = `<div class="vcard-details">`;

    if (imageUrl) {
        previewHTML += `<img src="${imageUrl}" alt="Profile Picture" style="width:100px;height:100px;border-radius:50%;">`;
    }

    previewHTML += `<h3>${name || 'Name Not Provided'}</h3>`;
    previewHTML += `<p>Email: ${email || 'Email Not Provided'}</p>`;
    previewHTML += `<p>Phone: ${phone || 'Phone Not Provided'}</p>`;

    // Social Media Links
    if (linkedin) previewHTML += `<p><a href="${linkedin}" target="_blank">LinkedIn</a></p>`;
    if (twitter) previewHTML += `<p><a href="${twitter}" target="_blank">Twitter</a></p>`;
    if (facebook) previewHTML += `<p><a href="${facebook}" target="_blank">Facebook</a></p>`;
    if (instagram) previewHTML += `<p><a href="${instagram}" target="_blank">Instagram</a></p>`;

    // Additional Info
    if (address) previewHTML += `<p>Address: ${address}</p>`;
    if (website) previewHTML += `<p><a href="${website}" target="_blank">Website</a></p>`;

    previewHTML += `</div>`;

    // Show Preview
    document.getElementById('vCardPreview').innerHTML = previewHTML;

    // Enable the "Generate QR Code" button
    document.getElementById('generateQRCodeBtn').disabled = false;
}

console.log(vCardData);  // Log the vCard data for inspection


document.getElementById('qrSize').addEventListener('input', function () {
    document.getElementById('qrSizeValue').textContent = this.value; // Display size value
    generateQRCode(); // Regenerate QR code with new size
});


function generateQRCode() {
    if (!vCardData) {
        alert('Please preview your vCard before generating a QR code.');
        return;
    }

    const qrCodeContainer = document.getElementById('qrCodeContainer');
    qrCodeContainer.innerHTML = ''; // Clear previous QR code

    const fgColor = document.getElementById('foregroundColor').value;
    const bgColor = document.getElementById('backgroundColor').value;
    const useGradient = document.getElementById('enableGradient').checked;
    const borderStyle = document.getElementById('borderStyle').value;
    const borderWidth = document.getElementById('borderWidth').value + 'px';
    const borderColor = document.getElementById('borderColor').value;
    const qrSize = parseInt(document.getElementById('qrSize').value); // Get updated size
    const customName = document.getElementById('customName').value.trim();
    const nameColor = document.getElementById('nameColor').value;
    const nameFontSize = document.getElementById('nameFontSize').value + 'px';

    // Ensure colors have enough contrast
    if (fgColor === bgColor) {
        alert('Foreground and background colors must be different for readability.');
        return;
    }

    // Convert vCardData into a downloadable Blob
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const vcfUrl = URL.createObjectURL(blob);

    // Create an anchor element to hold the QR code
    const qrAnchor = document.createElement('a');
    qrAnchor.href = vcfUrl;
    qrAnchor.download = "contact.vcf"; 
    qrAnchor.target = "_blank";

    // Generate QR code inside the anchor tag
    new QRCode(qrAnchor, {
        text: vCardData,
        width: qrSize,
        height: qrSize,
        colorDark: fgColor,
        colorLight: bgColor,
        correctLevel: QRCode.CorrectLevel.H, // High error correction
    });

    // Apply styles to the QR code container
    qrCodeContainer.style.border = `${borderWidth} ${borderStyle} ${borderColor}`;
    qrCodeContainer.style.padding = '15px'; // Extra padding for better readability
    qrCodeContainer.style.display = 'inline-block';
    qrCodeContainer.style.textAlign = 'center';
    qrCodeContainer.style.backgroundColor = bgColor; // Ensure background color is applied

    // Append the QR code to the container
    qrCodeContainer.appendChild(qrAnchor);

    // Apply gradient if enabled
    if (useGradient) {
        setTimeout(() => {
            const svg = qrCodeContainer.querySelector("svg");
            if (svg) {
                const gradientSVG = `
                    <defs>
                        <linearGradient id="qrGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:${fgColor}; stop-opacity:0.9" />
                            <stop offset="100%" style="stop-color:${bgColor}; stop-opacity:1" />
                        </linearGradient>
                    </defs>`;
                svg.insertAdjacentHTML("afterbegin", gradientSVG);
                svg.querySelectorAll("rect[fill]").forEach(rect => {
                    rect.setAttribute("fill", "url(#qrGradient)");
                });
            }
        }, 100);
    }

    // Add custom name below QR code
    if (customName) {
        setTimeout(() => {
            const nameElement = document.createElement('div');
            nameElement.textContent = customName;
            nameElement.style.color = nameColor;
            nameElement.style.fontSize = nameFontSize;
            nameElement.style.marginTop = '8px'; // Adjusted spacing
            nameElement.style.fontWeight = 'bold';
            qrCodeContainer.appendChild(nameElement);
        }, 100);
    }
}




// Function to download QR code with selected size
function downloadQRCode(format) {
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const qrImage = qrCodeContainer.querySelector('img');
    const customName = document.getElementById('customName').value || "";
    const nameColor = document.getElementById('nameColor').value;
    const nameFontSize = parseInt(document.getElementById('nameFontSize').value) || 16;

    if (!qrImage) {
        alert("Generate the QR code first!");
        return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = qrImage.src;

    img.onload = function () {
        const borderWidth = parseInt(document.getElementById('borderWidth').value) || 0;
        const qrSize = parseInt(document.getElementById('qrSize').value); // Get QR size from input
        const padding = 20;
        const textHeight = customName ? nameFontSize + padding : 0;
        
        canvas.width = qrSize + 2 * borderWidth;
        canvas.height = qrSize + 2 * borderWidth + textHeight;

        // Draw the background (if needed)
        ctx.fillStyle = "#fff"; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw the border
        ctx.strokeStyle = document.getElementById('borderColor').value;
        ctx.lineWidth = borderWidth;
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        // Draw the QR code image inside the border
        ctx.drawImage(img, borderWidth, borderWidth, qrSize, qrSize);
        
        // Draw the custom name if provided
        if (customName) {
            ctx.fillStyle = nameColor;
            ctx.font = `${nameFontSize}px Arial`;
            ctx.textAlign = "center";
            ctx.fillText(customName, canvas.width / 2, canvas.height - padding);
        }

        // Export QR code with border and name
        if (format === "png") {
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "QRCode.png";
            link.click();
        } else if (format === "svg") {
            const svgData = `<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}">
                <rect width="100%" height="100%" fill="white" />
                <image href="${qrImage.src}" x="${borderWidth}" y="${borderWidth}" width="${qrSize}" height="${qrSize}"/>
                <text x="50%" y="${canvas.height - padding}" font-size="${nameFontSize}px" fill="${nameColor}" text-anchor="middle">${customName}</text>
            </svg>`;
            const blob = new Blob([svgData], { type: "image/svg+xml" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "QRCode.svg";
            link.click();
        } else if (format === "pdf") {
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF();
            pdf.addImage(canvas.toDataURL("image/png"), "PNG", 10, 10, 50, 50);
            pdf.save("QRCode.pdf");
        }
    };
}

// Function to share QR code with clickable link
async function shareQRCode() {
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const qrImage = qrCodeContainer.querySelector('img');

    if (!qrImage) {
        alert("Generate the QR code first!");
        return;
    }

    try {
        const response = await fetch(qrImage.src);
        const blob = await response.blob();
        const file = new File([blob], "QRCode.png", { type: "image/png" });

        // Retrieve the encoded URL from the QR code
        const vCardInput = document.getElementById('vCardData'); // Adjust ID if different
        const vCardLink = vCardInput ? vCardInput.value : "https://your-default-link.com";

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            navigator.share({
                title: "QR Code",
                text: `Scan this QR code or click this link: ${vCardLink}`,
                files: [file]
            }).catch(error => console.error("Error sharing:", error));
        } else {
            alert("Sharing is not supported on this device.");
        }
    } catch (error) {
        console.error("Error fetching QR image:", error);
    }
}





// Function to copy QR code link
function copyQRCodeLink() {
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const qrImage = qrCodeContainer.querySelector('img');

    if (!qrImage) {
        alert("Generate the QR code first!");
        return;
    }

    navigator.clipboard.writeText(qrImage.src).then(() => {
        alert("QR Code link copied to clipboard!");
    }).catch(err => {
        console.error("Error copying:", err);
    });
}

// Adding Event Listeners
document.getElementById("shareQRCodeButton").addEventListener("click", shareQRCode);
document.getElementById("copyQRCodeButton").addEventListener("click", copyQRCodeLink);


// Update QR code when size changes
document.getElementById("qrSize").addEventListener("input", generateQRCode);

// Display selected size next to the slider
document.getElementById("qrSize").addEventListener("input", function() {
    document.getElementById("qrSizeValue").textContent = this.value + "px";
});


// Get the modal
var modal = document.getElementById("instructionsModal");

// Get the tooltip and close button
var tooltip = document.getElementById("imageUrlTooltip");
var span = document.getElementsByClassName("close")[0];

// When the user clicks the tooltip, open the modal
tooltip.addEventListener('click', function() {
    modal.style.display = "block";
});

// When the user clicks the close button, close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



function signOut() {
    // Clear any stored authentication data (localStorage/sessionStorage)
    localStorage.removeItem("authToken"); // Adjust based on your auth implementation
    sessionStorage.removeItem("authToken"); 

    // Redirect to authentication page
    window.location.href = "auth.html"; // Change to your auth page URL
}

