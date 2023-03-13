/* NAVBAR COLLAPSE */
const menuBurger = document.querySelector(".burger")
const burgerSpan1 = document.querySelector(".burger-span-1")
const burgerSpan2 = document.querySelector(".burger-span-2")
const burgerSpan3 = document.querySelector(".burger-span-3")
const navLinks = document.querySelector(".links")

menuBurger.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu")
    burgerSpan1.classList.toggle("burger-span-4")
    burgerSpan2.classList.toggle("burger-span-5")
    burgerSpan3.classList.toggle("burger-span-6")
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

/* TEXT ANIMATIONS */

const txtAnim = document.querySelector(".txt-anim")

new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 20
})
.typeString(" Web")
.pauseFor(1000)


//.pause(1000)
.deleteChars(4)
.typeString(" d'applications iOS")
.pauseFor(2000)
.start()