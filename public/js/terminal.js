document.addEventListener('DOMContentLoaded', () => {
    const consoleEl = document.getElementById('console');
    const hackButton = document.getElementById('hackButton');
    const lines = [
        "[+] Establishing secure link to mainframe...",
        "[+] Bypassing firewall v3.4.2...",
        "[+] Injecting payload...",
        "[+] Accessing confidential data...",
        "[!] Intrusion detection disabled...",
        "[+] Transferring files to remote server...",
        "[+] Covering tracks...",
        "[✓] Hack complete. No traces left."
    ];

    let index = 0;
    let isRunning = false;

    function startHacking() {
        try {
            if (isRunning) return;
            
            isRunning = true;
            hackButton.disabled = true;
            consoleEl.textContent = '';
            index = 0;
            
            const interval = setInterval(() => {
                if (index < lines.length) {
                    consoleEl.textContent += lines[index] + '\n';
                    consoleEl.scrollTop = consoleEl.scrollHeight;
                    index++;
                } else {
                    clearInterval(interval);
                    isRunning = false;
                    hackButton.disabled = false;
                }
            }, 700);
        } catch (error) {
            console.error('Error in startHacking:', error);
            consoleEl.textContent += '\n[!] Error: ' + error.message;
            isRunning = false;
            hackButton.disabled = false;
        }
    }

    // Add click event listener to the button
    hackButton.addEventListener('click', startHacking);
}); 