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

const div1 = document.querySelector(".div1");
console.log(div1);
//:etape2/
div1.addEventListener("click", iclick);
function iclick() {
  console.log("je click sur ma div1");
  div1.style.border = " 2px solid black";
  div1.style.height = "150px";
  div1.style.width = "150px";
  div1.style.margin = " 0 0 0 300px";
}
