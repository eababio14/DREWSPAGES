// Sample WPA2 encryption key for simulation
const correctWPA2Key = "WPA2Password123";  // In a real implementation, this would be part of the Wi-Fi network configuration.

// Sample packets data for simulation (including Authentication, Association, and Disassociation)
const packets = [
    { time: "00:00:01", mac: "00:1C:10:B5:55:DC", ssid: "OPENWIFI", data: "Beacon Frame", protocol: "Beacon", isEncrypted: false, type: "Management" },
    { time: "00:00:02", mac: "00:1C:10:B5:55:DD", ssid: "GILL", data: "Probe Response", protocol: "Probe Response", isEncrypted: false, type: "Management" },
    { time: "00:00:03", mac: "00:1C:10:B5:55:DE", ssid: "FiOS-RXJ6L", data: "Beacon Frame", protocol: "Beacon", isEncrypted: false, type: "Management" },
    { time: "00:00:04", mac: "00:1C:10:B5:55:DF", ssid: "OPENWIFI", data: "Encrypted WPA2 Data", protocol: "Data", isEncrypted: true, type: "Data" },
    { time: "00:00:05", mac: "00:1C:10:B5:55:E0", ssid: "OPENWIFI", data: "Authentication Request", protocol: "Authentication", isEncrypted: false, type: "Management" },
    { time: "00:00:06", mac: "00:1C:10:B5:55:E1", ssid: "OPENWIFI", data: "Association Request", protocol: "Association", isEncrypted: false, type: "Management" },
    { time: "00:00:07", mac: "00:1C:10:B5:55:E2", ssid: "OPENWIFI", data: "Disassociation Frame", protocol: "Disassociation", isEncrypted: false, type: "Management" },
    // More sample packets...
];

let filteredPackets = [...packets];
let ssidFilter = "";
let macFilter = "";
let protocolFilter = "";
let wpa2Key = "";

// Simulation state variables
let simulationInterval;
let isPaused = false;
let isRunning = false;

// Grading system and tracking user progress
let userScore = 0;
let totalPoints = 0;
// Additional challenges for the user to complete
let challenges = [
    { id: 1, description: "Enter the correct WPA2 key to decrypt packets", points: 10, completed: false },
    { id: 2, description: "Filter packets by 'Authentication' protocol", points: 5, completed: false },
    { id: 3, description: "View the details of a packet", points: 5, completed: false },
    { id: 4, description: "Filter packets by SSID 'OPENWIFI'", points: 5, completed: false },
    { id: 5, description: "Filter packets by MAC address starting with '00:1C:10'", points: 5, completed: false },
    { id: 6, description: "Decrypt the WPA2 encrypted data and verify", points: 10, completed: false },
    { id: 7, description: "View the packet details of a 'Disassociation' packet", points: 5, completed: false },
    { id: 8, description: "Identify and filter packets based on the 'Probe Response' protocol", points: 5, completed: false },
    { id: 9, description: "View the details of an 'Association Request' packet", points: 5, completed: false },
    { id: 10, description: "Filter packets by the protocol 'Beacon'", points: 5, completed: false },
    { id: 11, description: "Identify encrypted packets and check if WPA2 key decryption works", points: 10, completed: false },
    { id: 12, description: "Analyze the packet with the 'SSID' of 'FiOS-RXJ6L'", points: 5, completed: false },
    { id: 13, description: "Check the packet flow in the simulation after WPA2 decryption is applied", points: 10, completed: false },
    { id: 14, description: "Filter packets based on their time of capture (e.g., '00:00:01')", points: 5, completed: false },
    { id: 15, description: "Analyze the packet for a specific type: 'Management' versus 'Data'", points: 5, completed: false },
    { id: 16, description: "Apply correct filters for packets with 'Authentication' and 'Association' protocols", points: 5, completed: false },
    { id: 17, description: "Compare the 'Beacon Frame' with the 'Probe Response' for differences", points: 10, completed: false },
    { id: 18, description: "Perform a challenge to identify the source MAC address of the packet with data 'Encrypted WPA2 Data'", points: 5, completed: false },
];
// Dynamic chart setup for network traffic visualization
const ctx = document.getElementById('traffic-chart').getContext('2d');
const trafficChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Packets Received',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Update the packet list on the UI
function updatePacketList() {
    const packetList = document.getElementById('packet-list');
    packetList.innerHTML = '';

    filteredPackets.forEach(packet => {
        const packetElement = document.createElement('div');
        packetElement.classList.add('packet');
        packetElement.innerHTML = `
            <span class="time">${packet.time}</span>
            <span class="mac">${packet.mac}</span>
            <span class="ssid">${packet.ssid}</span>
            <span class="data">${simulateDecryption(packet)}</span>
            <button onclick="viewPacketDetails('${packet.time}')">View Details</button>
        `;
        packetList.appendChild(packetElement);
    });
}

// Filter packets by SSID
function filterBySSID() {
    ssidFilter = document.getElementById('ssid').value;
    applyFilters();
}

// Filter packets by MAC Address
function filterByMAC() {
    macFilter = document.getElementById('mac-address').value;
    applyFilters();
}

// Filter packets by Protocol Type (Beacon, Probe Response, Data)
function filterByProtocol() {
    protocolFilter = document.getElementById('protocol').value;
    if (protocolFilter === 'Authentication') {
        completeChallenge(2); // 'Authentication' protocol challenge
    }
    applyFilters();
}

// Apply filters for SSID, MAC address, and Protocol
function applyFilters() {
    filteredPackets = packets.filter(packet => {
        const ssidMatch = ssidFilter ? packet.ssid.toLowerCase().includes(ssidFilter.toLowerCase()) : true;
        const macMatch = macFilter ? packet.mac.includes(macFilter) : true;
        const protocolMatch = protocolFilter ? packet.protocol === protocolFilter : true;
        return ssidMatch && macMatch && protocolMatch;
    });
    updatePacketList();
}

// WPA2 decryption simulation
function simulateDecryption(packet) {
    if (packet.isEncrypted) {
        // Check if WPA2 key is correct and decrypt
        if (wpa2Key === correctWPA2Key) {
            return packet.data + " (Decrypted)";
        } else {
            return packet.data + " (Incorrect WPA2 Key)";
        }
    }
    return packet.data;
}

// Handle WPA2 key input and decrypt packets with challenge grading
function decryptWPA2Packets() {
    wpa2Key = document.getElementById('wpa2-key').value;
    if (wpa2Key === correctWPA2Key) {
        completeChallenge(1); // WPA2 key challenge
    }
    applyFilters();  // Re-apply filters to show decrypted packets.
}

// Simulate real-time packet flow and network traffic trends
function simulateNetworkTraffic() {
    if (isPaused || isRunning) return;

    simulationInterval = setInterval(() => {
        const newPacket = packets[Math.floor(Math.random() * packets.length)];
        filteredPackets.push(newPacket);

        // Update the chart
        const time = new Date().toLocaleTimeString();
        trafficChart.data.labels.push(time);
        trafficChart.data.datasets[0].data.push(filteredPackets.length);
        trafficChart.update();

        // Update the packet list
        updatePacketList();
    }, 1000);  // Update every second

    isRunning = true;
}

// View packet details for challenge completion
function viewPacketDetails(packetTime) {
    const packet = packets.find(p => p.time === packetTime);
    if (packet) {
        const detailSection = document.getElementById('packet-detail-info');
        detailSection.innerHTML = `
            <p><strong>Time:</strong> ${packet.time}</p>
            <p><strong>MAC Address:</strong> ${packet.mac}</p>
            <p><strong>SSID:</strong> ${packet.ssid}</p>
            <p><strong>Data:</strong> ${simulateDecryption(packet)}</p>
            <p><strong>Protocol:</strong> ${packet.protocol}</p>
            <p><strong>Packet Type:</strong> ${packet.type}</p>
            <p><strong>Details:</strong> ${getPacketDetails(packet)}</p>
        `;
        completeChallenge(3); // Packet detail view challenge
    }
}

// Get specific packet details based on its type
function getPacketDetails(packet) {
    switch (packet.protocol) {
        case "Authentication":
            return "Authentication Request Frame: Used to authenticate a client with the network.";
        case "Association":
            return "Association Request Frame: Used to associate a client with the access point.";
        case "Disassociation":
            return "Disassociation Frame: Used to disconnect a client from the access point.";
        default:
            return "General Management Frame.";
    }
}

// Function to update the score based on challenges completed
function updateScore() {
    userScore = challenges.reduce((score, challenge) => challenge.completed ? score + challenge.points : score, 0);
    displayScore();
}


function displayScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.innerHTML = `Score: ${userScore} / ${totalPoints}`;
}

// Function to mark a challenge as complete
function completeChallenge(challengeId) {
    const challenge = challenges.find(c => c.id === challengeId);
    if (challenge && !challenge.completed) {
        challenge.completed = true;
        updateScore();
    }
}

// Function to reset all challenges and progress
function resetChallenges() {
    challenges = challenges.map(challenge => ({ ...challenge, completed: false }));
    updateScore(); // Reset score
    displayChallenges(); // Update the challenge display
}

// Function to display all challenges and their statuses
function displayChallenges() {
    const challengeSection = document.getElementById('challenges');
    challengeSection.innerHTML = challenges.map(challenge => `
        <div class="challenge">
            <p>${challenge.description}</p>
            <p>Status: ${challenge.completed ? 'Completed' : 'Pending'}</p>
        </div>
    `).join('');
    totalPoints = challenges.reduce((sum, challenge) => sum + challenge.points, 0);  // Calculate total points
    displayScore();
}

// Reset challenges when user clicks reset button
document.getElementById('resetChallengesButton').addEventListener('click', resetChallenges);

// Initialize the educational tool and challenges
function init() {
    displayChallenges();
}


// Stop the simulation
function stopSimulation() {
    clearInterval(simulationInterval);
    isRunning = false;
    filteredPackets = [];
    trafficChart.data.labels = [];
    trafficChart.data.datasets[0].data = [];
    trafficChart.update();
    updatePacketList();
}

// Pause the simulation
function pauseSimulation() {
    clearInterval(simulationInterval);
    isPaused = true;
}

// Resume the simulation
function resumeSimulation() {
    if (isPaused) 
        simulateNetworkTraffic();
        isPaused = false;
    
}

// Start the simulation
function startSimulation() {
    if (!isRunning) {
        simulateNetworkTraffic();
    }
    init();  // Initialize challenges when the simulation starts
}

// Get the modal
const modal = document.getElementById("instructions-modal");

// Get the button that opens the modal
const openInstructionsBtn = document.getElementById("open-instructions-btn");

// Get the <span> element that closes the modal
const closeButton = document.querySelector(".close-button");

// When the user clicks the button, open the modal
openInstructionsBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// When the user clicks the close button, close the modal
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// When the user clicks anywhere outside the modal, close it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    const hintsModal = document.getElementById("hints-modal");

    // Get the button that opens the modal
    const openHintsBtn = document.getElementById("open-hints-btn");

    // Get the <span> element that closes the modal
    const closeButton = document.querySelector(".close-button");

    // Example of hints for different questions
    const hints = [
        "Hint 1: Make sure you understand the task's goal before diving into the code. Break it down into smaller steps.",
        "Hint 2: Try testing your logic using sample data before submitting.",
        "Hint 3: Double-check the input format, especially if you are working with specific protocols or formats.",
        "Hint 4: If you're working with networking, remember to validate the packet capture structure before analyzing traffic."
    ];

    // Function to display the hints in the modal
    function displayHints() {
        const hintsList = document.getElementById("hints-list");
        hintsList.innerHTML = ""; // Clear previous hints

        // Add each hint dynamically to the list
        hints.forEach(hint => {
            const li = document.createElement("li");
            li.textContent = hint;
            hintsList.appendChild(li);
        });
    }

    // When the user clicks the button, open the modal and show hints
    openHintsBtn.addEventListener("click", function() {
        displayHints();  // Populate the modal with hints
        hintsModal.style.display = "block";  // Show the modal
    });

    // When the user clicks the close button, close the modal
    closeButton.addEventListener("click", function() {
        hintsModal.style.display = "none";  // Hide the modal
    });

    // When the user clicks anywhere outside the modal, close it
    window.addEventListener("click", function(event) {
        if (event.target === hintsModal) {
            hintsModal.style.display = "none";  // Hide the modal when clicking outside
        }
    });
});

// Function to open the cheat sheet modal
function openCheatSheet() {
    document.getElementById("cheatSheetModal").style.display = "block";
}

// Function to close the cheat sheet modal
function closeCheatSheet() {
    document.getElementById("cheatSheetModal").style.display = "none";
}

// Function to trigger opening the cheat sheet (e.g., when the user clicks a "Show Cheat Sheet" button)
document.getElementById('showCheatSheetButton').addEventListener('click', openCheatSheet);

// Function to open the Keywords Explanation Modal
function openKeywordsModal() {
    document.getElementById('keywordsModal').style.display = "block";
}

// Function to close the Keywords Explanation Modal
function closeKeywordsModal() {
    document.getElementById('keywordsModal').style.display = "none";
}

