const validationInputRef = document.querySelector('#validation-input');
const textLength = +validationInputRef.dataset.length;

validationInputRef.addEventListener('blur', validator);

function validator (event) {
    
    if (event.target.value.length === textLength) {
        if(validationInputRef.classList.contains('invalid')) {
            validationInputRef.classList.remove('invalid');
        }
        validationInputRef.classList.add('valid');
    } 

    if (event.target.value.length !== textLength) {
        if(validationInputRef.classList.contains('valid')) {
            validationInputRef.classList.remove('valid');
        }
        validationInputRef.classList.add('invalid');
    }
};