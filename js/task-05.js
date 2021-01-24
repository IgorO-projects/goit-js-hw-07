const inputNameRef = document.querySelector('#name-input');
const outputNamRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', (event) => {
    if(event.target.value !== '') {
        outputNamRef.textContent = event.target.value;
        return;
    } 
    outputNamRef.textContent = 'незнакомец';
});