import { galleryItems } from './gallery-items.js';
// Change code below this line

const itemsPreviewMarkup = galleryItems.map(item =>
    `<li class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt='${item.description}'
    />
  </a>
</li>`).join('');
 

const galleryBox = document.querySelector('.gallery');

galleryBox.insertAdjacentHTML('beforeend', itemsPreviewMarkup);

galleryBox.addEventListener('click', openModal);
 

function openModal(event) {

  event.preventDefault();
  
  if (event.target.nodeName !== "IMG") {
    return;
  }
             
  const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}" width=1088 height=723>
        
        </img>
    </div>
    `);
  
  instance.show();
    
  document.addEventListener("keydown", closeEscape);
  
  function closeEscape(event) {
    if (event.code !== 'Escape') {
     return;
     }
    instance.close();
    document.removeEventListener("keydown", closeEscape);
  }
  
}




