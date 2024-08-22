document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    
    // Collect form data
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple form validation (optional)
    if (!fullName || !email) {
        alert('Please fill in all required fields.');
        return;
    }

    // Print form data to console
    console.log({
        fullName,
        email,
        subject,
        message
    });

    // Show confirmation dialog
    if (confirm('Your message has been sent. Do you want to submit another message?')) {
        // If the user confirms, reset the form
        this.reset();
    }
});
