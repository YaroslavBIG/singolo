//Menu

const menu = document.getElementById('header__menu');
const menu_all = document.querySelectorAll('.scroll');
const menuHeight = 73;

for(const el of menu_all) {
el.addEventListener('click', (event) => {
    event.preventDefault();
    const elHref = event.target.getAttribute('href').substr(1);
    const elPos = getElById(`${elHref}`).offsetTop;
    const scrlTo = elPos - menuHeight;

    el.querySelectorAll('a').forEach(el => el.classList.remove('header__menu_active'))
    event.target.classList.add('header__menu_active');
    window.scrollTo(0, `${scrlTo}`);
    if(event.target.parentElement.classList.contains('menu-mobile_item')) {
        hamburger.classList.remove('hamburger_rotate');
        menu_hamburger.classList.add('hidden');
    }
});
}

const menu_portfolio = document.getElementById('porfolio_menu');

menu_portfolio.addEventListener('click', (event) => {
    menu_portfolio.querySelectorAll('li').forEach(el => el.classList.remove('porfolio__menu_active'))
    event.target.classList.add('porfolio__menu_active');
});

// Menu Active Scroll
document.addEventListener('scroll', onScroll);
function onScroll(event) {
    const currentPos = window.scrollY;
    const menuDiv = document.querySelectorAll('main > div')
    const links = document.querySelectorAll('.scroll > li > a')

    menuDiv.forEach((el) => {
        if(el.offsetTop <= currentPos + menuHeight && (el.offsetTop + el.offsetHeight) > currentPos - menuHeight) {
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

// Slider Screen off
const getElById = (el) => document.getElementById(el);
const eventRemove = (el, cls) => el.classList.remove(cls);
const eventAdd = (el, cls) => el.classList.add(cls);
const displayHidden = 'base-background_hover';
const clicableElements = document.getElementsByClassName('clickable');

for(const el of clicableElements) {
    el.addEventListener('click', (event) => {
        const currentDisplay = event.target.parentElement.classList.contains('hidable') ? event.target.parentElement : event.target.parentElement.previousElementSibling;
        currentDisplay.classList.contains(displayHidden) ? eventRemove(currentDisplay, displayHidden) : eventAdd(currentDisplay, displayHidden);
    });
};

// Slider

const slider = getElById('slider');
const slider_next = getElById('slider_next');
const screenWidth = document.documentElement.clientWidth + 20;
let statusSlider = 0;

const removePropertySlider = () => {
    slider_next.style.removeProperty('left');
    slider_next.style.removeProperty('right');
};

getElById('button_left').addEventListener('click', (event) => {
    if(statusSlider === 0) {
        removePropertySlider()
        slider_next.style.left = `${screenWidth}px`;
        let currentPosSl = screenWidth;
    for (let count = 0; count < screenWidth; count += 1) {
            setTimeout(function(){
                currentPosSl -= 1;
                slider_next.style.left = `${currentPosSl}px`;
            }, 300);
        }
        statusSlider = 1;
    } else {
        removePropertySlider()
        slider_next.style.right = '0px';
        for (let count = 0; count < screenWidth; count += 1) {
            setTimeout(function(){
                slider_next.style.right = `${count}px`;
            }, 300); 
        }
        statusSlider = 0;
    }
});  
  
getElById('button_right').addEventListener('click', (event) => {
    if(statusSlider === 0) {
        removePropertySlider()
        slider_next.style.right = `${screenWidth}px`;
        let currentPosSl = screenWidth;
    for (let count = 0; count < screenWidth; count += 1) {
        setTimeout(function(){
            currentPosSl -= 1;
            slider_next.style.right = `${currentPosSl}px`;
        }, 300);
        }
        statusSlider = 1;
    } else {
        removePropertySlider()
        slider_next.style.left = '0px';
        for (let count = 0; count < screenWidth; count += 1) {
            setTimeout(function(){
                slider_next.style.left = `${count}px`;
            }, 300); 
        }
        statusSlider = 0;
    }
});  

// Portfolio

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

const portfolio = document.querySelectorAll('#portfolio_images > div > div');
const portfolioElQuant = portfolio.length;
const portfolioimgs = document.querySelectorAll('#portfolio_images > div');
const menuPortfolioClick = document.querySelectorAll('.menu_link');
menuPortfolioClick.forEach(el => 
el.addEventListener('click', (event) => {
    portfolio.forEach(el => el.classList.remove('portfolio_border'))
        if(event.target.classList.contains('all')) {
        portfolio.forEach(el => el.remove()); // Remove element DOM Cat ALL
        for (let count = 0; count <= 12; count += 1){
            const el = portfolioimgs[count];
            let divimg = document.createElement('div');
            divimg.className = `portfolio_img-${count + 1} portfolio_img_size`;
            el.firstChild.replaceWith(divimg); // Insert element DOM Cat ALL
        }
        } else { 
        portfolio.forEach(el => el.remove()); // Remove element DOM Other cat
            const randomArr = [];
            while(randomArr.length < 12) {
                const num = randomInteger(1, 12);
                if (!randomArr.includes(num)) randomArr.push(num);
            };
            for (let count = 0; count <= 12; count += 1){
                const el = portfolioimgs[count];
                const divimg = document.createElement('div');
                const counter = randomArr.pop();
                divimg.className = `portfolio_img-${counter} portfolio_img_size`;
                el.firstChild.replaceWith(divimg); // Insert element Other cat
            }
        }
        
    })
);
// border

getElById('portfolio_images').addEventListener('click', (event) => {
    const bordered = document.getElementsByClassName('portfolio_border')
    for(const el of bordered){
        el.classList.remove('portfolio_border')
    }
    event.target.classList.add('portfolio_border');
    console.log(event.target)
});


// submit

function disableScrolling(){
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll = function(){};
}

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
    
    const safetyTextIns = (el, textValue, tit) => {
        insertAdAfterBegin(el, `<p class=${el.id}></p>`);
        const selector = `#${el.id} > p`;

        document.querySelector(selector).textContent = `${tit} ${textValue}`;
    };
    subject.value ?  safetyTextIns(subjMod, subject.value, 'Тема:') : safetyTextIns(subjMod, 'Без темы', '');
                       
    discript.value ? safetyTextIns(discriptMod, discript.value, 'Описание:') : safetyTextIns(discriptMod, 'Без описания', '');
    disableScrolling();
   
});

buttonOk.addEventListener('click', function(event) {
    
    quoteForm.reset();
    modWindow.classList.add('hidden');
    modWindowH2.innerHTML = '';
    modWindow.querySelector('.subj_mod').remove();
    modWindow.querySelector('.discript_mod').remove();
    enableScrolling()
})

// Hamburger
const hamburger = document.getElementById('hamburger__button');
const menu_hamburger = document.getElementById('hamburger__menu');
const blur_hamburger = document.getElementById('blur');
hamburger.addEventListener('click', (event) => {
    hamburger.classList.toggle('hamburger_rotate');
    menu_hamburger.classList.toggle('hidden');
    
    blur_hamburger.addEventListener('click', (event) => {
        hamburger.classList.remove('hamburger_rotate');
        menu_hamburger.classList.add('hidden');
    });
});
