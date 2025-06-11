// assets/js/post.js
//var codeBlocks = document.querySelectorAll('pre.highlight');

//codeBlocks.forEach(function (codeBlock) {
//    var copyButton = document.createElement('button');
//    copyButton.className = 'copy';
//    copyButton.type = 'button';
//    copyButton.ariaLabel = 'Copy code to clipboard';
//    copyButton.innerText = 'Copy';

//    codeBlock.append(copyButton);

//    copyButton.addEventListener('click', function () {
//        var code = codeBlock.querySelector('code').innerText.trim();
//        window.navigator.clipboard.writeText(code);

//        copyButton.innerText = 'Copied';
//        var fourSeconds = 2000;

//        setTimeout(function () {
//            copyButton.innerText = 'Copy';
//        }, fourSeconds);
//    });
//});

// assets/js/post.js
var codeBlocks = document.querySelectorAll('pre.highlight');

codeBlocks.forEach(function (codeBlock) {
    var copyButton = document.createElement('button');
    copyButton.className = 'copy';
    copyButton.type = 'button';
    copyButton.title = 'Copy';
    copyButton.ariaLabel = 'Copy code to clipboard';
    copyButton.innerText = "📋";

    codeBlock.append(copyButton);

    copyButton.addEventListener('click', function () {
        var code = codeBlock.querySelector('code').innerText.trim();
        window.navigator.clipboard.writeText(code);

        copyButton.innerText = 'Copied ✔️';
        var fourSeconds = 2000;

        setTimeout(function () {
            copyButton.innerClass = 'fa-regular fa-clone';
        }, fourSeconds);
    });
});
