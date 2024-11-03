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

document.body.appendChild(preloaderContain);

const preloader = document.createElement('div');
preloader.style.height = preloader.style.width = '70px';
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
styleSheet.tinnerText = `@keyframes rotation {0% { transform: rotate(0deg); }100% { transform: rotate(360deg); }}#preloaderContain {transition: opacity 0.3s ease;}`;
document.head.appendChild(styleShee);

document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloaderContain');
    preloader.style.opacity = '0';
    setTimeout(function() {
        preloader.style.display = 'none';
    }, 300);
});
//12