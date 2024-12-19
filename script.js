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
const tapBPMButton = document.getElementById('tapBPM'); 
const bpmOutput = document.getElementById('bpmOutput');

if (tapBPMButton) {
    let tapTimestamps = [];
    let tapBPM = 0;

    tapBPMButton.addEventListener('click', function () {
        const currentTime = Date.now();
        tapTimestamps.push(currentTime);

        // Calculate BPM if we have at least two taps
        if (tapTimestamps.length >= 2) {
            const timeDiff = tapTimestamps[tapTimestamps.length - 1] - tapTimestamps[tapTimestamps.length - 2];
            tapBPM = Math.round(60000 / timeDiff); // Convert ms to BPM
            bpmOutput.textContent = `BPM: ${tapBPM}`;
        }
    });
} else {
    console.error('Tap BPM button not found!');
}

// Handle audio file upload and BPM detection
const audioUploadInput = document.getElementById('audioUpload'); 

if (audioUploadInput) {
    audioUploadInput.addEventListener('change', function (e) {
        const file = audioUploadInput.files[0];

        if (file && (file.type === 'audio/mpeg' || file.type === 'audio/wav')) {
            processBPM(file);
        } else {
            alert('Please upload a valid MP3 or WAV audio file.');
        }
    });

    function processBPM(file) {
        const reader = new FileReader();

        reader.onload = async function(event) {
            const audioData = event.target.result;

            // Use the beat-detect library to process the audio data
            try {
                const bpm = await beatDetect(audioData);
                bpmOutput.textContent = `BPM: ${bpm}`;
            } catch (err) {
                console.error('Error detecting BPM:', err);
            }
        };

        reader.readAsArrayBuffer(file); 
    }
} else {
    console.error('Audio upload input not found!');
}
