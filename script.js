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

// Handle form submission
const feedbackForm = document.querySelector('#feedback-form'); 
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (e) {
        e.preventDefault(); 
        const feedback = document.getElementById('feedback').value;

        if (feedback) {
            alert('Thank you for your feedback!'); 
            document.getElementById('feedback').value = ''; 
            toggleChatBox(); 
        } else {
            alert('Please provide some feedback before submitting!');
        }
    });
} else {
    console.error('Feedback form not found!');
}

// BPM Finder functionality
const bpmFinder = document.getElementById('bpm-finder'); 
if (bpmFinder) {
    const fileInput = bpmFinder.querySelector('input[type="file"]');
    const bpmButton = bpmFinder.querySelector('button');

    bpmButton.addEventListener('click', function () {
        const file = fileInput.files[0];

        if (file) {
            console.log('File uploaded:', file);
            processBPM(file); 
        } else {
            alert('Please upload a valid audio file.');
        }
    });

    function processBPM(file) {
        console.log('Processing BPM...');
        const reader = new FileReader();

        reader.onload = function(event) {
            const audioData = event.target.result;
            // Placeholder for BPM calculation logic
            const bpm = 120; // Replace with actual BPM calculation logic
            console.log('BPM calculated:', bpm);
            document.getElementById('bpmOutput').textContent = `BPM: ${bpm}`;
        };

        reader.readAsArrayBuffer(file); 
    }
} else {
    console.error('BPM Finder not found!');
}
