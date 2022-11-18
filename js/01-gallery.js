import { galleryItems } from './gallery-items.js';
// Change code below this line
const listGallery = document.querySelector('.gallery')
const markUp = createGal(galleryItems)
listGallery.innerHTML = markUp
function createGal (galleryItems) {
    return galleryItems.map(({preview, original, description})=>{
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
      </div>`
    }).join('')
}
const imgs = document.querySelector('.gallery__image')
listGallery.addEventListener('click', modalShow) 

function modalShow (evt) {
    if(evt.target.nodeName !== 'IMG') {
        return 
    }
    const instance = basicLightbox.create(
        `
        <img src="${evt.target.dataset.source}" alt="${evt.target.alt}">
    `
)

instance.show()
}
