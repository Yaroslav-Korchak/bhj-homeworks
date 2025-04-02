const cookieElement = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter');

const speedElement = document.createElement('div');
speedElement.id = 'clicker__speed';
speedElement.style.marginTop = '10px';
speedElement.textContent = 'Скорость клика: 0 клик/с';

cookieElement.parentElement.appendChild(speedElement);

let clicksCount = 0;
let previousClickTime = null;

cookieElement.onclick = function () {
    clicksCount++;
    counterElement.textContent = clicksCount;

    if (cookieElement.width > 200) {
        cookieElement.width = 200;
    } else {
        cookieElement.width = 220;
    }

    const currentTime = new Date().getTime();
    if (previousClickTime !== null) {
        const timeDifference = (currentTime - previousClickTime) / 1000;
        const clickSpeed = (1 / timeDifference).toFixed(2);
        speedElement.textContent = `Скорость клика: ${clickSpeed}`;
    }
    previousClickTime = currentTime;
};

