const ingredientList = document.querySelector('#ingredients');

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


function createListItem (str) {
    const listItem = document.createElement('li');
    listItem.textContent = str;
    return listItem;
}

ingredientList.append(...ingredients.map(createListItem));