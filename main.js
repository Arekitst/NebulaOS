const topbar = document.querySelector('.topbar')
const puskbtn = document.querySelector('.pusk')

welcomebtn.addEventListener('click', () =>{
    welcomeScreen.style.display = 'none'
    topbar.classList.add('topbaranim')
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
