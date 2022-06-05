import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const selectGalleryList = document.querySelector('.gallery');
// console.log(selectGalleryList);

const createGaletyElements = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`;
  })
  .join('');

console.log(createGaletyElements);

selectGalleryList.innerHTML = createGaletyElements;
// selectGalleryList.insertAdjacentHTML('beforeend', createGaletyElements);
