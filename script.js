function toggleTheme() {
    var body = document.body;
    var toggleButton = document.getElementById('theme-toggle');
    
    // Toggle the dark-theme class
    body.classList.toggle('dark-theme');
    
    // Change the icon based on theme
    if (body.classList.contains('dark-theme')) {
        toggleButton.innerHTML = '🌞'; // Sun icon for dark theme
    } else {
        toggleButton.innerHTML = '🌙'; // Moon icon for light theme
    }
}
