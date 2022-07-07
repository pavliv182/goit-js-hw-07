import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const galleryElements = galleryItems.map(
  (el) => `<li class="gallery__item">
  <a class="gallery__item" href="${el.original}">
        <img 
            class="gallery__image" 
            src="${el.preview}" 
            alt="${el.description}" 
        />
    </a>
</li>`
);
galleryEl.innerHTML = galleryElements.join("");
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
