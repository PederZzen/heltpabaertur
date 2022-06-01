const form = document.querySelector(".contact-form");

const nameInput = document.querySelector("input#name");
const emailInput = document.querySelector("input#email");
const subjectInput = document.querySelector("input#subject");
const messageInput = document.querySelector("textarea#message");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");
const messageError = document.querySelector("#messageError");

let validateForm = (e) => {
    
    let validName = true;
    let validEmail = true;
    let validSubject = true;
    let validMessage = true;

    nameError.innerHTML = "&nbsp";
    emailError.innerHTML = "&nbsp";
    subjectError.innerHTML = "&nbsp";
    messageError.innerHTML = "&nbsp";

    e.preventDefault();

    // Validates name input - (Should be more than 5 characters long)

    let enteredName = nameInput.value.trim();
    console.log("Name: " + enteredName);

    if (enteredName == "") {
        console.error("Name cannot be empty");
        nameError.innerHTML = "* Navn må være utfyllt"
        validName = false;
    } else if (enteredName.length <= 5 && enteredName.length >= 1) {
        console.error("Name must be more than 5 characters long");
        nameError.innerHTML = "* Navn må være mer enn 5 tegn";
        validName = false;
    }

    // Validates email input - (Must be a valid email address)

    let enteredEmail = emailInput.value.trim();
    console.log("Email: " + enteredEmail);

    let emailPattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/; // https://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149

    if (enteredEmail == "") {
        console.error("Email not entered");
        emailError.innerHTML = "* Epost må være utfyllt";
        validEmail = false;
    } else if (!emailPattern.test(enteredEmail)) {
        console.error("Email not valid");
        emailError.innerHTML = "* Epost er ikke gyldig";
        validEmail = false;
    }

    // Validates subject - (Should be more than 15 characters long)

    let enteredSubject = subjectInput.value.trim();
    console.log("Subject: " + enteredSubject);

    if (enteredSubject == "") {
        console.error("Subject not entered");
        subjectError.innerHTML = "* Emne må være utfyllt";
        validSubject = false;
    } else if (enteredSubject.length <= 15 && enteredSubject.length >= 1) {
        console.error("Subject should be more than 15 characters long");
        subjectError.innerHTML = "* Emne må være mer enn 15 tegn"
        validSubject = false;
    }

    // Validates message - (should be more than 25 characters long)

    let enteredMessage = messageInput.value.trim();
    console.log(enteredMessage);

    if (enteredMessage == "") {
        console.error("Message not entered");
        messageError.innerHTML = "* Melding må være utfyllt";
        validMessage = false;
    } else if (enteredMessage.length <= 25 && enteredMessage.length >= 1) {
        console.error("Message should be more than 25 characters long");
        messageError.innerHTML = "* Melding må være mer enn 25 tegn"
        validMessage = false;
    }

    // Scrolls up if form not valid

    if (validName == false || 
        validEmail == false || 
        validSubject == false ||
        validMessage == false) {
            window.scrollTo({
                top: 550,
                behavior: "smooth"
            });
        }

    // Submits form if all inputs is valid

    if (validName == true && 
        validEmail == true && 
        validSubject == true &&
        validMessage == true)  {

        form.submit();
    }
}

form.addEventListener("submit", validateForm);