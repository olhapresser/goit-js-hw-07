function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');


/* КНОПКА - Створення */

createButton.addEventListener('click', (evt) => {

    /* значення в input, воно має бути в межах від 1 до 100 включно */

  const inputData = input.value;
  const amount =+ inputData;
  if (!(inputData >= 1 && inputData <= 100)) {
    return
  } else {
    createBoxes(amount);
   input.value = '';

  };
  return amount;
}
)


/* КНОПКА - Очищення */
destroyButton.addEventListener('click', () => {
    destroyBoxes();
});


 /* функція для рендеру елементів */

  function createBoxes(amount) {
  
    destroyBoxes();
    

    let size = 30;

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.appendChild(box);
        
        size += 10;
    }
  }

/* функція для очищення елементів */
   
function destroyBoxes() {
  boxes.innerHTML = '';
}