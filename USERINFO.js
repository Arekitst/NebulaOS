function getSystemData() {
    const userAgent = navigator.userAgent;
    let browserName = "Unknown Browser";
    let osName = "Unknown OS";

    // 1. Определяем браузер
    if (userAgent.indexOf("Chrome") > -1) browserName = "Google Chrome";
    else if (userAgent.indexOf("Firefox") > -1) browserName = "Mozilla Firefox";
    else if (userAgent.indexOf("Safari") > -1) browserName = "Apple Safari";
    else if (userAgent.indexOf("Edge") > -1) browserName = "Microsoft Edge";

    // 2. Определяем ОС (простой способ)
    if (userAgent.indexOf("Win") > -1) osName = "Windows";
    else if (userAgent.indexOf("Mac") > -1) osName = "macOS";
    else if (userAgent.indexOf("Linux") > -1) osName = "Linux";
    else if (userAgent.indexOf("Android") > -1) osName = "Android";
    else if (userAgent.indexOf("like Mac") > -1) osName = "iOS";

    // 3. Выводим на экран
    document.getElementById('userBrowserInf').textContent = "Browser: " + browserName;
    document.getElementById('userOsinf').textContent = "Operating System: " + osName;
    document.getElementById('resolution-info').textContent = "Screen Resolution: " + screen.width + "x" + screen.height;
}

// Запускаем при загрузке
getSystemData();