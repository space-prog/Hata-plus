const openPopup = document.querySelector(".btn button"),
    popupContainer = document.querySelector(".popup"),
    closePopup = document.querySelector(".close-popup"),
    blackBG = document.querySelector(".black"),
    dark = document.querySelector(".dark-bgc"),
    burger = document.querySelector(".burger"),
    menu = document.querySelector(".menu-burger"),
    cancel = document.querySelector(".cancel"),
    indexImg = document.querySelectorAll(".indexImg"),
    phone = document.querySelector(".input_phone").value,
    // email = document.querySelector("input_phone").value,
    patterPhone = /^\+380\d{9}$/,
    // patternMail = /^[A-Za-z0-9]+([.\-_][A-Za-z0-9]+)*@[A-Za-z0-9]+([.\-][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/gi,
    formRg = document.getElementById("formTg")

formRg.addEventListener("submit", function (e) {
    if (phone) {
        patterPhone.test(phone)
        if (patterPhone.test(phone)) {
            
        } else {
            e.preventDefault()
            return false
        }
    }
})
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

dark.onclick = () => {
    popupImg.style.display = "none"
    popupImg.style.width = ""
    popupImg.style.height = ""
    popupImg.style.top = ""
    popupImg.style.left = ""
    popupImg.style.transform = "translate(0, 0)"
}

indexImg.forEach(img => {
    img.addEventListener("click", function () {
        let imgWidth = Math.ceil(img.getBoundingClientRect().width + 8),
            imgHeight = Math.ceil(img.getBoundingClientRect().height + 8),
            imgX = Math.ceil(img.getBoundingClientRect().x + 8),
            imgY = Math.ceil(img.getBoundingClientRect().y + 8),
            xPercent = (imgX * 100) / window.innerWidth,
            yPersent = (imgY * 100) / window.innerHeight
        console.log(imgWidth, imgHeight, xPercent, yPersent, )
        popupImg.src = this.src
        popupImg.style.display = "block"
        popupImg.style.top = `${yPersent}%`
        popupImg.style.left = `${xPercent}%`
        popupImg.style.width = `${imgWidth}rem`
        popupImg.style.height = `${imgHeight}rem`
        dark.style.display = "block"
        let interval = setInterval(() => {
            popupImg.style.left = `50%`
            popupImg.style.top = `50%`
            popupImg.style.transform = `translate(-50%, -50%)`
            clearInterval(interval)
        }, 1)
    })
})

cancel.addEventListener("click", cancelBurger)
dark.addEventListener("click", cancelBurger)