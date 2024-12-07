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
