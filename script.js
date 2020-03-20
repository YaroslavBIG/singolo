//Menu

const menu = document.getElementById('header__menu');

document.addEventListener('scroll', onScroll);

menu.addEventListener('click', (event) => {
    menu.querySelectorAll('a').forEach(el => el.classList.remove('header__menu_active'))
    event.target.classList.add('header__menu_active');
});

const menu_portfolio = document.getElementById('porfolio_menu');

menu_portfolio.addEventListener('click', (event) => {
    menu_portfolio.querySelectorAll('li').forEach(el => el.classList.remove('porfolio__menu_active'))
    event.target.classList.add('porfolio__menu_active');
});
// Menu Scroll
function onScroll(event) {
    const currentPos = window.scrollY;
    const menuDiv = document.querySelectorAll('main > div')
    const links = menu.querySelectorAll('a')

    menuDiv.forEach((el) => {
        if(el.offsetTop <= currentPos && (el.offsetTop + el.offsetHeight) > currentPos) {
            links.forEach((a) => {
                a.classList.remove('header__menu_active');
                if (el.getAttribute('id') === 'contacts' && a.getAttribute('href') == '#quote') {
                    a.classList.add('header__menu_active')
                }
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('header__menu_active')
                }
            })
        }



    })



}


// Slider
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
//const screenSize = 1022;
const slider = getElById('slider');
const slider_next = getElById('slider_next');
let statusSlider = 1;
let sliderPos = 'right';
const screenWidth = document.documentElement.clientWidth
getElById('button_left').addEventListener('click', (event) => {
    
    console.log('click left');
    //slider.classList.toggle("hidden");
    //slider_next.classList.toggle("hidden");
    if(statusSlider === 0) {
        statusSlider = 1;
        if(sliderPos === 'left') {
            slider_next.style.right = '0px';
            slider.style.right = `${screenWidth}px`
            sliderPos = 'right';
        } 
        if(sliderPos === 'right') {
            slider_next.style.left = '0px';
            slider.style.left = `${screenWidth}px`
            sliderPos = 'left';
        }  

        if(statusSlider === 1) {
            statusSlider = 0;
            if(sliderPos === 'left') {
                slider.style.right = '0px';
                slider_next.style.right = `${screenWidth}px`
                sliderPos = 'right'
            } 
            if(sliderPos === 'right') {
                slider.style.left = '0px';
                slider_next.style.left = `${screenWidth}px`
                sliderPos = 'left';
            }  
        }
    }
});  

getElById('button_right').addEventListener('click', (event) => {
    console.log('click right')
    //slider.classList.toggle("hidden");
    //slider_next.classList.toggle("hidden");
    
    const screenWidth = document.documentElement.clientWidth
    if(statusSlider === 0) {
        statusSlider = 1;
        for (let count = 0; count <= screenWidth; count += 1) {
            slider_next.style.removeProperty('left')
            slider_next.style.removeProperty('right')
            slider.style.right = `${count}px`
        }
        
    } else {
        statusSlider = 0;
        for (let count = 0; count < screenWidth; count += 1) {
            slider.style.removeProperty('left')
            slider.style.removeProperty('right')
            slider_next.style.left = `${count}px`
          
        }
        
    }
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


// submit

const quoteForm = document.getElementById('quote'); // Form
const subject = document.getElementById('subject'); // Subject input
const discript = document.getElementById('discript'); // Discription input
const modWindow = document.querySelector('.modal_overlay'); // Overlay
const modWindowH2 = document.getElementById('h2_mod'); // H2 Modal
const subjMod = document.getElementById('subj_mod');    // Subject Modal
const discriptMod = document.getElementById('discript_mod'); // Discription modal
const buttonOk = document.getElementById('button_ok'); 

const insertAdAfterBegin = (el, htmlText) => el.insertAdjacentHTML('afterBegin', htmlText); // insertAdjacentHTML foo

quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    modWindow.classList.remove('hidden');

    insertAdAfterBegin(modWindowH2, 'Письмо отправлено'); //Status

    subject.value ?  insertAdAfterBegin(subjMod, `<p id="subjectModal"><strong>Тема: </strong>${subject.value}</p>`) : insertAdAfterBegin(subjMod, '<span id="subjectModal">Без темы</span>');
    
    discript.value ? insertAdAfterBegin(discriptMod, `<p id="discriptionModal"><strong>Описание: </strong>${discript.value}</p>`) : insertAdAfterBegin(discriptMod, '<span id="discriptionModal">Без описания</span>');

});

buttonOk.addEventListener('click', function(event) {
    quoteForm.reset();
    modWindow.classList.add('hidden');
    modWindowH2.innerHTML = '';
    modWindow.querySelector('#discriptionModal').remove();
    modWindow.querySelector('#subjectModal').remove();
    
    
})