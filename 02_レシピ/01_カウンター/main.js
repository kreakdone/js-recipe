const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")

let count = 0

plusButton.onclick = function() {
  count += 1
  display.textContent = count
}

const herasuButton = document.getElementById("herasu-button")

herasuButton.onclick = function() {
  count -= 1
  display.textContent = count
}
const baiButton = document.getElementById("bai-button")

baiButton.onclick = function() {
  count *= 2
  display.textContent = count
}
