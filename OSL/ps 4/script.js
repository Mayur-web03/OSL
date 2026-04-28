function validateSignup() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("userError").innerHTML = "";
    document.getElementById("passError").innerHTML = "";
    document.getElementById("confirmError").innerHTML = "";

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name required";
        valid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email required";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email";
        valid = false;
    }

    if (user === "") {
        document.getElementById("userError").innerHTML = "Username required";
        valid = false;
    }

    if (pass === "") {
        document.getElementById("passError").innerHTML = "Password required";
        valid = false;
    } else if (pass.length < 6) {
        document.getElementById("passError").innerHTML = "Min 6 characters";
        valid = false;
    }

    if (confirm === "") {
        document.getElementById("confirmError").innerHTML = "Confirm password";
        valid = false;
    } else if (pass !== confirm) {
        document.getElementById("confirmError").innerHTML = "Passwords do not match";
        valid = false;
    }

    if (valid) {
        let btn = document.getElementById("signupBtn");
        btn.innerText = "Signup Successful";
        btn.style.background = "green";
    }

    return valid;
}

function validateLogin() {

    let user = document.getElementById("loginUser").value.trim();
    let pass = document.getElementById("loginPass").value;

    document.getElementById("loginUserError").innerHTML = "";
    document.getElementById("loginPassError").innerHTML = "";

    let valid = true;

    if (user === "") {
        document.getElementById("loginUserError").innerHTML = "Required";
        valid = false;
    }

    if (pass === "") {
        document.getElementById("loginPassError").innerHTML = "Required";
        valid = false;
    }

    return valid;
}