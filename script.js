document.getElementById('newsletterForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('newsletterEmail').value;

    // Simple validation
    if (email.trim() === '') {
        alert('Please enter a valid email address.');
        return;
    }

    // Placeholder for backend integration (store email)
    console.log('New newsletter signup:', email);

    // Display success message
    document.getElementById('form-message').textContent = 'Thank you for subscribing! Look out for our upcoming promotions.';
    document.getElementById('newsletterEmail').value = '';
});
