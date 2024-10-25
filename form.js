const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const secondName = document.getElementById("second-name");
const email = document.getElementById("email");
const comment = document.getElementById("comment");
const submit = document.getElementById("submit");
const printToUI = document.getElementById("print-to-ui");
const firstAlert = document.getElementById("first-name-alert");
const secondAlert = document.getElementById("second-name-alert");
const emailAlert = document.getElementById("email-alert");
const commentAlert = document.getElementById("comment-alert");
let userArray = [];

form.addEventListener("submit", function(event){
    event.preventDefault();  // Prevent default form submission

    // Validate the form
    if (validateForm()) {
        printToUI.innerHTML = ``;  // Clear previous UI content
        
        // Add user details to the array and print to UI
        userDetails();
        displayUserDetails();

        form.reset();  // Reset form after data is processed
    }
});

function validateForm(){
    validateFirstName();
    validateSecondName();
    validateEmail();
    validateComment();

    // All fields must be valid (style.border === "2px solid green")
    return firstName.style.border === "2px solid green" &&
           secondName.style.border === "2px solid green" &&
           email.style.border === "2px solid green" &&
           comment.style.border === "2px solid green";
}

function userDetails(){
    // Create a user object and push to userArray
    const userObj = {
        name1: firstName.value,
        name2: secondName.value,
        email1: email.value,
        comment1: comment.value
    };

    userArray.push(userObj);
}

function displayUserDetails(){
    // Loop through userArray and display each user's details
    userArray.forEach(function(item){
        const heading1 = document.createElement("h3");
        const heading2 = document.createElement("h3");
        const heading3 = document.createElement("h3");
        const heading4 = document.createElement("h3");

        heading1.textContent = item.name1;
        heading2.textContent = item.name2;
        heading3.textContent = item.email1;
        heading4.textContent = item.comment1;

        printToUI.append(heading1, heading2, heading3, heading4);
    });
}

firstName.addEventListener("keyup", validateFirstName);
secondName.addEventListener("keyup", validateSecondName);
email.addEventListener("keyup", validateEmail);
comment.addEventListener("keyup", validateComment);

function validateFirstName(){
    const userName1 = firstName.value;

    if (userName1.length === 0) {
        firstAlert.textContent = "Enter First Name";
        firstName.style.border = "1px solid red";
    } else if (!userName1.match(/^[a-zA-Z_-]+$/)) {
        firstAlert.textContent = "Numbers are not allowed in this field";
        firstName.style.border = "1px solid red";
    } else {
        firstAlert.textContent = "";
        firstName.style.border = "2px solid green";
    }
}

function validateSecondName(){
    const userName2 = secondName.value;

    if (userName2.length === 0) {
        secondAlert.textContent = "Enter Second Name";
        secondName.style.border = "1px solid red";
    } else if (!userName2.match(/^[a-zA-Z_-]+$/)) {
        secondAlert.textContent = "Numbers are not allowed in this field";
        secondName.style.border = "1px solid red";
    } else {
        secondAlert.textContent = "";
        secondName.style.border = "2px solid green";
    }
}

function validateEmail(){
    const userEmail = email.value;

    if (userEmail.length === 0) {
        emailAlert.textContent = "Enter Email Address";
        email.style.border = "1px solid red";
    } else if (!userEmail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailAlert.textContent = "Provide Valid Email Address";
        email.style.border = "1px solid red";
    } else {
        emailAlert.textContent = "";
        email.style.border = "2px solid green";
    }
}

function validateComment(){
    const userComment = comment.value;

    if (userComment.length === 0) {
        commentAlert.textContent = "You must Enter this Field";
        comment.style.border = "1px solid red";
    } else {
        commentAlert.textContent = "";
        comment.style.border = "2px solid green";
    }
}
