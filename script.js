// Function to toggle the sidebar
function toggleNav() {
    const sidebar = document.getElementById('nav-bar');
    const body = document.body;
    
    // Toggle 'active' class on the sidebar and body
    sidebar.classList.toggle('active');
    body.classList.toggle('sidebar-active');
}
