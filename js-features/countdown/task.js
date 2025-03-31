const timerElement = document.getElementById("timer");
let timeLeft = parseInt(timerElement.textContent, 10); 

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateTimer() {
    timerElement.textContent = formatTime(timeLeft);
}

async function startTimer() {
    updateTimer(); 

    while (timeLeft > 0) {
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        timeLeft--;
        updateTimer();
    }


    window.location.href = "https://media3.giphy.com/media/55axqWdn0ASJ2/giphy.webp?cid=ecf05e47k25l1eh4r1iiq63r2bxl7mx72n5jitx3jwb9ssml&ep=v1_gifs_search&rid=giphy.webp&ct=g";
    alert("Вы победили в конкурсе!");
}

startTimer();