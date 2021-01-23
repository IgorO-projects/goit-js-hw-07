const ingredientList = document.querySelector('#ingredients');

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


const liMaker = (string) => {
    const liItem = document.createElement('li'); 
    liItem.textContent = string;

    return liItem;
};

ingredientList.append(...ingredients.map(liMaker));