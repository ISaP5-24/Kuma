const preloaderContain = document.createElement('div');
preloaderContain.style.backgroundColor = 'grey';
preloaderContain.style.width = '100vw';
preloaderContain.style.height = '100vh';
preloaderContain.style.position = 'fixed';
preloaderContain.style.top = preloaderContain.style.left = '0';
preloaderContain.style.display = 'flex';
preloaderContain.style.justifyContent = 'center';
preloaderContain.style.alignItems = 'center';
document.body.appendChild(preloaderContain);

const preloader = document.createElement('div');
preloader.style.height = preloader.style.width = '70px';
preloader.style.animation = 'rotation is infinite';
preloaderContain.appendChild(preloader);

const round = document.createElement('div');
round.style.border = '5px solid green';
round.style.width = round.style.height = '70px';
round.style.boxSizing = 'border-box';
round.style.borderRadius = '100%';
round.style.animation = 'rotation 1s linear infinite';
preloader.appendChild(round);

const square = document.createElement('div');
square.style.height = square.style.width = '37px';
square.style.backgroundColor = 'grey';
square.style.opacity = '0,5'
round.appendChild(square);

document.addEventListener('DOMContentLoaded', function(){
    const preloaderContain = document.createElement('preloaderContain');
    //preloaderContain.style.opacity = '0'
    setTimeout(function(){
        //preloader.style.display = 'none';
    }, 300)
})