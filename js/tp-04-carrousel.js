const img = document.querySelector("img");
img.addEventListener("click", jeclick);
const animaux = [
  "images/cat.jpg",
  "images/dog.jpg",
  "images/fish.jpg",
  "images/hummingbird.jpg",
];
let imagecourante = 0;
function jeclick() {
  imagecourante++;
  if (imagecourante == animaux.length) {
    imagecourante = 0;
  }
  img.src = animaux[imagecourante];
}
