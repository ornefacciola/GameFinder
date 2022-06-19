const form = document.querySelector('form');
const validEmail = document.querySelector('input[name="email"]');
const validPass = document.querySelector('input[name="password"]');


const inputs = [validEmail, validPass]; 

  
let isFormValid = false; 
let isValidationOn= false;

const resetElm = (elm) => { //if it is not invalid anymore, we will remove the invalid border and hide the alert. 
    elm.classList.remove("invalid");
    elm.nextElementSibling.classList.add("hidden");
}

const invalidateElm = (elm) => { //if the input is invalid 
    elm.classList.add("invalid"); //we fill the border 
    elm.nextElementSibling.classList.remove("hidden"); //we remove the hidden message to show it 
}
const validateInputs = () => { //here we will check if it is correct or not 
    if (!isValidationOn) return; //if it is false 
    
    isFormValid = true; //now it is true and we are going to check the info 
    inputs.forEach(resetElm); 
    
    if (!validEmail.value) {  //if the email is empty 
        isFormValid=false; //the validation is not correct
        invalidateElm(validEmail); //we show that it is not valid. 
    }
    
    if (!validPass.value) {
        isFormValid=false;
        invalidateElm(validPass);
        //minimum password length validation  
    }
    if (validPass.length < 8) {
        document.getElementById("error_hint").innerHTML = "Password length must be atleast 8 characters"; 
        isFormValid=false;
        invalidateElm(validPass)
    }
    if (validPass.length < 15) {
        document.getElementById("error_hint").innerHTML = "Password length must not exceed 15 characters"; 
        isFormValid=false;
        invalidateElm(validPass)
    }
}


inputs.forEach(input => { //everytime an input is clicked we must start validating them 
    input.addEventListener("input", () => {
        validateInputs();
    })
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    isValidationOn = true; //the validation must be true to submit 
    validateInputs();
    if (isFormValid) { 
        window.location.replace("../HTML/mainPage.html")

    }
});

validEmail.addEventListener("input", () => {
    validateInputs();
});