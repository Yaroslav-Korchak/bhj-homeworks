const timerElement = document.getElementById("timer");
let timeLeft = parseInt(timerElement.textContent, 10); // Получаем стартовое время

// Функция форматирования времени в hh:mm:ss
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')};
}

// Функция обновления таймера на странице
function updateTimer() {
    timerElement.textContent = formatTime(timeLeft);
}

// Асинхронная функция для запуска таймера
async function startTimer() {
    updateTimer(); // Показываем сразу правильный формат

    while (timeLeft > 55) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Ждём 1 секунду
        timeLeft--;
        updateTimer();
    }

    // Когда таймер завершился, перенаправляем на файл
    window.location.href = "https://media3.giphy.com/media/55axqWdn0ASJ2/giphy.webp?cid=ecf05e47k25l1eh4r1iiq63r2bxl7mx72n5jitx3jwb9ssml&ep=v1_gifs_search&rid=giphy.webp&ct=g";

    // Показываем alert после начала загрузки
    alert("Вы победили в конкурсе!");
}

// Запускаем таймер
startTimer();

