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
          {
            "question": "Which layer of the OSI model is responsible for routing?",
            "options": [
              "A. Data Link",
              "B. Transport",
              "C. Network",
              "D. Session"
            ],
            "correctAnswer": "C",
            "feedback": "The Network layer (Layer 3) is responsible for routing data across different networks using logical addressing (IP addresses)."
          },
          {
            "question": "What is the primary function of the Data Link layer in the OSI model?",
            "options": [
              "A. Error detection and correction",
              "B. Routing",
              "C. Encrypting data",
              "D. Formatting data for transmission"
            ],
            "correctAnswer": "A",
            "feedback": "The Data Link layer (Layer 2) handles error detection and correction in data frames and provides MAC addressing for local delivery."
          },
          {
            "question": "Which type of cable is best used for high-speed network connections with long distances?",
            "options": [
              "A. Twisted Pair",
              "B. Coaxial",
              "C. Fiber Optic",
              "D. HDMI"
            ],
            "correctAnswer": "C",
            "feedback": "Fiber optic cables transmit data at high speeds over long distances using light, making them ideal for high-performance networks."
          },
          {
            "question": "Which layer of the OSI model is responsible for establishing, maintaining, and terminating connections?",
            "options": [
              "A. Network",
              "B. Session",
              "C. Transport",
              "D. Presentation"
            ],
            "correctAnswer": "B",
            "feedback": "The Session layer (Layer 5) is responsible for managing communication sessions between devices, ensuring data exchange occurs properly."
          },
          {
            "question": "What type of device operates at Layer 2 and uses MAC addresses to forward traffic?",
            "options": [
              "A. Router",
              "B. Switch",
              "C. Hub",
              "D. Modem"
            ],
            "correctAnswer": "B",
            "feedback": "A switch operates at Layer 2 (Data Link layer) and forwards data based on MAC addresses."
          },
          {
            "question": "Which of the following protocols operates at the Transport layer of the OSI model?",
            "options": [
              "A. TCP",
              "B. IP",
              "C. ARP",
              "D. HTTP"
            ],
            "correctAnswer": "A",
            "feedback": "TCP (Transmission Control Protocol) operates at the Transport layer (Layer 4), providing reliable, ordered data transmission."
          },
          {
            "question": "Which of the following is an example of a network topology?",
            "options": [
              "A. IP address",
              "B. LAN",
              "C. Star",
              "D. FTP"
            ],
            "correctAnswer": "C",
            "feedback": "The Star topology connects all devices to a central hub or switch, making it easy to manage and troubleshoot."
          },
          {
            "question": "Which network service allows the dynamic assignment of IP addresses to devices?",
            "options": [
              "A. DNS",
              "B. DHCP",
              "C. SMTP",
              "D. SNMP"
            ],
            "correctAnswer": "B",
            "feedback": "DHCP (Dynamic Host Configuration Protocol) is used to assign IP addresses automatically to devices on the network."
          },
          {
            "question": "What does the acronym 'DNS' stand for in networking?",
            "options": [
              "A. Domain Name System",
              "B. Digital Network Security",
              "C. Data Node Storage",
              "D. Dynamic Network Setup"
            ],
            "correctAnswer": "A",
            "feedback": "DNS (Domain Name System) is a hierarchical system used to translate domain names into IP addresses."
          },
          {
            "question": "What is the purpose of subnetting a network?",
            "options": [
              "A. To increase the security of the network",
              "B. To divide the network into smaller, more manageable segments",
              "C. To improve network speed",
              "D. To assign IP addresses automatically"
            ],
            "correctAnswer": "B",
            "feedback": "Subnetting divides a large network into smaller subnets, improving manageability and optimizing performance."
          },
          {
            "question": "Which of the following protocols provides secure communication over the internet?",
            "options": [
              "A. HTTP",
              "B. FTP",
              "C. HTTPS",
              "D. SMTP"
            ],
            "correctAnswer": "C",
            "feedback": "HTTPS (HyperText Transfer Protocol Secure) uses encryption to secure communication between the web browser and the server."
          },
          {
            "question": "Which layer in the OSI model is responsible for encrypting data?",
            "options": [
              "A. Transport",
              "B. Presentation",
              "C. Session",
              "D. Network"
            ],
            "correctAnswer": "B",
            "feedback": "The Presentation layer (Layer 6) is responsible for data translation, encryption, and compression."
          },
          {
            "question": "What is the main purpose of ARP (Address Resolution Protocol)?",
            "options": [
              "A. Resolve domain names to IP addresses",
              "B. Resolve MAC addresses to IP addresses",
              "C. Route traffic between subnets",
              "D. Encrypt data in transit"
            ],
            "correctAnswer": "B",
            "feedback": "ARP is used to map IP addresses to MAC addresses in a local network."
          },
          {
            "question": "What does a router use to forward data between networks?",
            "options": [
              "A. MAC addresses",
              "B. IP addresses",
              "C. DNS records",
              "D. Port numbers"
            ],
            "correctAnswer": "B",
            "feedback": "Routers use IP addresses to forward data between different networks or subnets."
          },
          {
            "question": "Which device operates at Layer 3 and forwards data between different networks?",
            "options": [
              "A. Switch",
              "B. Router",
              "C. Hub",
              "D. Bridge"
            ],
            "correctAnswer": "B",
            "feedback": "A router operates at Layer 3 (Network layer) and forwards data between different networks based on IP addresses."
          },
          {
            "question": "What type of cable is used for connecting network devices over long distances in high-speed networks?",
            "options": [
              "A. Twisted Pair",
              "B. Coaxial",
              "C. Fiber Optic",
              "D. USB"
            ],
            "correctAnswer": "C",
            "feedback": "Fiber optic cables provide high-speed data transmission over long distances using light signals."
          },
          {
            "question": "Which wireless standard operates at 5 GHz and provides a maximum data rate of 1.3 Gbps?",
            "options": [
              "A. 802.11a",
              "B. 802.11b",
              "C. 802.11g",
              "D. 802.11ac"
            ],
            "correctAnswer": "D",
            "feedback": "802.11ac operates at 5 GHz and offers data rates up to 1.3 Gbps, providing faster wireless speeds."
          },
          {
            "question": "Which of the following devices is used to divide broadcast domains in a network?",
            "options": [
              "A. Hub",
              "B. Router",
              "C. Switch",
              "D. Bridge"
            ],
            "correctAnswer": "B",
            "feedback": "A router divides broadcast domains by forwarding traffic between different networks."
          },
          {
            "question": "Which of the following is an advantage of using VLANs in a network?",
            "options": [
              "A. Reduces the number of switches needed",
              "B. Increases broadcast traffic",
              "C. Improves network security by segmenting traffic",
              "D. Makes routing unnecessary"
            ],
            "correctAnswer": "C",
            "feedback": "VLANs help segment network traffic, improving security by isolating broadcast domains."
          },
          {
            "question": "Which protocol is used to dynamically assign IP addresses to devices on a network?",
            "options": [
              "A. DHCP",
              "B. DNS",
              "C. HTTP",
              "D. FTP"
            ],
            "correctAnswer": "A",
            "feedback": "DHCP (Dynamic Host Configuration Protocol) dynamically assigns IP addresses to devices on a network."
          },
          {
            "question": "Which type of routing protocol is used for communication between different autonomous systems?",
            "options": [
              "A. RIP",
              "B. OSPF",
              "C. BGP",
              "D. EIGRP"
            ],
            "correctAnswer": "C",
            "feedback": "BGP (Border Gateway Protocol) is used to route traffic between different autonomous systems on the internet."
          },
          {
            "question": "Which type of Ethernet cable is most commonly used in local area networks (LANs)?",
            "options": [
              "A. Cat 5e",
              "B. Cat 6",
              "C. Fiber optic",
              "D. Coaxial"
            ],
            "correctAnswer": "A",
            "feedback": "Cat 5e cables are commonly used for networking in LANs due to their reliability and speed (up to 1 Gbps)."
          },
          {
            "question": "What is the maximum transmission speed of 802.11n Wi-Fi?",
            "options": [
              "A. 54 Mbps",
              "B. 100 Mbps",
              "C. 300 Mbps",
              "D. 600 Mbps"
            ],
            "correctAnswer": "D",
            "feedback": "802.11n can achieve maximum speeds of 600 Mbps using MIMO (Multiple Input Multiple Output) technology."
          },
          {
            "question": "What is the main difference between a hub and a switch?",
            "options": [
              "A. A hub forwards traffic based on MAC addresses, a switch forwards traffic based on IP addresses",
              "B. A hub forwards traffic to all ports, a switch forwards traffic to specific ports",
              "C. A hub is more efficient than a switch",
              "D. A switch cannot connect to a router"
            ],
            "correctAnswer": "B",
            "feedback": "A hub forwards data to all ports, whereas a switch forwards data only to the port that needs it based on MAC addresses."
          },
          {
            "question": "Which protocol is responsible for delivering emails from the server to the email client?",
            "options": [
              "A. SMTP",
              "B. IMAP",
              "C. POP3",
              "D. HTTP"
            ],
            "correctAnswer": "B",
            "feedback": "IMAP (Internet Message Access Protocol) allows email clients to retrieve messages from the server."
          },
          {
            "question": "Which of the following wireless security protocols is considered the most secure?",
            "options": [
              "A. WEP",
              "B. WPA",
              "C. WPA2",
              "D. WPS"
            ],
            "correctAnswer": "C",
            "feedback": "WPA2 (Wi-Fi Protected Access 2) is the most secure wireless security protocol currently available."
          },
          {
            "question": "What is the maximum range of an 802.11g wireless network?",
            "options": [
              "A. 10 meters",
              "B. 50 meters",
              "C. 100 meters",
              "D. 300 meters"
            ],
            "correctAnswer": "C",
            "feedback": "The typical maximum range of 802.11g is about 100 meters indoors."
          },
          {
            "question": "Which of the following devices can be used to connect a remote office to the main office over the internet?",
            "options": [
              "A. VPN",
              "B. Router",
              "C. Modem",
              "D. Firewall"
            ],
            "correctAnswer": "A",
            "feedback": "A VPN (Virtual Private Network) can securely connect remote offices to a central office over the internet."
          },
          {
            "question": "What is the purpose of a network topology diagram?",
            "options": [
              "A. To show how network devices are physically connected",
              "B. To visualize network traffic flow",
              "C. To monitor network security",
              "D. To configure network devices"
            ],
            "correctAnswer": "A",
            "feedback": "A network topology diagram illustrates the physical or logical arrangement of network devices and their connections."
          },
          {
            "question": "Which of the following should be implemented to ensure business continuity in the event of a disaster?",
            "options": [
              "A. Backup power supply",
              "B. Disaster Recovery Plan",
              "C. Bandwidth upgrade",
              "D. VPN"
            ],
            "correctAnswer": "B",
            "feedback": "A Disaster Recovery Plan outlines steps to recover network services and systems in the event of a disaster."
          },
          {
            "question": "Which of the following tools helps monitor network traffic for performance issues?",
            "options": [
              "A. Wireshark",
              "B. Nmap",
              "C. NetFlow",
              "D. Ping"
            ],
            "correctAnswer": "C",
            "feedback": "NetFlow is used to monitor network traffic and gather performance metrics."
          },
          {
            "question": "Which of the following is a common cause of network downtime?",
            "options": [
              "A. Cable interference",
              "B. Unused IP addresses",
              "C. Software bugs",
              "D. Excessive power usage"
            ],
            "correctAnswer": "A",
            "feedback": "Cable interference or physical damage can disrupt network connectivity and cause downtime."
          },
          {
            "question": "Which of the following describes a benefit of using a network monitoring system?",
            "options": [
              "A. It automates troubleshooting",
              "B. It helps to identify network security breaches",
              "C. It configures network devices",
              "D. It stores data backups"
            ],
            "correctAnswer": "B",
            "feedback": "A network monitoring system helps identify security vulnerabilities and performance issues on the network."
          },
          {
            "question": "Which of the following protocols is used to query a DNS server?",
            "options": [
              "A. DNSSEC",
              "B. DHCP",
              "C. SNMP",
              "D. DNS"
            ],
            "correctAnswer": "D",
            "feedback": "DNS (Domain Name System) is used to query servers for domain name resolution."
          },
          {
            "question": "Which of the following is an example of an event that should be logged in a network monitoring system?",
            "options": [
              "A. A user logs in",
              "B. A printer runs out of paper",
              "C. A switch is restarted",
              "D. A router firmware update"
            ],
            "correctAnswer": "C",
            "feedback": "Network devices like routers and switches should log events such as restarts for troubleshooting and auditing purposes."
          },
          {
            "question": "What should be the first step when troubleshooting network connectivity issues?",
            "options": [
              "A. Check the physical connections",
              "B. Reboot the router",
              "C. Replace the cable",
              "D. Run a packet capture"
            ],
            "correctAnswer": "A",
            "feedback": "Checking the physical connections is the first step in troubleshooting network connectivity issues."
          },
          {
            "question": "Which of the following can be used to ensure that network services continue if one server fails?",
            "options": [
              "A. Load balancing",
              "B. Port forwarding",
              "C. Static IP assignment",
              "D. QoS"
            ],
            "correctAnswer": "A",
            "feedback": "Load balancing ensures high availability by distributing traffic across multiple servers, reducing the risk of service downtime."
          },
          {
            "question": "Which of the following is a good practice for securing network operations?",
            "options": [
              "A. Use strong passwords",
              "B. Disable encryption",
              "C. Share administrative access with all users",
              "D. Allow unrestricted access to devices"
            ],
            "correctAnswer": "A",
            "feedback": "Using strong passwords is a fundamental practice for securing network operations and reducing unauthorized access."
          },
          {
            "question": "Which of the following actions should be taken if an attacker is identified on a network?",
            "options": [
              "A. Disconnect the attacker immediately",
              "B. Ignore the incident if no data is lost",
              "C. Allow the attacker to continue their activities",
              "D. Shut down the entire network"
            ],
            "correctAnswer": "A",
            "feedback": "If an attacker is detected, disconnecting them from the network is crucial to prevent further damage or unauthorized access."
          },
          {
            "question": "Which of the following is used to prevent unauthorized access to a network?",
            "options": [
              "A. Switch",
              "B. Firewall",
              "C. Router",
              "D. Hub"
            ],
            "correctAnswer": "B",
            "feedback": "A firewall is used to block unauthorized access and protect the network from external threats."
          },
          {
            "question": "What type of attack involves intercepting and altering communication between two parties?",
            "options": [
              "A. Man-in-the-middle attack",
              "B. Phishing",
              "C. SQL injection",
              "D. DDoS attack"
            ],
            "correctAnswer": "A",
            "feedback": "A man-in-the-middle (MITM) attack intercepts and alters communications between two parties without their knowledge."
          },
          {
            "question": "Which of the following methods is used to authenticate users based on something they know?",
            "options": [
              "A. Biometrics",
              "B. Smart cards",
              "C. Passwords",
              "D. Two-factor authentication"
            ],
            "correctAnswer": "C",
            "feedback": "Passwords are a common form of authentication where the user proves their identity by providing something they know."
          },
          {
            "question": "Which type of encryption is used to protect data transmitted over the internet?",
            "options": [
              "A. AES",
              "B. WPA2",
              "C. SSL/TLS",
              "D. RSA"
            ],
            "correctAnswer": "C",
            "feedback": "SSL/TLS (Secure Sockets Layer/Transport Layer Security) encrypts data transmitted over the internet to ensure privacy and security."
          },
          {
            "question": "Which of the following is a technique used to protect the integrity of data during transmission?",
            "options": [
              "A. Hashing",
              "B. Encryption",
              "C. Compression",
              "D. Load balancing"
            ],
            "correctAnswer": "A",
            "feedback": "Hashing is used to verify the integrity of data by generating a fixed-length string (hash) that changes if the data is altered."
          },
          {
            "question": "Which of the following protocols is used to secure email communication?",
            "options": [
              "A. HTTPS",
              "B. SMTP",
              "C. S/MIME",
              "D. FTP"
            ],
            "correctAnswer": "C",
            "feedback": "S/MIME (Secure/Multipurpose Internet Mail Extensions) is a protocol that encrypts and signs email communication for security."
          },
          {
            "question": "Which of the following is a common type of network security attack that floods a network with traffic to make it unavailable?",
            "options": [
              "A. Phishing",
              "B. DDoS",
              "C. Spoofing",
              "D. Man-in-the-middle"
            ],
            "correctAnswer": "B",
            "feedback": "A DDoS (Distributed Denial-of-Service) attack floods a network or website with traffic to overwhelm and disrupt its availability."
          },
          {
            "question": "Which of the following is the most effective defense against brute force attacks?",
            "options": [
              "A. CAPTCHA",
              "B. Strong passwords",
              "C. Two-factor authentication",
              "D. Firewalls"
            ],
            "correctAnswer": "C",
            "feedback": "Two-factor authentication (2FA) adds an extra layer of security by requiring both a password and a second factor, making brute force attacks much harder."
          },
          {
            "question": "What does a VPN (Virtual Private Network) do for network security?",
            "options": [
              "A. Encrypts network traffic and hides the user's IP address",
              "B. Provides a firewall for the network",
              "C. Monitors network traffic for suspicious activity",
              "D. Routes network traffic through multiple routers"
            ],
            "correctAnswer": "A",
            "feedback": "A VPN encrypts network traffic and hides the user's IP address to protect their privacy and secure their internet connection."
          },
          {
            "question": "Which of the following devices is typically used to isolate and protect a network segment from unauthorized access?",
            "options": [
              "A. Switch",
              "B. Hub",
              "C. Router",
              "D. Firewall"
            ],
            "correctAnswer": "D",
            "feedback": "A firewall is used to protect network segments by controlling the incoming and outgoing network traffic based on predefined security rules."
          },
          {
            "question": "Which of the following is a feature of WPA2 (Wi-Fi Protected Access 2)?",
            "options": [
              "A. Uses a weaker encryption method than WEP",
              "B. Offers stronger security with AES encryption",
              "C. Allows public access without a password",
              "D. Is incompatible with modern wireless standards"
            ],
            "correctAnswer": "B",
            "feedback": "WPA2 uses AES (Advanced Encryption Standard) encryption, offering stronger security for Wi-Fi networks compared to older protocols like WEP."
          },
          {
            "question": "Which of the following is an example of social engineering?",
            "options": [
              "A. Phishing",
              "B. SQL injection",
              "C. Man-in-the-middle attack",
              "D. Buffer overflow"
            ],
            "correctAnswer": "A",
            "feedback": "Phishing is a type of social engineering attack where attackers manipulate individuals into disclosing confidential information."
          },
          {
            "question": "What is the primary function of an IDS (Intrusion Detection System)?",
            "options": [
              "A. To block incoming malicious traffic",
              "B. To monitor network traffic for signs of malicious activity",
              "C. To encrypt network traffic",
              "D. To prevent unauthorized devices from connecting to the network"
            ],
            "correctAnswer": "B",
            "feedback": "An IDS monitors network traffic to detect signs of malicious activity and alerts administrators when suspicious activity is detected."
          },
          {
            "question": "What type of security mechanism is used to verify the authenticity of a device or user on a network?",
            "options": [
              "A. Firewall",
              "B. Authentication",
              "C. Encryption",
              "D. Backup"
            ],
            "correctAnswer": "B",
            "feedback": "Authentication is the process used to verify the identity of a user or device attempting to access the network."
          },
          {
            "question": "Which of the following commands can be used to test network connectivity between two devices?",
            "options": [
              "A. ping",
              "B. traceroute",
              "C. netstat",
              "D. nslookup"
            ],
            "correctAnswer": "A",
            "feedback": "The ping command is used to test the network connectivity between two devices by sending ICMP Echo Request packets."
          },
          {
            "question": "What is the primary purpose of the 'ipconfig' command in Windows?",
            "options": [
              "A. To display the IP configuration details of a computer",
              "B. To manage wireless network settings",
              "C. To test network performance",
              "D. To monitor network traffic"
            ],
            "correctAnswer": "A",
            "feedback": "'ipconfig' is used to display the current IP configuration settings of a device, including IP address, subnet mask, and default gateway."
          },
          {
            "question": "Which of the following tools is used to identify the path packets take through a network?",
            "options": [
              "A. ipconfig",
              "B. netstat",
              "C. traceroute",
              "D. nslookup"
            ],
            "correctAnswer": "C",
            "feedback": "Traceroute is a tool used to trace the route that packets take through the network to reach their destination, showing each hop along the way."
          },
          {
            "question": "Which of the following commands can be used to view active network connections on a device?",
            "options": [
              "A. netstat",
              "B. ping",
              "C. tracert",
              "D. ipconfig"
            ],
            "correctAnswer": "A",
            "feedback": "The 'netstat' command is used to display active network connections, listening ports, and routing tables on a device."
          },
          {
            "question": "Which of the following tools can be used to resolve DNS issues by querying DNS servers for specific records?",
            "options": [
              "A. nslookup",
              "B. tracert",
              "C. ping",
              "D. netstat"
            ],
            "correctAnswer": "A",
            "feedback": "'nslookup' is used to query DNS servers to retrieve domain name system records, helping to troubleshoot DNS resolution issues."
          },
          {
            "question": "What does the 'ipconfig /flushdns' command do?",
            "options": [
              "A. Flushes the local DNS cache",
              "B. Displays IP configuration details",
              "C. Releases the current IP address",
              "D. Tests network connectivity"
            ],
            "correctAnswer": "A",
            "feedback": "'ipconfig /flushdns' is used to clear the local DNS cache, which can resolve issues related to outdated or incorrect DNS records."
          },
          {
            "question": "Which of the following tools can be used to analyze network traffic in real-time?",
            "options": [
              "A. Wireshark",
              "B. ipconfig",
              "C. tracert",
              "D. netstat"
            ],
            "correctAnswer": "A",
            "feedback": "Wireshark is a network protocol analyzer used to capture and analyze network traffic in real-time, helping to troubleshoot and diagnose network issues."
          },
          {
            "question": "Which command can be used to check if a specific port is open on a remote host?",
            "options": [
              "A. netstat",
              "B. telnet",
              "C. tracert",
              "D. nslookup"
            ],
            "correctAnswer": "B",
            "feedback": "The 'telnet' command can be used to connect to a specific port on a remote host to check if the port is open and accepting connections."
          },
          {
            "question": "Which of the following tools helps identify whether a network interface card (NIC) is receiving or transmitting data?",
            "options": [
              "A. netstat",
              "B. Task Manager",
              "C. ipconfig",
              "D. Performance Monitor"
            ],
            "correctAnswer": "D",
            "feedback": "Performance Monitor can be used to track the status of a NIC, including the amount of data being received and transmitted over the network."
          },
          {
            "question": "Which of the following tools is commonly used to test a website’s availability and performance from different locations worldwide?",
            "options": [
              "A. ping",
              "B. Traceroute",
              "C. online website monitoring tools",
              "D. nslookup"
            ],
            "correctAnswer": "C",
            "feedback": "Online website monitoring tools can be used to check the availability and performance of a website from multiple locations around the world."
          },
          {
            "question": "Which of the following is used to detect a duplicate IP address on the network?",
            "options": [
              "A. ping",
              "B. arp",
              "C. netstat",
              "D. ipconfig"
            ],
            "correctAnswer": "B",
            "feedback": "The 'arp' command can be used to detect duplicate IP addresses by comparing the ARP cache of devices on the network."
          },
          {
            "question": "Which of the following protocols is used to secure email communication with encryption and digital signatures?",
            "options": [
              "A. SMTP",
              "B. POP3",
              "C. IMAP",
              "D. S/MIME"
            ],
            "correctAnswer": "D",
            "feedback": "S/MIME (Secure/Multipurpose Internet Mail Extensions) is used to secure email communication with encryption and digital signatures, ensuring confidentiality and integrity."
          },
          {
            "question": "What is the primary function of the 'netstat' command?",
            "options": [
              "A. Display the routing table of the network",
              "B. Show active network connections and open ports",
              "C. Flush the DNS cache",
              "D. Ping a remote host to check connectivity"
            ],
            "correctAnswer": "B",
            "feedback": "'netstat' is used to display active network connections, listening ports, and their current status on a device."
          },
          {
            "question": "Which tool is used to troubleshoot problems with network routing and find the path packets take through the network?",
            "options": [
              "A. netstat",
              "B. traceroute",
              "C. nslookup",
              "D. ipconfig"
            ],
            "correctAnswer": "B",
            "feedback": "Traceroute is used to trace the path packets take through the network, helping to identify routing issues and network bottlenecks."
          }


        
          
         
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
        doc.text("NETWORK ANALYST", pageWidth / 2, pageHeight / 2 + 50, { align: "center", angle: 360 });
    
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
        doc.text("Network Plus Certification", pageWidth / 2, 360, { align: "center" });
    
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
        const curvedText = "NETWORK ANALYST"; // No extra spaces
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


