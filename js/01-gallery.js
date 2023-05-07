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
const galleryLink = document.querySelector('.gallery__link');
galleryLink.addEventListener('click', openModal);

function openModal(event) {
    event.preventDefault();
    
//     if (event.target.nodeName !== "IMG") {
//     return;
//   }
    // const currentImageLittle = event.target.currentSrc;
    //  console.log(event.currentTarget);
    // console.dir(event.currentTarget);
    // const galleryItem=galleryItems.find(item=>item.preview===currentImageLittle)
    const currentImageBig = event.currentTarget.href;
    console.log(currentImageBig);
    
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${currentImageBig}">
        
        </img>
    </div>
`);

instance.show();

}
