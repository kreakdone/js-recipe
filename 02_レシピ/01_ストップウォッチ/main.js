const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function() {
  count += 1
  console.log(count)
  display.textContent = count / 100
}

let id = null

button.onclick = function() {
  if (id === null) {
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}

const displayA = document.getElementById("displayA")
const buttonA = document.getElementById("buttonA")
let countA = 0

const countUpA = function() {
  countA += 1
  displayA.textContent = countA / 100
}

buttonA.onclick = function() {
  setInterval(countUpA, 10)
  buttonA.textContent = "stop"
}
