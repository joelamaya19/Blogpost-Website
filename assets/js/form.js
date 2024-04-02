
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

function navigateToBlogsPage() {
    window.location.href = 'blogs.html';
}

function blogFormSubmit(event) {
    event.preventDefault();

    // Get the values entered by the user
    const titleForm = document.querySelector('#title').value;
    const authorForm = document.querySelector('#author').value;
    const contentForm = document.querySelector('#content').value;

    // Create an object to store the blog post data
    const blogPost = {
        title: titleForm,
        author: authorForm,
        content: contentForm
    };

    // Retrieve the existing blog posts array from localStorage
    let blogPostsJSON = localStorage.getItem('blogPosts');
    let blogPosts = [];
    if (blogPostsJSON) {
        blogPosts = JSON.parse(blogPostsJSON);
    }

    // Add the new blog post to the array
    blogPosts.push(blogPost);

    // Save the updated array back to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    // Clear the form inputs
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#content').value = '';

    // Redirect to blogs.html
    window.location.href = 'blogs.html';
}

const blogForm = document.getElementById('blogForm');

blogForm.addEventListener('submit', blogFormSubmit);
