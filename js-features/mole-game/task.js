let deadCount = 0;
let lostCount = 0;

const deadCounter = document.getElementById("dead");
const lostCounter = document.getElementById("lost");

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.classList.contains("hole_has-mole")) {
            deadCount++;
            deadCounter.textContent = deadCount;
        } else {
            lostCount++;
            lostCounter.textContent = lostCount;
        }

        if (deadCount === 10) {
            alert("Победа! Вы поймали 10 кротов!");
            resetGame();
        }

        if (lostCount === 5) {
            alert("Вы проиграли! 5 промахов.");
            resetGame();
        }
    };
}

function resetGame() {
    deadCount = 0;
    lostCount = 0;
    deadCounter.textContent = deadCount;
    lostCounter.textContent = lostCount;
}