const validationInputRef = document.querySelector('#validation-input');

const textLength = +validationInputRef.dataset.length;

console.log()
validationInputRef.addEventListener('blur', event => {
    if (event.target.value.length === textLength) {
        validationInputRef.classList.add('valid');

        if(validationInputRef.classList.contains('invalid')) {

            validationInputRef.classList.remove('invalid');
        }
    } 
    if (event.target.value.length !== textLength) {
        validationInputRef.classList.add('invalid');
        
        if(validationInputRef.classList.contains('valid')) {
            
            validationInputRef.classList.remove('valid');
        }
    }
});