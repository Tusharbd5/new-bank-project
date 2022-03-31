document.getElementById('login-btn').addEventListener('click', function () {
    // Get User Name
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // Get User Password
    const passwordFeild = document.getElementById('user-pass');
    const userPassword = passwordFeild.value;

    emailField.value = "";
    passwordFeild.value = "";

    if (userEmail == "admin@webmail.com" && userPassword == "admin") {
        window.location.href = "banking.html";
    }
    else {
        window.alert("Please insert a valid password");
    }
});