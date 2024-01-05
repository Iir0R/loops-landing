const body = document.querySelector("#body");
const navBtn = document.querySelector("#nav-btn");
const nav = document.querySelector("#nav-ul");

navBtn.addEventListener('click', () => {
    const isOpen = navBtn.getAttribute('aria-expanded') === "true";
    isOpen ? closeMenu() : openMenu()
})

function openMenu() {
    navBtn.setAttribute('aria-expanded', "true");
    nav.setAttribute('data-state', "open");
    body.style.overflow = "hidden";
}

function closeMenu() {
    navBtn.setAttribute('aria-expanded', "false");
    nav.setAttribute('data-state', "closed");
    body.style.overflow = "scroll";
}