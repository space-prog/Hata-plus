const openPopup = document.querySelector(".btn button"),
    popupContainer = document.querySelector(".popup"),
    closePopup = document.querySelector(".close-popup"),
    blackBG = document.querySelector(".black"),
    dark = document.querySelector(".dark-bgc"),
    burger = document.querySelector(".burger"),
    menu = document.querySelector(".menu-burger"),
    cancel = document.querySelector(".cancel")

openPopup.addEventListener("click", function (e) {
    e.preventDefault()
    blackBG.style.display = "block"
    popupContainer.style.display = "block"
})

closePopup.addEventListener("click", function (e) {
    e.preventDefault()
    popupContainer.style.display = "none"
    blackBG.style.display = "none"
})

blackBG.addEventListener("click", function (e) {
    e.preventDefault()
    popupContainer.style.display = "none"
    blackBG.style.display = "none"
})

burger.addEventListener("click", function () {
    menu.style.left = "0";
    dark.style.display = "block"
})

function cancelBurger() {
    menu.style.left = "-100%";
    dark.style.display = "none"
}
cancel.addEventListener("click", cancelBurger)
dark.addEventListener("click", cancelBurger)