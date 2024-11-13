document.body.style.backgroundColor = '#000000';  
document.body.style.height = '100vh';  
document.body.style.overflow = 'hidden';
document.body.style.margin = '0';  

const balick = document.createElement('div');  
balick.style.width = balick.style.height = '90px';  
balick.style.backgroundColor = '#ffffff';  
balick.style.borderRadius = '50%';  
balick.style.position = 'absolute';  

document.body.appendChild(balick);  

const plita = document.createElement('div');  
plita.style.width = '10px';  
plita.style.height = '90px';  
plita.style.backgroundColor = '#ffffff';  
plita.style.position = 'absolute';  
plita.style.left = '20px';  
plita.style.top = '300px';  

document.body.appendChild(plita);  

const plita2 = document.createElement('div');  
plita2.style.width = '10px';  
plita2.style.height = '90px';  
plita2.style.backgroundColor = '#ffffff';  
plita2.style.position = 'absolute';  
plita2.style.right = '20px';  
plita2.style.top = '300px';  

document.body.appendChild(plita2);  

let positionX = 1;  
let positionY = 1;  
let frameWidth = document.body.offsetWidth;  
let frameHeight = document.body.offsetHeight;  

const counter = [5, 3];  
let direction = [1, 1];  

window.addEventListener('resize', () => {  
    frameWidth = document.body.offsetWidth;  
    frameHeight = document.body.offsetHeight;  
    positionX = positionY = 1;  
});  

setTimeout(() => {  
    setInterval(() => {  
        if (balick.offsetLeft + balick.offsetWidth >= frameWidth || balick.offsetLeft <= 0) {  
            direction[0] = -direction[0];  
        }  

        if (balick.offsetTop + balick.offsetHeight >= frameHeight || balick.offsetTop <= 0) {  
            direction[1] = -direction[1];  
        }  

        const barrierLeft = plita.offsetLeft + plita.offsetWidth;  
        const barrierRight = plita2.offsetLeft + plita.offsetWidth;  

        if (barrierLeft <= balick.offsetLeft + balick.offsetWidth && balick.offsetTop >= 300) {  
            direction[0] = -direction[0];  
        }  

        if (barrierRight >= balick.offsetLeft && balick.offsetTop >= 300) {  
            direction[0] = -direction[0];  
        }  

        positionX += counter[0] * direction[0];  
        positionY += counter[1] * direction[1];  
        balick.style.left = `${positionX}px`;  
        balick.style.top = `${positionY}px`;  
    }, 10);  
}, 500);