const preloaderContain = document.createElement('div');
preloaderContain.style.backgraundColor = 'grey';
preloaderContain.style.width = '100vw';
preloaderContain.style.height = '100vh';
preloaderContain.style.position = 'fixed';
preloaderContain.style.top = '0';
preloaderContain.style.display = 'flex';
preloaderContain.style.justifyContent = 'center';
preloaderContain.style.alignItems = 'center';
document.body.appendChild(preloaderContain);

const preloader = document.createElement('div');
preloader.style.height = preloader.style.width = '100px';
preloader.style.animation = 'rotation is infinite';
preloaderContain.appendChild(preloader);

const round = document.createElement('div');
round.style.border = '5px solid green';
round.style.width = round.style.height = '100px';
round.style.boxSizing = 'border-box';
round.style.borderRadius = '100%';
preloader.appendChild(round);

const square = document.createElement('div');
square.style.height = square.style.width = '50px';
square.style.backgroundColor = 'grey';

round.appendChild(square);

document.addEventListener('DOMContentLoaded', function(){
    const preloaderContain = document.createElement('preloaderContain');
    //preloaderContain.style.opacity = '0'
    setTimeout(function(){
        //preloader.style.display = 'none';
    }, 500)
})