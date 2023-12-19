let burgerMenu = document.querySelector(".burger-button");
let hiddenUl = document.querySelector(".ulLinks");

burgerMenu.addEventListener("click", function (e) {
    e.preventDefault;
    burgerMenu.classList.toggle("burger-button-active");
    hiddenUl.classList.toggle("activeUl");
});
