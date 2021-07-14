const figure = document.getElementById("figure")

figure.onclick = function() {
  figure.classList.toggle("rounded")
}
const squareButton = document.getElementById("square-button")
const circleButton = document.getAnimations("circle-button")

circleButton.onclick = function() {
  figure.classList.add("rounded")
}

squareButton.onclick = function() {
  figure.classList.remove("rounded")
}
