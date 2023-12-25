const categories = document.querySelectorAll('.item');
const nuberOfCateg = categories.length;
console.log(`Number of categories: ${nuberOfCateg}`);

categories.forEach((list) => {

    const catTitle = list.querySelector('h2');
    const catTitleText = catTitle.textContent;

    console.log(`Category: ${catTitleText}`); 

    const numbEl = list.querySelectorAll('li');
    const numbElLeng = numbEl.length;
    console.log(`Elements: ${numbElLeng}`);

});


