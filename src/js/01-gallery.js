// Add imports above this line
import { galleryItems } from "./gallery-items";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
const conteinerGallary = document.querySelector(".gallery");
const markupImg = createMarkupImg(galleryItems);
conteinerGallary.insertAdjacentHTML("beforeend", markupImg);

function createMarkupImg(item) {
  return galleryItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"
      </a>`,
    ""
  );
  item.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  showCounter: false,
});

console.log(galleryItems);
console.log(lightbox);
