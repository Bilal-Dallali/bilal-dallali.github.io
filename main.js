/* NAVBAR COLLAPSE */
const menuBurger = document.querySelector(".burger")

const navLinks = document.querySelector(".links")

menuBurger.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu")
})


/* NAVBAR SHADOW */
window.addEventListener('scroll', function() {
    const navBar = this.document.querySelector(".navbar")
    if (this.window.pageYOffset > 0) {
        navBar.style.boxShadow = "var(--navbar-shadow)"
        navBar.style.height = "80px"
        navLinks.style.top = "80px"
    } else {
        navBar.style.boxShadow = "none"
        navBar.style.height = "100px"
    }
})