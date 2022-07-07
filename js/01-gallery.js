import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const galleryElements = galleryItems.map(
  (el) => `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src=${el.preview}
      data-source="large-image.jpg"
      alt=${el.description}
    />
  </a>
</div>`
);
galleryEl.innerHTML = galleryElements;
