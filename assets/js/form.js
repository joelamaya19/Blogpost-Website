function toggleDarkTheme(event) {
    console.log(event);

    event.classList.toggle('enabled');
    document.querySelectorAll('.post-blog, input[type="text"], textarea, header, footer, body').forEach(element => {
        element.classList.toggle('dark');
    });

}