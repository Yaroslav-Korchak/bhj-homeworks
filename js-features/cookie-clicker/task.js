// Получаем элементы из DOM
const cookieElement = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter');

// Создаем новый элемент для отображения скорости клика
const speedElement = document.createElement('div');
speedElement.id = 'clicker__speed';
speedElement.style.marginTop = '10px';
speedElement.textContent = 'Скорость клика: 0 клик/с';

// Добавляем элемент скорости в родительский контейнер
cookieElement.parentElement.appendChild(speedElement);

let clicksCount = 0;
let previousClickTime = null;

// Обработчик клика на печеньку
cookieElement.onclick = function () {
    // Увеличение счетчика
    clicksCount++;
    counterElement.textContent = clicksCount;

    // Изменяем размер печеньки
    if (cookieElement.width > 200) {
        cookieElement.width = 200;
    } else {
        cookieElement.width = 220;
    }

    // Расчет скорости клика
    const currentTime = new Date().getTime();
    if (previousClickTime !== null) {
        const timeDifference = (currentTime - previousClickTime) / 1000;
        const clickSpeed = (1 / timeDifference).toFixed(2);
        speedElement.textContent = `Скорость клика: ${clickSpeed} клик/с`;
    }
    previousClickTime = currentTime;
};
