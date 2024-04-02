
function toggleDarkTheme() {
    // Toggle 'dark' and 'enabled' classes on all relevant elements
    const elementsToToggle = document.querySelectorAll('.post-blog, input[type="text"], textarea, header, footer, body, .blogs-web-button, .back-button, .dark-theme-toggle');
    
    elementsToToggle.forEach(element => {
        element.classList.toggle('dark');
        element.classList.toggle('enabled');
    });

    // Check if dark theme is currently enabled on the toggle button
    const isDarkThemeEnabled = document.querySelector('.dark-theme-toggle').classList.contains('enabled');

    // Store the state of the dark theme in local storage
    localStorage.setItem('darkThemeEnabled', isDarkThemeEnabled);
}

const isDarkThemeEnabled = localStorage.getItem('darkThemeEnabled') === 'true';

// If darkThemeEnabled is true, apply the dark theme
if (isDarkThemeEnabled) {
    toggleDarkTheme();
}


function navigateBackToHome() {
    window.location.href = 'index.html';
}
