let achraf = document.getElementById("achraf")
let mohamed = document.getElementById("mohamed")
let send = document.getElementById("btn")
let boit = document.getElementById("boit")
let inpt = document.getElementById("inpt")
let clear = document.getElementById("btn2")
let disp = document.querySelector(".dispp")
let user = "achraf"
achraf.addEventListener("click", function () {
  user = "achraf"
  mohamed.style.backgroundColor = "rgb(42, 42, 42)"
  achraf.style.backgroundColor = "rgb(37,211,102)"
  console.log(user)
})
mohamed.addEventListener("click", function () {
  user = "mohamed"
  mohamed.style.backgroundColor = "rgb(37,211,102)"
  achraf.style.backgroundColor = "rgb(42, 42, 42)"
  console.log(user)
})
send.addEventListener("click", function () {
  let time = new Date()
  if (inpt.value !== "") {
    if (user == "achraf") {
      let div = document.createElement("div")
      div.classList.add("achraf-message")
      div.textContent = inpt.value + " " + time.getHours() + ":" + time.getMinutes()
      disp.appendChild(div)
      inpt.value = ""
    }
    if (user == "mohamed") {
      let div = document.createElement("div")
      div.classList.add("mohamed-message")
      div.textContent = inpt.value + " " + time.getHours() + ":" + time.getMinutes()
      disp.appendChild(div)
      inpt.value = ""
    }
  }
})
clear.addEventListener("click", function () {
  disp.innerHTML = ""
})