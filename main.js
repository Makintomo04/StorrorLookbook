const galleryImgs = document.querySelectorAll(".slide-img");
const modal = document.querySelector(".modal");
const fullImg = document.querySelector(".full-img");
const ham = document.querySelector(".ham");
const nav = document.querySelector(".nav-links");

galleryImgs.forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("open");
    fullImg.getAttribute("src");
    fullImg.classList.add("open");

    const fullImgSrc = img.getAttribute("data-image");
    fullImg.src = `./img/${fullImgSrc}`;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    fullImg.classList.remove("open");
  }
});

ham.addEventListener("click", () => {
  nav.classList.toggle("show");
});
