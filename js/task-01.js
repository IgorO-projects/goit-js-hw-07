const mainListRef = document.querySelector('#categories');
const allCategories = mainListRef.children;
const categoryList = document.querySelectorAll('.item > ul');

console.log(`В списке ${allCategories.length} категории.`);

// const copyAllCategories = [...allCategories];
const copyAllCategories = Array.from(allCategories);

copyAllCategories.forEach((item, i) => {

    console.log('категория:', item.firstElementChild.textContent);
    console.log('Количество элементов:', categoryList[i].children.length);
});

