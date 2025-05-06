// Emoji categories
const emojis = {
    smileys: ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚', '☺️', '🙂', '🤗', '🤔', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹️', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '😬', '😰', '😱', '😳', '🤪', '😵', '😡', '😠', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🤠', '🤡', '🤥', '🤫', '🤭', '🧐', '🤓', '😈', '👿', '👹', '👺', '💀', '👻', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'],
    animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦂', '🦟', '🦠', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🐘', '🦛', '🦏', '🐪', '🐫', '🦙', '🦒', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🦌', '🐐', '🐓', '🦃', '🦚', '🦜', '🦢', '🦩', '🕊️', '🐇', '🐁', '🐀', '🐿️', '🦔'],
    food: ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶️', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅', '🥔', '🍠', '🥐', '🥯', '🍞', '🥖', '🥨', '🧀', '🥚', '🍳', '🥓', '🥩', '🍗', '🍖', '🦴', '🌭', '🍔', '🍟', '🍕', '🌮', '🌯', '🫔', '🥙', '🧆', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🦪', '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🧂', '🥤', '🧃', '🧉', '🧋', '🍺', '🍻', '🍷', '🥂', '🥃', '🍸', '🍹', '🍾', '🧊', '🥄', '🍴', '🥄', '🍴', '🍽️', '🥢'],
    activity: ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🎳', '🏏', '🏑', '🏒', '🏓', '🥅', '🏸', '🎯', '🎣', '🤿', '🎽', '🎿', '⛷️', '🏂', '🏋️', '🤼', '🤸', '⛹️', '🤺', '🤾', '🏌️', '🏇', '🧘', '🏄', '🏊', '🤽', '🚴', '🚵', '🏎️', '🏍️', '🛹', '🛼', '🛷', '⛸️', '🥌', '🎯', '🎳', '🥇', '🥈', '🥉', '🏆', '🏅', '🎖️', '🥋', '🎽', '🛶', '🛳️', '🏕️', '🏖️', '🏝️', '🏟️', '🏛️', '🏗️', '🎡', '🎢', '🎠', '🎪', '🎭', '🎨', '🎬', '🎤', '🎧', '🎼', '🎹', '🥁', '🎷', '🎺', '🎸', '🎻', '🎲', '🎯', '🎳', '🎮', '🎰', '🎲'],
    travel: ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜', '🛴', '🚲', '🛵', '🏍️', '🚨', '🚔', '🚍', '🚘', '🚖', '🚡', '🚠', '🚟', '🚃', '🚋', '🚞', '🚝', '🚄', '🚅', '🚈', '🚂', '🚆', '🚇', '🚊', '🚉', '✈️', '🛫', '🛬', '🛩️', '💺', '🛰️', '🚀', '🛸', '🚁', '🛶', '⛵', '🚤', '🛥️', '🚢', '⛴️', '⚓', '🪝', '🛳️', '🚧', '⛽', '🚏', '🗺️', '🗿', '🗽', '🗼', '🏰', '🏯', '🏟️', '🎢', '🎠', '🎡', '🪂', '🎪', '🌋', '🗻', '🏔️', '⛰️', '🏕️', '🏖️', '🏜️', '🏝️', '🏞️', '🏟️', '🏛️', '🏗️', '🧱', '🏘️', '🏚️', '🏠', '🏡', '🏢', '🏣', '🏤', '🏥', '🏦', '🏨', '🏩', '🏪', '🏫', '🏬', '🏭', '🏯', '🏰', '💒', '🗼', '🗽', '🗿', '🎠', '🎡', '🎢', '🎪'],
    hands: ['👍', '👎', '👌', '👊', '✊', '🤛', '🤜', '👏', '👐', '🙌', '🤲', '🤝', '🙏', '✋', '🤚', '🖐️', '🖖', '👋', '🤟', '🤘', '🤙', '✍️', '🤏', '🦾']
  };
  
  // Toggle emoji picker visibility
  document.getElementById('emojiBtn').addEventListener('click', function() {
    const emojiPicker = document.getElementById('emojiPicker');
    emojiPicker.style.display = emojiPicker.style.display === 'none' ? 'block' : 'none';
  });
  
  // Display emojis by category
  const emojiList = document.getElementById('emojiList');
  const displayEmojis = (category) => {
    emojiList.innerHTML = ''; // Clear existing emojis
    emojis[category].forEach(emoji => {
        const emojiButton = document.createElement('button');
        emojiButton.innerText = emoji;
        emojiButton.className = 'emoji-button';
        emojiList.appendChild(emojiButton);
  
        // Insert emoji into textarea on click
        emojiButton.addEventListener('click', () => {
            const commentField = document.getElementById('comment');
            commentField.value += emoji;
        });
    });
  };
  
  // Add event listeners to category buttons
  document.getElementById('smileys').addEventListener('click', () => displayEmojis('smileys'));
  document.getElementById('animals').addEventListener('click', () => displayEmojis('animals'));
  document.getElementById('food').addEventListener('click', () => displayEmojis('food'));
  document.getElementById('activity').addEventListener('click', () => displayEmojis('activity'));
  document.getElementById('travel').addEventListener('click', () => displayEmojis('travel'));
  document.getElementById('hands').addEventListener('click', () => displayEmojis('hands')); // Added event listener for hands category
  
  // Initialize with smileys
  displayEmojis('smileys');
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const historicalDatesDropdown = document.getElementById("historicalDates");
    const historicalContent = document.getElementById("historicalContent");
    const historicalContentDivs = document.querySelectorAll(".hidden-content");
  
    historicalDatesDropdown.addEventListener("change", function () {
      const selectedValue = this.value;
  
      // Hide all historical content divs
      historicalContentDivs.forEach((div) => {
        div.style.display = "none";
      });
  
      // Show the selected historical content div
      if (selectedValue) {
        document.getElementById(selectedValue).style.display = "block";
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-button');
    const content = document.getElementById('content');
    
    toggleButton.addEventListener('click', function() {
      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
  
  
  const translations = {
    en: {
      title: "Find Your Ghanaian Day Name",
      dobLabel: "Date of Birth:",
      genderLabel: "Gender:",
      submitBtn: "Get Day Name",
      historicalTitle: "Historical Dates in Ghana",
      independenceDay: "Independence Day: 6th March 1957",
      republicDay: "Republic Day: 1st July 1960",
      nkrumahDay: "Kwame Nkrumah Memorial Day: 21st September",
      farmersDay: "Farmers' Day: First Friday of December"
    },
    tw: {
      title: "Hu no Ghana Fie Dԑ",
      dobLabel: "Da Wɔwoɔ Da no:",
      genderLabel: "Paw W’abɔfrabea:",
      submitBtn: "Hu Fie Dԑ",
      historicalTitle: "Nkanee Nsɛm wɔ Ghana",
      independenceDay: "Ahofadi Da: 6 Oforisuo 1957",
      republicDay: "Republic Da: 1 Kitawonsa 1960",
      nkrumahDay: "Kwame Nkrumah Kaesidae: 21 Kwawe 1960",
      farmersDay: "Kokoo Da: Akorԑda a ɛtɔ so mmienu wɔ December"
    },
    ga: {
      title: "Hu nu Ga da nyɛ",
      dobLabel: "Da wɔwoo lɛ:",
      genderLabel: "Koɔ mi tsɔlɛ:",
      submitBtn: "Hu Ga da nyɛ",
      historicalTitle: "Nkanee Nsɛm wɔ Ga",
      independenceDay: "Ahofadi da: 6 Oforisuo 1957",
      republicDay: "Republic da: 1 Kitawonsa 1960",
      nkrumahDay: "Kwame Nkrumah Kaesidae: 21 Kwawe 1960",
      farmersDay: "Kokoo Da: Akorɛda a ɛtɔ so mmienu wɔ December"
    }
  };
  
  const feedbacks = [];
  
  document.getElementById("dayNameForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const userName = document.getElementById("name").value;
  
    if (validateDate(dob) && gender && userName) {
      const dayInfo = getGhanaianDayInfo(new Date(dob), gender);
  
      // Store globally so certificate generator can access it
      window.generatedDayInfo = dayInfo;
  
      document.getElementById("result").innerHTML = `
        <h2>Ghanaian Day Name Information</h2>
        <p><span class="highlight">Your Ghanaian day name is:</span> ${dayInfo.name}</p>
        <p><span class="highlight">Meaning:</span> ${dayInfo.meaning}</p>
        <p><span class="highlight">Cultural Significance:</span> ${dayInfo.culture}</p>
        <p><span class="highlight">Prominent people born on this day:</span> ${dayInfo.people.join(", ")}</p>
      `;
  
      document.getElementById("shareButtons").style.display = "flex";
  
      document.getElementById("twitterShareBtn").onclick = () => shareOnTwitter(dayInfo);
      document.getElementById("facebookShareBtn").onclick = () => shareOnFacebook(dayInfo);
      document.getElementById("linkedinShareBtn").onclick = () => shareOnLinkedIn(dayInfo);
      document.getElementById("printBtn").onclick = () => printDayInfo(dayInfo);
      document.getElementById("generateCertificateBtn").onclick = () =>
        generateCertificate(dayInfo, userName);
  
      displayAffiliateLinks?.(); // Optional function
    } else {
      document.getElementById("result").innerText =
        "Please enter a valid date, select your gender, and enter your name.";
      document.getElementById("shareButtons").style.display = "none";
    }
  });
  
  function shareOnTwitter(dayInfo) {
    const shareText = `My Ghanaian day name is ${dayInfo.name}. Meaning: ${dayInfo.meaning}. Cultural Significance: ${dayInfo.culture}. Prominent people born on this day: ${dayInfo.people.join(", ")}`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(shareUrl, "_blank");
  }
  
  function shareOnFacebook(dayInfo) {
    const shareText = `My Ghanaian day name is ${dayInfo.name}. Meaning: ${dayInfo.meaning}. Cultural Significance: ${dayInfo.culture}. Prominent people born on this day: ${dayInfo.people.join(", ")}`;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareText)}`;
    window.open(shareUrl, "_blank");
  }
  
  function shareOnLinkedIn(dayInfo) {
    const shareText = `My Ghanaian day name is ${dayInfo.name}. Meaning: ${dayInfo.meaning}. Cultural Significance: ${dayInfo.culture}. Prominent people born on this day: ${dayInfo.people.join(", ")}`;
    const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareText)}`;
    window.open(shareUrl, "_blank");
  }
  
  function printDayInfo(dayInfo) {
    const printContent = `
      <html>
        <head><title>Print Day Info</title></head>
        <body>
          <h2>Ghanaian Day Name Information</h2>
          <p><strong>Your Ghanaian day name is:</strong> ${dayInfo.name}</p>
          <p><strong>Meaning:</strong> ${dayInfo.meaning}</p>
          <p><strong>Cultural Significance:</strong> ${dayInfo.culture}</p>
          <p><strong>Prominent people born on this day:</strong> ${dayInfo.people.join(", ")}</p>
        </body>
      </html>
    `;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  }
  
  document.getElementById("generateCertificateBtn").addEventListener("click", function () {
    const selectedDesign = document.getElementById("designSelect").value;
    const userName = document.getElementById("name").value.trim();
  
    if (!userName) {
      alert("Please enter your name first.");
      return;
    }
  
    const dayInfo = window.generatedDayInfo;
    if (!dayInfo) {
      alert("Please submit the form to get your day name before generating a certificate.");
      return;
    }
  
    switch (selectedDesign) {
      case "design1":
        generateKenteCertificate(dayInfo, userName);
        break;
      case "design2":
        generateMinimalistCertificate(dayInfo, userName);
        break;
      case "design3":
        generateRoyalCertificate(dayInfo, userName);
        break;
      case "design4":
        generateNewCertificate(dayInfo, userName);
        break;
      case "design5":
        generateElegantCertificate(dayInfo, userName);
        break;
      case "design6":
        generateGraffitiCertificate(dayInfo, userName);
        break;
      case "design7":
        generateRoyalNavyCertificate(dayInfo, userName);
        break;
      case "design8":
        generateRusticCertificate(dayInfo, userName);
        break;
      case "design9":
        generateVintageCertificate(dayInfo, userName);
        break;
      case "design10":
        generateRoyalVintageCertificate(dayInfo, userName);
        break;
      case "design11":
        generateKenteFabricCertificate(dayInfo, userName);
        break;
        case "design12":
        generateKente1Certificate(dayInfo, userName);
        break;
      case "design13":
        generateKenteCertificateModern(dayInfo, userName);
        break;
      case "design14":
        generateKenteCertificateRoyals(dayInfo, userName);
        break;
      case "design15":
        generateKenteCertificateSunset(dayInfo, userName);
        break;      
      default:
        alert("Please select a valid certificate design.");
    }
  });

  function generateKenteCertificateSunset(dayInfo, userName) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = 1200;
    canvas.height = 850;
  
    const kenteImage = new Image();
    kenteImage.crossOrigin = "anonymous";
    kenteImage.src = "kente15.png"; // Tileable SVG
  
    kenteImage.onload = () => {
      // Full background Kente
      const pattern = context.createPattern(kenteImage, "repeat");
      if (pattern) {
        context.fillStyle = pattern;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
  
      // Sunset overlay panel
      const contentPadding = 60;
      context.fillStyle = "rgba(255, 244, 233, 0.94)"; // soft peach/cream overlay
      context.fillRect(contentPadding, contentPadding, canvas.width - contentPadding * 2, canvas.height - contentPadding * 2);
  
      // Shadow text helper
      function drawShadowText(text, x, y, font, color, shadowColor = "#33333344") {
        context.font = font;
        context.textAlign = "center";
        context.fillStyle = shadowColor;
        context.fillText(text, x + 2, y + 2);
        context.fillStyle = color;
        context.fillText(text, x, y);
      }
  
      // HEADER: Deep Sunset Orange
      context.fillStyle = "#D9480F";
      context.fillRect(contentPadding, 100, canvas.width - contentPadding * 2, 70);
      drawShadowText("GHANAIAN DAY NAME CERTIFICATE", canvas.width / 2, 150, "bold 42px 'Georgia'", "#FFDC60");
  
      // Subheader
      drawShadowText("This certifies that", canvas.width / 2, 230, "italic 26px 'Palatino Linotype'", "#5A2A00");
  
      // Name Highlight Block
      context.fillStyle = "#FCE3BF";
      context.fillRect(350, 255, 500, 60);
      drawShadowText(userName, canvas.width / 2, 300, "bold 38px 'Georgia'", "#B33F62");
  
      drawShadowText(`was born on a ${dayInfo.culture}, and is named`, canvas.width / 2, 360, "24px 'Georgia'", "#444");
      drawShadowText(dayInfo.name, canvas.width / 2, 410, "bold 36px 'Georgia'", "#008080"); // Teal
  
      drawShadowText("Meaning of the name:", canvas.width / 2, 475, "italic 22px 'Palatino'", "#6D4C41");
      drawShadowText(dayInfo.meaning, canvas.width / 2, 510, "22px 'Georgia'", "#222");
  
      drawShadowText("Prominent people born on this day:", canvas.width / 2, 580, "italic 20px 'Palatino'", "#000");
  
      const peopleText = dayInfo.people.join(", ");
      context.font = "20px 'Georgia'";
      context.fillStyle = "#000";
      wrapText(context, peopleText, canvas.width / 2, 620, 1000, 28);
  
      // Horizontal Divider
      context.strokeStyle = "#FFDC60"; // Warm gold
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(100, 730);
      context.lineTo(canvas.width - 100, 730);
      context.stroke();
  
      // Footer Phrase
      context.font = "italic 18px 'Georgia'";
      context.fillStyle = "#8A3324"; // Burgundy
      context.fillText("Celebrating my Ghanaian identity with pride", canvas.width / 2, 765);
  
      // Sunset-themed Seal
      context.beginPath();
      context.arc(canvas.width / 2, 810, 40, 0, 2 * Math.PI);
      context.fillStyle = "#F4A259"; // Light gold-orange
      context.fill();
      context.lineWidth = 3;
      context.strokeStyle = "#333";
      context.stroke();
  
      context.font = "bold 16px 'Georgia'";
      context.fillStyle = "#000";
      context.textAlign = "center";
      context.fillText("Official Seal", canvas.width / 2, 815);
  
      // Download the image
      const link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = `Ghanaian_Day_Name_Certificate_${dayInfo.name}.png`;
      link.click();
    };
  
    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
          ctx.textAlign = "center";
          ctx.fillText(line, x, y);
          line = words[i] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.textAlign = "center";
      ctx.fillText(line, x, y);
    }
  }
  

  function generateKenteCertificateRoyals(dayInfo, userName) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = 1200;
    canvas.height = 850;
  
    const kenteImage = new Image();
    kenteImage.crossOrigin = "anonymous";
    kenteImage.src = "kente14.png"; // Seamless SVG tile
  
    kenteImage.onload = () => {
      // Full kente background
      const pattern = context.createPattern(kenteImage, "repeat");
      if (pattern) {
        context.fillStyle = pattern;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
  
      // Cool ivory overlay
      const contentPadding = 60;
      context.fillStyle = "rgba(245, 250, 255, 0.94)";
      context.fillRect(contentPadding, contentPadding, canvas.width - contentPadding * 2, canvas.height - contentPadding * 2);
  
      // Shadow text helper
      function drawShadowText(text, x, y, font, color, shadowColor = "#00000044") {
        context.font = font;
        context.textAlign = "center";
        context.fillStyle = shadowColor;
        context.fillText(text, x + 2, y + 2);
        context.fillStyle = color;
        context.fillText(text, x, y);
      }
  
      // Navy header
      context.fillStyle = "#002147";
      context.fillRect(contentPadding, 100, canvas.width - contentPadding * 2, 70);
      drawShadowText("GHANAIAN DAY NAME CERTIFICATE", canvas.width / 2, 150, "bold 42px 'Georgia'", "#FFD700");
  
      drawShadowText("This certifies that", canvas.width / 2, 230, "italic 26px 'Palatino Linotype'", "#002147");
  
      // Name block
      context.fillStyle = "#CCE1D0";
      context.fillRect(350, 255, 500, 60);
      drawShadowText(userName, canvas.width / 2, 300, "bold 38px 'Georgia'", "#004225");
  
      drawShadowText(`was born on a ${dayInfo.culture}, and is named`, canvas.width / 2, 360, "24px 'Georgia'", "#333");
      drawShadowText(dayInfo.name, canvas.width / 2, 410, "bold 36px 'Georgia'", "#004225");
  
      drawShadowText("Meaning of the name:", canvas.width / 2, 475, "italic 22px 'Palatino'", "#555");
      drawShadowText(dayInfo.meaning, canvas.width / 2, 510, "22px 'Georgia'", "#111");
  
      drawShadowText("Prominent people born on this day:", canvas.width / 2, 580, "italic 20px 'Palatino'", "#000");
  
      const peopleText = dayInfo.people.join(", ");
      context.font = "20px 'Georgia'";
      context.fillStyle = "#000";
      wrapText(context, peopleText, canvas.width / 2, 620, 1000, 28);
  
      // Gold divider
      context.strokeStyle = "#FFD700";
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(100, 730);
      context.lineTo(canvas.width - 100, 730);
      context.stroke();
  
      context.font = "italic 18px 'Georgia'";
      context.fillStyle = "#004225";
      context.fillText("Celebrating my Ghanaian identity with pride", canvas.width / 2, 765);
  
      // Seal (centered bottom)
      context.beginPath();
      context.arc(canvas.width / 2, 810, 40, 0, 2 * Math.PI);
      context.fillStyle = "#FFD700";
      context.fill();
      context.lineWidth = 3;
      context.strokeStyle = "#000";
      context.stroke();
  
      context.font = "bold 16px 'Georgia'";
      context.fillStyle = "#000";
      context.textAlign = "center";
      context.fillText("Official Seal", canvas.width / 2, 815);
  
      // Download
      const link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = `Ghanaian_Day_Name_Certificate_${dayInfo.name}.png`;
      link.click();
    };
  
    // Text wrapper
    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
          ctx.textAlign = "center";
          ctx.fillText(line, x, y);
          line = words[i] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.textAlign = "center";
      ctx.fillText(line, x, y);
    }
  }
  

  function generateKenteCertificateModern(dayInfo, userName) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = 1200;
    canvas.height = 850;
  
    const kenteImage = new Image();
    kenteImage.crossOrigin = "anonymous";
    kenteImage.src = "kente.png"; // Use seamless kente SVG
  
    kenteImage.onload = () => {
      // Draw full Kente background
      const pattern = context.createPattern(kenteImage, "repeat");
      if (pattern) {
        context.fillStyle = pattern;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
  
      // Overlay parchment background with padding for content area
      const contentPadding = 60;
      context.fillStyle = "rgba(255, 248, 231, 0.95)";
      context.fillRect(contentPadding, contentPadding, canvas.width - contentPadding * 2, canvas.height - contentPadding * 2);
  
      // Helper: Shadow text
      function drawShadowText(text, x, y, font, color, shadowColor = "#444") {
        context.font = font;
        context.textAlign = "center";
        context.fillStyle = shadowColor;
        context.fillText(text, x + 2, y + 2);
        context.fillStyle = color;
        context.fillText(text, x, y);
      }
  
      // HEADER
      context.fillStyle = "#E30B17";
      context.fillRect(contentPadding, 100, canvas.width - contentPadding * 2, 70);
      drawShadowText("GHANAIAN DAY NAME CERTIFICATE", canvas.width / 2, 150, "bold 42px 'Georgia'", "#FFD700");
  
      // Subheading
      drawShadowText("This certifies that", canvas.width / 2, 230, "italic 26px 'Palatino Linotype'", "#333");
  
      // Name Box
      context.fillStyle = "#FFD70033";
      context.fillRect(350, 255, 500, 60);
      drawShadowText(userName, canvas.width / 2, 300, "bold 38px 'Georgia'", "#E30B17");
  
      // Cultural info
      drawShadowText(`was born on a ${dayInfo.culture}, and is named`, canvas.width / 2, 360, "24px 'Georgia'", "#444");
      drawShadowText(dayInfo.name, canvas.width / 2, 410, "bold 36px 'Georgia'", "#007847");
  
      // Meaning
      drawShadowText("Meaning of the name:", canvas.width / 2, 475, "italic 22px 'Palatino'", "#666");
      drawShadowText(dayInfo.meaning, canvas.width / 2, 510, "22px 'Georgia'", "#222");
  
      // Famous People Section
      drawShadowText("Prominent people born on this day:", canvas.width / 2, 580, "italic 20px 'Palatino'", "#000");
      const peopleText = dayInfo.people.join(", ");
      context.font = "20px 'Georgia'";
      context.fillStyle = "#000";
      wrapText(context, peopleText, canvas.width / 2, 620, 1000, 28);
  
      // Divider
      context.strokeStyle = "#FFD700";
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(100, 730);
      context.lineTo(canvas.width - 100, 730);
      context.stroke();
  
      // Footer Phrase
      context.font = "italic 18px 'Georgia'";
      context.fillStyle = "#000";
      context.fillText("Celebrating my Ghanaian identity with pride", canvas.width / 2, 765);
  
      // Golden Seal
      context.beginPath();
      context.arc(canvas.width / 2, 810, 40, 0, 2 * Math.PI);
      context.fillStyle = "#FDB813";
      context.fill();
      context.lineWidth = 3;
      context.strokeStyle = "#000000";
      context.stroke();
      context.font = "bold 16px 'Georgia'";
      context.fillStyle = "#000000";
      context.textAlign = "center";
      context.fillText("Official Seal", canvas.width / 2, 815);
  
      // Download link
      const link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = `Ghanaian_Day_Name_Certificate_${dayInfo.name}.png`;
      link.click();
    };
  
    // Text wrapping function
    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
          ctx.textAlign = "center";
          ctx.fillText(line, x, y);
          line = words[i] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.textAlign = "center";
      ctx.fillText(line, x, y);
    }
  }
  

  function generateKente1Certificate(dayInfo, userName) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = 1200;
    canvas.height = 850;
  
    const kenteImage = new Image();
    kenteImage.crossOrigin = "anonymous";
    kenteImage.src = "kente1.png"; // Replace with your image URL
  
    kenteImage.onload = () => {
      // Fill background
      context.fillStyle = "#FFF8E7"; // light traditional background
      context.fillRect(0, 0, canvas.width, canvas.height);
  
      // Create pattern and apply as border
      const pattern = context.createPattern(kenteImage, "repeat");
  
      if (pattern) {
        context.fillStyle = pattern;
  
        const borderThickness = 40;
  
        // Top border
        context.fillRect(0, 0, canvas.width, borderThickness);
        // Bottom border
        context.fillRect(0, canvas.height - borderThickness, canvas.width, borderThickness);
        // Left border
        context.fillRect(0, 0, borderThickness, canvas.height);
        // Right border
        context.fillRect(canvas.width - borderThickness, 0, borderThickness, canvas.height);
      }
  
      // Helper: Shadow text
      function drawShadowText(text, x, y, font, color, shadowColor = "#444") {
        context.font = font;
        context.textAlign = "center";
        context.fillStyle = shadowColor;
        context.fillText(text, x + 2, y + 2);
        context.fillStyle = color;
        context.fillText(text, x, y);
      }
  
      // Certificate Content (Same as before)
      context.fillStyle = "#E30B17";
      context.fillRect(0, 100, canvas.width, 80);
      drawShadowText("GHANAIAN DAY NAME CERTIFICATE", canvas.width / 2, 155, "bold 42px 'Georgia'", "#FFD700");
  
      drawShadowText("This certifies that", canvas.width / 2, 240, "italic 26px 'Palatino Linotype'", "#333");
      drawShadowText(userName, canvas.width / 2, 300, "bold 40px 'Georgia'", "#E30B17");
      drawShadowText(`was born on a ${dayInfo.culture}, and is named`, canvas.width / 2, 360, "24px 'Georgia'", "#444");
      drawShadowText(dayInfo.name, canvas.width / 2, 420, "bold 38px 'Georgia'", "#007847");
      drawShadowText("Meaning of the name:", canvas.width / 2, 490, "italic 22px 'Palatino'", "#666");
      drawShadowText(dayInfo.meaning, canvas.width / 2, 530, "22px 'Georgia'", "#222");
      drawShadowText("Prominent people born on this day:", canvas.width / 2, 600, "italic 20px 'Palatino'", "#000");
  
      const peopleText = dayInfo.people.join(", ");
      context.font = "20px 'Georgia'";
      context.fillStyle = "#000";
      wrapText(context, peopleText, canvas.width / 2, 640, 1000, 28);
  
      context.font = "italic 18px 'Georgia'";
      context.fillStyle = "#000";
      context.fillText("Celebrating my Ghanaian identity with pride", canvas.width / 2, 790);
  
      // Footer Seal
      context.beginPath();
      context.arc(canvas.width - 130, 750, 50, 0, 2 * Math.PI);
      context.fillStyle = "#FDB813";
      context.fill();
      context.lineWidth = 4;
      context.strokeStyle = "#000000";
      context.stroke();
      context.font = "bold 16px 'Georgia'";
      context.fillStyle = "#000000";
      context.fillText("Official Seal", canvas.width - 130, 755);
  
      // Download
      const link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = `Ghanaian_Day_Name_Certificate_${dayInfo.name}.png`;
      link.click();
    };
  
    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
          ctx.textAlign = "center";
          ctx.fillText(line, x, y);
          line = words[i] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.textAlign = "center";
      ctx.fillText(line, x, y);
    }
  }
  


  function generateKenteFabricCertificate(dayInfo, userName) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = 1200;
    canvas.height = 850;
  
    const kenteImage = new Image();
    kenteImage.crossOrigin = "anonymous";
    kenteImage.src = "kente.png"; // Replace with your image URL
  
    kenteImage.onload = () => {
      // Fill background
      context.fillStyle = "#FFF8E7"; // light traditional background
      context.fillRect(0, 0, canvas.width, canvas.height);
  
      // Create pattern and apply as border
      const pattern = context.createPattern(kenteImage, "repeat");
  
      if (pattern) {
        context.fillStyle = pattern;
  
        const borderThickness = 40;
  
        // Top border
        context.fillRect(0, 0, canvas.width, borderThickness);
        // Bottom border
        context.fillRect(0, canvas.height - borderThickness, canvas.width, borderThickness);
        // Left border
        context.fillRect(0, 0, borderThickness, canvas.height);
        // Right border
        context.fillRect(canvas.width - borderThickness, 0, borderThickness, canvas.height);
      }
  
      // Helper: Shadow text
      function drawShadowText(text, x, y, font, color, shadowColor = "#444") {
        context.font = font;
        context.textAlign = "center";
        context.fillStyle = shadowColor;
        context.fillText(text, x + 2, y + 2);
        context.fillStyle = color;
        context.fillText(text, x, y);
      }
  
      // Certificate Content (Same as before)
      context.fillStyle = "#E30B17";
      context.fillRect(0, 100, canvas.width, 80);
      drawShadowText("GHANAIAN DAY NAME CERTIFICATE", canvas.width / 2, 155, "bold 42px 'Georgia'", "#FFD700");
  
      drawShadowText("This certifies that", canvas.width / 2, 240, "italic 26px 'Palatino Linotype'", "#333");
      drawShadowText(userName, canvas.width / 2, 300, "bold 40px 'Georgia'", "#E30B17");
      drawShadowText(`was born on a ${dayInfo.culture}, and is named`, canvas.width / 2, 360, "24px 'Georgia'", "#444");
      drawShadowText(dayInfo.name, canvas.width / 2, 420, "bold 38px 'Georgia'", "#007847");
      drawShadowText("Meaning of the name:", canvas.width / 2, 490, "italic 22px 'Palatino'", "#666");
      drawShadowText(dayInfo.meaning, canvas.width / 2, 530, "22px 'Georgia'", "#222");
      drawShadowText("Prominent people born on this day:", canvas.width / 2, 600, "italic 20px 'Palatino'", "#000");
  
      const peopleText = dayInfo.people.join(", ");
      context.font = "20px 'Georgia'";
      context.fillStyle = "#000";
      wrapText(context, peopleText, canvas.width / 2, 640, 1000, 28);
  
      context.font = "italic 18px 'Georgia'";
      context.fillStyle = "#000";
      context.fillText("Celebrating my Ghanaian identity with pride", canvas.width / 2, 790);
  
      // Footer Seal
      context.beginPath();
      context.arc(canvas.width - 130, 750, 50, 0, 2 * Math.PI);
      context.fillStyle = "#FDB813";
      context.fill();
      context.lineWidth = 4;
      context.strokeStyle = "#000000";
      context.stroke();
      context.font = "bold 16px 'Georgia'";
      context.fillStyle = "#000000";
      context.fillText("Official Seal", canvas.width - 130, 755);
  
      // Download
      const link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = `Ghanaian_Day_Name_Certificate_${dayInfo.name}.png`;
      link.click();
    };
  
    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
          ctx.textAlign = "center";
          ctx.fillText(line, x, y);
          line = words[i] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.textAlign = "center";
      ctx.fillText(line, x, y);
    }
  }
  

  function generateRoyalVintageCertificate(dayInfo, userName) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = 1200;
    canvas.height = 850;
  
    // Scroll background - aged parchment with a warm tone and subtle vignette
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#F3E9D2");
    gradient.addColorStop(1, "#E7D3AA");
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    // Inner shadow to simulate curled scroll effect
    context.fillStyle = "rgba(0, 0, 0, 0.1)";
    context.fillRect(0, 0, canvas.width, 25); // top shadow
    context.fillRect(0, canvas.height - 25, canvas.width, 25); // bottom shadow
    context.fillRect(0, 0, 25, canvas.height); // left
    context.fillRect(canvas.width - 25, 0, 25, canvas.height); // right
  
    // Vintage border
    context.strokeStyle = "#A67C52"; // Soft brown
    context.lineWidth = 12;
    context.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);
  
    // Fancy title
    drawEmbossedText(
      "GHANAIAN DAY NAME CERTIFICATE",
      canvas.width / 2,
      120,
      "small-caps bold 38px 'Garamond'",
      "#5A3921"
    );
  
    // Subtitle
    drawEmbossedText(
      "This certifies that",
      canvas.width / 2,
      200,
      "italic 24px 'Palatino'",
      "#4C372E"
    );
  
    // Name
    drawEmbossedText(
      userName,
      canvas.width / 2,
      260,
      "bold 46px 'Georgia'",
      "#2E1A0F"
    );
  
    drawEmbossedText(
      `born on a ${dayInfo.culture}, is traditionally named`,
      canvas.width / 2,
      320,
      "22px 'Times New Roman'",
      "#3A281B"
    );
  
    // Day name
    drawEmbossedText(
      dayInfo.name,
      canvas.width / 2,
      390,
      "bold 44px 'Baskerville'",
      "#8B5E3C"
    );
  
    // Meaning
    drawEmbossedText(
      `"${dayInfo.meaning}"`,
      canvas.width / 2,
      450,
      "italic 20px 'Palatino'",
      "#3F2A1D"
    );
  
    // Famous people
    drawEmbossedText(
      "Notable individuals born this day:",
      canvas.width / 2,
      520,
      "18px 'Georgia'",
      "#4B3A2F"
    );
  
    const peopleText = dayInfo.people.join(", ");
    context.font = "18px 'Georgia'";
    context.fillStyle = "#2E1C0E";
    wrapText(context, peopleText, canvas.width / 2, 560, 1000, 26);
  
    // Authority note
    context.font = "italic 17px 'Georgia'";
    context.fillStyle = "#4B3621";
    context.textAlign = "center";
    context.fillText("Celebrating my Ghanaian identity with pride", canvas.width / 2, 770);
  
    // Gold Ribbon (top-right corner)
    context.beginPath();
    context.moveTo(canvas.width - 100, 50);
    context.lineTo(canvas.width - 70, 150);
    context.lineTo(canvas.width - 130, 150);
    context.closePath();
    context.fillStyle = "#FFD700";
    context.fill();

    // Ribbon Tails Below Badge
    // Ribbon Tails Below Badge (with shadow and stitch effect)
context.save();

// Shadow
context.shadowColor = "rgba(0, 0, 0, 0.3)";
context.shadowBlur = 6;
context.shadowOffsetX = 3;
context.shadowOffsetY = 3;

// Ribbon Shape
context.beginPath();
context.moveTo(canvas.width - 100, 150); // Base of badge
context.lineTo(canvas.width - 115, 190); // Left outer
context.lineTo(canvas.width - 100, 170); // Middle inward point
context.lineTo(canvas.width - 85, 190); // Right outer
context.closePath();
context.fillStyle = "#E6B800"; // Rich gold
context.fill();

context.restore(); // End shadow

// Stitching Lines
context.strokeStyle = "#FFF8DC"; // Light stitch (cornsilk)
context.lineWidth = 1;
context.setLineDash([4, 3]); // Dash pattern
context.beginPath();
context.moveTo(canvas.width - 100, 150);
context.lineTo(canvas.width - 100, 170);
context.stroke();

context.setLineDash([]); // Reset dash

  
    // Wax seal (bottom-left corner)
    context.beginPath();
    context.arc(120, 720, 55, 0, 2 * Math.PI);
    context.fillStyle = "#8B0000"; // Wax red
    context.shadowColor = "#330000";
    context.shadowBlur = 10;
    context.fill();
    context.shadowBlur = 0;
  
    context.font = "bold 14px 'Georgia'";
    context.fillStyle = "#FBE8D3";
    context.textAlign = "center";
    context.fillText("AUTHENTIC", 120, 725);
  
    // Trigger download
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = `VintageScroll_Certificate_${dayInfo.name}.png`;
    link.click();
  
    // Embossed text
    function drawEmbossedText(text, x, y, font, color, shadowColor = "#EFE2C6") {
      context.font = font;
      context.textAlign = "center";
      context.fillStyle = shadowColor;
      context.fillText(text, x + 2, y + 2);
      context.fillStyle = color;
      context.fillText(text, x, y);
    }
  
    // Word wrapping
    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
          ctx.textAlign = "center";
          ctx.fillText(line, x, y);
          line = words[i] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.textAlign = "center";
      ctx.fillText(line, x, y);
    }
  }
  

  function generateVintageCertificate(dayInfo, userName) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = 1200;
    canvas.height = 850;
  
    // Background: aged paper look
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#F9F4E7");
    gradient.addColorStop(1, "#EDE0C8");
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    // Ornate border
    context.strokeStyle = "#7B5740"; // Vintage brown
    context.lineWidth = 15;
    context.strokeRect(35, 35, canvas.width - 70, canvas.height - 70);
  
    context.strokeStyle = "#D4B483"; // Gold-like tone
    context.lineWidth = 5;
    context.strokeRect(55, 55, canvas.width - 110, canvas.height - 110);
  
    // Title
    drawEmbossedText(
      "GHANAIAN DAY NAME CERTIFICATE",
      canvas.width / 2,
      120,
      "small-caps bold 36px 'Garamond'",
      "#5C4033"
    );
  
    // Subtitle
    drawEmbossedText(
      "This document certifies that",
      canvas.width / 2,
      200,
      "italic 24px 'Times New Roman'",
      "#6A4E3A"
    );
  
    // User's name
    drawEmbossedText(
      userName,
      canvas.width / 2,
      260,
      "bold 44px 'Georgia'",
      "#2F1B0C"
    );
  
    drawEmbossedText(
      `born on a ${dayInfo.culture}, is given the name`,
      canvas.width / 2,
      320,
      "22px 'Garamond'",
      "#3B2F2F"
    );
  
    // Day Name
    drawEmbossedText(
      dayInfo.name,
      canvas.width / 2,
      390,
      "bold 42px 'Baskerville'",
      "#8B5E3C"
    );
  
    // Meaning
    drawEmbossedText(
      `"${dayInfo.meaning}"`,
      canvas.width / 2,
      450,
      "italic 20px 'Palatino'",
      "#3F2A1D"
    );
  
    // Famous people
    drawEmbossedText(
      "Also born on this day:",
      canvas.width / 2,
      520,
      "18px 'Palatino'",
      "#4B3A2F"
    );
  
    const peopleText = dayInfo.people.join(", ");
    context.font = "18px 'Georgia'";
    context.fillStyle = "#2E1C0E";
    wrapText(context, peopleText, canvas.width / 2, 560, 1000, 26);
  
    // Footer
    context.font = "italic 17px 'Georgia'";
    context.fillStyle = "#4B3621";
    context.textAlign = "center";
    context.fillText("Celebrating my Ghanaian identity with pride", canvas.width / 2, 770);
  
    // Gold foil seal
    context.beginPath();
    context.arc(1100, 730, 45, 0, 2 * Math.PI);
    context.fillStyle = "#D4AF37"; // Foil gold
    context.fill();
    context.strokeStyle = "#A67C00";
    context.lineWidth = 3;
    context.stroke();
    context.font = "bold 13px 'Garamond'";
    context.fillStyle = "#4B3621";
    context.textAlign = "center";
    context.fillText("CERTIFIED", 1100, 734);
  
    // Trigger download
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = `Vintage_Ghanaian_Certificate_${dayInfo.name}.png`;
    link.click();
  
    // Helper functions
    function drawEmbossedText(text, x, y, font, color, shadowColor = "#EFE2C6") {
      context.font = font;
      context.textAlign = "center";
      context.fillStyle = shadowColor;
      context.fillText(text, x + 2, y + 2);
      context.fillStyle = color;
      context.fillText(text, x, y);
    }
  
    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
          ctx.textAlign = "center";
          ctx.fillText(line, x, y);
          line = words[i] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.textAlign = "center";
      ctx.fillText(line, x, y);
    }
  }
  

  function generateRusticCertificate(dayInfo, userName) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = 1200;
    canvas.height = 850;
  
    // Background: parchment-style color
    const backgroundGradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    backgroundGradient.addColorStop(0, "#FAF3E0");
    backgroundGradient.addColorStop(1, "#E4D5B7");
    context.fillStyle = backgroundGradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    // Rough edge border
    context.strokeStyle = "#8B5E3C"; // Deep brown
    context.lineWidth = 10;
    context.strokeRect(25, 25, canvas.width - 50, canvas.height - 50);
  
    context.strokeStyle = "#A77B45"; // Lighter brown
    context.lineWidth = 5;
    context.strokeRect(45, 45, canvas.width - 90, canvas.height - 90);
  
    // Banner Header
    context.fillStyle = "#704214"; // Wood brown
    context.fillRect(0, 100, canvas.width, 70);
    drawShadowText(
      "GHANAIAN DAY NAME CERTIFICATE",
      canvas.width / 2,
      150,
      "bold 38px 'Courier New'",
      "#FFF9E5"
    );
  
    // Subheading
    drawShadowText(
      "This certificate proudly honors",
      canvas.width / 2,
      240,
      "italic 24px 'Georgia'",
      "#3B2F2F"
    );
  
    // User name
    drawShadowText(
      userName,
      canvas.width / 2,
      300,
      "bold 44px 'Times New Roman'",
      "#5C4033"
    );
  
    // Cultural line
    drawShadowText(
      `born on a ${dayInfo.culture}, receives the name`,
      canvas.width / 2,
      360,
      "22px 'Georgia'",
      "#4B3621"
    );
  
    // Akan name
    drawShadowText(
      dayInfo.name,
      canvas.width / 2,
      420,
      "bold 40px 'Georgia'",
      "#A0522D"
    );
  
    // Meaning label
    drawShadowText(
      "Meaning of this name:",
      canvas.width / 2,
      490,
      "italic 20px 'Palatino'",
      "#5B3A29"
    );
  
    drawShadowText(
      dayInfo.meaning,
      canvas.width / 2,
      530,
      "20px 'Georgia'",
      "#2E1C0E"
    );
  
    // Famous people line
    drawShadowText(
      "Notable individuals born on this day:",
      canvas.width / 2,
      600,
      "italic 18px 'Palatino'",
      "#3B2F2F"
    );
  
    const peopleText = dayInfo.people.join(", ");
    context.font = "18px 'Georgia'";
    context.fillStyle = "#3B2F2F";
    wrapText(context, peopleText, canvas.width / 2, 640, 1000, 26);
  
    // Signature line
    context.font = "italic 17px 'Georgia'";
    context.fillStyle = "#3B2F2F";
    context.fillText(
      "Celebrating my Ghanaian identity with pride",
      canvas.width / 2,
      790
    );
  
    // Rustic seal
    context.beginPath();
    context.arc(canvas.width - 130, 750, 50, 0, 2 * Math.PI);
    context.fillStyle = "#A77B45";
    context.fill();
    context.lineWidth = 4;
    context.strokeStyle = "#5C4033";
    context.stroke();
    context.font = "bold 14px 'Georgia'";
    context.fillStyle = "#3B2F2F";
    context.fillText("AUTHORITY SEAL", canvas.width - 130, 755);
  
    // Trigger download
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = `Rustic_Ghanaian_Certificate_${dayInfo.name}.png`;
    link.click();
  
    // Helper functions
    function drawShadowText(text, x, y, font, color, shadowColor = "#CBB89D") {
      context.font = font;
      context.textAlign = "center";
      context.fillStyle = shadowColor;
      context.fillText(text, x + 2, y + 2);
      context.fillStyle = color;
      context.fillText(text, x, y);
    }
  
    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
          ctx.textAlign = "center";
          ctx.fillText(line, x, y);
          line = words[i] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.textAlign = "center";
      ctx.fillText(line, x, y);
    }
  }
  

  function generateRoyalNavyCertificate(dayInfo, userName) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = 1200;
    canvas.height = 850;
  
    // Royal navy and ivory gradient background
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#FAF9F6"); // off-white
    gradient.addColorStop(1, "#F0EEE9"); // soft ivory
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    // Double-line corner frame
    context.strokeStyle = "#002244"; // Royal navy
    context.lineWidth = 10;
    context.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);
  
    context.strokeStyle = "#D4AF37"; // Royal gold
    context.lineWidth = 4;
    context.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);
  
    // Top Title Banner
    context.fillStyle = "#002244";
    context.fillRect(0, 80, canvas.width, 70);
    drawTextWithShadow(
      "GHANAIAN DAY NAME CERTIFICATE",
      canvas.width / 2,
      130,
      "bold 38px 'Playfair Display'",
      "#FFD700"
    );
  
    // Subheader
    drawTextWithShadow(
      "This certifies and honors",
      canvas.width / 2,
      220,
      "italic 24px 'Cormorant Garamond'",
      "#333"
    );
  
    // Recipient's Name
    drawTextWithShadow(
      userName,
      canvas.width / 2,
      280,
      "bold 44px 'Cinzel Decorative'",
      "#002244"
    );
  
    // Cultural context
    drawTextWithShadow(
      `born on a ${dayInfo.culture}, is given the name`,
      canvas.width / 2,
      340,
      "22px 'Georgia'",
      "#555"
    );
  
    // Akan Name
    drawTextWithShadow(
      dayInfo.name,
      canvas.width / 2,
      400,
      "bold 36px 'Playfair Display'",
      "#D4AF37"
    );
  
    // Meaning of name
    drawTextWithShadow(
      "Meaning of this name:",
      canvas.width / 2,
      470,
      "italic 20px 'Palatino'",
      "#002244"
    );
  
    drawTextWithShadow(
      dayInfo.meaning,
      canvas.width / 2,
      510,
      "20px 'Georgia'",
      "#000"
    );
  
    // Notable People
    drawTextWithShadow(
      "Notable individuals born on this day:",
      canvas.width / 2,
      580,
      "italic 18px 'Palatino'",
      "#222"
    );
  
    const peopleText = dayInfo.people.join(", ");
    context.font = "18px 'Georgia'";
    context.fillStyle = "#000";
    wrapText(context, peopleText, canvas.width / 2, 620, 1000, 28);
  
    // Signature section
    context.font = "italic 18px 'Garamond'";
    context.fillStyle = "#222";
    context.fillText(
      "Celebrating my Ghanaian identity with pride",
      canvas.width / 2,
      770
    );
  
    // Decorative Seal
    context.beginPath();
    context.arc(1100, 750, 45, 0, 2 * Math.PI);
    context.fillStyle = "#D4AF37";
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = "#002244";
    context.stroke();
    context.font = "bold 14px 'Georgia'";
    context.fillStyle = "#002244";
    context.textAlign = "center";
    context.fillText("OFFICIAL SEAL", 1100, 755);
  
    // Download
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = `Royal_Ghanaian_Certificate_${dayInfo.name}.png`;
    link.click();
  
    // Helpers
    function drawTextWithShadow(text, x, y, font, color, shadow = "#aaa") {
      context.font = font;
      context.textAlign = "center";
      context.fillStyle = shadow;
      context.fillText(text, x + 2, y + 2);
      context.fillStyle = color;
      context.fillText(text, x, y);
    }
  
    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
          ctx.textAlign = "center";
          ctx.fillText(line, x, y);
          line = words[i] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.textAlign = "center";
      ctx.fillText(line, x, y);
    }
  }
  

  function generateKenteCertificate(dayInfo, userName) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = 1200;
    canvas.height = 850;
  
    // Background
    context.fillStyle = "#FFF8E7"; // light tan like some traditional cloth backgrounds
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    // Outer red, gold, green, black border (symbolic Kente colors)
    const kenteColors = ["#E30B17", "#FDB813", "#007847", "#000000"];
    let offset = 0;
    kenteColors.forEach((color) => {
      context.strokeStyle = color;
      context.lineWidth = 10;
      context.strokeRect(offset, offset, canvas.width - offset * 2, canvas.height - offset * 2);
      offset += 10;
    });
  
    // Shadow text helper
    function drawShadowText(text, x, y, font, color, shadowColor = "#444") {
      context.font = font;
      context.textAlign = "center";
      context.fillStyle = shadowColor;
      context.fillText(text, x + 2, y + 2);
      context.fillStyle = color;
      context.fillText(text, x, y);
    }
  
    // Header ribbon
    context.fillStyle = "#E30B17";
    context.fillRect(0, 100, canvas.width, 80);
    drawShadowText(
      "GHANAIAN DAY NAME CERTIFICATE",
      canvas.width / 2,
      155,
      "bold 42px 'Georgia'",
      "#FFD700"
    );
  
    // Subheading
    drawShadowText(
      "This certifies that",
      canvas.width / 2,
      240,
      "italic 26px 'Palatino Linotype'",
      "#333"
    );
  
    // User's name
    drawShadowText(
      userName,
      canvas.width / 2,
      300,
      "bold 40px 'Georgia'",
      "#E30B17"
    );
  
    // Cultural day sentence
    drawShadowText(
      `was born on a ${dayInfo.culture}, and is named`,
      canvas.width / 2,
      360,
      "24px 'Georgia'",
      "#444"
    );
  
    // Akan name
    drawShadowText(
      dayInfo.name,
      canvas.width / 2,
      420,
      "bold 38px 'Georgia'",
      "#007847"
    );
  
    // Meaning title
    drawShadowText(
      "Meaning of the name:",
      canvas.width / 2,
      490,
      "italic 22px 'Palatino'",
      "#666"
    );
  
    // Meaning body
    drawShadowText(
      dayInfo.meaning,
      canvas.width / 2,
      530,
      "22px 'Georgia'",
      "#222"
    );
  
    // Famous people
    drawShadowText(
      "Prominent people born on this day:",
      canvas.width / 2,
      600,
      "italic 20px 'Palatino'",
      "#000"
    );
  
    const peopleText = dayInfo.people.join(", ");
    context.font = "20px 'Georgia'";
    context.fillStyle = "#000";
    wrapText(context, peopleText, canvas.width / 2, 640, 1000, 28);
  
    // Footer seal
    context.font = "italic 18px 'Georgia'";
    context.fillStyle = "#000";
    context.fillText(
      "Celebrating my Ghanaian identity with pride",
      canvas.width / 2,
      790
    );
  
    context.beginPath();
    context.arc(canvas.width - 130, 750, 50, 0, 2 * Math.PI);
    context.fillStyle = "#FDB813";
    context.fill();
    context.lineWidth = 4;
    context.strokeStyle = "#000000";
    context.stroke();
    context.font = "bold 16px 'Georgia'";
    context.fillStyle = "#000000";
    context.fillText("Official Seal", canvas.width - 130, 755);
  
    // Download
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = `Ghanaian_Day_Name_Certificate_${dayInfo.name}.png`;
    link.click();
  
    // Text wrapping
    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
          ctx.textAlign = "center";
          ctx.fillText(line, x, y);
          line = words[i] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.textAlign = "center";
      ctx.fillText(line, x, y);
    }
  }
  
  function generateMinimalistCertificate(dayInfo, userName) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = 1200;
    canvas.height = 850;
  
    // Background with gradient
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#e0f7fa");
    gradient.addColorStop(1, "#ffffff");
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    // Subtle border
    context.strokeStyle = "#00796b";
    context.lineWidth = 8;
    context.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
  
    // Elegant header
    context.font = "bold 44px 'Segoe UI', sans-serif";
    context.fillStyle = "#004d40";
    context.textAlign = "center";
    context.fillText("GHANAIAN DAY NAME CERTIFICATE", canvas.width / 2, 120);
  
    // Subheading
    context.font = "italic 24px 'Segoe UI', sans-serif";
    context.fillStyle = "#00695c";
    context.fillText("This certificate is awarded to", canvas.width / 2, 180);
  
    // User's name
    context.font = "bold 40px 'Georgia'";
    context.fillStyle = "#d32f2f";
    context.fillText(userName, canvas.width / 2, 240);
  
    // Cultural sentence
    context.font = "24px 'Segoe UI', sans-serif";
    context.fillStyle = "#333";
    context.fillText(`Born on a ${dayInfo.culture}, given the name`, canvas.width / 2, 290);
  
    // Day name
    context.font = "bold 38px 'Georgia'";
    context.fillStyle = "#00796b";
    context.fillText(dayInfo.name, canvas.width / 2, 340);
  
    // Meaning section
    context.font = "italic 22px 'Segoe UI'";
    context.fillStyle = "#555";
    context.fillText("Name Meaning:", canvas.width / 2, 400);
  
    context.font = "20px 'Georgia'";
    context.fillStyle = "#222";
    wrapText(context, dayInfo.meaning, canvas.width / 2, 440, 1000, 28);
  
    // Famous people
    context.font = "italic 20px 'Segoe UI'";
    context.fillStyle = "#555";
    context.fillText("Famous individuals born on this day:", canvas.width / 2, 540);
  
    const peopleText = dayInfo.people.join(", ");
    context.font = "18px 'Georgia'";
    context.fillStyle = "#000";
    wrapText(context, peopleText, canvas.width / 2, 570, 1000, 26);
  
    // Footer signature/seal area
    context.font = "italic 18px 'Segoe UI'";
    context.fillStyle = "#444";
    context.fillText("Celebrating my Ghanaian identity with pride", canvas.width / 2, 790);
  
    // Seal
    context.beginPath();
    context.arc(canvas.width - 130, 750, 50, 0, 2 * Math.PI);
    context.fillStyle = "#80cbc4";
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = "#004d40";
    context.stroke();
  
    context.font = "bold 16px 'Georgia'";
    context.fillStyle = "#004d40";
    context.fillText("Verified", canvas.width - 130, 755);
  
    // Download
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = `Ghanaian_Day_Name_Certificate_${dayInfo.name}_Modern.png`;
    link.click();
  
    // Wrap text helper
    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
          ctx.textAlign = "center";
          ctx.fillText(line, x, y);
          line = words[i] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.textAlign = "center";
      ctx.fillText(line, x, y);
    }
  }
  
  function generateRoyalCertificate(dayInfo, userName) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = 1200;
    canvas.height = 850;
  
    // Background gradient (deep royal feel)
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#fff9e5");
    gradient.addColorStop(1, "#fceabb");
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    // Ornate border (gold foil style)
    context.strokeStyle = "#d4af37"; // Royal gold
    context.lineWidth = 12;
    context.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);
  
    // Inner decorative lines
    context.lineWidth = 3;
    context.strokeStyle = "#b8860b";
    context.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);
  
    // Main title
    context.font = "bold 46px 'Georgia'";
    context.fillStyle = "#8B0000";
    context.textAlign = "center";
    context.fillText("GHANAIAN DAY NAME CERTIFICATE", canvas.width / 2, 130);
  
    // Subtitle
    context.font = "italic 24px 'Palatino Linotype'";
    context.fillStyle = "#444";
    context.fillText("In honor of cultural heritage and identity", canvas.width / 2, 190);
  
    // Recipient
    context.font = "28px 'Georgia'";
    context.fillStyle = "#222";
    context.fillText("Awarded to", canvas.width / 2, 250);
  
    context.font = "bold 42px 'Georgia'";
    context.fillStyle = "#DAA520";
    context.fillText(userName, canvas.width / 2, 310);
  
    // Description
    context.font = "22px 'Georgia'";
    context.fillStyle = "#333";
    context.fillText(`Born on a ${dayInfo.culture}, and named`, canvas.width / 2, 370);
  
    // Day name
    context.font = "bold 40px 'Georgia'";
    context.fillStyle = "#8B0000";
    context.fillText(dayInfo.name, canvas.width / 2, 420);
  
    // Meaning
    context.font = "italic 22px 'Palatino'";
    context.fillStyle = "#555";
    context.fillText("Meaning:", canvas.width / 2, 480);
  
    context.font = "20px 'Georgia'";
    context.fillStyle = "#111";
    wrapText(context, dayInfo.meaning, canvas.width / 2, 515, 950, 30);
  
    // Famous People
    context.font = "italic 20px 'Palatino'";
    context.fillStyle = "#666";
    context.fillText("Renowned individuals born on this day:", canvas.width / 2, 600);
  
    const peopleText = dayInfo.people.join(", ");
    context.font = "18px 'Georgia'";
    context.fillStyle = "#000";
    wrapText(context, peopleText, canvas.width / 2, 635, 1000, 26);
  
    // Seal
    context.beginPath();
    context.arc(canvas.width - 130, 750, 50, 0, 2 * Math.PI);
    context.fillStyle = "#FFD700";
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = "#8B0000";
    context.stroke();
  
    context.font = "bold 16px 'Georgia'";
    context.fillStyle = "#8B0000";
    context.fillText("Royal Seal", canvas.width - 130, 755);
  
    // Footer text
    context.font = "italic 18px 'Georgia'";
    context.fillStyle = "#222";
    context.fillText("Celebrating my Ghanaian identity with pride", canvas.width / 2, 790);
  
    // Download link
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = `Royal_Ghanaian_Day_Name_Certificate_${dayInfo.name}.png`;
    link.click();
  
    // Text wrapping helper
    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
          ctx.textAlign = "center";
          ctx.fillText(line, x, y);
          line = words[i] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.textAlign = "center";
      ctx.fillText(line, x, y);
    }
  }
  
  function generateNewCertificate(dayInfo, userName) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = 1200;
    canvas.height = 850;
  
    // Background
    context.fillStyle = "#F0F8FF"; // soft blue background for elegance
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    // Decorative border using royal kente color palette
    const kenteRoyalColors = ["#002366", "#FFD700", "#228B22", "#8B0000"];
    let offset = 0;
    kenteRoyalColors.forEach((color, index) => {
      context.strokeStyle = color;
      context.lineWidth = 8;
      context.strokeRect(offset, offset, canvas.width - offset * 2, canvas.height - offset * 2);
      offset += 8;
    });
  
    // Shadow text utility
    function drawShadowText(text, x, y, font, color, shadowColor = "#333") {
      context.font = font;
      context.textAlign = "center";
      context.fillStyle = shadowColor;
      context.fillText(text, x + 2, y + 2);
      context.fillStyle = color;
      context.fillText(text, x, y);
    }
  
    // Top banner
    context.fillStyle = "#002366";
    context.fillRect(0, 90, canvas.width, 80);
    drawShadowText(
      "GHANAIAN BIRTH NAME HONORS",
      canvas.width / 2,
      145,
      "bold 44px 'Georgia'",
      "#FFD700"
    );
  
    // Subtitle
    drawShadowText(
      "In honor of",
      canvas.width / 2,
      230,
      "italic 26px 'Palatino Linotype'",
      "#002366"
    );
  
    // User's Name
    drawShadowText(
      userName,
      canvas.width / 2,
      290,
      "bold 42px 'Georgia'",
      "#8B0000"
    );
  
    // Day & culture
    drawShadowText(
      `who was born on a ${dayInfo.culture}, traditionally named as`,
      canvas.width / 2,
      350,
      "24px 'Georgia'",
      "#333"
    );
  
    // Akan Name
    drawShadowText(
      dayInfo.name,
      canvas.width / 2,
      410,
      "bold 40px 'Georgia'",
      "#228B22"
    );
  
    // Meaning Section
    drawShadowText(
      "Name Meaning:",
      canvas.width / 2,
      470,
      "italic 22px 'Palatino'",
      "#444"
    );
  
    drawShadowText(
      dayInfo.meaning,
      canvas.width / 2,
      510,
      "22px 'Georgia'",
      "#111"
    );
  
    // Notable Individuals
    drawShadowText(
      "Notable individuals sharing this day:",
      canvas.width / 2,
      580,
      "italic 20px 'Palatino'",
      "#000"
    );
  
    const peopleText = dayInfo.people.join(", ");
    context.font = "20px 'Georgia'";
    context.fillStyle = "#000";
    wrapText(context, peopleText, canvas.width / 2, 620, 1000, 28);
  
    // Signature line & footer
    context.font = "italic 18px 'Georgia'";
    context.fillStyle = "#000";
    context.fillText(
      "Celebrating my Ghanaian identity with pride",
      canvas.width / 2,
      780
    );
  
    context.beginPath();
    context.arc(canvas.width - 120, 730, 45, 0, 2 * Math.PI);
    context.fillStyle = "#FFD700";
    context.fill();
    context.lineWidth = 4;
    context.strokeStyle = "#002366";
    context.stroke();
    context.font = "bold 16px 'Georgia'";
    context.fillStyle = "#000000";
    context.fillText("Certified", canvas.width - 120, 735);
  
    // Download functionality
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = `Royal_Ghanaian_Name_Certificate_${dayInfo.name}.png`;
    link.click();
  
    // Wrap text helper
    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
          ctx.textAlign = "center";
          ctx.fillText(line, x, y);
          line = words[i] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.textAlign = "center";
      ctx.fillText(line, x, y);
    }
  }

  function generateElegantCertificate(dayInfo, userName) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = 1200;
    canvas.height = 850;
  
    // Background gradient
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#F3F1E7"); // ivory
    gradient.addColorStop(1, "#EDE6DA"); // parchment tint
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    // Decorative indigo & gold border
    context.strokeStyle = "#1C1F4A"; // Indigo
    context.lineWidth = 12;
    context.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
  
    context.strokeStyle = "#CFAF6B"; // Gold
    context.lineWidth = 6;
    context.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
  
    // Header ribbon
    context.fillStyle = "#1C1F4A";
    context.fillRect(0, 100, canvas.width, 70);
    drawShadowText(
      "GHANAIAN DAY NAME CERTIFICATE",
      canvas.width / 2,
      150,
      "bold 40px 'Times New Roman'",
      "#FFD700"
    );
  
    // Subheading
    drawShadowText(
      "This certificate proudly recognizes",
      canvas.width / 2,
      240,
      "italic 26px 'Garamond'",
      "#222"
    );
  
    // User's Name
    drawShadowText(
      userName,
      canvas.width / 2,
      300,
      "bold 42px 'Georgia'",
      "#1C1F4A"
    );
  
    // Cultural description
    drawShadowText(
      `born on a ${dayInfo.culture}, receives the name`,
      canvas.width / 2,
      360,
      "24px 'Georgia'",
      "#444"
    );
  
    // Akan name
    drawShadowText(
      dayInfo.name,
      canvas.width / 2,
      420,
      "bold 38px 'Georgia'",
      "#CFAF6B"
    );
  
    // Meaning section
    drawShadowText(
      "Meaning of this name:",
      canvas.width / 2,
      490,
      "italic 22px 'Palatino'",
      "#1C1F4A"
    );
  
    drawShadowText(
      dayInfo.meaning,
      canvas.width / 2,
      530,
      "22px 'Georgia'",
      "#000"
    );
  
    // Famous people
    drawShadowText(
      "Other notable individuals born on this day:",
      canvas.width / 2,
      600,
      "italic 20px 'Palatino'",
      "#000"
    );
  
    const peopleText = dayInfo.people.join(", ");
    context.font = "20px 'Georgia'";
    context.fillStyle = "#000";
    wrapText(context, peopleText, canvas.width / 2, 640, 1000, 28);
  
    // Issuer and seal
    context.font = "italic 18px 'Georgia'";
    context.fillStyle = "#000";
    context.fillText(
      "Celebrating my Ghanaian identity with pride",
      canvas.width / 2,
      790
    );
  
    context.beginPath();
    context.arc(canvas.width - 130, 750, 50, 0, 2 * Math.PI);
    context.fillStyle = "#CFAF6B";
    context.fill();
    context.lineWidth = 4;
    context.strokeStyle = "#1C1F4A";
    context.stroke();
    context.font = "bold 16px 'Georgia'";
    context.fillStyle = "#1C1F4A";
    context.fillText("AUTHORITY SEAL", canvas.width - 130, 755);
  
    // Trigger download
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = `Elegant_Ghanaian_Certificate_${dayInfo.name}.png`;
    link.click();
  
    // Helpers
    function drawShadowText(text, x, y, font, color, shadowColor = "#999") {
      context.font = font;
      context.textAlign = "center";
      context.fillStyle = shadowColor;
      context.fillText(text, x + 2, y + 2);
      context.fillStyle = color;
      context.fillText(text, x, y);
    }
  
    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
          ctx.textAlign = "center";
          ctx.fillText(line, x, y);
          line = words[i] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.textAlign = "center";
      ctx.fillText(line, x, y);
    }
  }
  
  function generateGraffitiCertificate(dayInfo, userName) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = 1200;
    canvas.height = 850;
  
    // Funky gradient background
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#FFDEE9");
    gradient.addColorStop(0.5, "#B5FFFC");
    gradient.addColorStop(1, "#FF9CEE");
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    // Wavy border
    context.strokeStyle = "#333";
    context.lineWidth = 10;
    context.setLineDash([20, 10]);
    context.strokeRect(25, 25, canvas.width - 50, canvas.height - 50);
    context.setLineDash([]);
  
    // Funky header
    drawFunkyText(
      "GHANAIAN STREET NAME CREW",
      canvas.width / 2,
      120,
      "bold 48px 'Comic Sans MS'",
      "#111",
      "#FF3CAC"
    );
  
    // User intro
    drawFunkyText(
      `${userName.toUpperCase()}`,
      canvas.width / 2,
      220,
      "bold 54px 'Permanent Marker', sans-serif",
      "#fff",
      "#1e1e1e"
    );
  
    // Vibe description
    drawFunkyText(
      `was born on a ${dayInfo.culture}!`,
      canvas.width / 2,
      280,
      "28px 'Indie Flower', cursive",
      "#111",
      "#00FF9C"
    );
  
    // Day name
    drawFunkyText(
      `A.K.A: ${dayInfo.name}`,
      canvas.width / 2,
      360,
      "bold 48px 'Bangers', cursive",
      "#FA26A0",
      "#000"
    );
  
    // Meaning
    drawFunkyText(
      `Meaning: ${dayInfo.meaning}`,
      canvas.width / 2,
      440,
      "24px 'Comic Neue', cursive",
      "#333",
      "#FF6B6B"
    );
  
    // Famous people section
    drawFunkyText(
      "You're in great company with:",
      canvas.width / 2,
      520,
      "bold 22px 'Patrick Hand', cursive",
      "#111",
      "#2ECC71"
    );
  
    const peopleList = dayInfo.people.join(", ");
    context.font = "20px 'Comic Neue'";
    context.fillStyle = "#000";
    context.textAlign = "center";
    wrapText(context, peopleList, canvas.width / 2, 560, 1000, 30);
  
    // Bottom seal
    drawFunkyText(
      "GH CULTURE CREW ✨",
      canvas.width - 170,
      canvas.height - 40,
      "bold 20px 'Bangers'",
      "#000",
      "#FFD93D"
    );
  
    // Trigger download
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = `Graffiti_Ghanaian_Name_${dayInfo.name}.png`;
    link.click();
  
    // Helper functions
    function drawFunkyText(text, x, y, font, color, shadowColor) {
      context.font = font;
      context.textAlign = "center";
      context.shadowColor = shadowColor;
      context.shadowBlur = 10;
      context.lineWidth = 1;
      context.strokeStyle = shadowColor;
      context.strokeText(text, x, y);
      context.shadowBlur = 0;
      context.fillStyle = color;
      context.fillText(text, x, y);
    }
  
    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
          ctx.fillText(line, x, y);
          line = words[i] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, x, y);
    }
  }
  
  
  function translatePage() {
    const selectedLang = document.getElementById("language").value;
    const langTranslations = translations[selectedLang];
    document.getElementById("pageTitle").innerText = langTranslations.title;
    document.getElementById("dobLabel").innerText = langTranslations.dobLabel;
    document.getElementById("genderLabel").innerText =
      langTranslations.genderLabel;
    document.getElementById("submitBtn").innerText = langTranslations.submitBtn;
    document.getElementById("historicalTitle").innerText =
      langTranslations.historicalTitle;
    document.getElementById("independenceDay").innerText =
      langTranslations.independenceDay;
    document.getElementById("republicDay").innerText =
      langTranslations.republicDay;
    document.getElementById("nkrumahDay").innerText = langTranslations.nkrumahDay;
    document.getElementById("farmersDay").innerText = langTranslations.farmersDay;
  }
  
  function displayHistoricalDates() {
    const historicalDatesList = document.getElementById("historicalDates");
    const selectedLang = document.getElementById("language").value;
    const langTranslations = translations[selectedLang];
    historicalDatesList.innerHTML = `
      <li>${langTranslations.independenceDay}</li>
      <li>${langTranslations.republicDay}</li>
      <li>${langTranslations.nkrumahDay}</li>
      <li>${langTranslations.farmersDay}</li>
    `;
  }
  function showCultureContent() {
    const cultureAspect = document.getElementById('cultureAspect').value;
    const cultureContent = document.getElementById('cultureContent');
  
    switch (cultureAspect) {
      case 'ethnicDiversity':
        cultureContent.innerHTML = `
          <h3>Ethnic Diversity</h3>
          <p>Ghana is home to over 100 ethnic groups, each with its own language and cultural practices. The major ethnic groups include the Akan, Mole-Dagbani, Ewe, Ga-Dangme, and Gurma. Among these, the Akan is the largest, making up about 47% of the population. Each group has preserved its traditions over centuries, contributing to the nation's rich cultural heritage.</p>
        `;
        break;
      case 'languages':
        cultureContent.innerHTML = `
          <h3>Languages</h3>
          <p>Ghana boasts a multilingual society with over 70 languages spoken. English is the official language used in government, education, and business. However, the most widely spoken local languages include Akan (Twi and Fante dialects), Ewe, Ga, and Hausa. Language is a crucial part of identity and cultural expression in Ghana.</p>
        `;
        break;
      case 'traditionalClothing':
        cultureContent.innerHTML = `
          <h3>Traditional Clothing</h3>
          <p>Traditional clothing in Ghana is colorful and distinctive. The Kente cloth, originating from the Akan people, is one of the most famous traditional fabrics. It is hand-woven and comes in various vibrant colors and intricate patterns, each with its own symbolism. Kente is often worn during important ceremonies and celebrations.</p>
        `;
        break;
      case 'festivals':
        cultureContent.innerHTML = `
          <h3>Festivals</h3>
          <p>Ghanaians celebrate numerous festivals throughout the year, reflecting their cultural and religious diversity. Some notable festivals include:</p>
          <ul>
            <li><strong>Homowo</strong>: Celebrated by the Ga people, this festival marks the end of the hunger period with feasting and merrymaking.</li>
            <li><strong>Aboakyer</strong>: The Effutu people celebrate this deer-hunting festival to honor their gods.</li>
            <li><strong>Hogbetsotso</strong>: The Ewe people commemorate their migration from Notsie in present-day Togo.</li>
            <li><strong>Adae</strong>: An Akan festival held every six weeks to honor the ancestors and the Ashanti king.</li>
          </ul>
        `;
        break;
      case 'musicDance':
        cultureContent.innerHTML = `
          <h3>Music and Dance</h3>
          <p>Music and dance are integral to Ghanaian culture. Traditional music features a variety of instruments, including drums, xylophones, and flutes. Highlife, a genre that fuses traditional rhythms with Western instruments, originated in Ghana and remains popular. Modern genres like hiplife and azonto have also gained international recognition. Dance styles vary across ethnic groups and are often performed during festivals and ceremonies.</p>
        `;
        break;
      case 'cuisine':
        cultureContent.innerHTML = `
          <h3>Cuisine</h3>
          <p>Ghanaian cuisine is known for its rich flavors and use of staple ingredients like maize, rice, cassava, and plantains. Some popular dishes include:</p>
          <ul>
            <li><strong>Jollof Rice</strong>: A one-pot dish made with rice, tomatoes, and spices, often served with chicken or fish.</li>
            <li><strong>Fufu</strong>: A dough-like dish made from pounded cassava and plantains, usually served with soup.</li>
            <li><strong>Banku</strong>: A fermented corn and cassava dough, typically served with okra soup or grilled tilapia.</li>
            <li><strong>Waakye</strong>: A dish made with rice and beans, often served with fried plantains, spaghetti, and boiled eggs.</li>
          </ul>
        `;
        break;
      case 'religion':
        cultureContent.innerHTML = `
          <h3>Religion and Beliefs</h3>
          <p>Religion plays a vital role in Ghanaian life. Christianity is the dominant religion, followed by Islam and traditional African religions. Ghanaians often combine religious practices with traditional beliefs, creating a unique spiritual landscape. Respect for ancestors and the belief in the afterlife are important aspects of traditional Ghanaian spirituality.</p>
        `;
        break;
      case 'family':
        cultureContent.innerHTML = `
          <h3>Family and Social Structure</h3>
          <p>Family is the cornerstone of Ghanaian society. Extended families often live together, and family members are expected to support one another. Respect for elders is deeply ingrained, and social structures are often organized around kinship ties. In rural areas, communal living is still common, with families sharing resources and responsibilities.</p>
        `;
        break;
      case 'artCraft':
        cultureContent.innerHTML = `
          <h3>Art and Craft</h3>
          <p>Ghana is renowned for its traditional arts and crafts, including wood carving, pottery, weaving, and beadwork. The Ashanti people are particularly known for their kente weaving, while the northern regions are famous for their intricate leatherwork and basketry. These crafts are not only functional but also serve as a means of cultural expression.</p>
        `;
        break;
      case 'sports':
        cultureContent.innerHTML = `
          <h3>Sports</h3>
          <p>Sports play a significant role in Ghanaian society, with football (soccer) being the most popular. The national team, the Black Stars, has a strong following, and the country has produced several internationally recognized footballers. Other sports like boxing, athletics, and traditional wrestling are also widely enjoyed.</p>
        `;
        break;
      default:
        cultureContent.innerHTML = '<p>Please select a cultural aspect to learn more.</p>';
    }
  }
  
  function validateDate(dateString) {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
  }
  
  function getGhanaianDayInfo(date, gender) {
    const dayNames = {
      male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
      female: ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afia", "Ama"]
    };
    const dayMeanings = {
      male: [
        "Determined",
        "Peaceful",
        "Creative",
        "Balanced",
        "Independent",
        "Adventurous",
        "Leader"
      ],
      female: [
        "Caring",
        "Nurturing",
        "Strong",
        "Resilient",
        "Intelligent",
        "Joyful",
        "Diligent"
      ]
    };
    const dayCultures = {
      male: [
        "Sunday- Spiritually aligned with creation and new beginnings",
        "Monday- Associated with nurturing and emotional intelligence",
        "Tuesday- Seen as protectors and champions of the weak",
        "Wednesday- Associated with wisdom, mystery, and adaptability",
        "Thursday- Symbolize boldness, resilience, and action",
        "Friday- Represent joy, sociability, and artistic flair",
        "Saturday- Symbolize spiritual depth, patience, and introspection"
      ],
      female: [
        "Sunday- Spiritually aligned with creation and new beginnings",
        "Monday- Associated with nurturing and emotional intelligence",
        "Tuesday- Seen as protectors and champions of the weak",
        "Wednesday- Associated with wisdom, mystery, and adaptability",
        "Thursday- Symbolize boldness, resilience, and action",
        "Friday- Represent joy, sociability, and artistic flair",
        "Saturday- Symbolize spiritual depth, patience, and introspection"
      ]
    };
    const prominentPeople = {
      male: {
        Kwasi: ["Kwasi Kyei Darkwah"],
        Kwadwo: ["Kwadwo Opong Nkrumah"],
        Kwabena: ["Kwabena Duffour"],
        Kwaku: ["Kwaku Sintim-Misa"],
        Yaw: ["Yaw Osafo-Maafo"],
        Kofi: ["Kofi Annan"],
        Kwame: ["Kwame Nkrumah"]
      },
      female: {
        Akosua: ["Akosua Busia"],
        Adwoa: ["Adwoa Smart"],
        Abena: ["Abena Amoah"],
        Akua: ["Akua Kuenyehia"],
        Yaa: ["Yaa Asantewaa"],
        Afia: ["Afia Pokua"],
        Ama: ["Ama Ata Aidoo"]
      }
    };
  
    const dayIndex = date.getUTCDay();
    const dayName = dayNames[gender][dayIndex];
    return {
      name: dayName,
      meaning: dayMeanings[gender][dayIndex],
      culture: dayCultures[gender][dayIndex],
      people: prominentPeople[gender][dayName] || []
    };
  }
  
  document
    .getElementById("feedbackForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const feedbackText = document.getElementById("feedback").value;
      feedbacks.push(feedbackText);
      document.getElementById("feedbackResult").innerText =
        "Thank you for your feedback!";
      displayFeedbacks();
      document.getElementById("feedbackForm").reset();
    });
  
  function displayFeedbacks() {
    const feedbackList = document.getElementById("feedbackList");
    feedbackList.innerHTML = feedbacks
      .map((feedback) => `<p>${feedback}</p>`)
      .join("");
  }
  function translatePage() {
    const language = document.getElementById("language").value;
    document.getElementById("title").innerText = translations[language].title;
    document.getElementById("dobLabel").innerText =
      translations[language].dobLabel;
    document.getElementById("genderLabel").innerText =
      translations[language].genderLabel;
    document.getElementById("submitBtn").innerText =
      translations[language].submitBtn;
    document.getElementById("historicalTitle").innerText =
      translations[language].historicalTitle;
  
    const historicalDates = document.getElementById("historicalDatesList")
      .children;
    historicalDates[0].innerHTML = `<strong>${
      translations[language].independenceDay.split(":")[0]
    }:</strong> ${translations[language].independenceDay.split(":")[1]}`;
    historicalDates[1].innerHTML = `<strong>${
      translations[language].republicDay.split(":")[0]
    }:</strong> ${translations[language].republicDay.split(":")[1]}`;
    historicalDates[2].innerHTML = `<strong>${
      translations[language].nkrumahDay.split(":")[0]
    }:</strong> ${translations[language].nkrumahDay.split(":")[1]}`;
    historicalDates[3].innerHTML = `<strong>${
      translations[language].farmersDay.split(":")[0]
    }:</strong> ${translations[language].farmersDay.split(":")[1]}`;
  }
  
  document.getElementById('postCommentBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value.trim();
    const comment = document.getElementById('comment').value.trim();
  
    if (username !== "" && comment !== "") {
        const conversationList = document.getElementById('conversationList');
  
        const newComment = document.createElement('div');
        newComment.classList.add('conversation-item');
  
        const userElement = document.createElement('h4');
        userElement.textContent = username;
  
        const commentElement = document.createElement('p');
        commentElement.textContent = comment;
  
        newComment.appendChild(userElement);
        newComment.appendChild(commentElement);
  
        conversationList.appendChild(newComment);
  
        document.getElementById('username').value = '';
        document.getElementById('comment').value = '';
    } else {
        alert('Please enter both your name and comment.');
    }
  });

  function openAkanModal() {
    document.getElementById("akanModal").style.display = "block";
  }

  function closeAkanModal() {
    document.getElementById("akanModal").style.display = "none";
  }

  window.onclick = function(event) {
    const modal = document.getElementById("akanModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  
  document.querySelectorAll('.cert-thumb').forEach(img => {
    img.addEventListener('click', function () {
      const modal = document.getElementById('certificateModal');
      const modalImg = document.getElementById('modalImage');
      const captionText = document.getElementById('caption');
  
      modal.style.display = 'block';
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    });
  });
  
  function closeModal() {
    document.getElementById('certificateModal').style.display = 'none';
  }


  
   


  translatePage();
  displayHistoricalDates();
  displayAffiliateLinks();

