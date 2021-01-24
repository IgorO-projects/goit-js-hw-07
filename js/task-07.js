const rangeSwitcherRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

rangeSwitcherRef.addEventListener('input', (event) => {
    // const size = event.target.value;
    // textRef.style.fontSize = `${size}px`;
    textRef.style.fontSize = `${event.target.value}px`;
});