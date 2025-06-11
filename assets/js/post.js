// assets/js/post.js
var codeBlocks = document.querySelectorAll('pre.highlight');

codeBlocks.forEach(function (codeBlock) {
    var copyButton = document.createElement('button');
    copyButton.className = 'copy';
    copyButton.type = 'button';
    copyButton.ariaLabel = 'Copy code to clipboard';
    copyButton.innerText = '';

    codeBlock.append(copyButton);

    copyButton.addEventListener('click', function () {
        var code = codeBlock.querySelector('code').innerText.trim();
        window.navigator.clipboard.writeText(code);

        copyButton.innerText = '✔️';
        var fourSeconds = 2000;

        setTimeout(function () {
            copyButton.innerText = '';
        }, fourSeconds);
    });
});
