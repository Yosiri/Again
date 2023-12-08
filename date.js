// Function to handle form submission
function submitAppointment() {
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Perform form validation (you can add more complex validation as needed)

    // Prepare data for submission
    const formData = {
        name,
        email,
        date,
        time
    };

    // Simulate a server request using the Fetch API
    fetch('your-server-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}
