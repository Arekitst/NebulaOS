const greatings = document.getElementById('greatings');
const timetext = document.getElementById('timeinwelcome');
const welcomebtn = document.getElementById('Welcomebtn')
const welcomeScreen = document.querySelector('.welcomescreen');
const mainScreen = document.querySelector('.mainscreen');
const galaxies = document.querySelectorAll('.welcomescreen img');
const timetext1 = document.querySelector('.time');

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
    timetext1.textContent = now.toLocaleTimeString();
}


setInterval(updateUI, 1000);


updateUI();

