//Menu

const menu = document.getElementById('header__menu');
const menu_all = document.getElementsByClassName('scroll');
const menuHeight = menu.offsetHeight;

document.addEventListener('scroll', onScroll);

menu.addEventListener('click', (event) => {
    event.preventDefault();
    
    const elHref = event.target.getAttribute('href').substr(1);
    const elPos = getElById(`${elHref}`).offsetTop;
    const scrlTo = elPos - menuHeight;

    menu.querySelectorAll('a').forEach(el => el.classList.remove('header__menu_active'))
    event.target.classList.add('header__menu_active');
    window.scrollTo(0, `${scrlTo}`);
});

const menu_portfolio = document.getElementById('porfolio_menu');

menu_portfolio.addEventListener('click', (event) => {
    menu_portfolio.querySelectorAll('li').forEach(el => el.classList.remove('porfolio__menu_active'))
    event.target.classList.add('porfolio__menu_active');
});

// Menu Active Scroll
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
let statusSlider = 0;
//let sliderPos = 'right';

getElById('button_left').addEventListener('click', (event) => {
    
    console.log('click left');
    const screenWidth = document.documentElement.clientWidth + 10;
    if(statusSlider === 0) {
        
            slider_next.style.removeProperty('left');
            slider_next.style.removeProperty('right');
        for (let count = 0; count <= screenWidth; count += 1) {
            setTimeout(function(){
                slider.style.right = `${count}px`;
            }, 100);
        }
        statusSlider = 1;
    } else {
        
            slider.style.removeProperty('right');
            slider.style.removeProperty('left');
        for (let count = 0; count < screenWidth; count += 1) {
            setTimeout(function(){
                slider_next.style.right = `${count}px`;
            }, 100);
        }
        statusSlider = 0;
    }
});  
  

getElById('button_right').addEventListener('click', (event) => {
    console.log('click right')
    console.log(statusSlider)
    //slider.classList.toggle("hidden");
    //slider_next.classList.toggle("hidden");
    
    const screenWidth = document.documentElement.clientWidth
    if(statusSlider === 0) {
        
        console.log(statusSlider)
           slider.style.removeProperty('left');
            slider_next.style.removeProperty('left');
            slider.style.removeProperty('right');
            slider_next.style.removeProperty('right');
            //slider_next.style.right = `${screenWidth}px`;
            slider.style.left = '0px';
        for (let count = 0; count <= screenWidth; count += 1) {
            setTimeout(function(){
               // slider_next.style.right = `${screenWidth - count}px`;
                slider.style.left = `${count}px`;
            }, 300);
        }
        statusSlider = 1;
    } else {
        
        console.log(statusSlider)
        slider.style.removeProperty('right');
        slider_next.style.removeProperty('right');
        slider.style.removeProperty('left');
        slider_next.style.removeProperty('left');
        //slider.style.right = `${screenWidth}px`;
        slider_next.style.left = '0px';
        for (let count = 0; count < screenWidth; count += 1) {
            setTimeout(function(){
               // slider.style.right = `${screenWidth - count}px`;
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
        
        const randomArr = [];
        while(randomArr.length < 12) {
            const num = randomInteger(1, 12);
            if (!randomArr.includes(num)) randomArr.push(num);
        };

        for(let count = 0; count < 12; count += 1) {
            const el = portfolio[count].classList;
            const clsNum = randomArr[count];
            const cls = `portfolio_img-${clsNum}`;
            el.add(cls);
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
// insertAdAfterBegin(subjMod, `<p id="subjectModal"><strong>Тема: </strong>${subject.value}</p>`)
    insertAdAfterBegin(modWindowH2, 'Письмо отправлено'); //Status
    
    const safetyTextIns = (el, textValue, tit) => {
        insertAdAfterBegin(el, `<p class=${el.id}></p>`);
        const selector = `#${el.id} > p`;

        document.querySelector(selector).textContent = `${tit} ${textValue}`;
    };
    subject.value ?  safetyTextIns(subjMod, subject.value, 'Тема:') : safetyTextIns(subjMod, 'Без темы', '');
                       
    discript.value ? safetyTextIns(discriptMod, discript.value, 'Описание:') : safetyTextIns(discriptMod, 'Без описания', '');

});

buttonOk.addEventListener('click', function(event) {
    quoteForm.reset();
    modWindow.classList.add('hidden');
    modWindowH2.innerHTML = '';
    modWindow.querySelector('.subj_mod').remove();
    modWindow.querySelector('.discript_mod').remove();
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
