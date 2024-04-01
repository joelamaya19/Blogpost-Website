
function toggleDarkTheme() {
    // Toggle 'dark' and 'enabled' classes on all relevant elements
    $('.post-blog, input[type="text"], textarea, header, footer, body, .blogs-web-button, .back-button, .dark-theme-toggle').toggleClass('dark enabled');

    // Check if dark theme is currently enabled on the toggle button
    const isDarkThemeEnabled = $('.dark-theme-toggle').hasClass('enabled');

    // Store the state of the dark theme in local storage
    localStorage.setItem('darkThemeEnabled', isDarkThemeEnabled);
}

$(document).ready(function() {
    // Retrieve the value of darkThemeEnabled from local storage
    const isDarkThemeEnabled = localStorage.getItem('darkThemeEnabled') === 'true';

    // If darkThemeEnabled is true, apply the dark theme
    if (isDarkThemeEnabled) {
        toggleDarkTheme();
    }
});

function sumbitBlogPost() {
    
}

function navigateToBlogsPage() {
    window.location.href = 'blogs.html';
}
function navigateBackToHome() {
    window.location.href = 'index.html';
}
