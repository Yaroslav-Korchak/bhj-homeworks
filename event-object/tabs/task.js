document.addEventListener('DOMContentLoaded', function () {
    // Получаем все контейнеры вкладок на странице
    const tabContainers = document.querySelectorAll('.tabs');

    tabContainers.forEach(function (tabContainer) {
        // Находим все вкладки и контент внутри данного контейнера
        const tabs = tabContainer.querySelectorAll('.tab');
        const contents = tabContainer.querySelectorAll('.tab__content');

        // Переключение вкладок
        tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                // Находим индекс кликнутой вкладки
                const tabIndex = Array.from(tabs).indexOf(tab);

                // Снимаем классы активности с всех вкладок и контента
                tabs.forEach(function (tab) {
                    tab.classList.remove('tab_active');
                });
                contents.forEach(function (content) {
                    content.classList.remove('tab__content_active');
                });

                // Добавляем классы активности на выбранную вкладку и соответствующий контент
                tab.classList.add('tab_active');
                contents[tabIndex].classList.add('tab__content_active');
            });
        });
    });
});
