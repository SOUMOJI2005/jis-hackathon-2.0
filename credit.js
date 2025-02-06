document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("verify-btn")?.addEventListener("click", function () {
        document.getElementById("verification-process").classList.toggle("hidden");
    });

    document.getElementById("submit-verification")?.addEventListener("click", function () {
        let confirmation = confirm("Yes, it's me!");
        if (confirmation) {
            alert("Verification successful! Your request is being processed.");
            document.getElementById("mobile-verification").classList.remove("hidden");
        } else {
            alert("Verification canceled.");
        }
    });

    document.getElementById("send-code")?.addEventListener("click", function () {
        let mobileNumber = document.getElementById("mobile-number").value;
        if (mobileNumber) {
            alert("A verification code has been sent to " + mobileNumber);
        } else {
            alert("Please enter a valid mobile number.");
        }
    });

    document.getElementById("verify-code")?.addEventListener("click", function () {
        let verificationCode = document.getElementById("verification-code").value;
        if (verificationCode === "123456") { // Simulated correct code
            alert("Mobile verification successful!");
        } else {
            alert("Incorrect verification code. Please try again.");
        }
    });
});
