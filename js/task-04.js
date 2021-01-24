const decrementBtnRef = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('#counter button[data-action="increment"]');
const resultValueRef = document.querySelector('#value');

let counterValue = 0;
// let counterValue = Number(resultValueRef.textContent);

decrementBtnRef.addEventListener('click', decrement);
incrementBtnRef.addEventListener('click', increment);

function decrement () {
    counterValue -= 1;
    return resultValueRef.textContent = counterValue;
};
function increment () {
    counterValue += 1;
    return resultValueRef.textContent = counterValue;
}