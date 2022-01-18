const navBtn = document.getElementById("nav")
const iconBtn = document.getElementById("icon")
const body1 = document.querySelector("body")
iconBtn.addEventListener("click" ,() =>{
navBtn.classList.toggle("show")
body1.classList.add("bnone")
}
)
