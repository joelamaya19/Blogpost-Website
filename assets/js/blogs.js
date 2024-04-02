
function toggleDarkTheme() {
    // Toggle 'dark' and 'enabled' classes on all relevant elements
    const elementsToToggle = document.querySelectorAll(
        '.post-blog, input[type="text"], textarea, header, footer, body, .back-button, .dark-theme-toggle'
        );
    
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

document.addEventListener('DOMContentLoaded', function() {
    // Get the stored blog posts array from localStorage
    let blogPostsJSON = localStorage.getItem('blogPosts');

    // Initialize an empty array if there's no stored data
    let blogPosts = [];
    if (blogPostsJSON) {
        // Parse the JSON string back into an array of objects
        blogPosts = JSON.parse(blogPostsJSON);
    }

    // Display each blog post in your container
    const container = document.getElementById('blogContainer');
    blogPosts.forEach(blogPost => {
        // Create elements to display the blog post data
        const titleElement = document.createElement('h3');
        titleElement.textContent = blogPost.title;

        const authorElement = document.createElement('p');
        authorElement.textContent = 'By: ' + blogPost.author;

        const contentElement = document.createElement('p');
        contentElement.textContent = blogPost.content;

        // Append the elements to the container
        container.appendChild(titleElement);
        container.appendChild(authorElement);
        container.appendChild(contentElement);

        // Add a horizontal line to separate blog posts
        const hrElement = document.createElement('hr');
        container.appendChild(hrElement);
    });
});