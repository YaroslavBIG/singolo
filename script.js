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



const IPHONE_H = document.getElementById('base_horisontal');
const base_horisontal = document.querySelector("#base_horisontal > img");
IPHONE_H.addEventListener('click', (event) => {
    base_horisontal.classList.contains('base-background_hover') ? event.target.classList.remove('base-background_hover') : event.target.classList.add('base-background_hover');
});


const IPHONE_V = document.getElementById('base_vertical');
const base_vertical = document.querySelector("#base_vertical > img");
IPHONE_V.addEventListener('click', (event) => {
    base_vertical.classList.contains('base-background_hover') ? event.target.classList.remove('base-background_hover') : event.target.classList.add('base-background_hover');
});
