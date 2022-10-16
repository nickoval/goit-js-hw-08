// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

console.log('SimpleLightbox', SimpleLightbox);
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const markapGallery = createGallery(galleryItems);

function createGallery(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a>`
    )
    .join('');
}

galleryRef.innerHTML = markapGallery;

new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
