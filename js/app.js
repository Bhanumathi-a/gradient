//nav
let clickFunNav = () => {
  if (!event.target.classList.contains("nav-link")) return
  event.target.classList.add("active")
  let links = document.querySelectorAll(".nav-link")
  for (let i = 0; i < links.length; i++) {
    if (links[i] === event.target) continue
    links[i].classList.remove("active")
  }
}
document.addEventListener("click", clickFunNav, false)

//info dropdown homepage
let infoHome = document.querySelector(".info .title")

let clickFunInfo = () => {
  infoHome.classList.toggle("active")
}

document.addEventListener("click", clickFunInfo)
// console.log(infoHome)

//searchbox
let searchBar = document.getElementById("searchBar")
let clickFunSearch = () => {
  searchBar.classList.add("toggleClass")
}
searchBar.addEventListener("click", clickFunSearch)
window.addEventListener("mouseup", (e) => {
  if (e.target != searchBar && e.target.parentNode != searchBar) {
    searchBar.classList.remove("toggleClass")
  }
})
