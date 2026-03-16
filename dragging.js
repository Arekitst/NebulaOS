if (settingsApp) {
    const dragHandle = settingsApp.querySelector('.drag-handle');

    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    dragHandle.addEventListener('mousedown', (e) => {
        isDragging = true;
        e.preventDefault(); 

        const rect = settingsApp.getBoundingClientRect();
        
        startX = e.clientX; 
        startY = e.clientY;
        initialLeft = rect.left;
        initialTop = rect.top;

        console.log("Захват окна! Координаты:", initialLeft, initialTop);

        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
    });

    function drag(e) {
        if (!isDragging) return;
        
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        
        // Двигаем окно
        settingsApp.style.left = (initialLeft + dx) + 'px';
        settingsApp.style.top = (initialTop + dy) + 'px';
        
        // ВАЖНО: Сбрасываем центровку и отступы, которые могут мешать
        settingsApp.style.transform = 'none';
        settingsApp.style.right = 'auto';
        settingsApp.style.margin = '0';
    }

    function stopDrag() {
        if (isDragging) {
            console.log("Окно отпущено");
            isDragging = false;
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', stopDrag);
        }
    }
}