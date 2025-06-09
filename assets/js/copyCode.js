const codeBlocks = document.querySelectorAll('.highlighter-rouge');
const copyCodeButtons = document.querySelectorAll('.copy-code');
copyCodeButtons.forEach((copyCode, index) => {
    const code = codeBlocks[index].innerText;
    copyCode.addEventListener('click', () => {
        // Скопировать код в буфер обмена пользователя
        window.navigator.clipboard.writeText(code);
        // Обновить текст кнопки
        copyCode.innerText = 'Copy';
        // (Опционально) добавить класс для стилизации кнопки
        copyCode.classList.add('copied');
        // Через 2 секунды сбросить кнопку в исходное состояние
        setTimeout(() => { copyCode.innerText = originalText; copyCode.classList.remove('copied'); }, 2000);
    });
});
