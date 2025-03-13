document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    // Get user input values
    let username = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");

    // Clear previous error message
    errorMessage.textContent = "";

    // Basic validation: check if username and password are not empty
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
    } else {
        // Simulate successful login (in a real app, you'd validate against a database)
        //alert("Login successful! Welcome, " + username);
        // Redirect or proceed with login logic
         window.location.href = "slide.html";  // Example redirect after login
    }
});