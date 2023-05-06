let clickFun = function () {
  if (!event.target.classList.contains("nav-link")) return
  event.target.classList.add("active")
  let links = document.querySelectorAll(".nav-link")
  for (let i = 0; i < links.length; i++) {
    if (links[i] === event.target) continue
    links[i].classList.remove("active")
  }
}
document.addEventListener("click", clickFun, false)
