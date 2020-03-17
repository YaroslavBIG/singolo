const menu = document.getElementById('header__menu');

menu.addEventListener('click', (event) => {
    menu.querySelectorAll('a').forEach(el => el.classList.remove('header__menu_active'))
    event.target.classList.add('header__menu_active');
});

const menu_portfolio = document.getElementById('porfolio_menu');

menu_portfolio.addEventListener('click', (event) => {
    menu_portfolio.querySelectorAll('li').forEach(el => el.classList.remove('porfolio__menu_active'))
    event.target.classList.add('porfolio__menu_active');
});




const getElById = (el) => document.getElementById(el);
const getQuerySelector = (el) => document.querySelector(el);
const eventRemove = (el) => event.target.classList.remove(el);
const eventAdd  = (el) => event.target.classList.add(el);
const displayHidden = 'base-background_hover';
// Screen off
getElById('base_horisontal').addEventListener('click', (event) => {
    getQuerySelector('#base_horisontal > img').classList.contains(displayHidden) ? eventRemove(displayHidden) : eventAdd(displayHidden);
});

getElById('base_vertical').addEventListener('click', (event) => {
    getQuerySelector('#base_vertical > img').classList.contains(displayHidden) ? eventRemove(displayHidden) : eventAdd(displayHidden);
});

getElById('base_vertical_next').addEventListener('click', (event) => {
    getQuerySelector('#base_vertical_next > img').classList.contains(displayHidden) ? eventRemove(displayHidden) : eventAdd(displayHidden);
});

getElById('base__small_left').addEventListener('click', (event) => {
    getQuerySelector('#base__small_left > img').classList.contains(displayHidden) ? eventRemove(displayHidden) : eventAdd(displayHidden);
});

getElById('base__small_right').addEventListener('click', (event) => {
    getQuerySelector('#base__small_right > img').classList.contains(displayHidden) ? eventRemove(displayHidden) : eventAdd(displayHidden);
});

// Slider
const screenSize = 1022;
const slider = getElById('slider');
const slider_next = getElById('slider_next');
getElById('button_left').addEventListener('click', (event) => {
    console.log('click left');
    slider.classList.toggle("hidden");
    slider_next.classList.toggle("hidden");
    //for (let count = 0; count <= screenSize; count += 1) {
    //    getElById('slider').style.right = `${count}px`
    //}
});  

getElById('button_right').addEventListener('click', (event) => {
    console.log('click right')
    slider.classList.toggle("hidden");
    slider_next.classList.toggle("hidden");
    //for (let count = 0; count < screenSize; count += 1) {
    //  getElById('slider').style.left = `${count}px`
    //}
});  
// Portfolio

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

const portfolio = document.querySelectorAll('#portfolio_images > div > div')
const portfolioElQuant = portfolio.length

menu_portfolio.addEventListener('click', (event) => {
    for(const el of portfolio) {
        for(let count = 1; count <= portfolioElQuant; count += 1) {
            const classLst = el.classList;
            const cls = `portfolio_img-${count}`;
            classLst.remove(cls);
        }
    };
//all selector
    if(event.target.classList.contains('all')) {
        portfolio.forEach(el => el.classList.remove('portfolio_border'))
        for(let count = 1; count <= portfolioElQuant; count += 1) {
            const classLst = document.querySelector(`#portfolio_images > div:nth-child(${count}) > div`).classList
            const cls = `portfolio_img-${count}`
            classLst.add(cls)
            }
        } else { //otherCat
        let arrImg = [];
        portfolio.forEach(el => el.classList.remove('portfolio_border'))
        for(const el of portfolio) {
            const classLst = el.classList
            for (let count = 1; count <= portfolioElQuant; count += 1) {
                const cls = `portfolio_img-${count}`
                if(classLst.contains(cls)) {
                    classLst.remove(cls)
                }
            }
        }
        
        for(let count = 0; count < portfolioElQuant; count += 1) {
        
        let elem = portfolio[count];
        const classLst = elem.classList;
        let value = randomInteger(1, portfolioElQuant);
        if(arrImg.includes(value)) {
            value = randomInteger(1, portfolioElQuant);
        } else {
            classLst.add(`portfolio_img-${value}`);
            arrImg.push(value);
        }
    }
    

}
});

// border

getElById('portfolio_images').addEventListener('click', (event) => {
    portfolio.forEach(el => el.classList.remove('portfolio_border'))
    event.target.classList.add('portfolio_border');
});