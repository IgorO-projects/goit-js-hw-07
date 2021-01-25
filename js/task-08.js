const inputRef = document.querySelector('#controls > input');
const createBtnRef = document.querySelector('button[data-action="render"]');
const clearBtnRef = document.querySelector('button[data-action="destroy"]');
const divsField = document.querySelector('#boxes');

createBtnRef.addEventListener('click', () => {
    createBoxes(inputRef.value);
});

clearBtnRef.addEventListener('click', () => {
    divsField.innerHTML = '';
    // const allDives = divsField.children;
    // while(allDives.length !== 0) {
    //     divsField.removeChild(allDives[0]);
    // }
})


function createBoxes(amount) {
    for(let i = 0; i < amount; i++) {
        const randomColor = getRandomColor();

        const newDiv = document.createElement('div');
        newDiv.style.backgroundColor = randomColor;
        newDiv.style.width = `${30+i*10}px`;
        newDiv.style.height= `${30+i*10}px`
        divsField.appendChild(newDiv);
    }
};

function getRandomColor () {
    const letters = '0123456789ABCDEF';
    let color = '#'; 
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

