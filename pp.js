// Example JavaScript functionality (form validation)
document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        event.preventDefault();
        alert('Please fill in all fields!');
    } else {
        alert('Thank you for your message, I will get back to you soon!');
    }
});
