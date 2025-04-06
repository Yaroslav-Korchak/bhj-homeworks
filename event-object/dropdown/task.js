const dropdownValue = document.querySelector('.dropdown__value');
const ulElement = document.querySelector('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownValue.addEventListener('click', () => {
    ulElement.classList.toggle('dropdown__list_active');
});

dropdownItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); // чтобы не было перехода по ссылке

        const selectedText = item.textContent.trim();
        dropdownValue.textContent = selectedText;

        ulElement.classList.remove('dropdown__list_active');
    });
});
