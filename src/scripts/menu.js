const btn = document.querySelector(".hamburger");
const menu = document.querySelector("nav");
const iconHamburger = btn.querySelector('.icon-hamburger');
const iconClose     = btn.querySelector('.icon-close');

if (btn && menu) {
  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("hidden");
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("flex")
      iconHamburger.classList.add("hidden")
      iconClose.classList.remove("hidden")
    } else {
      menu.classList.remove("flex");
      iconClose.classList.add("hidden");
      iconHamburger.classList.remove("hidden");
    }
  })
}