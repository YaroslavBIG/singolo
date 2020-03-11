const MENU = document.getElementById("header__menu");

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll("a").forEach(el => el.classList.remove('header__menu_active'))
    event.target.classList.add('header__menu_active');
});

const MENU_PORTFOLIO = document.getElementById("porfolio_menu");

MENU_PORTFOLIO.addEventListener('click', (event) => {
    MENU_PORTFOLIO.querySelectorAll("li").forEach(el => el.classList.remove('porfolio__menu_active'))
    event.target.classList.add('porfolio__menu_active');
});