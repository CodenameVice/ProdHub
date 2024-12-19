// Function to toggle the sidebar
function toggleNav() {
    console.log('Sidebar toggle clicked'); // Debugging line
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
const feedbackForm = document.getElementById('feedback-form'); // Ensure you're getting the form element
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent page reload on form submission
        const feedback = document.getElementById('feedback').value;

        if (feedback) {
            alert('Thank you for your feedback!'); // Display a message
            document.getElementById('feedback').value = ''; // Clear textarea
            toggleChatBox(); // Close chat box after submission
        } else {
            alert('Please provide some feedback before submitting!');
        }
    });
} else {
    console.error('Feedback form not found!');
}

// BPM Finder Functionality

// File input change event for BPM Finder
document.querySelector('.bpm-finder input[type="file"]').addEventListener('change', function() {
    if (this.files.length > 0) {
        document.querySelector('.bpm-finder button').disabled = false;
    } else {
        document.querySelector('.bpm-finder button').disabled = true;
    }
});

// BPM calculation
document.querySelector('.bpm-finder button').addEventListener('click', function() {
    this.disabled = true;
    document.querySelector('#bpmOutput').textContent = 'Processing...';

    const file = document.querySelector('.bpm-finder input[type="file"]').files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const audio = new Audio();
            audio.src = event.target.result;

            // Assuming there's a function to calculate BPM
            const bpm = calculateBPM(audio); 

            setTimeout(() => {
                if (bpm) {
                    document.querySelector('#bpmOutput').textContent = `BPM: ${bpm}`;
                } else {
                    document.querySelector('#bpmOutput').textContent = 'Could not calculate BPM. Please try again.';
                }
                document.querySelector('.bpm-finder button').disabled = false;
            }, 2000); // Simulating processing delay
        };

        reader.readAsDataURL(file);
    }
});

// Helper function to calculate BPM
function calculateBPM(audio) {
    // Implement BPM calculation logic here
    // This can be done through libraries like Howler.js or custom implementation
    // Example:
    // return BPM calculation logic based on audio data
    return 120; // Placeholder BPM calculation
}
