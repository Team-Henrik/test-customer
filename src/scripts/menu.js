const btn = document.querySelector(".hamburger");
const menu = document.querySelector("nav ul");

if (btn && menu) {
  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("hidden");
  })
}