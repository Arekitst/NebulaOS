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
const aboutosset = document.querySelector('.aboutosset')
const systemset = document.querySelector('.systemset')
const systemsetbtn = document.getElementById('Systemsetbtn')
const aboutossetbtn = document.getElementById('aboutossetbtn')
const loading_screen = document.querySelector('.loading-screen')


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

const loadlench = () => (Math.floor(Math.random() * (9000 - 3000 + 1)) + 3000);

const loadlenchAnim =() => loadlench - 1000
poweronbtn.addEventListener('click', () => {
    loading_screen.classList.add('active');
    loading_screen.style.display = 'flex'
     setTimeout(() =>{
       
        loading_screen.classList.remove('.active')
        loading_screen.style.display = 'none'
        
    }, loadlench);
     setTimeout(() => {
            loading_screen.classList.add('animationsClose')
        }, loadlenchAnim);

        setTimeout(() => {
            
            mainScreen.style.display = 'block'
    topbar.style.display = 'flex'
    puskMenu.style.display = 'flex'
    document.body.classList.remove('blackbody')
    poweronbtn.style.opacity = '0'
        }, 1000);
        console.log(loadlench)
        loading_screen.classList.remove('animationsClose')
    
    

    
});

restartbtn.addEventListener('click',() => {
    loading_screen.classList.add('active');
    loading_screen.style.display = 'flex'
      setTimeout(() =>{
       
        loading_screen.classList.remove('active')
        loading_screen.style.display = 'none'
        
    }, loadlench);
     setTimeout(() => {
            loading_screen.classList.add('animationsClose')
        }, loadlenchAnim);
        
        setTimeout(() => {
           welcomeScreen.style.display = 'flex'
    puskMenu.classList.remove('active'); 
        }, 1000);

        loading_screen.classList.remove('animationsClose')
    
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
        aboutosset.classList.remove('active');
        aboutosset.style.position = 'absolute';
        systemset.classList.remove('active');
        systemset.style.position = 'absolute'
        styleset.style.position = "absolute"
        systemset.style.position = 'absolute';
        mainset.style.position = 'static'
        console.log('Переключено на Main');
    }
});

// Клик по кнопке Style в Aside
document.getElementById('stylesetbtn').addEventListener('click', () => {
    // Прячем всё, кроме Style
    mainset.style.position = "absolute";
    systemset.style.position = 'absolute';
    aboutosset.style.position = 'absolute';
    styleset.style.position = 'static';

    // Добавляем классы для прозрачности (как у тебя в CSS)
    mainset.classList.add('active'); 
    styleset.classList.add('active');
    systemset.classList.remove('active');
    aboutosset.classList.remove('active');
    
    mainsetActive = false; 
    console.log('Переключено на Style');
});

systemsetbtn.addEventListener('click', () => {
    // Прячем всё, кроме System
    mainset.style.position = "absolute";
    styleset.style.position = 'absolute';
    aboutosset.style.position = 'absolute';
    systemset.style.position = 'static';

    // Управляем видимостью
    mainset.classList.add('active');
    systemset.classList.add('active'); // Включаем видимость System
    styleset.classList.remove('active');
    aboutosset.classList.remove('active');

    mainsetActive = false; 
    console.log('Переключено на System');
});
aboutossetbtn.addEventListener('click', () => {
    mainset.style.position = "absolute";
    styleset.style.position = 'absolute';
    systemset.style.position = 'absolute';
    aboutosset.style.position = 'static';

    mainset.classList.add('active');
    aboutosset.classList.add('active'); // Показываем About
    styleset.classList.remove('active');
    systemset.classList.remove('active');

    mainsetActive = false;
    console.log('Переключено на About OS');
});