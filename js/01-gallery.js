import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const createMarkup = galleryItems
  .map(
    (item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", createMarkup);
gallery.addEventListener("click", onclick);

function onclick(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) return;

  const currentImage = e.target;
  const instance = basicLightbox.create(
    `
     <img src="${currentImage.dataset.source}" width="800"/>
    
    `,
    {
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );
  instance.show();

  function closeModal(e) {
    if (e.key === "Escape") {
      instance.close();
      console.log(e.key);
    }
  }
}
