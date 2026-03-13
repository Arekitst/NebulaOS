const greatings = document.getElementById('greatings');
const timetext = document.getElementById('timeinwelcome');
const welcomebtn = document.getElementById('Welcomebtn')
const welcomeScreen = document.querySelector('.welcomescreen');
const mainScreen = document.querySelector('.mainscreen');
const galaxies = document.querySelectorAll('.welcomescreen img');


function updateUI() {
    const now = new Date();
    const hours = now.getHours();

    
    if (hours >= 5 && hours < 12) {
        greatings.textContent = "Good Morning";
    } else if (hours >= 12 && hours < 17){
        greatings.textContent = "Good Afternoon";
    } else {
        greatings.textContent = "Good Evening";
    }

   
    timetext.textContent = now.toLocaleTimeString();
}


setInterval(updateUI, 1000);


updateUI();

welcomebtn.addEventListener('click', () =>{
    welcomeScreen.style.display = 'none'
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
