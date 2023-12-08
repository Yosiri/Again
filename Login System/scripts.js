const userData = {
    "user123": "password456",
    "user789": "password123",
    "admin": "Admin123"
};

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        if (userData[username] && userData[username] === password) {
            if (username === "admin") {
                window.location.href = "admin-home.html";
            } else {
                window.location.href = "user-home.html";
            }
        } else {
            alert('Incorrect username or password. Please try again.');
        }
    } else {
        alert('Please enter both username and password!');
    }
});

document.getElementById("signup-btn").addEventListener("click", function() {
    var signupContainer = document.getElementById("signup-container");
    signupContainer.style.display = (signupContainer.style.display === "none" || signupContainer.style.display === "") ? "block" : "none";
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form values
    var signupName = document.getElementById("signup-name").value;
    var signupUsername = document.getElementById("signup-username").value;
    var signupPassword = document.getElementById("signup-password").value;
    var repeatPassword = document.getElementById("repeat-password").value;

    // Basic validation - you might want to add more robust validation
    if (signupName && signupUsername && signupPassword && repeatPassword && (signupPassword === repeatPassword)) {
        // Assume successful signup for this example
        alert("Signup successful! Name: " + signupName + ", Username: " + signupUsername + ", Password: " + signupPassword);

        // Reset the form or close the signup container
        document.getElementById("signup-form").reset();
        document.getElementById("signup-container").style.display = "none";
    } else {
        // Display an error message or handle validation errors
        alert("Please fill in all the required fields and ensure that the passwords match.");
    }
});
