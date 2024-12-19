// Function to toggle the sidebar
function toggleNav() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    } else {
        console.error('Sidebar element not found!');
    }
}

// Toggle chat box visibility
function toggleChatBox() {
    const chatBox = document.getElementById('chat-box');
    if (chatBox) {
        chatBox.style.display = (chatBox.style.display === 'block') ? 'none' : 'block';
    } else {
        console.error('Chat box not found!');
    }
}

// BPM Finder functionality (Tap BPM)
const bpmFinder = document.getElementById('bpm-finder'); 
if (bpmFinder) {
    const bpmButton = bpmFinder.querySelector('button');

    let tapTimes = [];
    let bpm = 0;

    bpmButton.addEventListener('click', function () {
        const now = Date.now();

        // Record tap time
        tapTimes.push(now);

        // Ensure there are at least 2 taps to calculate BPM
        if (tapTimes.length >= 2) {
            const interval = (tapTimes[tapTimes.length - 1] - tapTimes[tapTimes.length - 2]) / 1000; // in seconds
            bpm = 60 / interval; // BPM calculation: 60 / interval
            bpm = Math.round(bpm); // Round BPM to nearest whole number
            document.getElementById('bpmOutput').textContent = `BPM: ${bpm}`;
        }
    });
} else {
    console.error('BPM Finder not found!');
}
