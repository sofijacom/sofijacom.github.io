// By Sofiya
// assets/js/post.js

var codeBlocks = document.querySelectorAll('pre.highlight');

codeBlocks.forEach(function (codeBlock) {
    var copyButton = document.createElement('button');
    copyButton.className = 'copy';
    copyButton.type = 'button';
    copyButton.title = 'Copy';
    copyButton.ariaLabel = 'Copy code to clipboard';
    copyButton.innerHTML = '<i class = "fa-regular fa-clone"></i>';
    
    codeBlock.append(copyButton);

    copyButton.addEventListener('click', function () {
        var code = codeBlock.querySelector('code').innerText.trim();
        window.navigator.clipboard.writeText(code);

        {
        holdtext.innerText = copytext.innerText;
        Copied = holdtext.createTextRange();
        Copied.execCommand(“Copy”);
        }
        copyButton.innerHTML = 'Copied <i class = "fa-solid fa-check"></i>';
        var twourSeconds = 2000;

        setTimeout(function () {
            copyButton.innerHTML = '<i class = "fa-regular fa-clone"></i>';
        }, twourSeconds);
    });
});

// assets/js/post.js
// var codeBlocks = document.querySelectorAll('pre.highlight');

// codeBlocks.forEach(function (codeBlock) {
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
//            copyButton.innerText = "Copy";
//        }, fourSeconds);
//    });
// });
