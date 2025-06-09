const codeBlocks = document.querySelectorAll('.highlighter-rouge');
const copyCodeButtons = document.querySelectorAll('.copy-code-button');
copyCodeButtons.forEach((copyCodeButton, index) => {
const code = codeBlocks[index].innerText;
copyCodeButton.addEventListener('click', () => {
// Скопировать код в буфер обмена пользователя
window.navigator.clipboard.writeText(code);
// Обновить текст кнопки
copyCodeButton.innerText = 'copied';
// (Опционально) добавить класс для стилизации кнопки
copyCodeButton.classList.add('copied');
// Через 2 секунды сбросить кнопку в исходное состояние
setTimeout(() => { copyCodeButton.innerText = originalText; copyCodeButton.classList.remove('copied'); }, 2000);
});
});
