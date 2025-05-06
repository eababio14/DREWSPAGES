document.addEventListener("DOMContentLoaded", () => {
    const invoiceNumber = document.getElementById("invoiceNumber");
    const invoiceDate = document.getElementById("invoiceDate");
    const grandTotal = document.getElementById("dueDate");
    const senderAddress = document.getElementById("senderAddress");
    const businessContact = document.getElementById("businessContact");
    const recipientAddress = document.getElementById("recipientAddress");
    const businessLogo = document.getElementById("businessLogo");
    const businessName = document.getElementById("businessName");
    const itemsTable = document.getElementById("itemsTable").querySelector("tbody");
    const taxRate = document.getElementById("taxRate");
    const discountInput = document.getElementById("discount");
    const generateInvoice = document.getElementById("generateInvoice");
    const downloadInvoiceButton = document.getElementById("downloadPDF");
    const printInvoiceButton = document.getElementById("printInvoice");
    const invoicePreview = document.getElementById("invoicePreview");
    const addItemButton = document.getElementById("addItem");
    const currencySelect = document.getElementById("currency");
    const invoiceHistoryContainer = document.getElementById("invoiceHistory");
    const searchInput = document.getElementById("searchInvoice");
    const clearInvoiceButton = document.getElementById("clearInvoice");
    const container = document.getElementById("invoiceHistoryContainer");
    
    
        
    let itemCount = 0;

   
    
    // Generate a random invoice number on page load
    invoiceNumber.value = `INV-${Math.floor(Math.random() * 100000)}`;

    // Function to get selected currency symbol and name
    function getCurrencyInfo() {
        const currencyValue = currencySelect.value;
        const currencies = {
            "USD": { symbol: "$", name: "USD" },
"EUR": { symbol: "€", name: "EUR" },
"GBP": { symbol: "£", name: "GBP" },
"JPY": { symbol: "¥", name: "JPY" },
"AUD": { symbol: "$", name: "AUD" },
"CAD": { symbol: "$", name: "CAD" },
"CHF": { symbol: "Fr", name: "CHF" },
"CNY": { symbol: "¥", name: "CNY" },
"INR": { symbol: "₹", name: "INR" },
"NZD": { symbol: "$", name: "NZD" },
"SEK": { symbol: "kr", name: "SEK" },
"NOK": { symbol: "kr", name: "NOK" },
"MXN": { symbol: "$", name: "MXN" },
"ZAR": { symbol: "R", name: "ZAR" },
"SGD": { symbol: "$", name: "SGD" },
"HKD": { symbol: "$", name: "HKD" },
"KRW": { symbol: "₩", name: "KRW" },
"BRL": { symbol: "R$", name: "BRL" },
"RUB": { symbol: "₽", name: "RUB" },
"TRY": { symbol: "₺", name: "TRY" },
"PLN": { symbol: "zł", name: "PLN" },
"THB": { symbol: "฿", name: "THB" },
"IDR": { symbol: "Rp", name: "IDR" },
"PHP": { symbol: "₱", name: "PHP" },
"VND": { symbol: "₫", name: "VND" },
"MYR": { symbol: "RM", name: "MYR" },
"EGP": { symbol: "£", name: "EGP" },
"SAR": { symbol: "﷼", name: "SAR" },
"AED": { symbol: "د.إ", name: "AED" },
"PKR": { symbol: "₨", name: "PKR" },
"BDT": { symbol: "৳", name: "BDT" },
"KWD": { symbol: "د.ك", name: "KWD" },
"QAR": { symbol: "﷼", name: "QAR" },
"ISK": { symbol: "kr", name: "ISK" },
"DZD": { symbol: "دج", name: "DZD" },
"MAD": { symbol: "د.م.", name: "MAD" },
"NGN": { symbol: "₦", name: "NGN" },
"TWD": { symbol: "NT$", name: "TWD" },
"ARS": { symbol: "$", name: "ARS" },
"CLP": { symbol: "$", name: "CLP" },
"COP": { symbol: "$", name: "COP" },
"PEN": { symbol: "S/", name: "PEN" },
"UYU": { symbol: "$U", name: "UYU" },
"GHS": { symbol: "₵", name: "Ghanaian Cedi (GHS)" },
"NGN": { symbol: "₦", name: "Nigerian Naira (NGN)" },
"ZAR": { symbol: "R", name: "South African Rand (ZAR)" },
"EGP": { symbol: "£", name: "Egyptian Pound (EGP)" },
"KES": { symbol: "KSh", name: "Kenyan Shilling (KES)" },
"TZS": { symbol: "TSh", name: "Tanzanian Shilling (TZS)" },
"UGX": { symbol: "USh", name: "Ugandan Shilling (UGX)" },
"XOF": { symbol: "Fr", name: "West African CFA Franc (XOF)" },
"XAF": { symbol: "Fr", name: "Central African CFA Franc (XAF)" },
"ZMW": { symbol: "ZK", name: "Zambian Kwacha (ZMW)" },
"MWK": { symbol: "MK", name: "Malawian Kwacha (MWK)" },
"MZN": { symbol: "MT", name: "Mozambican Metical (MZN)" },
"BWP": { symbol: "P", name: "Botswana Pula (BWP)" },
"SZL": { symbol: "E", name: "Eswatini Lilangeni (SZL)" },
"LSL": { symbol: "L", name: "Lesotho Loti (LSL)" },
"NAD": { symbol: "$", name: "Namibian Dollar (NAD)" },
"SCR": { symbol: "₨", name: "Seychellois Rupee (SCR)" },
"MUR": { symbol: "₨", name: "Mauritian Rupee (MUR)" },
"MAD": { symbol: "د.م.", name: "Moroccan Dirham (MAD)" },
"DZD": { symbol: "دج", name: "Algerian Dinar (DZD)" },
"SDG": { symbol: "ج.س.", name: "Sudanese Pound (SDG)" },
"ETB": { symbol: "ብር", name: "Ethiopian Birr (ETB)" },
"RWF": { symbol: "Fr", name: "Rwandan Franc (RWF)" },
"CDF": { symbol: "Fr", name: "Congolese Franc (CDF)" },
"AOA": { symbol: "Kz", name: "Angolan Kwanza (AOA)" }
        };
        return currencies[currencyValue] || { symbol: "$", name: "USD" };
    }

  // Add a new row to the items table
addItemButton.addEventListener("click", () => {
    const row = document.createElement("tr");
    const { symbol, name } = getCurrencyInfo();
    row.innerHTML = `
        <td><input type="text" placeholder="Description"></td>
        <td><input type="number" placeholder="Qty" min="0"></td>
        <td><input type="number" placeholder="Unit Price" min="0" step="0.01"></td>
        <td class="item-subtotal">${symbol}0.00 (${name})</td>
        <td class="item-total">${symbol}0.00 (${name})</td>
        <td><input type="number" class="amount-paid" placeholder="Amount Paid" min="0" value="0"></td>
        <td class="item-owed">${symbol}0.00 (${name})</td>
        <td><button class="remove-item">Remove</button></td>
    `;
    itemsTable.appendChild(row);

    row.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", updateTotals);
    });

    row.querySelector(".remove-item").addEventListener("click", () => {
        row.remove();
        updateTotals();
    });

    updateTotals();
});

// Calculate and update totals
function updateTotals() {
    let subtotal = 0;
    let totalPaid = 0;
    let taxRateValue = parseFloat(taxRate.value) || 0;
    let discountRate = parseFloat(document.getElementById("discount").value) || 0;

    itemsTable.querySelectorAll("tr").forEach(row => {
        const qty = parseFloat(row.cells[1]?.querySelector("input")?.value) || 0;
        const price = parseFloat(row.cells[2]?.querySelector("input")?.value) || 0;
        const amountPaid = parseFloat(row.cells[5]?.querySelector("input")?.value) || 0;

        const itemSubtotal = qty * price;
        const itemTotal = itemSubtotal * (1 + taxRateValue / 100);
        const amountOwed = itemTotal - amountPaid;

        const { symbol, name } = getCurrencyInfo();

        row.cells[3].textContent = `${symbol}${itemSubtotal.toFixed(2)} (${name})`; // Update subtotal
        row.cells[4].textContent = `${symbol}${itemTotal.toFixed(2)} (${name})`; // Update total
        row.cells[6].textContent = `${symbol}${amountOwed.toFixed(2)} (${name})`; // Update amount due

        subtotal += itemSubtotal;
        totalPaid += amountPaid;
    });

    const tax = (subtotal * taxRateValue) / 100;
    const discount = (subtotal * discountRate) / 100;
    const grandTotal = subtotal + tax - discount;
    const amountOwed = grandTotal - totalPaid;

    const { symbol, name } = getCurrencyInfo();
    document.getElementById("subtotal").textContent = `${symbol}${subtotal.toFixed(2)} (${name})`;
    document.getElementById("taxAmount").textContent = `${symbol}${tax.toFixed(2)} (${name})`;
    document.getElementById("discountAmount").textContent = `${symbol}${discount.toFixed(2)} (${name})`; // ✅ Added Discount
    document.getElementById("grandTotal").textContent = `${symbol}${grandTotal.toFixed(2)} (${name})`;
    document.getElementById("amountPaid").textContent = `${symbol}${totalPaid.toFixed(2)} (${name})`;
    document.getElementById("amountOwed").textContent = `${symbol}${amountOwed.toFixed(2)} (${name})`;
}

// Event listeners to update totals in real-time
document.getElementById("taxRate").addEventListener("input", updateTotals);
document.getElementById("discount").addEventListener("input", updateTotals);
itemsTable.addEventListener("input", updateTotals);


// Add event listener to the generate invoice button
generateInvoice.addEventListener("click", () => {
    const logoFile = businessLogo.files[0];
    const reader = new FileReader();

    if (logoFile) {
        reader.onload = function (event) {
            generateReceipt(event.target.result);
        };
        reader.readAsDataURL(logoFile);
    } else {
        generateReceipt();
    }
});

document.getElementById("paymentPlatform").addEventListener("change", function () {
    const selectedPlatform = this.value;
    const payButton = document.getElementById("payButton");

    // Hide all payment link inputs
    document.getElementById("paypalLink").style.display = "none";
    document.getElementById("stripeLink").style.display = "none";
    document.getElementById("squareLink").style.display = "none";
    document.getElementById("venmoLink").style.display = "none";
    document.getElementById("cashappLink").style.display = "none";
    document.getElementById("zelleLink").style.display = "none";
    document.getElementById("applePayLink").style.display = "none";
    document.getElementById("googlePayLink").style.display = "none";
    document.getElementById("amazonPayLink").style.display = "none";
    document.getElementById("googleWalletLink").style.display = "none";
    document.getElementById("alipayLink").style.display = "none";
    document.getElementById("wechatPayLink").style.display = "none";
    document.getElementById("jcbLink").style.display = "none";
    document.getElementById("dinersLink").style.display = "none";
    document.getElementById("mastercardLink").style.display = "none";
    document.getElementById("visaLink").style.display = "none";
    document.getElementById("americanexpressLink").style.display = "none";
    document.getElementById("discoverLink").style.display = "none";
    document.getElementById("unionpayLink").style.display = "none";
    document.getElementById("customLink").style.display = "none";

    // Show the selected platform's input field & update button text
    switch (selectedPlatform) {
        case "paypal":
            document.getElementById("paypalLink").style.display = "block";
            payButton.textContent = "Pay with PayPal";
            break;
        case "stripe":
            document.getElementById("stripeLink").style.display = "block";
            payButton.textContent = "Pay with Stripe";
            break;
        case "square":
            document.getElementById("squareLink").style.display = "block";
            payButton.textContent = "Pay with Square";
            break;
        case "venmo":
            document.getElementById("venmoLink").style.display = "block";
            payButton.textContent = "Pay with Venmo";
            break;
        case "cashapp":
            document.getElementById("cashappLink").style.display = "block";
            payButton.textContent = "Pay with Cash App";
            break;
        case "zelle":
            document.getElementById("zelleLink").style.display = "block";
            payButton.textContent = "Pay with Zelle";
            break;
        case "applepay":
            document.getElementById("applePayLink").style.display = "block";
            payButton.textContent = "Pay with Apple Pay";
            break;
        case "googlepay":
            document.getElementById("googlePayLink").style.display = "block";
            payButton.textContent = "Pay with Google Pay";
            break;
        case "amazonpay":
            document.getElementById("amazonPayLink").style.display = "block";
            payButton.textContent = "Pay with Amazon Pay";
            break;
        case "googlewallet":
            document.getElementById("googleWalletLink").style.display = "block";
            payButton.textContent = "Pay with Google Wallet";
            break;
        case "alipay":
            document.getElementById("alipayLink").style.display = "block";
            payButton.textContent = "Pay with Alipay";
            break;
        case "wechatpay":
            document.getElementById("wechatPayLink").style.display = "block";
            payButton.textContent = "Pay with WeChat Pay";
            break;
        case "jcb":
            document.getElementById("jcbLink").style.display = "block";
            payButton.textContent = "Pay with JCB";
            break;
        case "diners":
            document.getElementById("dinersLink").style.display = "block";
            payButton.textContent = "Pay with Diners";
            break;
        case "mastercard":
            document.getElementById("mastercardLink").style.display = "block";
            payButton.textContent = "Pay with Mastercard";
            break;
        case "visa":
            document.getElementById("visaLink").style.display = "block";
            payButton.textContent = "Pay with Visa";
            break;
        case "americanexpress":
            document.getElementById("americanexpressLink").style.display = "block";
            payButton.textContent = "Pay with American Express";
            break;
        case "discover":
            document.getElementById("discoverLink").style.display = "block";
            payButton.textContent = "Pay with Discover";
            break;
        case "unionpay":
            document.getElementById("unionpayLink").style.display = "block";
            payButton.textContent = "Pay with UnionPay";
            break;
        case "custom":
            document.getElementById("customLink").style.display = "block";
            payButton.textContent = "Pay Now";
            break;
       
    }
});

 // Function to handle logo upload and save it in localStorage
document.getElementById("businessLogo").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const logoDataUrl = e.target.result;
            localStorage.setItem("savedBusinessLogo", logoDataUrl); // Save logo in localStorage
            document.getElementById("logoPreview").src = logoDataUrl; // Show preview
        };
        reader.readAsDataURL(file);
    }
});

// Function to get the saved logo from localStorage
function getSavedLogo() {
    return localStorage.getItem("savedBusinessLogo") || "";
}
  


// Generate receipt HTML
// Function to generate the receipt with the stored logo
function generateReceipt() {
    const logoDataUrl = getSavedLogo(); // Retrieve saved logo
    const isRecurring = document.getElementById("isRecurring").checked;
    const recurringInterval = document.getElementById("recurringInterval").value;
    const signatureData = document.getElementById("signatureData").value;
    const itemsTable = document.getElementById("itemsTable");
    const items = Array.from(itemsTable.querySelectorAll("tbody tr")).map(row => {
        const description = row.cells[0]?.querySelector("input")?.value || "";
        const qty = row.cells[1]?.querySelector("input")?.value || "0";
        const price = row.cells[2]?.querySelector("input")?.value || "0.00";
        const subtotal = row.cells[3]?.textContent || "0.00";
        const total = row.cells[4]?.textContent || "0.00";
        const paid = row.cells[5]?.querySelector("input")?.value || "0.00";
        const owed = row.cells[6]?.textContent || "0.00";
        return { description, qty, price, subtotal, total, paid, owed };
    });

    const { symbol, name } = getCurrencyInfo();

    // Get the selected platform's payment link
    let paymentLink = "";
    const selectedPlatform = document.getElementById("paymentPlatform").value;
    
    if (selectedPlatform) {
        const linkElement = document.getElementById(`${selectedPlatform}PaymentLink`);
        if (linkElement) paymentLink = linkElement.value.trim();
    }

    let qrCodeImage = "";
    if (paymentLink) {
        const qr = new QRious({
            value: paymentLink,
            size: 150,
        });
        qrCodeImage = qr.toDataURL();
    }

    const receiptHTML = `
        <div class="receipt">
            <div class="header">
                ${logoDataUrl ? `<img src="${logoDataUrl}" alt="Business Logo" class="business-logo">` : ""}
                <p>${document.getElementById("businessName")?.value || ""}</p>
                <p>${document.getElementById("senderAddress")?.value || ""}</p>
                <p>${document.getElementById("businessContact")?.value || ""}</p>
            </div>
            <div class="customer-info">
                <h3>Invoice</h3>
                <p><strong>Invoice #:</strong> ${document.getElementById("invoiceNumber")?.value || "N/A"}</p>
                <p><strong>Date:</strong> ${document.getElementById("invoiceDate")?.value || "N/A"}</p>
                <p><strong>Date:</strong> ${document.getElementById("dueDate")?.value || "N/A"}</p>
                <h4>Bill To:</h4>
                <p>${document.getElementById("recipientAddress")?.value || "N/A"}</p>
            </div>
            <table class="receipt-items">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>SubTotal</th>
                        <th>Total</th>
                        <th>Amount Paid</th>
                        <th>Amount Due</th>
                    </tr>
                </thead>
                <tbody>
                    ${items.map(item => `
                        <tr>
                            <td>${item.description}</td>
                            <td>${item.qty}</td>
                            <td>${symbol}${item.price} (${name})</td>
                            <td>${symbol}${item.subtotal} (${name})</td>
                            <td>${symbol}${item.total} (${name})</td>
                            <td>${symbol}${item.paid} (${name})</td>
                            <td>${symbol}${item.owed} (${name})</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
            <div class="totals">
                <p><strong>Subtotal:</strong> ${symbol}${document.getElementById("subtotal")?.textContent || "0.00"} (${name})</p>
                <p><strong>Tax:</strong> ${symbol}${document.getElementById("taxAmount")?.textContent || "0.00"} (${name})</p>
                <p><strong>Discount:</strong> ${symbol}${document.getElementById("discountAmount")?.textContent || "0.00"} (${name})</p>
                <p><strong>Total:</strong> ${symbol}${document.getElementById("grandTotal")?.textContent || "0.00"} (${name})</p>
                <p><strong>Paid:</strong> ${symbol}${document.getElementById("amountPaid")?.textContent || "0.00"} (${name})</p>
                <p><strong>Owed:</strong> ${symbol}${document.getElementById("amountOwed")?.textContent || "0.00"} (${name})</p>
            </div>
            <h3>Digital Signature:</h3>
            ${signatureData ? `<img src="${signatureData}" alt="Digital Signature" style="border:1px solid #000; margin-top:10px;">` : "<p>No signature provided.</p>"}
           

            ${paymentLink ? `
            <div class="payment-section">
                <h3>Payment</h3>
                <p>Click the button below or use the following link:</p>
                <p><a href="${paymentLink}" target="_blank">${paymentLink}</a></p>
                <a href="${paymentLink}" target="_blank" style="display:inline-block;padding:10px 20px;background-color:#007bff;color:#ffffff;text-decoration:none;border-radius:5px;font-size:16px;">
                    ${selectedPlatform === "paypal" ? "Pay with PayPal" : 
                      selectedPlatform === "stripe" ? "Pay with Stripe" :
                      selectedPlatform === "square" ? "Pay with Square" :
                      selectedPlatform === "venmo" ? "Pay with Venmo" :
                      selectedPlatform === "cashapp" ? "Pay with Cash App" :
                      selectedPlatform === "zelle" ? "Pay with Zelle" :
                      selectedPlatform === "applepay" ? "Pay with Apple Pay" :
                      selectedPlatform === "googlepay" ? "Pay with Google Pay" :
                      selectedPlatform === "amazonpay" ? "Pay with Amazon Pay" :
                      selectedPlatform === "googlewallet" ? "Pay with Google Wallet" :
                      selectedPlatform === "alipay" ? "Pay with Alipay" :
                      selectedPlatform === "wechatpay" ? "Pay with WeChat Pay" :
                      selectedPlatform === "jcb" ? "Pay with JCB" :
                      selectedPlatform === "diners" ? "Pay with Diners" :
                      selectedPlatform === "mastercard" ? "Pay with Mastercard" :
                      selectedPlatform === "visa" ? "Pay with Visa" :
                      selectedPlatform === "americanexpress" ? "Pay with American Express" :
                      selectedPlatform === "discover" ? "Pay with Discover" :
                      selectedPlatform === "unionpay" ? "Pay with UnionPay" :
                      "Pay Now"}
                </a>
                ${qrCodeImage ? `<img src="${qrCodeImage}" alt="QR Code for Payment" class="qr-code">` : ""}
            </div>
            ` : ""}
        </div>`;

    document.getElementById("invoicePreview").innerHTML = receiptHTML;
  
  updateInventoryAfterReceipt(items);

// Load the saved logo on page load
window.addEventListener("load", function () {
    const savedLogo = getSavedLogo();
    if (savedLogo) {
        document.getElementById("logoPreview").src = savedLogo;
    }
});


    
        // Save the generated invoice to localStorage
        const invoiceData = {
            invoiceNumber: invoiceNumber.value,
            invoiceDate: invoiceDate.value,
            dueDate: dueDate.value,
            recipientAddress: recipientAddress.value,
            items: items,
            subtotal: document.getElementById("subtotal").textContent,
            taxAmount: document.getElementById("taxAmount").textContent,
            discountAmount: document.getElementById("discountAmount").textContent,
            grandTotal: document.getElementById("grandTotal").textContent,
            amountPaid: document.getElementById("amountPaid").textContent,
            amountOwed: document.getElementById("amountOwed").textContent,
            isRecurring: isRecurring,
            recurringInterval: isRecurring ? recurringInterval : null, // Store interval if recurring
            nextDueDate: isRecurring ? calculateNextDueDate(document.getElementById("dueDate").value, recurringInterval) : null
        };

          // Get existing invoices from localStorage, or create empty arrays if none exist
          let invoiceHistory = JSON.parse(localStorage.getItem("invoiceHistory")) || [];
          invoiceHistory.push(invoiceData);
          localStorage.setItem("invoiceHistory", JSON.stringify(invoiceHistory));
          displayInvoiceHistory();
          
          let recurringInvoiceHistory = JSON.parse(localStorage.getItem("recurringInvoiceHistory")) || [];
          recurringInvoiceHistory.push(invoiceData);
          localStorage.setItem("recurringInvoiceHistory", JSON.stringify(recurringInvoiceHistory));
          displayRecurringInvoices();
    }
          
        

    
   
  
function displayInvoiceHistory() {
    const invoiceHistory = JSON.parse(localStorage.getItem("invoiceHistory")) || [];
    invoiceHistoryContainer.innerHTML = `
        <table class="invoice-history">
            <thead>
                <tr>
                    <th>Invoice #</th>
                    <th>Date</th>
                    <th>Due Date</th>
                    <th>Recipient</th>
                    <th>Subtotal</th>
                    <th>Tax</th>
                    <th>Total</th>
                    <th>Amount Paid</th>
                    <th>Amount Due</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${invoiceHistory.map(invoice => {
                    const totalPaid = parseFloat(invoice.amountPaid) || 0;
                    const totalOwed = parseFloat(invoice.grandTotal.replace(/[^0-9.-]+/g, "")) - totalPaid;

                    let status = "Unpaid";
                    if (totalPaid > 0 && totalOwed > 0) {
                        status = "Partially Paid";
                    } else if (totalOwed <= 0) {
                        status = "Paid";
                    }

                    const statusColor = getStatusColor(status);

                    // Add courtesy message based on status
                    let courtesyMessage = "";
                    if (status === "Paid") {
                        courtesyMessage = "Thank you for your payment! Your invoice has been fully settled.";
                    } else if (status === "Partially Paid") {
                        courtesyMessage = "Thank you for your partial payment. The remaining balance is due.";
                    } else if (status === "Unpaid") {
                        courtesyMessage = "Your invoice is still outstanding. Please settle it as soon as possible.";
                    }

                    const invoiceDetails = `
                        Invoice #: ${invoice.invoiceNumber}\n
                        Date: ${invoice.invoiceDate}\n
                        Due Date: ${invoice.dueDate}\n
                        Recipient: ${invoice.recipientAddress}\n
                        Subtotal: ${invoice.subtotal}\n
                        Tax: ${invoice.taxAmount}\n
                        Total: ${invoice.grandTotal}\n
                        Amount Paid: ${totalPaid.toFixed(2)}\n
                        Amount Due: ${totalOwed.toFixed(2)}\n
                        Status: ${status}\n\n
                        ${courtesyMessage}
                    `;

                    const emailSubject = encodeURIComponent(`Invoice #${invoice.invoiceNumber} - Payment Status Update`);
                    const emailBody = encodeURIComponent(
                        `Dear Valued Customer,\n\n` +
                        `We hope this message finds you well. Please find the details of your invoice below:\n\n` +
                        `Invoice Number: ${invoice.invoiceNumber}\n` +
                        `Invoice Date: ${invoice.invoiceDate}\n` +
                        `Due Date: ${invoice.dueDate}\n` +
                        `Recipient: ${invoice.recipientAddress}\n` +
                        `Subtotal: ${invoice.subtotal}\n` +
                        `Tax: ${invoice.taxAmount}\n` +
                        `Total Amount: ${invoice.grandTotal}\n` +
                        `Amount Paid: ${totalPaid.toFixed(2)}\n` +
                        `Amount Due: ${totalOwed.toFixed(2)}\n` +
                        `Current Status: ${status}\n\n` +
                        `${courtesyMessage}\n\n` +
                        `If you have already processed the payment, please disregard this message. Otherwise, we kindly request that you settle the outstanding balance at your earliest convenience.\n\n` +
                        `Should you have any questions or require further assistance, please do not hesitate to contact us.\n\n` +
                        `Best regards,\n` +
                        `[Your Company Name]\n` +
                        `[Your Contact Information]`
                    );

                    

                    return `
                        <tr>
                            <td>${invoice.invoiceNumber}</td>
                            <td>${invoice.invoiceDate}</td>
                            <td>${invoice.dueDate}</td>
                            <td>${invoice.recipientAddress}</td>
                            <td>${invoice.subtotal}</td>
                            <td>${invoice.taxAmount}</td>
                            <td>${invoice.grandTotal}</td>
                            <td><input type="number" class="update-payment" data-invoice="${invoice.invoiceNumber}" value="${totalPaid.toFixed(2)}" /></td>
                            <td>${totalOwed.toFixed(2)}</td>
                            <td class="status" style="color: ${statusColor}; font-weight: bold;">${status}</td>
                            <td>
                                <button class="print-btn" data-invoice="${invoice.invoiceNumber}">Print</button>
                                <button class="delete-btn" data-invoice="${invoice.invoiceNumber}">Delete</button>
                                <!-- Email Button -->
                                <a href="mailto:?subject=${emailSubject}&body=${emailBody}" class="email-btn" data-invoice="${invoice.invoiceNumber}">
                                    Email Invoice
                                </a>
                            </td>
                        </tr>
                    `;
                }).join("")}
            </tbody>
        </table>
    `;

    // Add event listeners for updating payment dynamically
    document.querySelectorAll(".update-payment").forEach(input => {
        input.addEventListener("change", function () {
            const invoiceNumber = this.getAttribute("data-invoice");
            const newAmountPaid = parseFloat(this.value) || 0;
            updateInvoicePayment(invoiceNumber, newAmountPaid);
        });
    });

    // Add event listeners for print and delete buttons using event delegation
    invoiceHistoryContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("print-btn")) {
            const invoiceNumber = e.target.getAttribute("data-invoice");
            printInvoice(invoiceNumber);
        }
        if (e.target.classList.contains("delete-btn")) {
            const invoiceNumber = e.target.getAttribute("data-invoice");
            deleteInvoice(invoiceNumber);
        }
    });
}

// Function to get color based on status
function getStatusColor(status) {
    switch (status) {
        case "Paid":
            return "green";
        case "Partially Paid":
            return "orange";
        case "Unpaid":
            return "red";
        default:
            return "black";
    }
}


 
// Function to update payment in localStorage
function updateInvoicePayment(invoiceNumber, newAmountPaid) {
    let invoiceHistory = JSON.parse(localStorage.getItem("invoiceHistory")) || [];
    invoiceHistory = invoiceHistory.map(invoice => {
        if (invoice.invoiceNumber === invoiceNumber) {
            invoice.amountPaid = newAmountPaid.toFixed(2);
            const totalOwed = parseFloat(invoice.grandTotal.replace(/[^0-9.-]+/g, "")) - newAmountPaid;
            invoice.amountOwed = totalOwed.toFixed(2);

            // Update Status
            if (totalOwed <= 0) {
                invoice.status = "Paid";
            } else if (newAmountPaid > 0) {
                invoice.status = "Partially Paid";
            } else {
                invoice.status = "Unpaid";
            }
        }
        return invoice;
    });

    localStorage.setItem("invoiceHistory", JSON.stringify(invoiceHistory));
    displayInvoiceHistory(); // Refresh UI
}

// Initial display
displayInvoiceHistory();

  
 document.getElementById("close-alert-btn").addEventListener("click", function() {
    document.getElementById("invoice-alert-banner").style.display = "none";
});

   
function checkInvoiceAlerts() {
    const invoiceHistory = JSON.parse(localStorage.getItem("invoiceHistory")) || [];
    const today = new Date();
    let alertMessages = [];

    invoiceHistory.forEach(invoice => {
        const dueDate = new Date(invoice.dueDate);
        const amountPaid = parseFloat(invoice.amountPaid) || 0;
        const amountOwed = parseFloat(invoice.amountOwed) || 0;

        if (amountOwed > 0 && dueDate < today) {
            alertMessages.push(`❌ Invoice #${invoice.invoiceNumber} is overdue! Amount due: $${amountOwed.toFixed(2)}`);
        } else if (amountOwed > 0 && (dueDate - today) / (1000 * 60 * 60 * 24) <= 3) {  
            alertMessages.push(`⚠️ Invoice #${invoice.invoiceNumber} is due soon! Amount remaining: $${amountOwed.toFixed(2)}`);
        }
    });

    if (alertMessages.length > 0) {
        showNotification(alertMessages.join("<br>"));
    }
}

// Function to show notification
function showNotification(message) {
    const banner = document.getElementById("invoice-alert-banner");
    const messageContainer = document.getElementById("invoice-alert-message");

    messageContainer.innerHTML = message;
    banner.classList.remove("hidden");

    // Auto-hide the banner after 7 seconds
    setTimeout(() => {
        banner.classList.add("hidden");
    }, 7000);
}

// Function to close the alert manually
function closeAlert() {
    const banner = document.getElementById("close-alert-btn");
    if (banner) {
        banner.style.display = "none";
    }
}


// Run alerts check when invoices are displayed
displayInvoiceHistory();
checkInvoiceAlerts();



    // Print an invoice
    function printInvoice(invoiceNumber) {
        const invoiceHistory = JSON.parse(localStorage.getItem("invoiceHistory")) || [];
        const invoice = invoiceHistory.find(inv => inv.invoiceNumber === invoiceNumber);
        if (invoice) {
            // Generate printable version of the invoice
            const printWindow = window.open("", "_blank");
            printWindow.document.write(generateReceiptHTML(invoice));
            printWindow.document.close();
            printWindow.print();
        }
    }

    // Generate the HTML for a printable invoice
    function generateReceiptHTML(invoice) {
        const { symbol, name } = getCurrencyInfo();
        return `
            <div class="receipt">
                <div class="header">
                    <p>${businessName.value}</p>
                    <p>${senderAddress.value}</p>
                    <p>${businessContact.value}</p>
                </div>
                <div class="customer-info">
                    <h3>Invoice</h3>
                    <p><strong>Invoice #:</strong> ${invoice.invoiceNumber}</p>
                    <p><strong>Date:</strong> ${invoice.invoiceDate}</p>
                    <p><strong>Due Date:</strong> ${invoice.dueDate}</p>
                    <h4>Bill To:</h4>
                    <p>${invoice.recipientAddress}</p>
                </div>
                <table class="receipt-items">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Unit Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${invoice.items.map(item => `
                            <tr>
                                <td>${item.description}</td>
                                <td>${item.qty}</td>
                                <td>${symbol}${item.price} (${name})</td>
                                <td>${item.total}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
                <div class="totals">
                    <p><strong>Subtotal:</strong> ${invoice.subtotal}</p>
                    <p><strong>Tax:</strong> ${invoice.taxAmount}</p>
                    <p><strong>Total:</strong> ${invoice.grandTotal}</p>
                </div>
            </div>
        `;
    }

    // Delete an invoice
    function deleteInvoice(invoiceNumber) {
        let invoiceHistory = JSON.parse(localStorage.getItem("invoiceHistory")) || [];
        invoiceHistory = invoiceHistory.filter(inv => inv.invoiceNumber !== invoiceNumber);
        localStorage.setItem("invoiceHistory", JSON.stringify(invoiceHistory));
        displayInvoiceHistory();
    }

    // Search invoices
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const rows = invoiceHistoryContainer.querySelectorAll("tbody tr");
        rows.forEach(row => {
            const invoiceNumberCell = row.cells[0].textContent.toLowerCase();
            const recipientCell = row.cells[2].textContent.toLowerCase();
            if (invoiceNumberCell.includes(query) || recipientCell.includes(query)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });

    // Initial display of invoice history
    displayInvoiceHistory();
});

// PDF Download Functionality
downloadInvoiceButton.addEventListener("click", () => {
    const options = {
        margin: 0.5,
        filename: `Invoice-${new Date().toISOString().slice(0, 10)}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(options).from(invoicePreview).save();
});

// Print Functionality
printInvoiceButton.addEventListener("click", () => {
    const printContent = invoicePreview.innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
});

const clearInvoiceButton = document.getElementById("clearInvoice");

clearInvoiceButton.addEventListener("click", () => {
    // Reset fields
    invoiceNumber.value = `INV-${Math.floor(Math.random() * 100000)}`;
    invoiceDate.value = "";
    dueDate.value = "";
    senderAddress.value = "";
    businessContact.value = "";
    recipientAddress.value = "";
    taxRate.value = "";
    itemsTable.innerHTML = "";
    updateTotals();
});

document.addEventListener("DOMContentLoaded", function () {
    const sendEmailBtn = document.getElementById("send-email");
    if (sendEmailBtn) {
        sendEmailBtn.addEventListener("click", sendInvoiceEmail);
    }
});

function sendInvoiceEmail() {
    const clientEmailInput = document.getElementById("client-email");
    const clientEmail = clientEmailInput ? clientEmailInput.value.trim() : "";

    if (!clientEmail) {
        alert("Please enter a valid email address.");
        return;
    }

    // Get invoice details
    const invoiceNum = document.getElementById("invoiceNumber")?.value.trim() || "N/A";
    const invoiceDate = document.getElementById("invoiceDate")?.value.trim() || "N/A";
    const dueDate = document.getElementById("dueDate")?.value.trim() || "N/A";
    const recipient = document.getElementById("recipientAddress")?.value.trim() || "Customer";
    const totalAmount = document.getElementById("grandTotal")?.textContent.trim() || "0.00";
    const amountOwed = document.getElementById("amountOwed")?.textContent.trim() || "0.00";

    // Business Details
    const businessName = document.getElementById("businessName")?.value.trim() || "Your Business";
    const businessContact = document.getElementById("businessContact")?.value.trim() || "Your Contact Info";
    const senderAddress = document.getElementById("senderAddress")?.value.trim() || "Your Address";

    // Currency Info (Define getCurrencyInfo or use default)
    const { symbol: currencySymbol = "$", name: currencyName = "USD" } = getCurrencyInfo();

    // Payment Platform Link
    let paymentLink = "";
    const paymentPlatformSelect = document.getElementById("paymentPlatform");
    if (paymentPlatformSelect) {
        const selectedPlatform = paymentPlatformSelect.value;
        const linkElement = document.getElementById(`${selectedPlatform}PaymentLink`);
        if (linkElement) {
            paymentLink = linkElement.value.trim();
        }
    }

    let paymentDetails = "";
    if (paymentLink) {
        paymentDetails = `Click the link below to make a payment:\n${paymentLink}\n\n`;
    }

    // Extract Invoice Items
    let items = "";
    const rows = document.querySelectorAll(".receipt-items tbody tr");
    rows.forEach(row => {
        const cells = row.cells;
        const description = cells[0]?.textContent.trim() || "N/A";
        const qty = cells[1]?.textContent.trim() || "0";
        const price = cells[2]?.textContent.trim() || "0.00";
        const subtotal = cells[3]?.textContent.trim() || "0.00";
        const total = cells[4]?.textContent.trim() || "0.00";
        const paid = cells[5]?.textContent.trim() || "0.00";
        const owed = cells[6]?.textContent.trim() || "0.00";

        items += `- ${description} (Qty: ${qty}, Unit Price: ${currencySymbol}${price}, Subtotal: ${currencySymbol}${subtotal}, Total: ${currencySymbol}${total}, Paid: ${currencySymbol}${paid}, Owed: ${currencySymbol}${owed})\n`;
    });

    // Construct Email
    const subject = `Invoice #${invoiceNum} - Payment Details`;
    const body = `Dear ${recipient},\n\n`
        + `Please find the details for your invoice:\n\n`
        + `Invoice Date: ${invoiceDate}\n`
        + `Due Date: ${dueDate}\n`
        + `Invoice Number: ${invoiceNum}\n`
        + `Total Amount: ${currencySymbol}${totalAmount} (${currencyName})\n`
        + `Amount Due: ${currencySymbol}${amountOwed} (${currencyName})\n\n`
        + `Invoice Items:\n${items}\n`
        + paymentDetails
        + `If you have any questions, feel free to contact us.\n\n`
        + `Best Regards,\n${businessName}\n${senderAddress}\n${businessContact}`;

    // Generate mailto link
    const mailtoLink = `mailto:${clientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    console.log("Generated mailto link:", mailtoLink);
    window.location.href = mailtoLink;
}

// Define getCurrencyInfo Function
function getCurrencyInfo() {
    return { symbol: "$", name: "USD" }; // Default values, modify as needed
}



document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("U-fB_UvkS4FM8TELE"); // Replace with your EmailJS Public Key

    document.getElementById("send-emailjs").addEventListener("click", function () {
        sendInvEmail();
    });
});

function sendInvEmail() {
    const clientEmail = document.getElementById("client-email").value;
    if (!clientEmail) {
        alert("Please enter a valid email address.");
        return;
    }

    const invoiceNum = document.getElementById("invoiceNumber")?.value || "N/A";
    const invoiceDate = document.getElementById("invoiceDate")?.value || "N/A";
    const dueDate = document.getElementById("dueDate")?.value || "N/A";
    const recipient = document.getElementById("recipientAddress")?.value || "Customer";
    const totalAmount = document.getElementById("grandTotal")?.textContent || "0.00";
    const amountOwed = document.getElementById("amountOwed")?.textContent || "0.00";
    const currencySymbol = "$";

    let itemsHTML = "";
    document.querySelectorAll(".receipt-items tbody tr").forEach(row => {
        const description = row.cells[0]?.textContent || "N/A";
        const qty = row.cells[1]?.textContent || "0";
        const price = row.cells[2]?.textContent || "0.00";
        const total = row.cells[4]?.textContent || "0.00";
        itemsHTML += `<li><strong>${description}</strong> (Qty: ${qty}, Price: ${currencySymbol}${price}, Total: ${currencySymbol}${total})</li>`;
    });

    const emailHTML = `
        <div style="background: #f4f4f4; padding: 20px; font-family: Arial, sans-serif;">
            <div style="background: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); max-width: 600px; margin: auto;">
                <h2 style="color: #007bff;">Dear ${recipient},</h2>
                <p>I hope you are doing well. Here are the details of your invoice:</p>
                <div style="background: #f9f9f9; padding: 15px; border-radius: 8px;">
                    <p>📅 <strong>Invoice Date:</strong> <span style="color: #28a745;">${invoiceDate}</span></p>
                    <p>⏰ <strong>Due Date:</strong> <span style="color: #28a745;">${dueDate}</span></p>
                    <p>📄 <strong>Invoice Number:</strong> <span style="color: #28a745;">${invoiceNum}</span></p>
                    <p>💰 <strong>Total Amount:</strong> <span style="color: #28a745;">${currencySymbol}${totalAmount}</span></p>
                    <p>🔴 <strong>Amount Due:</strong> <span style="color: red;">${currencySymbol}${amountOwed}</span></p>
                    <p>🛒 <strong>Invoice Items:</strong></p>
                    <ul>${itemsHTML}</ul>
                </div>
                <p>You can find your attached invoice in the email. Please process the payment before the due date.</p>
                <p style="color: #555; font-size: 14px;">Best Regards,<br>
                <strong>[Your Name]</strong><br>
                <strong>[Your Company Name]</strong><br>
                <strong>[Your Contact Information]</strong></p>
            </div>
        </div>
    `;

    
// Send email via EmailJS
    emailjs.send("service_swk874s", "template_22iecys", {
        to_email: clientEmail,
        recipient: recipient,
        invoiceDate: invoiceDate,
        dueDate: dueDate,
        invoiceNum: invoiceNum,
        totalAmount: totalAmount,
        amountOwed: amountOwed,
        currencySymbol: currencySymbol,
        itemsHTML: itemsHTML
    }).then(function(response) {
        alert("Invoice email sent successfully!");
        console.log("Email sent:", response);
    }, function(error) {
        alert("Failed to send email.");
        console.error("Email error:", error);
    });
}

document.getElementById("openGuide").addEventListener("click", () => {
    const guideContent = `
        <h3>PayPal</h3>
        <p>1. Go to <a href="https://www.paypal.me/" target="_blank">PayPal.me</a> and log in.</p>
        <p>2. Click "Create Your PayPal.Me Link" and set up your username.</p>
        <p>3. Share the generated link with customers.</p>

        <h3>Stripe</h3>
        <p>1. Log in to <a href="https://dashboard.stripe.com/" target="_blank">Stripe Dashboard</a>.</p>
        <p>2. Go to "Payment Links" and create a new link.</p>
        <p>3. Share the link with customers.</p>

        <h3>Square</h3>
        <p>1. Log in to <a href="https://squareup.com/" target="_blank">Square</a>.</p>
        <p>2. Create a new payment link in the "Invoices" or "Payment Links" section.</p>
        <p>3. Share the generated link.</p>

        <h3>Venmo</h3>
        <p>1. Open the <a href="https://venmo.com/" target="_blank">Venmo</a> app and log in.</p>
        <p>2. Tap "Pay or Request" and enter details.</p>
        <p>3. Copy and share the payment link.</p>

        <h3>Cash App</h3>
        <p>1. Open <a href="https://cash.app/" target="_blank">Cash App</a> and tap "Request".</p>
        <p>2. Enter the amount and select a contact.</p>
        <p>3. Copy and share the link.</p>

        <h3>Zelle</h3>
        <p>1. Open your bank's <a href="https://www.zellepay.com/" target="_blank">Zelle</a> app.</p>
        <p>2. Choose "Request" and enter the recipient's details.</p>
        <p>3. Share the generated link.</p>

        <h3>Apple Pay</h3>
        <p>1. Open the <a href="https://support.apple.com/en-us/HT207875" target="_blank">Wallet</a> app on your iPhone.</p>
        <p>2. Select Apple Cash and tap "Request".</p>
        <p>3. Send the request link.</p>

        <h3>Google Pay</h3>
        <p>1. Open <a href="https://pay.google.com/" target="_blank">Google Pay</a> and tap "Request Money".</p>
        <p>2. Enter the amount and recipient details.</p>
        <p>3. Copy and share the link.</p>

        <h3>Google Wallet</h3>
        <p>1. Open <a href="https://wallet.google/" target="_blank">Google Wallet</a> and go to "Send or Request Money".</p>
        <p>2. Enter the amount and recipient details.</p>
        <p>3. Copy and share the link.</p>

        <h3>Alipay</h3>
        <p>1. Open the <a href="https://www.alipay.com/" target="_blank">Alipay app</a>.</p>
        <p>2. Tap "Request Money" and enter details.</p>
        <p>3. Share the generated QR code or link.</p>

        <h3>WeChat Pay</h3>
        <p>1. Open <a href="https://pay.weixin.qq.com/" target="_blank">WeChat</a> and go to "Wallet".</p>
        <p>2. Tap "Request Money" and set up the amount.</p>
        <p>3. Share the payment link.</p>

        <h3>JCB, Diners Club, Mastercard, Visa, American Express, Discover, UnionPay</h3>
        <p>These are credit card networks. To accept payments via these cards, you need a payment processor like Stripe, Square, or PayPal.</p>
        <p>Follow the steps for Stripe, Square, or PayPal to generate payment links.</p>
    `;
        

    document.getElementById("paymentGuideContent").innerHTML = guideContent;
    document.getElementById("paymentGuideModal").style.display = "block";
});

// Close modal when clicking on the close button
document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("paymentGuideModal").style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
    const modal = document.getElementById("paymentGuideModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

function OpenModal() {
    document.getElementById('invoiceBenefitsModal').style.display = 'block';
  }
  
  function CloseModal() {
    document.getElementById('invoiceBenefitsModal').style.display = 'none';
  }
  



 (function() {
        let canvas = document.getElementById("signatureCanvas");
        let ctx = canvas.getContext("2d");
        let drawing = false;
        let strokes = [];
        let currentStroke = [];
        let penColor = "#000000";
        let penSize = 4;

        function resizeCanvas() {
            canvas.width = canvas.offsetWidth;
            canvas.height = 200;
            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        resizeCanvas();

        canvas.addEventListener("mousedown", (e) => {
            drawing = true;
            currentStroke = [];
            ctx.beginPath();
            draw(e);
        });

        canvas.addEventListener("mouseup", () => {
            drawing = false;
            strokes.push([...currentStroke]);
        });

        canvas.addEventListener("mousemove", draw);

        function draw(event) {
            if (!drawing) return;
            let x = event.offsetX;
            let y = event.offsetY;
            ctx.lineWidth = penSize;
            ctx.lineCap = "round";
            ctx.strokeStyle = penColor;

            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x, y);
            
            currentStroke.push({ x, y, color: penColor, size: penSize });
        }

        window.clearCanvas = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            strokes = [];
        }

        window.undoLastStroke = function() {
            strokes.pop();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            strokes.forEach(stroke => {
                ctx.beginPath();
                stroke.forEach(point => {
                    ctx.lineWidth = point.size;
                    ctx.strokeStyle = point.color;
                    ctx.lineTo(point.x, point.y);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(point.x, point.y);
                });
            });
        }

        window.saveSignature = function() {
            let signatureData = canvas.toDataURL("image/png");
            document.getElementById("signatureData").value = signatureData;
            let img = document.getElementById("signatureImage");
            img.src = signatureData;
            img.style.display = "block";
        }

        window.downloadSignature = function() {
            let link = document.createElement("a");
            link.download = "signature.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
        }

        document.getElementById("penColor").addEventListener("input", function() {
            penColor = this.value;
        });

        document.getElementById("penSize").addEventListener("change", function() {
            penSize = this.value;
        });

        window.addEventListener("resize", resizeCanvas);
    })();
    
    document.addEventListener("DOMContentLoaded", function () {
        const modal = document.getElementById("chartModal");
        const closeBtn = document.querySelector(".close");
    
        let statusChartInstance = null;
        let paymentChartInstance = null;
    
        // Loading spinner element
        const loadingSpinner = document.getElementById("loadingSpinner");
    
        // Ensure modal remains hidden on page load
        modal.style.display = "none";
    
        function renderCharts(filteredInvoices) {
            const statusCounts = { Paid: 0, "Partially Paid": 0, Unpaid: 0 };
            let totalPaid = 0;
            let totalDue = 0;
    
            filteredInvoices.forEach(invoice => {
                const paid = parseFloat(invoice.amountPaid) || 0;
                const owed = parseFloat(invoice.grandTotal.replace(/[^0-9.-]+/g, "")) - paid;
    
                statusCounts[invoice.status] = (statusCounts[invoice.status] || 0) + 1;
                totalPaid += paid;
                totalDue += owed;
            });
    
            // Render the invoice status chart
            const statusCtx = document.getElementById("invoiceStatusChart").getContext("2d");
            if (statusChartInstance) statusChartInstance.destroy();
            statusChartInstance = new Chart(statusCtx, {
                type: "pie",
                data: {
                    labels: ["Paid", "Partially Paid", "Unpaid"],
                    datasets: [{
                        data: [statusCounts.Paid, statusCounts["Partially Paid"], statusCounts.Unpaid],
                        backgroundColor: ["green", "orange", "red"],
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { position: "bottom" }
                    }
                }
            });
    
            // Render the payment chart
            const paymentCtx = document.getElementById("paymentChart").getContext("2d");
            if (paymentChartInstance) paymentChartInstance.destroy();
            paymentChartInstance = new Chart(paymentCtx, {
                type: "bar",
                data: {
                    labels: ["Total Paid", "Total Due"],
                    datasets: [{
                        data: [totalPaid, totalDue],
                        backgroundColor: ["blue", "red"]
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            });
        }
    
        function displayErrorMessage(message) {
            clearErrorMessage();
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('error-message');
            errorMessage.innerText = message;
            modal.appendChild(errorMessage);
        }
    
        function clearErrorMessage() {
            const errorMessage = modal.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.remove();
            }
        }
    
        document.getElementById("openChartsBtn").addEventListener("click", function () {
            const invoiceHistory = JSON.parse(localStorage.getItem("invoiceHistory")) || [];
    
            if (invoiceHistory.length === 0) {
                displayErrorMessage("No invoices available. Please add some invoices to view the charts.");
                modal.style.display = "block"; // Show modal only if there's an error
                return;
            }
    
            // Ensure modal is hidden before displaying charts
            modal.style.display = "block";
            loadingSpinner.style.display = "block";
    
            setTimeout(() => {
                renderCharts(invoiceHistory);
                loadingSpinner.style.display = "none";
            }, 500);
        });
    
        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });
    
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
    

function displayTaxReport() {
    const invoiceHistory = JSON.parse(localStorage.getItem("invoiceHistory")) || [];
    let totalSubtotal = 0, totalTax = 0, totalGrandTotal = 0;

    let reportHTML = `
        <table class="tax-report">
            <thead>
                <tr>
                    <th>Invoice #</th>
                    <th>Date</th>
                    <th>Subtotal</th>
                    <th>Tax Amount</th>
                    <th>Tax %</th>
                    <th>Grand Total</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
    `;

    invoiceHistory.forEach((invoice, index) => {
        const subtotal = parseFloat(invoice.subtotal.replace(/[^0-9.-]+/g, "")) || 0;
        const taxAmount = parseFloat(invoice.taxAmount.replace(/[^0-9.-]+/g, "")) || 0;
        const grandTotal = parseFloat(invoice.grandTotal.replace(/[^0-9.-]+/g, "")) || 0;
        const taxPercentage = subtotal > 0 ? ((taxAmount / subtotal) * 100).toFixed(2) + "%" : "N/A";

        totalSubtotal += subtotal;
        totalTax += taxAmount;
        totalGrandTotal += grandTotal;

        reportHTML += `
            <tr>
                <td>${invoice.invoiceNumber}</td>
                <td>${invoice.invoiceDate}</td>
                <td>${subtotal.toFixed(2)}</td>
                <td>${taxAmount.toFixed(2)}</td>
                <td>${taxPercentage}</td>
                <td>${grandTotal.toFixed(2)}</td>
                <td><button onclick="deleteInvoice(${index})">Delete</button></td>
            </tr>
        `;
    });

    reportHTML += `
            </tbody>
        </table>
        <br>
        <div class="tax-summary">
            <p><strong>Total Invoices Processed:</strong> ${invoiceHistory.length}</p>
            <p><strong>Total Subtotal:</strong> $${totalSubtotal.toFixed(2)}</p>
            <p><strong>Total Tax Collected:</strong> $${totalTax.toFixed(2)}</p>
            <p><strong>Total Revenue (After Tax):</strong> $${totalGrandTotal.toFixed(2)}</p>
        </div>
    `;

    document.getElementById("taxReportContainer").innerHTML = reportHTML;
}

function deleteInvoice(index) {
    const invoiceHistory = JSON.parse(localStorage.getItem("invoiceHistory")) || [];
    // Remove the invoice at the given index
    invoiceHistory.splice(index, 1);
    // Save the updated history back to localStorage
    localStorage.setItem("invoiceHistory", JSON.stringify(invoiceHistory));
    // Re-render the report after deletion
    displayTaxReport();
}

// Call the function on page load
displayTaxReport();

// Function to display receipts
function displayReceipts() {
    const invoiceHistory = JSON.parse(localStorage.getItem("invoiceHistory")) || [];
    const receiptTableBody = document.getElementById("receiptTableBody");

    // Filter only Paid invoices
    const paidInvoices = invoiceHistory.filter(invoice => {
        const totalPaid = parseFloat(invoice.amountPaid) || 0;
        const totalOwed = parseFloat(invoice.grandTotal.replace(/[^0-9.-]+/g, "")) - totalPaid;
        return totalOwed <= 0; // Only show fully paid invoices
    });

    receiptTableBody.innerHTML = paidInvoices.map(invoice => {
        const invoiceDetails = `
            Invoice #: ${invoice.invoiceNumber}\n
            Date: ${invoice.invoiceDate}\n
            Recipient: ${invoice.recipientAddress}\n
            Total Amount: ${invoice.grandTotal}\n
            Amount Paid: ${invoice.amountPaid}\n
            Status: Paid\n\n
            Thank you for your payment!
        `;

        const emailSubject = encodeURIComponent(`Receipt for Invoice #${invoice.invoiceNumber}`);
        const emailBody = encodeURIComponent(
            `Dear ${invoice.recipientAddress},\n\n` +
            `Thank you for your payment! Your invoice #${invoice.invoiceNumber} has been fully settled.\n\n` +
            `Here are the details:\n` +
            `Invoice Number: ${invoice.invoiceNumber}\n` +
            `Invoice Date: ${invoice.invoiceDate}\n` +
            `Total Amount: ${invoice.grandTotal}\n` +
            `Amount Paid: ${invoice.amountPaid}\n\n` +
            `Best regards,\n[Your Company Name]`
        );

        return `
            <tr>
                <td>${invoice.invoiceNumber}</td>
                <td>${invoice.invoiceDate}</td>
                <td>${invoice.recipientAddress}</td>
                <td>${invoice.grandTotal}</td>
                <td>${invoice.amountPaid}</td>
                <td>
                    <button class="download-receipt-btn" data-invoice='${JSON.stringify(invoice)}'>Download</button>
                    <a href="mailto:?subject=${emailSubject}&body=${emailBody}" class="email-receipt-btn">Email</a>
                    <button class="delete-receipt-btn" data-invoice-number="${invoice.invoiceNumber}">Delete</button>
                </td>
            </tr>
        `;
    }).join("");

    // Add event listeners for downloading receipts after the content is loaded
    document.querySelectorAll(".download-receipt-btn").forEach(button => {
        button.addEventListener("click", function () {
            const invoiceData = JSON.parse(this.getAttribute("data-invoice"));
            downloadReceipt(invoiceData);
        });
    });

    // Add event listeners for deleting receipts
    document.querySelectorAll(".delete-receipt-btn").forEach(button => {
        button.addEventListener("click", function () {
            const invoiceNumber = this.getAttribute("data-invoice-number");
            deleteReceipt(invoiceNumber);
        });
    });
}

// Function to delete a receipt
function deleteReceipt(invoiceNumber) {
    let invoiceHistory = JSON.parse(localStorage.getItem("invoiceHistory")) || [];

    // Filter out the invoice to be deleted
    invoiceHistory = invoiceHistory.filter(invoice => invoice.invoiceNumber !== invoiceNumber);

    // Update localStorage
    localStorage.setItem("invoiceHistory", JSON.stringify(invoiceHistory));

    // Refresh displayed receipts
    displayReceipts();
}

// Function to generate and download receipt as a PDF
function downloadReceipt(invoice) {
    const { jsPDF } = window.jspdf;

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFont("helvetica");
    doc.setFontSize(12);

    // Add Header
    doc.text("Receipt", 105, 20, null, null, "center");

    // Add Invoice details
    doc.text(`Invoice Number: ${invoice.invoiceNumber}`, 20, 30);
    doc.text(`Date: ${invoice.invoiceDate}`, 20, 40);
    doc.text(`Recipient: ${invoice.recipientAddress}`, 20, 50);
    doc.text(`Total Amount: ${invoice.grandTotal}`, 20, 60);
    doc.text(`Amount Paid: ${invoice.amountPaid}`, 20, 70);
    doc.text(`Status: Paid`, 20, 80);

    // Add Footer
    doc.text("Thank you for your payment!", 105, 90, null, null, "center");
    doc.text(`Total Amount Paid: ${invoice.grandTotal}`, 20, 100);

    // Save the generated PDF
    doc.save(`Receipt_${invoice.invoiceNumber}.pdf`);
}

document.addEventListener("DOMContentLoaded", function () {
    displayReceipts();
});

function calculateNextDueDate(currentDueDate, interval) {
    let nextDate = new Date(currentDueDate);

    if (isNaN(nextDate)) {
        return "Invalid Date";
    }

    switch (interval) {
        case "weekly":
            nextDate.setDate(nextDate.getDate() + 7);
            break;
        case "monthly":
            nextDate.setMonth(nextDate.getMonth() + 1);
            break;
        case "yearly":
            nextDate.setFullYear(nextDate.getFullYear() + 1);
            break;
    }

    return nextDate.toISOString().split("T")[0]; // Return as YYYY-MM-DD
}

function displayRecurringInvoices() {
    const recurringInvoices = JSON.parse(localStorage.getItem("recurringInvoiceHistory")) || [];
    const recurringInvoiceContainer = document.getElementById("recurringInvoiceContainer");

    if (recurringInvoices.length === 0) {
        recurringInvoiceContainer.innerHTML = "<p>No recurring invoices found.</p>";
        return;
    }

    // Calculate Summary Data
    let totalInvoices = recurringInvoices.length;
    let totalPaid = 0;
    let totalOwed = 0;
    let totalTaxes = 0;
    let paidCount = 0, partiallyPaidCount = 0, unpaidCount = 0;

    recurringInvoices.forEach(invoice => {
        let paid = parseFloat(invoice.amountPaid) || 0;
        let owed = parseFloat(invoice.grandTotal.replace(/[^0-9.-]+/g, "")) - paid;
        let tax = parseFloat(invoice.taxAmount.replace(/[^0-9.-]+/g, "")) || 0;

        totalPaid += paid;
        totalOwed += owed;
        totalTaxes += tax;

        if (paid === 0) unpaidCount++;
        else if (owed > 0) partiallyPaidCount++;
        else paidCount++;
    });

    // Generate the summary snapshot
    const summarySnapshot = `
        <div class="summary-container">
            <h3>Recurring Invoices Summary</h3>
            <div class="summary-box">
                <p><strong>Total Invoices:</strong> ${totalInvoices}</p>
                <p><strong>Total Paid:</strong> $${totalPaid.toFixed(2)}</p>
                <p><strong>Total Outstanding:</strong> $${totalOwed.toFixed(2)}</p>
                <p><strong>Total Taxes Applied:</strong> $${totalTaxes.toFixed(2)}</p>
                <p><strong>Paid:</strong> ${paidCount} | <strong>Partially Paid:</strong> ${partiallyPaidCount} | <strong>Unpaid:</strong> ${unpaidCount}</p>
            </div>
        </div>
    `;

    // Generate the recurring invoices table
    const invoicesTable = `
        <h3>Recurring Invoices</h3>
        <table class="invoice-history">
            <thead>
                <tr>
                    <th>Invoice #</th>
                    <th>Date</th>
                    <th>Due Date</th>
                    <th>Next Due Date</th>
                    <th>Recipient</th>
                    <th>Subtotal</th>
                    <th>Tax</th>
                    <th>Total</th>
                    <th>Amount Paid</th>
                    <th>Amount Due</th>
                    <th>Interval</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${recurringInvoices.map((invoice, index) => {
                    let paid = parseFloat(invoice.amountPaid) || 0;
                    let owed = parseFloat(invoice.grandTotal.replace(/[^0-9.-]+/g, "")) - paid;
                    let status = owed === 0 ? "Paid" : paid > 0 ? "Partially Paid" : "Unpaid";

                    return `
                        <tr>
                            <td>${invoice.invoiceNumber}</td>
                            <td>${invoice.invoiceDate}</td>
                            <td>${invoice.dueDate}</td>
                            <td>${invoice.nextDueDate || "N/A"}</td>
                            <td>${invoice.recipientAddress}</td>
                            <td>${invoice.subtotal}</td>
                            <td>${invoice.taxAmount}</td>
                            <td>${invoice.grandTotal}</td>
                            <td>${invoice.amountPaid}</td>
                            <td>${owed.toFixed(2)}</td>
                            <td>${invoice.recurringInterval}</td>
                            <td id="status-${index}">${status}</td>
                            <td>
                                <input type="number" id="payment-${index}" placeholder="Enter payment" min="0" step="0.01">
                                <button onclick="updatePayment(${index})">💳 Update Payment</button>
                                <button onclick="deleteRecurringInvoice(${index})">🗑️ Delete</button>
                                <button onclick="sendReminderEmail('${invoice.recipientAddress}', '${invoice.invoiceNumber}', '${owed.toFixed(2)}', '${invoice.nextDueDate}')">📧 Send Reminder</button>
                            </td>
                        </tr>
                    `;
                }).join("")}
            </tbody>
        </table>
    `;

    // Display the summary and invoices table
    recurringInvoiceContainer.innerHTML = summarySnapshot + invoicesTable;
}


function generateNextRecurringInvoices() {
    let recurringInvoices = JSON.parse(localStorage.getItem("recurringInvoiceHistory")) || [];
    let invoiceHistory = JSON.parse(localStorage.getItem("invoiceHistory")) || [];
    
    const today = new Date().toISOString().split("T")[0]; // Current Date in YYYY-MM-DD

    recurringInvoices.forEach(invoice => {
        if (invoice.nextDueDate === today) {
            // Create a new invoice with an updated nextDueDate
            let newInvoice = { ...invoice };
            newInvoice.invoiceNumber = "INV-" + Math.floor(1000 + Math.random() * 9000); // Generate new invoice number
            newInvoice.invoiceDate = today;
            newInvoice.dueDate = invoice.nextDueDate;
            newInvoice.nextDueDate = calculateNextDueDate(invoice.nextDueDate, invoice.recurringInterval);
            newInvoice.amountPaid = "0.00"; // Reset payment for new cycle
            newInvoice.amountOwed = invoice.grandTotal;

            invoiceHistory.push(newInvoice); // Store in normal invoice history
            localStorage.setItem("invoiceHistory", JSON.stringify(invoiceHistory));

            invoice.nextDueDate = newInvoice.nextDueDate; // Update recurring entry
        }
    });

    localStorage.setItem("recurringInvoiceHistory", JSON.stringify(recurringInvoices));
    displayInvoiceHistory();
    displayRecurringInvoices();
}

// Run this daily
setInterval(generateNextRecurringInvoices, 24 * 60 * 60 * 1000); // Runs every 24 hours

window.onload = function () {
    displayInvoiceHistory();
    displayRecurringInvoices();
    generateNextRecurringInvoices(); // Ensure recurring invoices are updated on load
};

document.getElementById("isRecurring").addEventListener("change", function () {
    document.getElementById("recurringInterval").disabled = !this.checked;
});

function updatePayment(index) {
    let recurringInvoices = JSON.parse(localStorage.getItem("recurringInvoiceHistory")) || [];
    let invoice = recurringInvoices[index];

    const paymentInput = document.getElementById(`payment-${index}`);
    let paymentAmount = parseFloat(paymentInput.value);

    if (isNaN(paymentAmount) || paymentAmount <= 0) {
        alert("Please enter a valid payment amount.");
        return;
    }

    let totalPaid = parseFloat(invoice.amountPaid) || 0;
    let totalDue = parseFloat(invoice.grandTotal.replace(/[^0-9.-]+/g, "")) - totalPaid;

    if (paymentAmount > totalDue) {
        alert("Payment exceeds the remaining amount due!");
        return;
    }

    totalPaid += paymentAmount;
    let remainingDue = parseFloat(invoice.grandTotal.replace(/[^0-9.-]+/g, "")) - totalPaid;

    let newStatus = "Unpaid";
    if (totalPaid > 0 && remainingDue > 0) {
        newStatus = "Partially Paid";
    } else if (totalPaid >= remainingDue) {
        newStatus = "Paid";
    }

    // Update invoice data
    invoice.amountPaid = totalPaid.toFixed(2);
    invoice.amountOwed = remainingDue.toFixed(2);

    recurringInvoices[index] = invoice;
    localStorage.setItem("recurringInvoiceHistory", JSON.stringify(recurringInvoices));

    // Update UI without full reload
    document.getElementById(`status-${index}`).innerText = newStatus;
    displayRecurringInvoices();  // Refresh table
}

function deleteRecurringInvoice(index) {
    let recurringInvoices = JSON.parse(localStorage.getItem("recurringInvoiceHistory")) || [];
    
    if (confirm("Are you sure you want to delete this recurring invoice?")) {
        recurringInvoices.splice(index, 1);
        localStorage.setItem("recurringInvoiceHistory", JSON.stringify(recurringInvoices));
        displayRecurringInvoices();
    }
}

function sendReminderEmail(recipient, invoiceNumber, amountDue, nextDueDate) {
    if (!recipient || recipient.trim() === "") {
        alert("No recipient email found.");
        return;
    }

    const subject = `Payment Reminder: Invoice #${invoiceNumber}`;
    const body = `Dear Customer,\n\nThis is a reminder that your payment for Invoice #${invoiceNumber} is due on ${nextDueDate}.\n\nOutstanding Amount: ${amountDue}\n\nPlease make the payment at your earliest convenience.\n\nThank you.\n\nBest Regards,\nYour Company`;

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

function updatePayment(index) {
    let recurringInvoices = JSON.parse(localStorage.getItem("recurringInvoiceHistory")) || [];
    let invoice = recurringInvoices[index];

    const paymentInput = document.getElementById(`payment-${index}`);
    let paymentAmount = parseFloat(paymentInput.value);

    if (isNaN(paymentAmount) || paymentAmount <= 0) {
        alert("Please enter a valid payment amount.");
        return;
    }

    let totalPaid = parseFloat(invoice.amountPaid) || 0;
    let totalDue = parseFloat(invoice.grandTotal.replace(/[^0-9.-]+/g, "")) - totalPaid;

    if (paymentAmount > totalDue) {
        alert("Payment exceeds the remaining amount due!");
        return;
    }

    totalPaid += paymentAmount;
    let remainingDue = parseFloat(invoice.grandTotal.replace(/[^0-9.-]+/g, "")) - totalPaid;

    let newStatus = "Unpaid";
    if (totalPaid > 0 && remainingDue > 0) {
        newStatus = "Partially Paid";
    } else if (totalPaid >= remainingDue) {
        newStatus = "Paid";
    }

    // Update invoice data
    invoice.amountPaid = totalPaid.toFixed(2);
    invoice.amountOwed = remainingDue.toFixed(2);

    recurringInvoices[index] = invoice;
    localStorage.setItem("recurringInvoiceHistory", JSON.stringify(recurringInvoices));

    // Update UI without full reload
    document.getElementById(`status-${index}`).innerText = newStatus;
    displayRecurringInvoices();  // Refresh table
}

function openModal() {
    document.getElementById("analyticsModal").style.display = "flex";
}
function closeModal() {
    document.getElementById("analyticsModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    const invoiceData = JSON.parse(localStorage.getItem("recurringInvoiceHistory")) || [];
    
    let paidCount = 0, partiallyPaidCount = 0, unpaidCount = 0;
    let monthlyRevenue = {};
    
    invoiceData.forEach(invoice => {
        let paid = parseFloat(invoice.amountPaid) || 0;
        let total = parseFloat(invoice.grandTotal.replace(/[^0-9.-]+/g, ""));
        let owed = total - paid;
        
        if (paid === 0) unpaidCount++;
        else if (owed > 0) partiallyPaidCount++;
        else paidCount++;
        
        let invoiceMonth = invoice.invoiceDate.split('-').slice(0, 2).join('-');
        monthlyRevenue[invoiceMonth] = (monthlyRevenue[invoiceMonth] || 0) + paid;
    });
    
    // Status Breakdown Chart
    new Chart(document.getElementById("statusChart"), {
        type: 'pie',
        data: {
            labels: ["Paid", "Partially Paid", "Unpaid"],
            datasets: [{
                data: [paidCount, partiallyPaidCount, unpaidCount],
                backgroundColor: ["#4caf50", "#ff9800", "#f44336"]
            }]
        }
    });
    
    // Monthly Revenue Chart
    new Chart(document.getElementById("revenueChart"), {
        type: 'line',
        data: {
            labels: Object.keys(monthlyRevenue).sort(),
            datasets: [{
                label: "Revenue ($)",
                data: Object.values(monthlyRevenue),
                borderColor: "#007bff",
                fill: false
            }]
        }
    });
});

let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

function updateInventoryStorage() {
    localStorage.setItem("inventory", JSON.stringify(inventory));
}

// Function to attach event listeners to checkboxes
function attachCheckboxListeners() {
    document.querySelectorAll(".itemCheckbox").forEach(checkbox => {
        checkbox.addEventListener("change", populateItemsTable);
    });
}

// Display Inventory List
function displayInventory() {
    const inventoryList = document.getElementById("inventoryList");
    inventoryList.innerHTML = "";

    inventory.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><input type="checkbox" class="itemCheckbox" data-index="${index}"></td>
            <td>${item.description}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
            <td>
                <button onclick="removeItem(${index})">Remove</button>
            </td>
        `;
        inventoryList.appendChild(row);
    });

    attachCheckboxListeners(); // Ensure checkboxes trigger invoice updates
}

// Remove Inventory Item
function removeItem(index) {
    inventory.splice(index, 1);
    updateInventoryStorage();
    displayInventory();
}

// Clear Form after Add/Update
function clearForm() {
    document.getElementById("itemDescription").value = "";
    document.getElementById("itemQuantity").value = 1;
    document.getElementById("itemPrice").value = 0;
}

displayInventory(); // Initial display of inventory

// Add or Update Inventory Item
document.getElementById("inventoryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const description = document.getElementById("itemDescription").value.trim();
    const quantity = parseInt(document.getElementById("itemQuantity").value, 10);
    const price = parseFloat(document.getElementById("itemPrice").value);

    // Check if all fields are filled correctly
    if (!description || quantity <= 0 || isNaN(price) || price <= 0) {
        alert("Please enter valid values for all fields.");
        return;
    }

    // Check if the item already exists in the inventory (to prevent duplicates)
    const existingItemIndex = inventory.findIndex(item => item.description.toLowerCase() === description.toLowerCase());

    if (existingItemIndex > -1) {
        // Update the quantity and price of the existing item
        inventory[existingItemIndex].quantity += quantity; // Add quantity to existing one
        inventory[existingItemIndex].price = price; // Update price (optional, you can skip this if price is fixed)
    } else {
        // Prevent adding duplicate item (check for exact match, case insensitive)
        inventory.push({ description, quantity, price });
    }

    updateInventoryStorage();  // Update localStorage
    displayInventory();  // Refresh inventory list
    clearForm();  // Clear the form for next entry
});

function populateItemsTable() {
    const itemsTable = document.getElementById("itemsTable");
    const tbody = itemsTable.querySelector("tbody");
    tbody.innerHTML = ""; // Clear existing rows

    const selectedItems = document.querySelectorAll(".itemCheckbox:checked");

    selectedItems.forEach(checkbox => {
        const index = checkbox.getAttribute("data-index");
        const item = inventory[index];

        const row = document.createElement("tr");
        row.innerHTML = `
            <td><input type="text" value="${item.description}" /></td>
            <td><input type="number" value="${item.quantity}" /></td>
            <td><input type="number" value="${item.price}" step="0.01" /></td>
            <td>${(item.quantity * item.price).toFixed(2)}</td>
            <td>${(item.quantity * item.price).toFixed(2)}</td>
            <td><input type="number" value="0" /></td>
            <td>${(item.quantity * item.price).toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });
}

// Initial inventory display
displayInventory();

// Update the updateInventoryAfterReceipt function to ensure valid quantities are handled
function updateInventoryAfterReceipt(receiptItems) {
    console.log("Updating inventory after receipt:", receiptItems);

    receiptItems.forEach(item => {
        const inventoryItem = inventory.find(i => i.description === item.description);
        
        if (inventoryItem) {
            console.log("Found inventory item:", inventoryItem);

            // Convert the quantity to a number (parse it safely)
            const itemQuantity = parseInt(item.qty, 10);
            if (isNaN(itemQuantity) || itemQuantity <= 0) {
                console.error("Invalid quantity for item:", item.description);
                return; // Skip invalid quantities
            }

            // Reduce the inventory quantity by the itemQuantity
            inventoryItem.quantity -= itemQuantity;

            console.log(`Updated quantity for ${inventoryItem.description}:`, inventoryItem.quantity);

            // Remove the item if its quantity goes to 0 or below
            if (inventoryItem.quantity <= 0) {
                console.log(`Removing item ${inventoryItem.description} from inventory`);
                removeItem(inventory.indexOf(inventoryItem));
            }
        } else {
            console.error("Item not found in inventory:", item.description);
        }
    });

    updateInventoryStorage(); // Save the updated inventory to localStorage
    displayInventory(); // Refresh the inventory display
}
function saveBusinessInfo() {
    const businessInfo = {
        logo: document.getElementById("logoDataUrl")?.value || "", 
        name: document.getElementById("businessName")?.value || "",
        address: document.getElementById("senderAddress")?.value || "",
        contact: document.getElementById("businessContact")?.value || ""
    };
    
    localStorage.setItem("businessInfo", JSON.stringify(businessInfo));
    alert("Business information saved successfully!");
}
function loadBusinessInfo() {
    const businessInfo = JSON.parse(localStorage.getItem("businessInfo"));

    if (businessInfo) {
        document.getElementById("businessName").value = businessInfo.name;
        document.getElementById("senderAddress").value = businessInfo.address;
        document.getElementById("businessContact").value = businessInfo.contact;

        // If a logo exists, display it
        if (businessInfo.logo) {
            document.getElementById("businessLogoPreview").src = businessInfo.logo;
            document.getElementById("businessLogoPreview").style.display = "block";
        }
    }
}
document.addEventListener("DOMContentLoaded", loadBusinessInfo);

document.addEventListener("DOMContentLoaded", function () {
    const logoInput = document.getElementById("businessLogo");
    const logoPreview = document.getElementById("logoPreview");
    const removeLogoButton = document.getElementById("removeLogo");

    // Load saved logo from localStorage
    const savedLogo = localStorage.getItem("businessLogo");
    if (savedLogo) {
        logoPreview.src = savedLogo;
        logoPreview.style.display = "block";
    }

    // Handle logo upload
    logoInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const logoDataUrl = e.target.result;
                localStorage.setItem("businessLogo", logoDataUrl); // Save to localStorage
                logoPreview.src = logoDataUrl;
                logoPreview.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });

    // Remove stored logo
    removeLogoButton.addEventListener("click", function () {
        localStorage.removeItem("businessLogo");
        logoPreview.style.display = "none";
        logoPreview.src = "";
    });

    // Modify receipt generation to include stored logo
    function generateReceipt() {
        const storedLogo = localStorage.getItem("businessLogo") || "";
        generateReceiptHTML(storedLogo);
    }
});

function signOut() {
    // Clear any stored authentication data (localStorage/sessionStorage)
    localStorage.removeItem("authToken"); // Adjust based on your auth implementation
    sessionStorage.removeItem("authToken"); 

    // Redirect to authentication page
    window.location.href = "auth.html"; // Change to your auth page URL
}
