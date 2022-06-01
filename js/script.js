// -----------------------------------------------------------------------------------
//  Hamburger menu - Viser meny og endrer ikon

const menuBtn = document.querySelector("#menu-icon");
const menuBtnClose = document.querySelector("#menu-icon__close");
const menu = document.querySelector(".top__nav");

menuBtn.addEventListener("click", () => {
    menu.classList.add("show-menu");
    menuBtn.style.display = "none";
    menuBtnClose.style.display = "block";
})

menuBtnClose.addEventListener("click", () => {
    menu.classList.remove("show-menu");
    menuBtn.style.display = "block";
    menuBtnClose.style.display = "none";
})


// ------------------------------------------------------------------------------------
// Scroll effect - Endrer bakgrunnsfargen på header for bedre kontrast ved scrolling

window.onscroll = function () { scrollFunction() };

function scrollFunction () {
    const headerShadow = document.querySelector("#header-shadow")
    if (document.documentElement.scrollTop > 100) {
        headerShadow.classList.add("header-shadow__scroll");
        scrollDown.style.display = "none";
    } else {
        headerShadow.classList.remove("header-shadow__scroll");
        scrollDown.style.display = "block";
    }
}


// ------------------------------------------------------------------------------------
// Scroller ned på siden

const scrollDown = document.getElementById("scrollDown");
const scrollEnd = document.querySelector("#scrollAnchor");

scrollDown.addEventListener("click", () => {
    scrollEnd.scrollIntoView({ behavior: "smooth" })
})

// ------------------------------------------------------------------------------------
// Scroller opp på siden

const scrollUp = document.querySelector("#scrollUp");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})