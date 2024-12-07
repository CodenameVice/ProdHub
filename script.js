// Function to toggle the sidebar
function toggleNav() {
    const sidebar = document.getElementById('sidebar');
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

// Add event listener for DOMContentLoaded to ensure elements are ready
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.hamburger-menu');
    const feedbackForm = document.getElementById('feedback-form');

    // Ensure the hamburger menu exists before adding a listener
    if (menu) {
        menu.addEventListener('click', toggleNav);
    }

    // Handle form submission
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
    }
});
