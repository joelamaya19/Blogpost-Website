
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
    const container = document.getElementById('blogContainers');

    blogPosts.forEach(blogPost => {
        const blogContainer = document.createElement('div');
        blogContainer.classList.add('inside-blog-container');
        // Create elements to display the blog post data
        const titleElement = document.createElement('h3');
        titleElement.textContent = blogPost.title;
        titleElement.classList.add('blog-title');

        const authorElement = document.createElement('p');
        authorElement.textContent = 'Author: ' + blogPost.author;
        authorElement.classList.add('blog-author');

        const contentElement = document.createElement('p');
        contentElement.textContent = blogPost.content;
        contentElement.classList.add('blog-content');

         // Append elements to the blog container
         blogContainer.appendChild(titleElement);
         blogContainer.appendChild(contentElement);
         blogContainer.appendChild(authorElement);
 
         // Append the blog container to the main container
         container.appendChild(blogContainer);
    });
});