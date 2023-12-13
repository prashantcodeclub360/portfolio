const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const mobError = document.getElementById('mobError');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (validateName() && validateEmail() && validateMobile()) {
        alert(" Your Form Data Submitted Successfully");
    }
});


function validateName() {
    let name = document.getElementById('name').value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full Name";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    nameError.innerHTML = "";
    nameError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validateEmail() {
    let email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = "Enter Valid Email";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validateMobile() {
    let Mobile = document.getElementById('Mobile').value;

    if (Mobile.length == 0) {
        mobError.innerHTML = "Mobile Number is required";
        mobError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if (!Mobile.match(/^\d{10}$/)) {
        mobError.innerHTML = "Type 10 Digits Number";
        mobError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    mobError.innerHTML = "";
    mobError.previousElementSibling.classList.add('fa-check');
    return true;
}