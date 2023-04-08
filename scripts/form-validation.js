const checkbox = document.getElementById("privacy-policy-checkbox");
const checkbox_error = document.getElementById("privacy-policy-checkbox-error");

const email_input = document.getElementById("email-input");
const email_input_error = document.getElementById("email-input-error");

const type_inputs = document.getElementsByName("newsletter-type");
const type_input_error = document.getElementById("type-input-error");

const newsletter_form = document.getElementById("footer-newsletter-form");

for(var i = 0; i < type_inputs.length; i++){
    type_inputs[i].addEventListener("change", function() {
        var numberOfCheckedItems = 0;
        for(var j = 0; j < type_inputs.length; j++){
            if(type_inputs[j].checked){
                numberOfCheckedItems++;
            }
        }
        if(numberOfCheckedItems === 0){
            type_input_error.innerHTML = "The field newsletter is required."
        }
        else{
            type_input_error.innerHTML = "";
        }
    });
};

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
    type_input_error.innerHTML = "";
});