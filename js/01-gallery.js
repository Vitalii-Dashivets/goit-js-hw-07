import { galleryItems } from './gallery-items.js';
// Change code below this line

const itemsPreviewMarkup = galleryItems.map(item =>
    `<li class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
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
    
    const currentImageBig = event.target.dataset.source;
        
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${currentImageBig}">
        
        </img>
    </div>
`);

  instance.show();

  
  document.addEventListener("keydown", (event => {
  if (event.key !== 'Escape') {
    return;
  }
    instance.close();
    document.removeEventListener("keydown",(event));
}));
  
}

