// Function to toggle the sidebar
function toggleNav() {
    console.log('Sidebar toggle clicked'); // Debugging line
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Toggle chat box visibility
function toggleChatBox() {
    const chatBox = document.getElementById('chat-box');
    chatBox.style.display = (chatBox.style.display === 'block') ? 'none' : 'block';
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
);
