function ValidateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email === "") {
        document.getElementById("email-error").innerText = "Email is required";
        return false;
    }
    if (password === "") {
        document.getElementById("password-error").innerText = "password is required";
        return false;

    }
    return true
}
