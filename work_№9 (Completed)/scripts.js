document.body.id = 'bodyR';
const bodyR = document.body;
bodyR.style.backgroundColor = 'black';
bodyR.style.color = 'green';

const preloaderContain = document.createElement('div');
preloaderContain.id = 'preloaderContain'; // Присваиваем идентификатор
preloaderContain.style.backgroundColor = 'black';
preloaderContain.style.width = '100vw';
preloaderContain.style.height = '100vh';
preloaderContain.style.position = 'fixed';
preloaderContain.style.top = '0';
preloaderContain.style.left = '0';
preloaderContain.style.display = 'flex';
preloaderContain.style.justifyContent = 'center';
preloaderContain.style.alignItems = 'center';
preloaderContain.style.zIndex = '10';
document.body.appendChild(preloaderContain);

const preloader = document.createElement('div');
preloader.style.height = preloader.style.width = '70px';
preloader.style.zIndex = '15'
preloaderContain.appendChild(preloader);

const round = document.createElement('div');
round.style.border = '5px solid green';
round.style.width = round.style.height = '70px';
round.style.boxSizing = 'border-box';
round.style.borderRadius = '100%';
round.style.animation = 'rotation 0.4s linear infinite'; // регулировка времени загрузки
preloader.appendChild(round);

const square = document.createElement('div');
square.style.height = '50px' // регулировка ширины загрузки
square.style.width = '35px'; // регулировка длины загрузки
square.style.backgroundColor = 'black';
square.style.display = 'flex';
square.style.position = 'fixed';
square.style.justifyContent = 'center center';
square.style.alignItems = 'center center';
square.style.margin = '20px'
round.appendChild(square);

const styleSheet = document.createElement("style");
styleSheet.innerText = '@keyframes rotation {0%{transform: rotate(0);}60%{transform: rotate(180deg);}100%{transform: rotate(360deg);}}#preloaderContain {transition: opacity 0.3s ease;}';
document.head.appendChild(styleSheet);

document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloaderContain');
    setTimeout(function() {
        preloader.style.display = 'none';
    }, 300);
});
