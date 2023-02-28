const menuBurger = document.querySelector(".burger")

const navLinks = document.querySelector(".links")

menuBurger.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu")
})

