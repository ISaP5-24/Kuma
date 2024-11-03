const preloaderContain = document.createElement('div');
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
//preloader.style.animation = 'rotation 1s linear infinite';
preloaderContain.appendChild(preloader);

const round = document.createElement('div');
round.style.border = '5px solid green';
round.style.width = round.style.height = '70px';
round.style.boxSizing = 'border-box';
round.style.borderRadius = '100%';
//round.style.backgroundColor = 'red';
round.style.animation = 'rotation 1s linear infinite';

preloader.appendChild(round);

const square = document.createElement('div');
square.style.height = '50px'
square.style.width = '35px'; // регулировка длины загрузки
square.style.backgroundColor = 'black';
square.style.display = 'flex';
square.style.position = 'fixed';
square.style.justifyContent = 'center center';
square.style.alignItems = 'center center';
square.style.margin = '20px'
round.appendChild(square);

document.addEventListener('DOMContentLoaded', function(){
    const preloader = document.getElementById('preloaderContain');
    preloader.style.opacity = '0';
    setTimeout(function(){
        preloader.style.display = 'none';
    }, 300)
})
