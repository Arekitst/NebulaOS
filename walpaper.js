// 1. Проверяем память при старте

const savedBg = localStorage.getItem('nebula_bg');
if (savedBg) {
    // mainScreen и welcomeScreen уже созданы в greatings.js, просто используем их
    mainScreen.style.backgroundImage = `url(${savedBg})`;
    welcomeScreen.style.backgroundImage = `url(${savedBg})`;
}

// 2. Функция для смены и записи в память
function changeAndSave(path) {
    const url = `url(${path})`;
    mainScreen.style.backgroundImage = url;
    welcomeScreen.style.backgroundImage = url;
    localStorage.setItem('nebula_bg', path);
    console.log("Обои обновлены и сохранены: " + path);
}

// 3. Твои клики
document.getElementById('walpaper1').addEventListener('click', () => {
    changeAndSave('Images/NebulaWallpaper1.webp');
});

document.getElementById('walpaper2').addEventListener('click', () => {
    changeAndSave('Images/NebulaWallpaper2.jpg');
});

document.getElementById('walpaper3').addEventListener('click', () => {
    changeAndSave('Images/NebulaWallpaper3.jpg');
});

document.getElementById('walpaper4').addEventListener('click', () => {
    changeAndSave('Images/NebulaWallpaper4.jpg');
});

document.getElementById('walpaper5').addEventListener('click', () => {
    changeAndSave('Images/NebulaWallpaper5.jpg'); 
});