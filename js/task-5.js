function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const color = document.querySelector('.color'); 

const body = document.querySelector('body');

btn.addEventListener('click', (evt) => {

  const colorNew = getRandomHexColor();
  color.textContent = colorNew;

  body.style.backgroundColor = colorNew;
});