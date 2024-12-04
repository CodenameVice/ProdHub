// Function to toggle the sidebar
function toggleNav() {
    const sidebar = document.getElementById('nav-bar');
    const body = document.body;
    
    // Toggle 'active' class on the sidebar and body
    sidebar.classList.toggle('active');
    body.classList.toggle('sidebar-active');
}

// Toggle chat box visibility
function toggleChatBox() {
    const chatBox = document.getElementById('chat-box');
    chatBox.style.display = (chatBox.style.display === 'block') ? 'none' : 'block';
}

// Handle form submission
document.getElementById('feedback-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload on form submission
    const feedback = document.getElementById('feedback').value;
    
    if (feedback) {
        alert('Thank you for your feedback!');  // Display a message (this could also be an API call)
        document.getElementById('feedback').value = '';  // Clear textarea
        toggleChatBox();  // Close chat box after submission
    } else {
        alert('Please provide some feedback before submitting!');
    }
});

