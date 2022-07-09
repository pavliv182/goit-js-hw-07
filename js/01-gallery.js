import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const galleryElements = galleryItems.map(
  (el) => `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`
);
galleryEl.innerHTML = galleryElements.join("");

galleryEl.addEventListener("click", (event) => {
  if (event.target.nodeName === "IMG") {
    event.preventDefault();

    const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
  `);

    instance.show();

    galleryEl.addEventListener("keydown", closeModal);

    function closeModal(event) {
      if (event.code === "Escape") {
        instance.close();
        galleryEl.removeEventListener("keydown", closeModal);
      }
    }
  }
});

// galleryEl.addEventListener("click", (event) => {
//   const instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}" width="800" height="600">
//   `);
//   console.log("instance");
//   if (event.target.nodeName === "IMG") {
//     event.preventDefault();
//     instance.show();
//     galleryEl.addEventListener("keydown", closeModal);
//   }

//   function closeModal(event) {
//     // console.log("closeModal");
//     if (event.code === "Escape") {
//       instance.close();
//       galleryEl.removeEventListener("keydown", closeModal);
//     }
//   }
// });
