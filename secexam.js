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
            question:
              "Which protocol is used to securely transmit data over the internet?",
            options: ["A. HTTP", "B. FTP", "C. HTTPS", "D. Telnet"],
            correctAnswer: "C",
            feedback:
              "HTTPS is HTTP with encryption. It ensures that data transmitted over the internet is secure."
          },
          
          {
            question:
              "A company experiences a denial-of-service (DoS) attack that overwhelms its web server, making it inaccessible to users. Which of the following would be the best method to mitigate this type of attack in the future?",
            options: [
              "A. Implementing load balancing",
              "B. Increasing server bandwidth",
              "C. Using a DDoS protection service",
              "D. Installing additional firewalls"
            ],
            correctAnswer: "C",
            feedback:
              "A DDoS protection service is designed to detect and mitigate DoS and DDoS attacks by filtering out malicious traffic before it reaches the server."
          },
          {
            question:
              "After a security breach, an attacker used social engineering tactics to gain access to sensitive data. What is the best way to prevent this type of attack?",
            options: [
              "A. Implementing stricter password policies",
              "B. Conducting regular social engineering tests and training",
              "C. Installing advanced malware protection software",
              "D. Using multi-factor authentication (MFA)"
            ],
            correctAnswer: "B",
            feedback:
              "Regular tests and training help employees recognize and resist social engineering tactics, making it harder for attackers to succeed."
          },
          {
            question:
              "A penetration tester has successfully gained access to your internal network through an unpatched vulnerability in a web application. Which of the following would best prevent this type of attack in the future?",
            options: [
              "A. Regularly updating and patching software",
              "B. Using network segmentation",
              "C. Implementing a web application firewall (WAF)",
              "D. Enforcing strict user access controls"
            ],
            correctAnswer: "A",
            feedback:
              "Keeping software up to date with patches is crucial for mitigating vulnerabilities that attackers can exploit."
          },
          {
            question:
              "Your organization uses a cloud-based email service. Recently, several users reported receiving emails from a known contact that contained malicious links. After investigation, it was found that the contact's email account had been compromised. What should be your first step to protect your organization?",
            options: [
              "A. Block the sender's email address",
              "B. Notify all users to be cautious with emails from the compromised contact",
              "C. Update your antivirus software",
              "D. Change the email provider"
            ],
            correctAnswer: "B",
            feedback:
              "Notifying users to be cautious with emails from the compromised contact helps prevent further incidents."
          },
          {
            question:
              "An employee reports that their mobile device, which contains sensitive company information, has been lost. What should be your first course of action?",
            options: [
              "A. Contact the mobile service provider",
              "B. Wipe the device remotely",
              "C. Change all company passwords",
              "D. Notify the police"
            ],
            correctAnswer: "B",
            feedback:
              "Remotely wiping the device ensures that any sensitive company information on the device is removed, reducing the risk of data loss or compromise."
          },
          {
            question:
              "Your company is moving to a hybrid cloud environment. What is the most important factor to consider when integrating your existing on-premises infrastructure with the cloud?",
            options: [
              "A. Cost of cloud services",
              "B. Data sovereignty and compliance",
              "C. Ease of use for employees",
              "D. Vendor lock-in"
            ],
            correctAnswer: "B",
            feedback:
              "Data sovereignty and compliance are critical when moving to a hybrid cloud environment, as laws and regulations may dictate where data can be stored and how it should be handled."
          },
          {
            question:
              "You are tasked with securing an industrial control system (ICS) in a manufacturing plant. What is the primary security concern in this environment?",
            options: [
              "A. Protecting the system from malware",
              "B. Ensuring system availability",
              "C. Encrypting all data transmitted between devices",
              "D. Implementing strong user authentication"
            ],
            correctAnswer: "B",
            feedback:
              "In an ICS environment, system availability is often the primary concern because any disruption can lead to significant operational and safety issues."
          },
          {
            question:
              "A company wants to improve the security of its physical servers located in a data center. Which of the following should be implemented to prevent unauthorized physical access?",
            options: [
              "A. Biometric access controls",
              "B. Encryption of server data",
              "C. Regular security audits",
              "D. Implementing a demilitarized zone (DMZ)"
            ],
            correctAnswer: "A",
            feedback:
              "Biometric access controls provide a high level of security by requiring a unique physical characteristic, such as a fingerprint, for access."
          },
          {
            question:
              "When designing a secure network, which of the following is the most effective method to prevent unauthorized access to internal resources?",
            options: [
              "A. Implementing a firewall with stateful inspection",
              "B. Using network segmentation with VLANs",
              "C. Installing antivirus software on all endpoints",
              "D. Conducting regular penetration testing"
            ],
            correctAnswer: "B",
            feedback:
              "Network segmentation with VLANs isolates different parts of the network, making it harder for an attacker to move laterally if they gain access to one segment."
          },
          {
            question:
              "A company is deploying a new wireless network for its employees. Which security protocol should be used to ensure the highest level of security?",
            options: ["A. WEP", "B. WPA", "C. WPA2", "D. WPA3"],
            correctAnswer: "D",
            feedback:
              "WPA3 is the latest and most secure wireless encryption protocol, offering stronger encryption and better protection against brute-force attacks compared to WPA2. WEP and WPA are outdated and vulnerable to attacks."
          },
          {
            question:
              "You are tasked with implementing multifactor authentication (MFA) in your organization. Which combination of factors provides the best security?",
            options: [
              "A. Password and security questions",
              "B. Password and biometric authentication",
              "C. Password and email verification",
              "D. Password and CAPTCHA"
            ],
            correctAnswer: "B",
            feedback:
              "Combining something the user knows (password) with something they are (biometric authentication) provides the best security, as it requires both knowledge and a unique physical characteristic. Security questions, email verification, and CAPTCHA are less secure and can be bypassed more easily."
          },
          {
            question:
              "A company is deploying a new VPN solution for remote employees. Which encryption protocol should be used to ensure secure communication over the VPN?",
            options: ["A. PPTP", "B. L2TP/IPsec", "C. SSL/TLS", "D. OpenVPN"],
            correctAnswer: "D",
            feedback:
              "OpenVPN is a secure and flexible VPN solution that uses SSL/TLS for key exchange and can support strong encryption protocols like AES. L2TP/IPsec is also secure but less flexible. PPTP is outdated and insecure, while SSL/TLS is typically used for web traffic encryption rather than full VPN solutions."
          },
          {
            question:
              "To comply with data protection regulations, a company needs to encrypt all sensitive data stored in its databases. Which type of encryption should be used to ensure the data is secure and only accessible to authorized users?",
            options: [
              "A. Symmetric encryption",
              "B. Asymmetric encryption",
              "C. Hashing",
              "D. Steganography"
            ],
            correctAnswer: "A",
            feedback:
              "Symmetric encryption is efficient and suitable for encrypting large amounts of data, like that stored in databases. It ensures that only authorized users with the correct key can access the data. Asymmetric encryption is typically used for smaller data, like key exchange. Hashing is for integrity, not confidentiality, and steganography hides information rather than encrypting it."
          },
          {
            question:
              "An organization is deploying a network access control (NAC) solution to ensure that only compliant devices can connect to the network. What is the primary purpose of NAC?",
            options: [
              "A. To monitor network traffic",
              "B. To prevent unauthorized devices from accessing the network",
              "C. To enforce strong password policies",
              "D. To log user activity on the network"
            ],
            correctAnswer: "B",
            feedback:
              "Network Access Control (NAC) is designed to enforce security policies by allowing only compliant and authorized devices to access the network. It helps prevent unauthorized or non-compliant devices from connecting, thus protecting the network from potential threats."
          },
          {
            question:
              "A company wants to ensure that its critical data is protected even if a storage device is lost or stolen. Which of the following should be implemented?",
            options: [
              "A. RAID",
              "B. Full disk encryption",
              "C. Data masking",
              "D. Regular backups"
            ],
            correctAnswer: "B",
            feedback:
              "Full disk encryption ensures that all data on a storage device is encrypted, making it unreadable if the device is lost or stolen. RAID is for data redundancy, data masking is for hiding specific data elements, and regular backups are for data recovery, not for securing lost devices."
          },
          {
            question:
              "An organization is developing an incident response plan. Which of the following is the first step in the incident response process?",
            options: [
              "A. Containment",
              "B. Eradication",
              "C. Identification",
              "D. Recovery"
            ],
            correctAnswer: "C",
            feedback:
              "Identification is the first step in the incident response process, where the organization detects and determines the nature of the incident. Containment, eradication, and recovery follow once the incident is identified."
          },
          {
            question:
              "During an incident investigation, the security team needs to collect forensic evidence from a compromised system. Which of the following should be collected first?",
            options: [
              "Network logs",
              "Memory (RAM)",
              "Hard drive data",
              "Running processes"
            ],
            correctAnswer: "b",
            feedback:
              "Volatile data, such as memory (RAM), should be collected first because it can be lost if the system is powered down. Network logs, hard drive data, and running processes are less volatile and can be collected later."
          },
          {
            question:
              "Your organization has detected a ransomware attack on one of its servers. What should be your first action to mitigate the impact?",
            options: [
              "Pay the ransom",
              "Shut down the server",
              "Isolate the infected server from the network",
              "Restore the server from backup"
            ],
            correctAnswer: "c",
            feedback:
              "Isolating the infected server prevents the ransomware from spreading to other systems in the network. Shutting down the server might cause loss of valuable forensic data, and paying the ransom is not recommended as it does not guarantee data recovery. Restoring from backup should be done after containment."
          },
          {
            question:
              "A company is setting up a Security Information and Event Management (SIEM) system to monitor its network. What is the primary benefit of using a SIEM system?",
            options: [
              "Automating the patch management process",
              "Providing real-time analysis of security alerts",
              "Encrypting data in transit",
              "Managing user access controls"
            ],
            correctAnswer: "b",
            feedback:
              "A SIEM system collects and analyzes security-related data from various sources in real-time, helping security teams identify and respond to potential threats more quickly. While it can support other security processes, its primary benefit is real-time analysis and alerting."
          },
          {
            question:
              "A company wants to improve the security of its physical servers located in a data center. Which of the following should be implemented to prevent unauthorized physical access?",
            options: [
              "Biometric access controls",
              "Encryption of server data",
              "Regular security audits",
              "Implementing a demilitarized zone (DMZ)"
            ],
            correctAnswer: "a",
            feedback:
              "Biometric access controls provide a high level of security by requiring a unique physical characteristic, such as a fingerprint, for access."
          },
          {
            question:
              "After a cyberattack, a company is conducting a post-incident review. What is the main purpose of this review?",
            options: [
              "To assign blame for the incident",
              "To determine if the incident was resolved correctly",
              "To identify lessons learned and improve future response",
              "To evaluate the financial impact of the incident"
            ],
            correctAnswer: "c",
            feedback:
              "The main purpose of a post-incident review is to learn from the incident and improve the organization's ability to respond to future incidents. It involves analyzing what happened, what was done well, what could be improved, and how to prevent similar incidents in the future."
          },
          {
            question:
              "A company is required to comply with the General Data Protection Regulation (GDPR). Which of the following is a key requirement under GDPR?",
            options: [
              "Encrypting all data stored on company servers",
              "Providing data breach notifications within 72 hours",
              "Using firewalls to protect personal data",
              "Conducting monthly vulnerability assessments"
            ],
            correctAnswer: "b",
            feedback:
              "GDPR requires organizations to notify the relevant authorities of a data breach within 72 hours of becoming aware of it. While encryption and firewalls are good practices, they are not specific requirements under GDPR. Regular vulnerability assessments are also important but not mandated by GDPR."
          },
          {
            question:
              "An organization is conducting a risk assessment. What is the primary goal of this assessment?",
            options: [
              "To identify all potential threats to the organization",
              "To determine the cost of implementing new security controls",
              "To evaluate the effectiveness of current security measures",
              "To quantify the level of risk associated with different assets"
            ],
            correctAnswer: "d",
            feedback:
              "The primary goal of a risk assessment is to quantify the level of risk associated with different assets by evaluating the likelihood and impact of potential threats. This helps the organization prioritize its security efforts. Identifying threats, determining costs, and evaluating current measures are steps in the assessment process."
          },
          {
            question:
              "Your company is drafting a new security policy. Which of the following should be included in the policy to address data retention?",
            options: [
              "The specific duration for which data should be kept",
              "The method for encrypting sensitive data",
              "The procedure for incident response",
              "The process for granting user access"
            ],
            correctAnswer: "a",
            feedback:
              "A data retention policy should specify the duration for which different types of data should be kept to ensure compliance with legal and regulatory requirements. Encrypting data, incident response, and user access are important but belong in other sections of the overall security policy."
          },
          {
            question:
              "A company is implementing a new software application that processes credit card transactions. Which regulation must the company comply with?",
            options: ["HIPAA", "PCI DSS", "SOX", "GDPR"],
            correctAnswer: "b",
            feedback:
              "PCI DSS (Payment Card Industry Data Security Standard) is the regulation that governs the security of credit card transactions. HIPAA is related to healthcare data, SOX to financial reporting, and GDPR to the protection of personal data in the EU."
          },
          {
            question:
              "An organization is concerned about the legal implications of a potential data breach. Which of the following should be implemented to mitigate legal risks?",
            options: [
              "A disaster recovery plan",
              "Regular penetration testing",
              "A comprehensive incident response plan",
              "Cybersecurity insurance"
            ],
            correctAnswer: "d",
            feedback:
              "Cybersecurity insurance can help mitigate the financial and legal risks associated with a data breach by covering costs such as legal fees, fines, and damages. While incident response plans, disaster recovery, and penetration testing are important, they do not directly address legal risks."
          },
          {
            question:
              "Your organization is subject to compliance audits by external regulators. Which of the following practices will help ensure a successful audit?",
            options: [
              "Keeping all security policies confidential",
              "Implementing a continuous monitoring program",
              "Allowing auditors unrestricted access to all systems",
              "Regularly reviewing and updating security documentation"
            ],
            correctAnswer: "d",
            feedback:
              "Keeping security documentation up to date and accurate is crucial for demonstrating compliance during audits. Continuous monitoring is important for ongoing security, but it is the documentation that auditors will review. Confidentiality of security policies is necessary, but it should not prevent compliance. Auditors need access, but it should be controlled and relevant to the audit."
          },
          {
            question:
              "A company is performing a business impact analysis (BIA) as part of its disaster recovery planning. What is the primary purpose of a BIA?",
            options: [
              "To identify critical business functions and the impact of their disruption",
              "To determine the likelihood of different disaster scenarios",
              "To evaluate the effectiveness of existing security controls",
              "To develop a communication plan for crisis situations"
            ],
            correctAnswer: "a",
            feedback:
              "A Business Impact Analysis (BIA) identifies critical business functions and assesses the impact of their disruption on the organization. This helps prioritize recovery efforts and allocate resources appropriately. Likelihood determination, control evaluation, and communication planning are parts of other assessments."
          },
          {
            question:
              "Which of the following is an example of a compensating control in a security environment?",
            options: [
              "Using a VPN when multifactor authentication is not available",
              "Conducting a security awareness training program",
              "Implementing a firewall",
              "Encrypting data at rest"
            ],
            correctAnswer: "a",
            feedback:
              "A compensating control is an alternative control used when the primary control (in this case, multifactor authentication) is not feasible. Using a VPN in this situation provides an additional layer of security. Training, firewalls, and encryption are examples of primary controls."
          },
          {
            question:
              "An organization is defining roles and responsibilities for its security team. What is the best practice for ensuring clear accountability?",
            options: [
              "Assigning multiple roles to each team member",
              "Documenting roles and responsibilities in the security policy",
              "Allowing team members to define their own roles",
              "Rotating roles among team members regularly"
            ],
            correctAnswer: "b",
            feedback:
              "Documenting roles and responsibilities in the security policy ensures that everyone understands their specific duties and who is accountable for what. Assigning multiple roles or rotating them can lead to confusion and lack of accountability. Allowing self-definition of roles may result in gaps or overlaps in responsibilities."
          },
          {
            question:
              "Your company needs to ensure that employees are only accessing resources necessary for their job functions. Which of the following principles should be implemented?",
            options: [
              "Least privilege",
              "Separation of duties",
              "Defense in depth",
              "Role-based access control (RBAC)"
            ],
            correctAnswer: "a",
            feedback:
              "The principle of least privilege ensures that employees have only the access necessary to perform their job functions, reducing the risk of unauthorized access. While RBAC can help implement least privilege, it is the broader principle that should guide access decisions. Separation of duties is about dividing responsibilities, and defense in depth is about multiple layers of security."
          },
          {
            question:
              "A security team is planning to implement multifactor authentication (MFA) across the organization. Which of the following factors is NOT typically used in MFA?",
            options: [
              "Something you know",
              "Something you have",
              "Something you are",
              "Something you say"
            ],
            correctAnswer: "d",
            feedback:
              "Multifactor authentication typically involves three types of factors: something you know (e.g., a password), something you have (e.g., a token), and something you are (e.g., a fingerprint). 'Something you say' is not a common factor in MFA."
          },
          {
            question:
              "During a penetration test, a security consultant successfully gains access to a system using an account with elevated privileges. What should be the next step in the penetration testing process?",
            options: [
              "Eradicate the malicious software from the system",
              "Perform privilege escalation to gain further access",
              "Document the findings and report them to the client",
              "Pivot to other systems using the compromised account"
            ],
            correctAnswer: "c",
            feedback:
              "After gaining access, the next step is to document the findings and report them to the client. The purpose of penetration testing is to identify vulnerabilities, not to cause damage or escalate privileges unnecessarily. Pivoting to other systems and privilege escalation may be part of the testing process, but reporting is essential once significant access has been achieved."
          },
          {
            question:
              "A company wants to ensure that only authorized devices can connect to its wireless network. Which of the following security measures should be implemented?",
            options: [
              "MAC address filtering",
              "WPA2-PSK encryption",
              "Disabling SSID broadcast",
              "Captive portal"
            ],
            correctAnswer: "a",
            feedback:
              "MAC address filtering allows only devices with specific MAC addresses to connect to the network, providing an additional layer of security. While WPA2-PSK encryption secures the data, it doesn't restrict device access. Disabling SSID broadcast hides the network name but doesn't prevent unauthorized access. A captive portal is typically used for guest authentication, not device authorization."
          },
          {
            question:
              "An organization is deploying a new web application. Which of the following practices should be followed to protect the application from SQL injection attacks?",
            options: [
              "Encrypting the database",
              "Using parameterized queries",
              "Implementing a WAF (Web Application Firewall)",
              "Conducting input validation"
            ],
            correctAnswer: "b",
            feedback:
              "Parameterized queries prevent SQL injection by ensuring that user input is treated as data rather than executable code. Encrypting the database protects stored data but doesn't prevent SQL injection. A WAF can help detect and block attacks but isn't as effective as secure coding practices. Input validation is important but alone is not sufficient to prevent SQL injection."
          },
          {
            question:
              "During an incident investigation, the security team needs to collect forensic evidence from a compromised system. Which of the following should be collected first?",
            options: [
              "A. Network logs",
              "B. Memory (RAM)",
              "C. Hard drive data",
              "D. Running processes"
            ],
            correctAnswer: "B",
            feedback:
              "Volatile data, such as memory (RAM), should be collected first because it can be lost if the system is powered down. Network logs, hard drive data, and running processes are less volatile and can be collected later."
          },
          {
            question:
              "Your organization has detected a ransomware attack on one of its servers. What should be your first action to mitigate the impact?",
            options: [
              "A. Pay the ransom",
              "B. Shut down the server",
              "C. Isolate the infected server from the network",
              "D. Restore the server from backup"
            ],
            correctAnswer: "C",
            feedback:
              "Isolating the infected server prevents the ransomware from spreading to other systems in the network. Shutting down the server might cause loss of valuable forensic data, and paying the ransom is not recommended as it does not guarantee data recovery. Restoring from backup should be done after containment."
          },
          {
            question:
              "A company is setting up a Security Information and Event Management (SIEM) system to monitor its network. What is the primary benefit of using a SIEM system?",
            options: [
              "A. Automating the patch management process",
              "B. Providing real-time analysis of security alerts",
              "C. Encrypting data in transit",
              "D. Managing user access controls"
            ],
            correctAnswer: "B",
            feedback:
              "A SIEM system collects and analyzes security-related data from various sources in real-time, helping security teams identify and respond to potential threats more quickly. While it can support other security processes, its primary benefit is real-time analysis and alerting."
          },
          {
            question:
              "A company wants to improve the security of its physical servers located in a data center. Which of the following should be implemented to prevent unauthorized physical access?",
            options: [
              "A. Biometric access controls",
              "B. Encryption of server data",
              "C. Regular security audits",
              "D. Implementing a demilitarized zone (DMZ)"
            ],
            correctAnswer: "A",
            feedback:
              "Biometric access controls provide a high level of security by requiring a unique physical characteristic, such as a fingerprint, for access."
          },
          {
            question:
              "After a cyberattack, a company is conducting a post-incident review. What is the main purpose of this review?",
            options: [
              "A. To assign blame for the incident",
              "B. To determine if the incident was resolved correctly",
              "C. To identify lessons learned and improve future response",
              "D. To evaluate the financial impact of the incident"
            ],
            correctAnswer: "C",
            feedback:
              "The main purpose of a post-incident review is to learn from the incident and improve the organization's ability to respond to future incidents. It involves analyzing what happened, what was done well, what could be improved, and how to prevent similar incidents in the future."
          },
          {
            question:
              "A company is required to comply with the General Data Protection Regulation (GDPR). Which of the following is a key requirement under GDPR?",
            options: [
              "A. Encrypting all data stored on company servers",
              "B. Providing data breach notifications within 72 hours",
              "C. Using firewalls to protect personal data",
              "D. Conducting monthly vulnerability assessments"
            ],
            correctAnswer: "B",
            feedback:
              "GDPR requires organizations to notify the relevant authorities of a data breach within 72 hours of becoming aware of it. While encryption and firewalls are good practices, they are not specific requirements under GDPR. Regular vulnerability assessments are also important but not mandated by GDPR."
          },
          {
            question:
              "An organization is conducting a risk assessment. What is the primary goal of this assessment?",
            options: [
              "A. To identify all potential threats to the organization",
              "B. To determine the cost of implementing new security controls",
              "C. To evaluate the effectiveness of current security measures",
              "D. To quantify the level of risk associated with different assets"
            ],
            correctAnswer: "D",
            feedback:
              "The primary goal of a risk assessment is to quantify the level of risk associated with different assets by evaluating the likelihood and impact of potential threats. This helps the organization prioritize its security efforts. Identifying threats, determining costs, and evaluating current measures are steps in the assessment process."
          },
          {
            question:
              "Your company is drafting a new security policy. Which of the following should be included in the policy to address data retention?",
            options: [
              "A. The specific duration for which data should be kept",
              "B. The method for encrypting sensitive data",
              "C. The procedure for incident response",
              "D. The process for granting user access"
            ],
            correctAnswer: "A",
            feedback:
              "A data retention policy should specify the duration for which different types of data should be kept to ensure compliance with legal and regulatory requirements. Encrypting data, incident response, and user access are important but belong in other sections of the overall security policy."
          },
          {
            question:
              "A company is implementing a new software application that processes credit card transactions. Which regulation must the company comply with?",
            options: ["A. HIPAA", "B. PCI DSS", "C. SOX", "D. GDPR"],
            correctAnswer: "B",
            feedback:
              "PCI DSS (Payment Card Industry Data Security Standard) is the regulation that governs the security of credit card transactions. HIPAA is related to healthcare data, SOX to financial reporting, and GDPR to the protection of personal data in the EU."
          },
          {
            question:
              "An organization is concerned about the legal implications of a potential data breach. Which of the following should be implemented to mitigate legal risks?",
            options: [
              "A. A disaster recovery plan",
              "B. Regular penetration testing",
              "C. A comprehensive incident response plan",
              "D. Cybersecurity insurance"
            ],
            correctAnswer: "D",
            feedback:
              "Cybersecurity insurance can help mitigate the financial and legal risks associated with a data breach by covering costs such as legal fees, fines, and damages. While incident response plans, disaster recovery, and penetration testing are important, they do not directly address legal risks."
          },
          {
            question:
              "Your organization is subject to compliance audits by external regulators. Which of the following practices will help ensure a successful audit?",
            options: [
              "A. Keeping all security policies confidential",
              "B. Implementing a continuous monitoring program",
              "C. Allowing auditors unrestricted access to all systems",
              "D. Regularly reviewing and updating security documentation"
            ],
            correctAnswer: "D",
            feedback:
              "Keeping security documentation up to date and accurate is crucial for demonstrating compliance during audits. Continuous monitoring is important for ongoing security, but it is the documentation that auditors will review. Confidentiality of security policies is necessary, but it should not prevent compliance. Auditors need access, but it should be controlled and relevant to the audit."
          },
          {
            question:
              "A company is performing a business impact analysis (BIA) as part of its disaster recovery planning. What is the primary purpose of a BIA?",
            options: [
              "A. To identify critical business functions and the impact of their disruption",
              "B. To determine the likelihood of different disaster scenarios",
              "C. To evaluate the effectiveness of existing security controls",
              "D. To develop a communication plan for crisis situations"
            ],
            correctAnswer: "A",
            feedback:
              "A Business Impact Analysis (BIA) identifies critical business functions and assesses the impact of their disruption on the organization. This helps prioritize recovery efforts and allocate resources appropriately. Likelihood determination, control evaluation, and communication planning are parts of other assessments."
          },
          {
            question:
              "Which of the following is an example of a compensating control in a security environment?",
            options: [
              "A. Using a VPN when multifactor authentication is not available",
              "B. Conducting a security awareness training program",
              "C. Implementing a firewall",
              "D. Encrypting data at rest"
            ],
            correctAnswer: "A",
            feedback:
              "A compensating control is an alternative control used when the primary control (in this case, multifactor authentication) is not feasible. Using a VPN in this situation provides an additional layer of security. Training, firewalls, and encryption are examples of primary controls."
          },
          {
            question:
              "An organization is defining roles and responsibilities for its security team. What is the best practice for ensuring clear accountability?",
            options: [
              "A. Assigning multiple roles to each team member",
              "B. Documenting roles and responsibilities in the security policy",
              "C. Allowing team members to define their own roles",
              "D. Rotating roles among team members regularly"
            ],
            correctAnswer: "B",
            feedback:
              "Documenting roles and responsibilities in the security policy ensures that everyone understands their specific duties and who is accountable for what. Assigning multiple roles or rotating them can lead to confusion and lack of accountability. Allowing self-definition of roles may result in gaps or overlaps in responsibilities."
          },
          {
            question:
              "Your company needs to ensure that employees are only accessing resources necessary for their job functions. Which of the following principles should be implemented?",
            options: [
              "A. Least privilege",
              "B. Separation of duties",
              "C. Defense in depth",
              "D. Role-based access control (RBAC)"
            ],
            correctAnswer: "A",
            feedback:
              "The principle of least privilege ensures that employees have only the access necessary to perform their job functions, reducing the risk of unauthorized access. While RBAC can help implement least privilege, it is the broader principle that should guide access decisions. Separation of duties is about dividing responsibilities, and defense in depth is about multiple layers of security."
          },
          {
            question:
              "A security team is planning to implement multifactor authentication (MFA) across the organization. Which of the following factors is NOT typically used in MFA?",
            options: [
              "A. Something you know",
              "B. Something you have",
              "C. Something you are",
              "D. Something you say"
            ],
            correctAnswer: "D",
            feedback:
              "Multifactor authentication typically involves three types of factors: something you know (e.g., a password), something you have (e.g., a token), and something you are (e.g., a fingerprint). 'Something you say' is not a common factor in MFA."
          },
          {
            question:
              "During a penetration test, a security consultant successfully gains access to a system using an account with elevated privileges. What should be the next step in the penetration testing process?",
            options: [
              "A. Eradicate the malicious software from the system",
              "B. Perform privilege escalation to gain further access",
              "C. Document the findings and report them to the client",
              "D. Pivot to other systems using the compromised account"
            ],
            correctAnswer: "C",
            feedback:
              "After gaining access, the next step is to document the findings and report them to the client. The purpose of penetration testing is to identify vulnerabilities, not to cause damage or escalate privileges unnecessarily. Pivoting to other systems and privilege escalation may be part of the testing process, but reporting is essential once significant access has been achieved."
          },
          {
            question:
              "A company wants to ensure that only authorized devices can connect to its wireless network. Which of the following security measures should be implemented?",
            options: [
              "A. MAC address filtering",
              "B. WPA2-PSK encryption",
              "C. Disabling SSID broadcast",
              "D. Captive portal"
            ],
            correctAnswer: "A",
            feedback:
              "MAC address filtering allows only devices with specific MAC addresses to connect to the network, providing an additional layer of security. While WPA2-PSK encryption secures the data, it doesn't restrict device access. Disabling SSID broadcast hides the network name but doesn't prevent unauthorized access. A captive portal is typically used for guest authentication, not device authorization."
          },
          {
            question:
              "An organization is deploying a new web application. Which of the following practices should be followed to protect the application from SQL injection attacks?",
            options: [
              "A. Encrypting the database",
              "B. Using parameterized queries",
              "C. Implementing a WAF (Web Application Firewall)",
              "D. Conducting input validation"
            ],
            correctAnswer: "B",
            feedback:
              "Parameterized queries prevent SQL injection by ensuring that user input is treated as data rather than executable code. Encrypting the database protects stored data but doesn't prevent SQL injection. A WAF can help detect and block attacks but isn't as effective as secure coding practices. Input validation is important but alone is not sufficient to prevent SQL injection."
          },
          {
            question:
              "Which of the following is the best way to ensure that backups can be restored in the event of a disaster?",
            options: [
              "A. Encrypting backup data",
              "B. Performing regular backup tests",
              "C. Storing backups offsite",
              "D. Implementing differential backups"
            ],
            correctAnswer: "B",
            feedback:
              "Regular backup tests ensure that backups can be successfully restored when needed. Encryption, offsite storage, and differential backups are important for protecting and storing data but do not confirm the ability to restore data. Testing is the only way to verify that the backup process is working as intended."
          },
          {
            question:
              "A security team is configuring a SIEM system to correlate data from multiple sources. Which of the following types of data would be most useful for detecting a potential insider threat?",
            options: [
              "A. Firewall logs",
              "B. User access logs",
              "C. Antivirus logs",
              "D. Network traffic logs"
            ],
            correctAnswer: "B",
            feedback:
              "User access logs provide detailed information about who accessed what resources and when, which is crucial for detecting potential insider threats. Firewall logs, antivirus logs, and network traffic logs are also valuable but are less focused on individual user behavior and more on network and system activity."
          },
          {
            question:
              "Which of the following strategies is most effective for mitigating the risk of phishing attacks within an organization?",
            options: [
              "A. Implementing strong passwords",
              "B. Using email filtering solutions",
              "C. Conducting regular security awareness training",
              "D. Enforcing a strict acceptable use policy"
            ],
            correctAnswer: "C",
            feedback:
              "Regular security awareness training helps employees recognize and avoid phishing attempts, which is the most effective way to mitigate phishing risks. Email filtering solutions can help reduce phishing emails but won't catch everything. Strong passwords and acceptable use policies are important but do not directly address phishing."
          },
          {
            question:
              "A company is concerned about potential legal issues related to employees accessing inappropriate websites. Which of the following measures should be implemented?",
            options: [
              "A. Content filtering",
              "B. Data loss prevention (DLP)",
              "C. Network segmentation",
              "D. Multifactor authentication"
            ],
            correctAnswer: "A",
            feedback:
              "Content filtering blocks access to inappropriate websites, helping the company avoid legal issues and maintain a professional work environment. DLP, network segmentation, and MFA are important security measures but do not specifically address the problem of inappropriate website access."
          },
          {
            question:
              "Your organization wants to ensure that sensitive data sent over email is protected. Which of the following technologies should be used?",
            options: [
              "A. Email archiving",
              "B. Digital signatures",
              "C. Encryption",
              "D. Data masking"
            ],
            correctAnswer: "C",
            feedback:
              "Encryption protects sensitive data by converting it into a secure format that can only be read by authorized recipients. Digital signatures ensure authenticity but do not protect data confidentiality. Email archiving stores emails for compliance purposes, and data masking hides data in specific contexts, but neither provides the necessary protection for data in transit."
          },
          {
            question:
              "During a security audit, it was discovered that several accounts in the organization have not been used for more than a year. What should be done with these accounts?",
            options: [
              "A. Change the passwords",
              "B. Disable the accounts",
              "C. Monitor the accounts",
              "D. Delete the accounts"
            ],
            correctAnswer: "B",
            feedback:
              "Disabling unused accounts reduces the risk of unauthorized access while preserving the account data for potential future use or investigation. Deleting accounts might result in the loss of important data, and simply changing passwords or monitoring accounts does not address the risk of unused credentials being exploited."
          },
          {
            question:
              "Which of the following is the best method to prevent unauthorized physical access to a data center?",
            options: [
              "A. Installing biometric scanners",
              "B. Using mantraps",
              "C. Implementing a security guard patrol",
              "D. Requiring security badges"
            ],
            correctAnswer: "B",
            feedback:
              "Mantraps are secure areas with two interlocking doors that require authentication to prevent unauthorized individuals from entering a data center. Biometric scanners, security badges, and guard patrols are also important, but mantraps offer a more controlled and secure way to prevent unauthorized access."
          },
          {
            question:
              "An organization needs to protect its network from attacks that exploit vulnerabilities in the software. Which of the following is the most effective way to address this risk?",
            options: [
              "A. Regularly updating and patching software",
              "B. Using an intrusion detection system (IDS)",
              "C. Implementing a firewall",
              "D. Conducting regular security audits"
            ],
            correctAnswer: "A",
            feedback:
              "Regularly updating and patching software is the most effective way to address vulnerabilities, as it ensures that known security flaws are fixed. An IDS can detect attacks, a firewall can block unauthorized access, and security audits can identify issues, but none are as directly effective in addressing software vulnerabilities as patching."
          },
          {
            question:
              "Which of the following access control models is most appropriate for a highly classified government system?",
            options: [
              "A. Discretionary Access Control (DAC)",
              "B. Role-Based Access Control (RBAC)",
              "C. Mandatory Access Control (MAC)",
              "D. Attribute-Based Access Control (ABAC)"
            ],
            correctAnswer: "C",
            feedback:
              "Mandatory Access Control (MAC) is the most appropriate model for highly classified systems, as it enforces strict access controls based on security clearance levels. DAC allows users to control access to their own resources, RBAC assigns access based on roles, and ABAC uses attributes to define access, but MAC provides the highest level of control."
          },
          {
            question:
              "A company is planning to implement a disaster recovery plan (DRP). Which of the following should be the first step in developing the plan?",
            options: [
              "A. Conducting a business impact analysis (BIA)",
              "B. Identifying critical systems and data",
              "C. Establishing recovery time objectives (RTOs)",
              "D. Testing the disaster recovery plan"
            ],
            correctAnswer: "A",
            feedback:
              "The first step in developing a disaster recovery plan is conducting a business impact analysis (BIA) to identify critical systems and assess the impact of their disruption. Identifying critical systems, establishing RTOs, and testing the plan are important steps that follow the BIA."
          },
          {
            question:
              "Your organization is concerned about the potential loss of sensitive customer data. Which of the following controls would be most effective in preventing data breaches?",
            options: [
              "A. Encrypting data at rest",
              "B. Implementing an intrusion prevention system (IPS)",
              "C. Enforcing strict password policies",
              "D. Conducting regular vulnerability assessments"
            ],
            correctAnswer: "A",
            feedback:
              "Encrypting data at rest protects sensitive information from being accessed by unauthorized individuals, even if the data is stolen. An IPS helps prevent attacks, password policies ensure secure access, and vulnerability assessments identify potential weaknesses, but encryption provides direct protection against data breaches."
          },
          {
            question:
              "A network administrator notices an unusual spike in traffic from a single IP address targeting the company's web server. Which of the following is the most likely type of attack?",
            options: [
              "A. Man-in-the-middle attack",
              "B. Denial-of-service attack",
              "C. Phishing attack",
              "D. SQL injection"
            ],
            correctAnswer: "B",
            feedback:
              "A sudden increase in traffic from a single IP address is characteristic of a denial-of-service (DoS) attack, where the attacker tries to overwhelm the server with requests, causing it to become unavailable. Man-in-the-middle, phishing, and SQL injection attacks do not typically involve traffic spikes."
          },
          {
            question:
              "Which of the following cryptographic techniques is used to verify the integrity and authenticity of a message?",
            options: [
              "A. Symmetric encryption",
              "B. Asymmetric encryption",
              "C. Hashing",
              "D. Digital signature"
            ],
            correctAnswer: "D",
            feedback:
              "A digital signature provides both integrity and authenticity by using a combination of hashing and asymmetric encryption. It ensures that the message has not been altered and verifies the sender's identity. Symmetric encryption secures the data but does not provide authenticity, while hashing alone ensures integrity but not authenticity."
          },
          {
            question:
              "An organization wants to ensure that their web applications are protected against cross-site scripting (XSS) attacks. Which of the following practices should they implement?",
            options: [
              "A. Input validation",
              "B. Using HTTPS",
              "C. SQL injection prevention",
              "D. Encrypting cookies"
            ],
            correctAnswer: "A",
            feedback:
              "Input validation is crucial for preventing XSS attacks, as it ensures that malicious scripts are not executed in the user's browser. Using HTTPS encrypts data in transit but does not protect against XSS. SQL injection prevention is related to database security, and encrypting cookies protects session data but not against XSS."
          },
          {
            question:
              "Which of the following technologies would be most effective in preventing an attacker from reading or modifying data sent between two systems over an untrusted network?",
            options: ["A. IPSec", "B. RADIUS", "C. VLAN", "D. NAT"],
            correctAnswer: "A",
            feedback:
              "IPSec provides secure communication over an untrusted network by encrypting and authenticating IP packets. RADIUS is a protocol for authentication, VLANs separate network traffic, and NAT translates IP addresses, but none of these specifically provide data encryption and integrity like IPSec."
          },
          {
            question:
              "Which of the following best describes the purpose of a honeypot in network security?",
            options: [
              "A. To monitor network traffic for malicious activity",
              "B. To detect and deflect potential cyberattacks",
              "C. To act as a decoy to attract attackers",
              "D. To isolate infected systems from the network"
            ],
            correctAnswer: "C",
            feedback:
              "A honeypot is a decoy system designed to attract attackers, allowing security teams to observe and analyze their behavior without risking real systems. Monitoring network traffic, detecting attacks, and isolating infected systems are important, but the primary role of a honeypot is to lure attackers."
          },
          {
            question:
              "An organization is developing an incident response plan. Which of the following phases should occur first in the incident response process?",
            options: [
              "A. Containment",
              "B. Eradication",
              "C. Recovery",
              "D. Identification"
            ],
            correctAnswer: "D",
            feedback:
              "The first phase in the incident response process is identification, where the organization detects and confirms the presence of an incident. Containment, eradication, and recovery follow after the incident has been identified and assessed."
          },
          {
            question:
              "A security administrator wants to prevent unauthorized users from accessing the organization's wireless network. Which of the following is the most effective method?",
            options: [
              "A. Disabling SSID broadcast",
              "B. Implementing WPA3 encryption",
              "C. Using MAC address filtering",
              "D. Setting up a captive portal"
            ],
            correctAnswer: "B",
            feedback:
              "WPA3 encryption provides the most secure method for protecting a wireless network by ensuring that only authorized users can access the network. Disabling SSID broadcast hides the network name but does not prevent access. MAC address filtering can be bypassed, and a captive portal is more suited for guest access."
          },
          {
            question:
              "A user reports that they cannot access a specific website but can access other sites. Upon investigation, it is found that the website's certificate has been revoked. Which of the following would be the best explanation for this issue?",
            options: [
              "A. The user's browser does not support the website's encryption level",
              "B. The DNS server is not resolving the website's IP address",
              "C. The website's certificate is expired",
              "D. The certificate was deemed untrustworthy by the Certificate Authority (CA)"
            ],
            correctAnswer: "D",
            feedback:
              "A revoked certificate means that the Certificate Authority (CA) has determined that the certificate is no longer trustworthy, possibly due to a security breach or compromise. An expired certificate would cause a different error, and issues with DNS or browser support would not result in a certificate revocation error."
          },
          {
            question:
              "Which of the following tools would be most appropriate for identifying vulnerabilities on a server?",
            options: [
              "A. Packet sniffer",
              "B. Port scanner",
              "C. Vulnerability scanner",
              "D. Intrusion detection system (IDS)"
            ],
            correctAnswer: "C",
            feedback:
              "A vulnerability scanner is specifically designed to identify security weaknesses and vulnerabilities in a system or network. A packet sniffer analyzes network traffic, a port scanner identifies open ports, and an IDS detects potential security incidents, but none of these are as focused on vulnerability identification as a vulnerability scanner."
          },
          {
            question:
              "An organization needs to secure data at rest on laptops used by traveling employees. Which of the following would be the best solution?",
            options: [
              "A. Disk encryption",
              "B. VPN",
              "C. Network segmentation",
              "D. Secure boot"
            ],
            correctAnswer: "A",
            feedback:
              "Disk encryption protects data at rest by encrypting the entire disk, making it unreadable to unauthorized users if the laptop is lost or stolen. A VPN protects data in transit, network segmentation separates network traffic, and secure boot ensures the system starts securely, but disk encryption is the most effective solution for data at rest."
          },
          {
            question:
              "A network administrator discovers that users can access unauthorized websites even though the organization's web filtering solution is in place. Which of the following is the most likely cause?",
            options: [
              "A. Users are using a VPN",
              "B. The firewall is misconfigured",
              "C. DNS poisoning is occurring",
              "D. The proxy server is offline"
            ],
            correctAnswer: "A",
            feedback:
              "If users are using a VPN, their web traffic may be bypassing the organization's web filtering solution, allowing access to unauthorized websites. A misconfigured firewall, DNS poisoning, or an offline proxy server could also cause issues, but a VPN is the most likely way to circumvent web filtering."
          },
          {
            question:
              "Which of the following types of attacks involves an attacker attempting to guess a user's password by trying all possible combinations of characters?",
            options: [
              "A. Phishing",
              "B. Dictionary attack",
              "C. Brute-force attack",
              "D. Rainbow table attack"
            ],
            correctAnswer: "C",
            feedback:
              "A brute-force attack involves trying all possible combinations of characters to guess a password. A dictionary attack uses a predefined list of words, a rainbow table attack involves precomputed hash values, and phishing involves tricking a user into revealing their password."
          },
          {
            question:
              "An organization wants to ensure that employees cannot use removable media devices such as USB drives on company computers. Which of the following should be implemented?",
            options: [
              "A. Data Loss Prevention (DLP)",
              "B. Full disk encryption",
              "C. Endpoint security software",
              "D. Group Policy"
            ],
            correctAnswer: "D",
            feedback:
              "Group Policy in Windows allows administrators to enforce restrictions on the use of removable media devices, such as disabling USB ports. DLP monitors and controls data flow, full disk encryption secures data at rest, and endpoint security software protects devices, but Group Policy is the best option for controlling USB access."
          },
          {
            question:
              "Which of the following best describes a zero-day vulnerability?",
            options: [
              "A. A vulnerability that has been publicly disclosed but not yet patched",
              "B. A vulnerability that is exploited by insiders within an organization",
              "C. A vulnerability that has been known and exploited for a long time",
              "D. A vulnerability that is found and patched on the same day"
            ],
            correctAnswer: "A",
            feedback:
              "A zero-day vulnerability is one that has been publicly disclosed but has not yet been patched, leaving systems exposed to potential attacks. It is not specific to insider threats, long-known vulnerabilities, or same-day patching."
          },
          {
            question:
              "A security administrator needs to secure the connection between two remote offices over the public internet. Which of the following technologies should be used?",
            options: ["A. SSL/TLS", "B. VPN", "C. IPSec", "D. MPLS"],
            correctAnswer: "B",
            feedback:
              "A VPN (Virtual Private Network) provides a secure, encrypted connection over the public internet, allowing two remote offices to communicate securely. IPSec is a suite of protocols that can be used within a VPN, while SSL/TLS secures web traffic, and MPLS is a private networking technology that does not encrypt traffic."
          },
          {
            question:
              "An attacker is able to guess a user's password after obtaining a list of hashed passwords and using a precomputed table of hashes. Which type of attack is being described?",
            options: [
              "A. Brute-force attack",
              "B. Dictionary attack",
              "C. Rainbow table attack",
              "D. Replay attack"
            ],
            correctAnswer: "C",
            feedback:
              "A rainbow table attack involves using a precomputed table of hash values to quickly match a known hash to a plaintext password. Brute-force and dictionary attacks involve guessing passwords without precomputed hashes, while a replay attack involves reusing intercepted data."
          },
          {
            question:
              "A company wants to ensure that if one of its cloud providers fails, its data and applications are still available through another provider. Which of the following strategies should the company implement?",
            options: [
              "A. Redundant ISP connections",
              "B. Hybrid cloud",
              "C. Multi-cloud",
              "D. Cloud bursting"
            ],
            correctAnswer: "C",
            feedback:
              "A multi-cloud strategy involves using multiple cloud service providers to ensure redundancy and availability. If one provider fails, the company can switch to another. A hybrid cloud combines private and public clouds, cloud bursting scales resources, and redundant ISP connections do not address provider failure."
          },
          {
            question:
              "A system administrator is tasked with setting up user access to a shared folder that contains sensitive financial data. The administrator wants to ensure that only authorized personnel can access this folder. Which of the following methods would best achieve this goal?",
            options: [
              "A. NTFS permissions",
              "B. Group Policy",
              "C. Shared folder permissions",
              "D. File encryption"
            ],
            correctAnswer: "A",
            feedback:
              "NTFS (New Technology File System) permissions allow the administrator to set granular access controls on files and folders, ensuring that only authorized users have the necessary permissions (such as read, write, or execute) to access the sensitive financial data. While Group Policy and shared folder permissions also provide control, NTFS permissions are more granular. File encryption protects data but does not manage user access."
          },
          {
            question:
              "During a routine audit, a security analyst discovers that users have been installing unauthorized software on their workstations, leading to potential security risks. What should the organization implement to prevent this?",
            options: [
              "A. Application whitelisting",
              "B. Endpoint detection and response (EDR)",
              "C. Anti-malware software",
              "D. Security Information and Event Management (SIEM)"
            ],
            correctAnswer: "A",
            feedback:
              "Application whitelisting allows only approved software to be installed and run on workstations, preventing unauthorized software installations. EDR monitors for suspicious activities, anti-malware software protects against malware, and SIEM collects and analyzes security event data, but none directly prevent unauthorized installations like whitelisting does."
          },
          {
            question:
              "An attacker exploits a vulnerability in an application to insert malicious code that executes when a user views the application in their browser. What type of attack has occurred?",
            options: [
              "A. Cross-site scripting (XSS)",
              "B. Cross-site request forgery (CSRF)",
              "C. SQL injection",
              "D. Buffer overflow"
            ],
            correctAnswer: "A",
            feedback:
              "In a cross-site scripting (XSS) attack, an attacker injects malicious scripts into a web application that executes in the user’s browser. This type of attack typically targets user inputs or data displayed on the web page. CSRF, SQL injection, and buffer overflow are different types of attacks with distinct vectors and targets."
          },
          {
            question:
              "Which of the following controls would be most effective in preventing a user from accessing the corporate network using outdated and potentially vulnerable software?",
            options: [
              "A. Patch management",
              "B. Role-based access control (RBAC)",
              "C. Data Loss Prevention (DLP)",
              "D. Endpoint management"
            ],
            correctAnswer: "D",
            feedback:
              "Endpoint management ensures that all devices accessing the network meet specific security criteria, such as running up-to-date software and patches. Patch management focuses on updating software, RBAC controls access based on roles, and DLP prevents data leakage, but endpoint management directly enforces compliance with security policies."
          },
          {
            question:
              "A security administrator wants to ensure that the organization’s security policies are being followed and that employees are aware of them. Which of the following actions would best achieve this goal?",
            options: [
              "A. Conducting regular security training sessions",
              "B. Implementing multi-factor authentication (MFA)",
              "C. Installing an Intrusion Prevention System (IPS)",
              "D. Using biometrics for authentication"
            ],
            correctAnswer: "A",
            feedback:
              "Regular security training sessions ensure that employees are aware of and understand the organization’s security policies, promoting compliance and reducing the risk of security incidents. MFA, IPS, and biometrics enhance security but do not address employee awareness and policy adherence."
          },
          {
            question:
              "Which of the following attacks can be mitigated by implementing DNSSEC (Domain Name System Security Extensions)?",
            options: [
              "A. Man-in-the-middle attack",
              "B. DNS poisoning",
              "C. Distributed denial-of-service (DDoS) attack",
              "D. SQL injection"
            ],
            correctAnswer: "B",
            feedback:
              "DNSSEC helps prevent DNS poisoning (cache poisoning) attacks by ensuring that DNS responses are validated using digital signatures, protecting against malicious redirection. DNSSEC does not specifically address man-in-the-middle, DDoS, or SQL injection attacks."
          },
          {
            question:
              "A network administrator wants to ensure that all devices on the corporate network have the latest security patches installed. Which of the following technologies should be used?",
            options: [
              "A. Patch management system",
              "B. Network access control (NAC)",
              "C. Vulnerability scanner",
              "D. Security Information and Event Management (SIEM)"
            ],
            correctAnswer: "A",
            feedback:
              "A patch management system automates the process of deploying security patches and updates to all devices on the network, ensuring vulnerabilities are addressed promptly. NAC controls device access based on compliance, a vulnerability scanner identifies weaknesses, and SIEM aggregates and analyzes security data."
          },
          {
            question:
              "Which of the following is the best method for securely transmitting sensitive information over an untrusted network?",
            options: [
              "A. Secure Sockets Layer (SSL)",
              "B. Transport Layer Security (TLS)",
              "C. Simple Mail Transfer Protocol (SMTP)",
              "D. File Transfer Protocol (FTP)"
            ],
            correctAnswer: "B",
            feedback:
              "Transport Layer Security (TLS) is the most secure method for transmitting sensitive information over an untrusted network, providing encryption, authentication, and data integrity. SSL is outdated, SMTP and FTP are not secure by default and require additional measures for encryption."
          },
          {
            question:
              "An organization uses a VPN to allow remote employees to securely access the corporate network. Which of the following encryption protocols is most commonly used to secure VPN connections?",
            options: [
              "A. IPsec",
              "B. Secure Shell (SSH)",
              "C. Pretty Good Privacy (PGP)",
              "D. Wired Equivalent Privacy (WEP)"
            ],
            correctAnswer: "A",
            feedback:
              "IPsec (Internet Protocol Security) is the most commonly used encryption protocol for securing VPN connections, providing confidentiality, integrity, and authentication. SSH secures remote command-line access, PGP is for email encryption, and WEP is outdated for wireless networks."
          },
          {
            question:
              "A company wants to ensure that all data on its mobile devices can be remotely erased if the devices are lost or stolen. Which of the following technologies would best accomplish this?",
            options: [
              "A. Mobile Device Management (MDM)",
              "B. Full disk encryption",
              "C. Remote wipe",
              "D. Biometrics"
            ],
            correctAnswer: "A",
            feedback:
              "Mobile Device Management (MDM) allows remote management of mobile devices, including the capability to perform a remote wipe if a device is lost or stolen. Full disk encryption protects data at rest, remote wipe is a feature of MDM, and biometrics secure device access."
          },
          {
            question:
              "Which of the following scenarios would benefit most from using a jump box for administrative tasks?",
            options: [
              "A. Accessing a public cloud environment",
              "B. Managing a highly sensitive internal network",
              "C. Performing routine desktop support",
              "D. Accessing a content management system"
            ],
            correctAnswer: "B",
            feedback:
              "A jump box is a secure, controlled environment used for administrative access to sensitive networks, providing an additional layer of security. It is most beneficial for managing highly sensitive internal networks. Public cloud, desktop support, and content management do not typically require a jump box."
          },
          {
            question:
              "A company implements a policy requiring the use of a hardware security module (HSM) for cryptographic operations. What primary benefit does an HSM provide?",
            options: [
              "A. High availability",
              "B. Hardware-based key management",
              "C. Enhanced data compression",
              "D. Multi-factor authentication"
            ],
            correctAnswer: "B",
            feedback:
              "A Hardware Security Module (HSM) provides secure, hardware-based key management, including key generation, storage, and encryption/decryption operations. High availability, data compression, and multi-factor authentication are unrelated to the primary function of an HSM."
          },
          {
            question:
              "An attacker successfully gained access to a user’s email account by guessing the password. Which of the following controls could have prevented this attack?",
            options: [
              "A. Password complexity policy",
              "B. Account lockout policy",
              "C. Email encryption",
              "D. Data Loss Prevention (DLP)"
            ],
            correctAnswer: "B",
            feedback:
              "An account lockout policy prevents unauthorized access by locking an account after a specified number of failed login attempts, stopping brute-force attacks. Password complexity helps make passwords harder to guess but does not prevent repeated attempts like account lockout. Email encryption and DLP do not address authentication security."
          },
          {
            question:
              "Which of the following strategies would be most effective in reducing the risk of phishing attacks?",
            options: [
              "A. Implementing email filtering",
              "B. Using strong passwords",
              "C. Disabling external USB ports",
              "D. Conducting regular data backups"
            ],
            correctAnswer: "A",
            feedback:
              "Email filtering effectively reduces the risk of phishing attacks by blocking suspicious emails before they reach users. Strong passwords, disabling USB ports, and data backups are important but do not directly address phishing."
          },
          {
            question:
              "Which of the following would be the most effective method to protect against data breaches caused by lost or stolen laptops?",
            options: [
              "A. Full disk encryption",
              "B. Password complexity policy",
              "C. Remote desktop access",
              "D. Network segmentation"
            ],
            correctAnswer: "A",
            feedback:
              "Full disk encryption protects data on a laptop even if the device is lost or stolen, as the data cannot be accessed without the decryption key. Password complexity, remote desktop access, and network segmentation are important but do not specifically protect against data breaches from physical device theft."
          },
          {
            question:
              "Your organization has been targeted by a phishing attack that resulted in several employees clicking on a malicious link. The link redirected them to a website that installed a keylogger on their systems. Which of the following would be the most effective way to prevent such attacks in the future?",
            options: [
              "A. Implementing an email filtering solution",
              "B. Conducting regular employee security awareness training",
              "C. Using a web application firewall (WAF)",
              "D. Disabling all external emails"
            ],
            correctAnswer: "B",
            feedback:
              "While technical controls like email filtering can help reduce phishing emails, regular security awareness training for employees ensures they are educated on recognizing phishing attempts and avoiding suspicious links, making it the most effective prevention method."
          },
          {
            question:
              "A company is designing a new web application that will process sensitive customer information, including credit card details. Which of the following would be the best approach to secure the data in transit?",
            options: [
              "A. Using a VPN to access the web application",
              "B. Encrypting data with AES-256",
              "C. Implementing TLS (Transport Layer Security)",
              "D. Enforcing strong password policies"
            ],
            correctAnswer: "C",
            feedback:
              "TLS is designed to provide secure communication over networks and is widely used to protect sensitive information like credit card details during transmission. AES-256 is an encryption standard for data at rest, not specifically for data in transit."
          },
          {
            question:
              "You are responsible for configuring a wireless network for a company. The network needs to be secure but also provide easy access for authorized users. Which of the following security protocols should you implement to ensure the best combination of security and usability?",
            options: [
              "A. WEP (Wired Equivalent Privacy)",
              "B. WPA2 (Wi-Fi Protected Access 2)",
              "C. WPA3 (Wi-Fi Protected Access 3)",
              "D. Open network with MAC address filtering"
            ],
            correctAnswer: "C",
            feedback:
              "WPA3 is the most secure wireless encryption standard, offering improved protection against attacks and ensuring data confidentiality. WPA2 is less secure than WPA3, WEP is outdated, and an open network with MAC filtering does not provide strong security."
          },
          {
            question:
              "After detecting unusual traffic patterns, your security team discovers that one of the servers in the network is communicating with a known malicious IP address. What should be your immediate next step?",
            options: [
              "A. Isolate the affected server from the network",
              "B. Shut down the server",
              "C. Block the malicious IP address at the firewall",
              "D. Notify senior management"
            ],
            correctAnswer: "A",
            feedback:
              "Isolating the affected server prevents the spread of the compromise and allows for further investigation. Shutting down the server might lead to loss of forensic data, and blocking the IP should be done after isolating the server. Notifying senior management is important but not the immediate next step."
          },
          {
            question:
              "A company is implementing a new policy requiring all users to complete an annual cybersecurity training course. Which of the following types of control does this policy represent?",
            options: [
              "A. Detective control",
              "B. Corrective control",
              "C. Preventive control",
              "D. Compensating control"
            ],
            correctAnswer: "C",
            feedback:
              "The policy requiring cybersecurity training is a preventive control, as it aims to reduce the likelihood of security incidents by educating users on best practices and potential threats. Detective controls identify incidents, corrective controls address issues, and compensating controls are alternatives to primary measures."
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
