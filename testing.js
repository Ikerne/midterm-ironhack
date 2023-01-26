const hamburger = document.querySelector(".hamburger");
const barmenu = document.querySelector(".barmenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    barmenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    barmenu.classList.remove("active");

}))