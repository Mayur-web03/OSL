function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value;

    if (name === "") {
        alert("Name required");
        return false;
    }

    if (email === "") {
        alert("Email required");
        return false;
    }

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!pattern.test(email)) {
        alert("Invalid email");
        return false;
    }

    if (age === "" || age < 18 || age > 60) {
        alert("Age must be between 18 and 60");
        return false;
    }

    return true;
}