// Simple validation for form fields
document.getElementById('loginForm').addEventListener('submit', function(event) {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        event.preventDefault();
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault();
    }
});