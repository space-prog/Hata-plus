const openPopup = document.querySelector(".btn button"),
    popupContainer = document.querySelector(".popup"),
    closePopup = document.querySelector(".close-popup"),
    blackBG = document.querySelector(".black")

openPopup.addEventListener("click", function(e) {
    e.preventDefault()
    blackBG.style.display = "block"
    popupContainer.style.display = "block"
})

closePopup.addEventListener("click", function(e) {
    e.preventDefault()
    popupContainer.style.display = "none"
    blackBG.style.display = "none"
})

blackBG.addEventListener("click", function(e) {
  e.preventDefault()
  popupContainer.style.display = "none"
  blackBG.style.display = "none"
})