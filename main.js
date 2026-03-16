const topbar = document.querySelector('.topbar')
const puskbtn = document.querySelector('.pusk')
const turnoffbtn = document.querySelector('.power-offbtn')
const poweronbtn = document.querySelector('.power-onbtn')
const restartbtn = document.querySelector('.restart')
const setingsbtn = document.querySelector('.settingsbtn')
const settingsApp = document.querySelector('.settingsapp')
const closesettingsbtn = document.querySelector('.closebtn')
const mainset = document.querySelector('.mainsetingsarticle')
const styleset = document.querySelector('.styleset')

welcomebtn.addEventListener('click', () =>{
    welcomeScreen.style.display = 'none';
     puskMenu.style.display = 'flex';
    topbar.classList.add('topbaranim');
});

const puskMenu = document.querySelector('.puskmenu');

puskbtn.addEventListener('click', () => {
    
    puskMenu.classList.toggle('active');
});
window.addEventListener('mousemove', (e) =>{
    const x = e.clientX;
    const y = e.clientY;
    galaxies.forEach((img, index) => {
        const speed = (index + 1) * 50;
        const moveX = (x - window.innerWidth / 2) / speed;
        const moveY = (y- window.innerHeight / 2) / speed;
        img.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
turnoffbtn.addEventListener('click', () => {
    mainScreen.style.display = 'none'
    topbar.style.display = 'none'
    puskMenu.classList.remove('active');
    document.body.classList.add('blackbody')
    poweronbtn.style.opacity = '1'
});
poweronbtn.addEventListener('click', () => {
    mainScreen.style.display = 'block'
    topbar.style.display = 'flex'
    puskMenu.style.display = 'flex'
    document.body.classList.remove('blackbody')
    poweronbtn.style.opacity = '0'
});

restartbtn.addEventListener('click', () => {
    welcomeScreen.style.display = 'flex'
    puskMenu.classList.remove('active');
});

setingsbtn.addEventListener('click', () => {

        puskMenu.classList.remove('active');

    settingsApp.style.display = 'flex';
    settingsApp.classList.add('animations');
});

closesettingsbtn.addEventListener('click', () => {
    
    settingsApp.classList.add('animationsClose');

    
    settingsApp.addEventListener('animationend', function handler() {
        
        settingsApp.style.display = 'none';
        
        
        settingsApp.classList.remove('animationsClose');
        
        
        settingsApp.removeEventListener('animationend', handler);
    }, { once: true }); 
});

let mainsetActive = true; // Переменная-состояние

// Клик по кнопке Main в Aside
document.getElementById('mainsetbtn').addEventListener('click', () => {
    if (!mainsetActive) { // Если сейчас НЕ активен Main
        mainset.classList.remove('active'); // Убираем класс, который прятал
        styleset.classList.remove('active'); // Убираем класс, который показывал Style
        mainsetActive = true;
        console.log('Переключено на Main');
    }
});

// Клик по кнопке Style в Aside
document.getElementById('stylesetbtn').addEventListener('click', () => {
    if (mainsetActive === true) { // Если сейчас активен Main
        mainset.classList.add('active'); // Добавляем класс (в CSS он должен прятать)
        styleset.classList.add('active'); // Добавляем класс (в CSS он должен показывать)
        mainsetActive = false; 
        console.log('Переключено на Style');
    }
});

