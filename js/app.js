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
// show page on click
let MainNav = ["Home", "Class", "Creation", "FAQ"]
let visibleDivId = null
function toggleVisibility(divId) {
  if (visibleDivId === divId) {
  } else {
    visibleDivId = divId
  }
  hideNonVisibleDivs()
}
function hideNonVisibleDivs() {
  let i, divId, div
  for (i = 0; i < MainNav.length; i++) {
    divId = MainNav[i]
    div = document.getElementById(divId)
    if (visibleDivId === divId) {
      div.style.display = "flex"
    } else {
      div.style.display = "none"
    }
  }
}

//info dropdown homepage
let infoHome = document.querySelector(".info .title")
let clickFunInfo = () => {
  infoHome.classList.toggle("active")
}
document.addEventListener("click", clickFunInfo)

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

// fetch json creative names
let creativeFirstName = document.querySelector(".creativeName .firstName")
let creativeLastName = document.querySelector(".creativeName .lastName")

fetch("json/creative.json")
  .then((response) => response.json())
  .then((obj) => {
    console.log(obj.firstName)
    creativeFirstName.innerHTML = obj.firstName
    // creativeLastName.innerHTML = obj.lastName
  })
  .catch((error) => console.error("Something went wrong!"))
