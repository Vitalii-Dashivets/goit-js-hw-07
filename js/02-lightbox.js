import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const itemsPreviewMarkup = galleryItems.map(item =>
 `<li class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      alt=${item.description}
    />
  </a>
</li>`).join('');


   

const galleryBox = document.querySelector('.gallery');
galleryBox.insertAdjacentHTML('beforeend', itemsPreviewMarkup);


var gallery = new SimpleLightbox('.gallery', { captionDelay: 250, captionsData: 'alt' });
// const gallery = $('.gallery').simpleLightbox();

gallery.on('show.simplelightbox', function (event) {
    event.preventDefault();
    console.log("click");
  gallery.open();
  });

 
// console.log(gallery);