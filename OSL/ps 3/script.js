function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let fileInput = document.getElementById("photo");

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("ageError").innerHTML = "";
    document.getElementById("rollError").innerHTML = "";
    document.getElementById("photoError").innerHTML = "";

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        valid = false;
    }


    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Enter valid email";
        valid = false;
    }


    if (age === "" || age < 18 || age > 25) {
        document.getElementById("ageError").innerHTML = "Age must be 18 to 25";
        valid = false;
    }


    let rollPattern = /^ST\d{3}$/;
    if (roll === "") {
        document.getElementById("rollError").innerHTML = "Roll number required";
        valid = false;
    } else if (!rollPattern.test(roll)) {
        document.getElementById("rollError").innerHTML = "Format: ST123";
        valid = false;
    }

    if (fileInput.files.length === 0) {
        document.getElementById("photoError").innerHTML = "Upload photo";
        valid = false;
    } else {
        let file = fileInput.files[0];
        let allowedTypes = ["image/jpeg", "image/png"];

        if (!allowedTypes.includes(file.type)) {
            document.getElementById("photoError").innerHTML = "Only JPG/PNG allowed";
            valid = false;
        }
    }

    if (valid) {
        let btn = document.getElementById("submitBtn");
        btn.innerText = "Submitted Successfully";
        btn.style.backgroundColor = "green";

        alert("Form submitted successfully!");
    }
    return valid;
}