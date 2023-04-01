const checkbox = document.getElementById("privacy-policy-checkbox");
const checkbox_error = document.getElementById("privacy-policy-checkbox-error");

const email_input = document.getElementById("email-input");
const email_input_error = document.getElementById("email-input-error");



const newsletter_form = document.getElementById("footer-newsletter-form");


checkbox.addEventListener('change', function() {
    if(this.checked){
        checkbox_error.innerHTML = "";
    } 
    else {
        checkbox_error.innerHTML = "Acceptation is required.";
    }
});

email_input.addEventListener('input', function() {
    // display empty error when user clears input
    if(email_input.value === ''){
        email_input_error.innerHTML = "The field email is required.";
    } 
    // remove empty error when user inputs anything
    else{
        // display invalid email error
        if(!(email_input.checkValidity())){
            email_input_error.innerHTML = "The field must be a valid email.";
        }
        // remove invalid email error
        else if(email_input.checkValidity()){
            email_input_error.innerHTML = "";
        }
    }
});
email_input.addEventListener('blur', function() {
    // display empty error when email input loses focus while empty
    if(email_input.value === ''){
        email_input_error.innerHTML = "The field email is required.";
    }
});

newsletter_form.addEventListener("reset", function() {
    // clear all errors on form reset
    checkbox_error.innerHTML = "";
    email_input_error.innerHTML = "";
});