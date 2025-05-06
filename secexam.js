document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submitBtn");
    const generateCertBtn = document.getElementById("generateCert");
    const closeCertBtn = document.getElementById("closeCert");
    const startQuizBtn = document.getElementById("startQuizBtn");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const reviewResultsBtn = document.getElementById("reviewResultsBtn");
    const printResultsBtn = document.getElementById("printResultsBtn");
    const closeResultsBtn = document.getElementById("closeResultsBtn");
    const retakeQuizBtn = document.getElementById("retakeQuizBtn");

    const questions = [
        {
            question: "What is the primary function of a firewall?",
            options: [
              "A. To prevent unauthorized access",
              "B. To detect malware",
              "C. To encrypt data",
              "D. To monitor network traffic"
            ],
            correctAnswer: "A",
            feedback:
              "Firewalls are primarily used to block unauthorized access while permitting authorized communications."
          },
          
         
        // Add more questions here
    ];

    let currentQuestionIndex = 0;
    let userAnswers = {};
    const totalQuestionsToDisplay = Math.min(50, questions.length);
    let randomizedQuestions = getRandomQuestions(totalQuestionsToDisplay);

    function getRandomQuestions(num) {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    function showQuestions(startIndex, questions) {
        const questionContainer = document.getElementById("questionContainer");
        questionContainer.innerHTML = '';

        const endIndex = Math.min(startIndex + 5, questions.length);
        for (let i = startIndex; i < endIndex; i++) {
            const question = questions[i];
            const questionHtml = `
                <div class="question-block">
                    <h2>Question ${i + 1}: ${question.question}</h2>
                    ${question.options.map((option, j) => `
                        <label>
                            <input type="radio" name="q${i}" value="${String.fromCharCode(65 + j)}"
                            ${userAnswers[i] === String.fromCharCode(65 + j) ? 'checked' : ''}>
                            ${String.fromCharCode(65 + j)}) ${option}
                        </label><br>
                    `).join("")}
                </div>
            `;
            questionContainer.innerHTML += questionHtml;
        }

        updateProgress(startIndex);
    }

    function updateProgress(currentIndex) {
        document.getElementById("current-question").textContent = currentIndex + 1;
        document.getElementById("total-questions").textContent = randomizedQuestions.length;
    }

    function saveAnswers(startIndex) {
        for (let i = startIndex; i < Math.min(startIndex + 5, randomizedQuestions.length); i++) {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected) {
                userAnswers[i] = selected.value;
            }
        }
    }

    function calculateScore() {
        let score = 0;
        randomizedQuestions.forEach((question, index) => {
            if (userAnswers[index] && userAnswers[index] === question.correctAnswer) {
                score++;
            }
        });
        return score;
    }

    function displayResult(score) {
        const resultText = document.getElementById("resultText");
        const resultSection = document.getElementById("result");
        const percentage = (score / randomizedQuestions.length) * 100;
        resultText.textContent = `You scored ${score} out of ${randomizedQuestions.length} (${percentage.toFixed(2)}%)`;
        resultSection.classList.remove("hidden");

        if (percentage >= 80) {
            generateCertBtn.classList.remove("hidden");
            document.getElementById("certificateActions").classList.remove("hidden");
        }
    }

    function reviewResults() {
        const resultsSummary = document.getElementById("resultsSummary");
        resultsSummary.innerHTML = randomizedQuestions.map((question, index) => {
            const isCorrect = userAnswers[index] === question.correctAnswer;
            return `
                <div class="question-review">
                    <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
                    <p>Your answer: ${userAnswers[index] ? question.options[userAnswers[index].charCodeAt(0) - 65] : "No answer"}</p>
                    <p>Correct answer: ${question.options[question.correctAnswer.charCodeAt(0) - 65]}</p>
                    <p>Explanation: ${question.feedback}</p>
                    <p style="color: ${isCorrect ? "green" : "red"};">${isCorrect ? "Correct" : "Incorrect"}</p>
                </div>
            `;
        }).join("");
        document.getElementById("quizResults").classList.remove("hidden");
    }

    function printResults() {
        const resultsHtml = document.getElementById("quizResults").innerHTML;
        const printWindow = window.open("", "", "height=600,width=800");
        printWindow.document.write("<html><head><title>Quiz Results</title></head><body>");
        printWindow.document.write(resultsHtml);
        printWindow.document.write("</body></html>");
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    }

    function generateCertificateAndDownload() {
        const username = document.getElementById("username").value.trim();
        if (username === "") {
            alert("Please enter your name to generate the certificate.");
            return;
        }
    
        const randomCertNumber = "CERT-" + Math.floor(100000 + Math.random() * 900000);
        const certDate = new Date().toLocaleDateString();
    
        document.getElementById("certName").textContent = username;
        document.getElementById("certDate").textContent = certDate;
        document.getElementById("certNumber").textContent = randomCertNumber;
        document.getElementById("certificateModal").classList.remove("hidden");
    
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ orientation: "landscape", unit: "pt", format: "a4" });
    
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
    
        const outerPadding = 40;
        const borderThickness = 8;
        const innerPadding = outerPadding + borderThickness + 10;
    
        // --- Outer Border ---
        doc.setDrawColor(212, 175, 55);
        doc.setLineWidth(borderThickness);
        doc.rect(outerPadding, outerPadding, pageWidth - outerPadding * 2, pageHeight - outerPadding * 2, 'S');
    
        // --- Inner Border ---
        doc.setDrawColor(180, 180, 180);
        doc.setLineWidth(2);
        doc.rect(innerPadding, innerPadding, pageWidth - innerPadding * 2, pageHeight - innerPadding * 2, 'S');
    
        // --- Watermark ---
        doc.setTextColor(240, 240, 240);
        doc.setFont("times", "bolditalic");
        doc.setFontSize(80);
        doc.text("SECURITY ANALYST", pageWidth / 2, pageHeight / 2 + 50, { align: "center", angle: 360 });
    
        // --- Title ---
        doc.setTextColor(0, 51, 102);
        doc.setFontSize(40);
        doc.setFont("times", "bold");
        doc.text("Certificate of Achievement", pageWidth / 2, 150, { align: "center" });
    
        // --- Subtitle ---
        doc.setFontSize(18);
        doc.setFont("times", "italic");
        doc.setTextColor(80, 80, 80);
        doc.text("This is proudly presented to", pageWidth / 2, 210, { align: "center" });
    
        // --- Name ---
        doc.setFont("times", "bold");
        doc.setFontSize(32);
        doc.setTextColor(0, 0, 0);
        doc.text(username, pageWidth / 2, 270, { align: "center" });
    
        // --- Course completion ---
        doc.setFont("times", "italic");
        doc.setFontSize(20);
        doc.setTextColor(80, 80, 80);
        doc.text("for successful completion of the", pageWidth / 2, 310, { align: "center" });
    
        // --- Course Title ---
        doc.setFont("times", "bold");
        doc.setFontSize(28);
        doc.setTextColor(0, 51, 102);
        doc.text("Security Analyst Certification", pageWidth / 2, 360, { align: "center" });
    
        // --- Divider line ---
        doc.setDrawColor(160, 160, 160);
        doc.setLineWidth(0.5);
        doc.line(pageWidth / 2 - 150, 380, pageWidth / 2 + 150, 380);
    
        // --- Date and Cert Number (inside inner border) ---
        const bottomMargin = innerPadding + 30; // 30px from the inner border
        doc.setFont("times", "normal");
        doc.setFontSize(14);
        doc.setTextColor(100, 100, 100);
        doc.text(`Date: ${certDate}`, innerPadding + 10, pageHeight - bottomMargin);
        doc.text(`Certificate No: ${randomCertNumber}`, pageWidth - innerPadding - 200, pageHeight - bottomMargin);

        const sealX = pageWidth / 2;
        const sealY = pageHeight - outerPadding - 40;
        const outerRadius = 32;
        const innerRadius = 20;
        const ringMidRadius = 25.5; // Midpoint between rings
        const curvedText = "SECURITY ANALYST"; // No extra spaces
        const textAngleSpread = Math.PI; // 180 degrees
        const startAngle = Math.PI / 2 + textAngleSpread / 2;
        
        doc.setDrawColor(218, 165, 32); // Gold outer ring
        doc.setLineWidth(1);
        doc.circle(sealX, sealY, outerRadius, 'S');
        
        doc.setFillColor(139, 0, 0); // Red inner circle
        doc.setDrawColor(139, 0, 0);
        doc.circle(sealX, sealY, innerRadius, 'FD');
        
        // Curved Text - dynamically spaced
        doc.setFont("helvetica", "bold");
        doc.setFontSize(5.2); // Adjust size for better fit
        doc.setTextColor(0, 0, 0);
        
        const chars = curvedText.split('');
        const textWidth = chars.reduce((sum, c) => sum + doc.getTextWidth(c), 0);
        const arcLength = ringMidRadius * textAngleSpread;
        const scaleFactor = arcLength / textWidth;
        
        let currentAngle = startAngle;
        
        chars.forEach((char) => {
          const charWidth = doc.getTextWidth(char) * scaleFactor;
          const angle = currentAngle - (charWidth / 2) / ringMidRadius;
        
          const charX = sealX + ringMidRadius * Math.cos(angle);
          const charY = sealY - ringMidRadius * Math.sin(angle);
        
          doc.saveGraphicsState();
          doc.text(char, charX, charY, {
            align: "center",
            baseline: "middle",
            angle: (angle * 180) / Math.PI - 90
          });
          doc.restoreGraphicsState();
        
          currentAngle -= (charWidth) / ringMidRadius;
        });
        
      
        doc.setFontSize(8);
        doc.setFont("times", "italic");
        doc.setTextColor(80, 0, 0);
        doc.text("Official Seal", sealX, sealY + 35, { align: "center" });
        
        // Save
        doc.save(`${username}_Certificate.pdf`);
    }
    
    
    
    

    function shareOnFacebook() {
        const certNumber = document.getElementById("certNumber").textContent;
        const shareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`I just completed the Security Plus Analyst Course and earned certificate ${certNumber}!`)}`;
        window.open(shareURL, "_blank");
    }

    function shareOnTwitter() {
        const certNumber = document.getElementById("certNumber").textContent;
        const shareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`I just completed the Security Plus Analyst Course and earned certificate ${certNumber}!`)}`;
        window.open(shareURL, "_blank");
    }

    function shareOnLinkedIn() {
        const certNumber = document.getElementById("certNumber").textContent;
        const shareURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`I just completed the Security Plus Analyst Course and earned certificate ${certNumber}!`)}`;
        window.open(shareURL, "_blank");
    }

    startQuizBtn.addEventListener("click", () => {
        currentQuestionIndex = 0;
        randomizedQuestions = getRandomQuestions(totalQuestionsToDisplay);
        userAnswers = {};
        showQuestions(currentQuestionIndex, randomizedQuestions);
        alert("Good Luck!");
    });

    nextBtn.addEventListener("click", () => {
        saveAnswers(currentQuestionIndex);
        if (currentQuestionIndex + 5 < randomizedQuestions.length) {
            currentQuestionIndex += 5;
            showQuestions(currentQuestionIndex, randomizedQuestions);
        } else {
            alert("You have reached the end of the quiz.");
        }
    });

    prevBtn.addEventListener("click", () => {
        saveAnswers(currentQuestionIndex);
        if (currentQuestionIndex - 5 >= 0) {
            currentQuestionIndex -= 5;
            showQuestions(currentQuestionIndex, randomizedQuestions);
        }
    });

    submitBtn.addEventListener("click", () => {
        saveAnswers(currentQuestionIndex);
        const score = calculateScore();
        displayResult(score);
    

    // 🔒 Disable all radio buttons after submission
 const allRadios = document.querySelectorAll('input[type="radio"]');
 allRadios.forEach(radio => {
   radio.disabled = true;
 });

 // Optional: disable next/prev buttons after submission too
 document.getElementById("nextBtn").disabled = true;
 document.getElementById("prevBtn").disabled = true;
});

    reviewResultsBtn.addEventListener("click", reviewResults);
    printResultsBtn.addEventListener("click", printResults);
    closeResultsBtn.addEventListener("click", () => {
        document.getElementById("quizResults").classList.add("hidden");
    });
    retakeQuizBtn.addEventListener("click", () => {
        randomizedQuestions = getRandomQuestions(totalQuestionsToDisplay);
        userAnswers = {};
        currentQuestionIndex = 0;
        showQuestions(currentQuestionIndex, randomizedQuestions);
        document.getElementById("result").classList.add("hidden");
        document.getElementById("quizResults").classList.add("hidden");
    });
    generateCertBtn.addEventListener("click", generateCertificateAndDownload);
    closeCertBtn.addEventListener("click", () => {
        document.getElementById("certificateModal").classList.add("hidden");
    });
});


const infoBtn = document.getElementById("infoBtn");
const examInfoModal = document.getElementById("examInfoModal");
const closeExamInfo = document.getElementById("closeExamInfo");

infoBtn.addEventListener("click", () => {
    examInfoModal.classList.remove("hidden");
    examInfoModal.style.display = "block";
});

closeExamInfo.addEventListener("click", () => {
    examInfoModal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === examInfoModal) {
        examInfoModal.style.display = "none";
    }
});
