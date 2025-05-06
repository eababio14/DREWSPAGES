document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('command-input');
    const output = document.getElementById('output');
    const clearBtn = document.getElementById('clear-btn');
    const submitQuizBtn = document.getElementById('submit-quiz-btn');
    const quizResults = document.getElementById('quiz-results');
    const quizScore = document.getElementById('quiz-score');
    let commandHistory = [];
    let historyIndex = -1;

    const commands = {
        'nmap 127.0.0.1': 'Starting Nmap 7.80 ( https://nmap.org )\nNmap scan report for localhost (127.0.0.1)\nHost is up (0.00016s latency).\nNot shown: 998 closed ports\nPORT   STATE SERVICE\n22/tcp open  ssh\n80/tcp open  http',
        'netstat -tan': 'Active Internet connections (servers and established)\nProto Recv-Q Send-Q Local Address           Foreign Address         State\ntcp        0      0 127.0.0.1:22            0.0.0.0:*               LISTEN\ntcp        0      0 127.0.0.1:80            0.0.0.0:*               LISTEN',
        'service vsftpd start': 'Starting vsftpd for vsftpd: [  OK  ]',
        'apache2ctl start': 'Starting Apache httpd web server: [  OK  ]',
        'ssh-keygen': 'Generating public/private rsa key pair.\nEnter file in which to save the key (/root/.ssh/id_rsa): \nCreated directory \'/root/.ssh\'.\nEnter passphrase (empty for no passphrase): \nEnter same passphrase again: \nYour identification has been saved in /root/.ssh/id_rsa.\nYour public key has been saved in /root/.ssh/id_rsa.pub.',
        '/etc/init.d/ssh start': 'Starting OpenBSD Secure Shell server sshd: [  OK  ]',
        'apt-get install mysql-server': 'Reading package lists... Done\nBuilding dependency tree\nReading state information... Done\nThe following additional packages will be installed:\n  mysql-client-5.7 mysql-server-5.7\nSuggested packages:\n  tinyca\nThe following NEW packages will be installed:\n  mysql-client-5.7 mysql-server mysql-server-5.7\n0 upgraded, 3 newly installed, 0 to remove and 0 not upgraded.\nNeed to get 0 B/19.4 MB of archives.\nAfter this operation, 161 MB of additional disk space will be used.\nDo you want to continue? [Y/n] Y\nSelecting previously unselected package mysql-client-5.7.\n(Reading database ... 319524 files and directories currently installed.)\nPreparing to unpack .../mysql-client-5.7_5.7.29-0ubuntu0.18.04.1_amd64.deb ...\nUnpacking mysql-client-5.7 (5.7.29-0ubuntu0.18.04.1) ...\nSelecting previously unselected package mysql-server-5.7.\nPreparing to unpack .../mysql-server-5.7_5.7.29-0ubuntu0.18.04.1_amd64.deb ...\nUnpacking mysql-server-5.7 (5.7.29-0ubuntu0.18.04.1) ...\nSelecting previously unselected package mysql-server.\nPreparing to unpack .../mysql-server_5.7.29-0ubuntu0.18.04.1_all.deb ...\nUnpacking mysql-server (5.7.29-0ubuntu0.18.04.1) ...\nSetting up mysql-client-5.7 (5.7.29-0ubuntu0.18.04.1) ...\nSetting up mysql-server-5.7 (5.7.29-0ubuntu0.18.04.1) ...\nSetting up mysql-server (5.7.29-0ubuntu0.18.04.1) ...\nProcessing triggers for systemd (237-3ubuntu10.39) ...\nProcessing triggers for man-db (2.8.3-2ubuntu0.1) ...\nProcessing triggers for ureadahead (0.100.0-21) ...',
        'service mysql start': 'Starting MySQL database server mysqld: [  OK  ]',
        'mysql -u root -p': 'Enter password: \nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 8\nServer version: 5.7.29-0ubuntu0.18.04.1 (Ubuntu)\n\nCopyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType \'help;\' or \'\\h\' for help. Type \'\\c\' to clear the current input statement.\n\nmysql> CREATE USER \'newuser\'@\'localhost\' IDENTIFIED BY \'password\';\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> GRANT ALL PRIVILEGES ON *.* TO \'newuser\'@\'localhost\';\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> FLUSH PRIVILEGES;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> EXIT;\nBye',
        'apt-get install ufw': 'Reading package lists... Done\nBuilding dependency tree\nReading state information... Done\nThe following NEW packages will be installed:\n  ufw\n0 upgraded, 1 newly installed, 0 to remove and 0 not upgraded.\nNeed to get 179 kB of archives.\nAfter this operation, 1,164 kB of additional disk space will be used.\nGet:1 http://archive.ubuntu.com/ubuntu bionic/main amd64 ufw all 0.35-5 [179 kB]\nFetched 179 kB in 0s (1,042 kB/s)\nSelecting previously unselected package ufw.\n(Reading database ... 319524 files and directories currently installed.)\nPreparing to unpack .../archives/ufw_0.35-5_all.deb ...\nUnpacking ufw (0.35-5) ...\nSetting up ufw (0.35-5) ...\nProcessing triggers for systemd (237-3ubuntu10.39) ...\nProcessing triggers for ureadahead (0.100.0-21) ...',
        'ufw allow 22': 'Rules updated\nRules updated (v6)',
        'ufw allow 80': 'Rules updated\nRules updated (v6)',
        'ufw allow 3306': 'Rules updated\nRules updated (v6)',
        'ufw enable': 'Command may disrupt existing ssh connections. Proceed with operation (y|n)? y\nFirewall is active and enabled on system startup',
        'df -h': 'Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1       100G   30G   65G  32% /\ntmpfs           2.0G  1.1M  2.0G   1% /dev/shm',
        'systemctl status apache2': '● apache2.service - The Apache HTTP Server\n   Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor preset: enabled)\n   Active: active (running) since Mon 2021-05-24 15:20:19 UTC; 1h 2min ago\n     Docs: https://httpd.apache.org/docs/2.4/\n  Main PID: 12345 (apache2)\n   Status: "Apache/2.4.29 (Ubuntu) Server at example.com Port 80"\n   Tasks: 6 (limit: 1152)\n   CGroup: /system.slice/apache2.service\n           ├─12345 /usr/sbin/apache2 -k start\n           ├─12346 /usr/sbin/apache2 -k start\n           ├─12347 /usr/sbin/apache2 -k start\n           └─12348 /usr/sbin/apache2 -k start',
        'systemctl restart apache2': 'Restarting apache2.service...\nThe Apache HTTP Server has been restarted successfully.',
        'top': 'top - 15:25:10 up 1 day,  3:42,  1 user,  load average: 0.01, 0.03, 0.05\nTasks: 202 total,   1 running, 201 sleeping,   0 stopped,   0 zombie\n%Cpu(s):  1.5 us,  0.5 sy,  0.0 ni, 97.8 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st\nMiB Mem :   2048.0 total,    150.0 free,    850.0 used,   1048.0 buff/cache\nMiB Swap:   1024.0 total,    1024.0 free,      0.0 used.   1100.0 avail Mem\nPID USER      PR  NI    VIRT    RES    SHR S %CPU %MEM     TIME+ COMMAND\n  123 root      20   0  123456  1234   456 S  0.3  0.1   0:01.23 apache2\n  124 root      20   0  123456  1234   456 S  0.1  0.1   0:00.45 apache2',
        'ps aux': 'USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot      12345  0.1  0.2 123456  1234 ?        Ss   15:20   0:01 /usr/sbin/apache2 -k start\nroot      12346  0.0  0.1 123456  1234 ?        S    15:20   0:00 /usr/sbin/apache2 -k start\nroot      12347  0.0  0.1 123456  1234 ?        S    15:20   0:00 /usr/sbin/apache2 -k start\nroot      12348  0.0  0.1 123456  1234 ?        S    15:20   0:00 /usr/sbin/apache2 -k start',
        'useradd newuser': 'Adding user `newuser` ...\nAdding new group `newuser` (1001)\nAdding new user `newuser` (1001) with group `newuser`\nCreating home directory `/home/newuser` ...\nCopying files from `/etc/skel` ...\nNew user `newuser` created.',
        'passwd newuser': 'Changing password for user newuser.\nNew password: \nRetype new password: \npasswd: password updated successfully.',
        'shutdown now': 'System is shutting down NOW!',
        'reboot': 'Rebooting the system...',
        'clear': '',
        'help': 'Available commands:\n- nmap 127.0.0.1\n- netstat -tan\n- service vsftpd start\n- apache2ctl start\n- ssh-keygen\n- /etc/init.d/ssh start\n- apt-get install mysql-server\n- service mysql start\n- mysql -u root -p\n- apt-get install ufw\n- ufw allow 22\n- ufw allow 80\n- ufw allow 3306\n- ufw enable\n- df -h\n- systemctl status apache2\n- systemctl restart apache2\n- top\n- ps aux\n- useradd newuser\n- passwd newuser\n- shutdown now\n- reboot\n- clear\n- help'
    };
    
    

    commandInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = commandInput.value.trim();
            if (command) {
                commandHistory.push(command);
                historyIndex = commandHistory.length;
                if (commands[command]) {
                    output.textContent += `\n$ ${command}\n${commands[command]}`;
                } else {
                    output.textContent += `\n$ ${command}\nCommand not found`;
                }
                if (command === 'clear') {
                    output.textContent = '';
                }
                commandInput.value = '';
                output.scrollTop = output.scrollHeight;
            }
        } else if (event.key === 'ArrowUp') {
            if (historyIndex > 0) {
                historyIndex--;
                commandInput.value = commandHistory[historyIndex];
            }
        } else if (event.key === 'ArrowDown') {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                commandInput.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                commandInput.value = '';
            }
        }
    });

    clearBtn.addEventListener('click', () => {
        output.textContent = '';
    });

    submitQuizBtn.addEventListener('click', () => {
        const quizForm = document.getElementById('quiz-form');
        const formData = new FormData(quizForm);
       const answers = {
            q1: 'b',
            q2: 'b',
            q3: 'b',
            q4: 'a',
            q5: 'b',
            q6: 'a',
            q7: 'b'
        };

        let score = 0;
        for (const [key, value] of formData.entries()) {
            if (answers[key] === value) {
                score++;
            }
        }

        quizScore.textContent = `You scored ${score} out of 7.`;
        quizResults.style.display = 'block';
    });
});

document.getElementById('reset-quiz-btn').addEventListener('click', () => {
    const quizForm = document.getElementById('quiz-form');
    quizForm.reset();
    quizResults.style.display = 'none';
});


document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('open-modal-btn');
    const modal = document.getElementById('command-modal');
    const closeBtn = document.getElementsByClassName('close-btn')[0];

    // Open the modal
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close the modal when the user clicks on the close button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when the user clicks outside of the modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const openResumeModalBtn = document.getElementById('open-resume-modal-btn');
    const resumeModal = document.getElementById('resume-modal');
    const closeResumeBtn = document.getElementsByClassName('resume-close-btn')[0];

    // Open the modal
    openResumeModalBtn.addEventListener('click', () => {
        resumeModal.style.display = 'block';
    });

    // Close the modal when the user clicks on the close button
    closeResumeBtn.addEventListener('click', () => {
        resumeModal.style.display = 'none';
    });

    // Close the modal when the user clicks outside of the modal
    window.addEventListener('click', (event) => {
        if (event.target === resumeModal) {
            resumeModal.style.display = 'none';
        }
      });
});
