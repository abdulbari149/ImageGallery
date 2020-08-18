let images = document.querySelectorAll(".grid-images");
const containerGrid = document.querySelector(".grid-container");
const fullImage = document.querySelector(".full-image");
const fullImageContainer = document.querySelector(".full-image-container");
const removeBtn = document.querySelector(".removeBtn");
const imageSliderContainer = document.querySelector(".image-slider");
let imagesToSlide = document.querySelectorAll(".image-slider img");
let caption = document.querySelectorAll("figcaption");
let i = 0;
images.forEach(function (image) {
  image.onclick = function () {
    fullImage.src = image.src;
    fullImageContainer.classList.add("open");
    imageSliderContainer.classList.add("open");
    fullImageContainer.classList.add("zoom");
    currentImage(image);
  };
});
imagesToSlide.forEach((sliderImage) => {
  sliderImage.onclick = function () {
    fullImage.src = sliderImage.src;
    currentImage(fullImage);
  };
});

function currentImage(picture) {
  imagesToSlide.forEach((sliderImage) => {
    let sliderItem = sliderImage.parentElement;
    if (sliderImage.src === picture.src) {
      sliderItem.classList.add("active");
    } else {
      sliderItem.classList.remove("active");
    }
  });
}

removeBtn.addEventListener("click", (e) => {
  fullImageContainer.classList.remove("open");
  imageSliderContainer.classList.remove("open");
});
