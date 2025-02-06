document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login-btn").addEventListener("click", function () {
        alert("Login functionality coming soon!");
    });

    document.getElementById("know-more-btn").addEventListener("click", function () {
        alert("More information will be available soon!");
    });

    document.getElementById("home-btn").addEventListener("click", function () {
        document.getElementById("home-content").innerHTML = "<h1>Welcome Home!</h1><p>This is the home section where you can find the latest updates.</p>";
    });
});
