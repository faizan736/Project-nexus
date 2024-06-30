const forms = document.querySelector(".forms"),
    passShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

// toggle eye button to hide and show password
passShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let passField = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        passField.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })

    })
})

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); //preventing form submit
        forms.classList.toggle("show-signup");
    })
});

// Password validation code
function validatePassword() {
    var pass1 = document.querySelector(".password1").value;
    var pass2 = document.querySelector(".password2").value;

    // Clear previous error messages
    document.getElementById("message1").innerHTML = "";
    document.getElementById("message2").innerHTML = "";

    // check empty password field
    if (pass1 == "") {
        document.getElementById("message1").innerHTML = "**Fill the password please!";
        return false;
    }

    // check empty confirm password field
    if (pass2 == "") {
        document.getElementById("message2").innerHTML = "**Enter the password please!";
        return false;
    }

    // minimum password length validation
    if (pass1.length < 8) {
        document.getElementById("message1").innerHTML = "**Password length must be at least 8 characters";
        return false;
    }

    // maximum length of password validation
    if (pass1.length > 15) {
        document.getElementById("message1").innerHTML = "**Password length must not exceed 15 characters";
        return false;
    }

    // check whether the create and confirm passwords match
    if (pass1 != pass2) {
        document.getElementById("message2").innerHTML = "**Passwords are not the same";
        return false;
    } else {
        alert("Your account is created successfully");
    }

    // Clear messages when the password is valid
    document.getElementById("message1").innerHTML = "";
    document.getElementById("message2").innerHTML = "";

    return true; // valid password
}