const btnDarkMode = document.querySelector(".dark-mode__btn");

btnDarkMode.onclick = function(){
    btnDarkMode.classList.toggle("dark-mode__btn-active")
    document.body.classList.toggle("dark")
}