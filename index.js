let raid = document.getElementById("raid")
let mohammed = document.getElementById("mohammed")
let send = document.getElementById("btn")
let boit = document.getElementById("boit")
let inpt = document.getElementById("inpt")
let clear = document.getElementById("btn2")
let disp = document.querySelector(".dispp")
let user = "raid"
raid.addEventListener("click",function(){
 user = "raid"
 mohammed.style.backgroundColor = "rgb(42, 42, 42)"
 raid.style.backgroundColor = "rgb(165, 165, 165)"
 console.log(user)
})
mohammed.addEventListener("click",function(){
 user = "mohammed"
 mohammed.style.backgroundColor = "rgb(165, 165, 165)"
 raid.style.backgroundColor = "rgb(42, 42, 42)"
 console.log(user)
})
send.addEventListener("click",function(){
 let time = new Date()
 if(inpt.value !== ""){
 if(user == "raid"){
 let div = document.createElement("div")
 div.classList.add("raid-message")
 div.textContent = inpt.value +" "+ time.getHours()+ ":"+ time.getMinutes()
 disp.appendChild(div)
 inpt.value = ""
 }
 if(user == "mohammed"){
  let div = document.createElement("div")
  div.classList.add("mohammed-message")
  div.textContent = inpt.value +" "+time.getHours()+ ":"+ time.getMinutes()
  disp.appendChild(div)
  inpt.value = ""
  }}
})
clear.addEventListener("click", function(){
 disp.innerHTML = ""
})