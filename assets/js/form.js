
function toggleDarkTheme(event) {
    document.querySelectorAll('.post-blog, input[type="text"], textarea, header, footer, body, .blogs-web-button, .back-button, .dark-theme-toggle').forEach(element => {
        element.classList.toggle('dark');
        element.classList.toggle('enabled');
    });

}

function navigateToBlogsPage() {
    window.location.href = 'blogs.html';
}
function navigateBackToHome() {
    window.location.href = 'index.html';
}