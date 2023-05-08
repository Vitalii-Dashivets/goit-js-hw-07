import { galleryItems } from './gallery-items.js';
// Change code below this line


const itemsPreviewMarkup = galleryItems.map(item =>
 `<li class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      alt='${item.description}'
    />
  </a>
</li>`).join('');


const optionsSet = {
    captionDelay: 250,
    captionsData: 'alt',
    animationSpeed: 300,
    swipeTolerance: 50,
    fadeSpeed: 300,
    scrollZoomFactor: 0.1,
}  

const galleryBox = document.querySelector('.gallery');
galleryBox.insertAdjacentHTML('beforeend', itemsPreviewMarkup);


let gallery = new SimpleLightbox('.gallery a',  optionsSet);

gallery.on('show.simplelightbox', function () {
    
  });

 
