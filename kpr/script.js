// JavaScript code for handling form submissions

// Register Form
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    // TODO: Implement code to handle form submission and registration (e.g., send data to a server).
    // For this example, we won't actually register the user.

    alert("Registration successful!");
    registerForm.reset();
});

// Login Form
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    // TODO: Implement code to handle form submission and login (e.g., send data to a server).
    // For this example, we won't actually check the credentials.

    alert("Login successful!");
    window.location.href = "hello.html";
});
