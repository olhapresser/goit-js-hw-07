const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

/*----------1 спосіб -----*/

// const imagArr = images.map(({ url, alt }) => {
  
//   const imagEl = document.createElement("li");

//   const imagPic = document.createElement("img");
//   imagPic.src = url;
//   imagPic.width = 250;
//   imagPic.alt = alt;

//   imagEl.append(imagPic);

//   return imagEl;
// });

// const imagList = document.querySelector('.gallery');

// imagList.append(...imagArr);

// imagList.style.display = 'flex';
// imagList.style.flexWrap = 'wrap';
// imagList.style.justifyContent ='space-around';

/*----------2 спосіб -----*/

const liCreate = (({ url, alt }) => `<li> <img src="${url}" alt="${alt}" width = "300" height = "200" /> </li >`);

const markup = images.map(liCreate).join('');

const imagList = document.querySelector('.gallery');

imagList.style.display = 'flex';
imagList.style.flexWrap = 'wrap';
imagList.style.justifyContent ='space-around';
imagList.insertAdjacentHTML('beforeend', markup);
