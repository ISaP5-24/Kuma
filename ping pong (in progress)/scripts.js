document.body.style.backgroundColor = '#000000';  
document.body.style.height = '100vh';  
document.body.style.overflow = 'hidden';  
document.body.style.margin = '0';  
document.body.style.position = 'relative';  

const balick = document.createElement('div');  
balick.style.width = balick.style.height = '5vw';  
balick.style.backgroundColor = '#ffffff';  
balick.style.borderRadius = '50%';  
balick.style.position = 'absolute'; 
balick.style.left = '50vw'
balick.style.top = '50vh'

document.body.appendChild(balick);  

const plita = document.createElement('div');  
plita.style.width = '1vw';  
plita.style.height = '8vh';  
plita.style.backgroundColor = '#7FFF00';  
plita.style.position = 'absolute';  
plita.style.left = '1vw';  
plita.style.top = '1vh';  

document.body.appendChild(plita);  

const plita2 = document.createElement('div');  
plita2.style.width = '1vw';  
plita2.style.height = '8vh';  
plita2.style.backgroundColor = '#FF0000';  
plita2.style.position = 'absolute';  
plita2.style.right = '2vw';  
plita2.style.top = '1vh';  

document.body.appendChild(plita2);  

let positionX = 400
let positionY = 400

let frameWidth = document.body.offsetWidth;  
let frameHeight = document.body.offsetHeight;  

const counter = [5, 3];  
let direction = [1, -1];  

let score = [0, 0];
window.addEventListener('resize', () => {  
    frameWidth = document.body.offsetWidth;  
    frameHeight = document.body.offsetHeight;  
    positionX = 400
    positionY = 400
});  


setTimeout(() => {  
    setInterval(() => {  
        const balickRect = balick.getBoundingClientRect();  
        const plita1Rect = plita.getBoundingClientRect();  
        const plita2Rect = plita2.getBoundingClientRect();  

        if (balick.offsetLeft + balick.offsetWidth >= frameWidth || balick.offsetLeft <= 0) {  
            direction[0] = -direction[0];  
        }  

        if (balick.offsetTop + balick.offsetHeight >= frameHeight || balick.offsetTop <= 0) {  
            direction[1] = -direction[1];  
        }  

        if (balickRect.right >= plita1Rect.left && balickRect.left <= plita1Rect.right &&  
            balickRect.bottom >= plita1Rect.top && balickRect.top <= plita1Rect.bottom) {  
            direction[0] = -direction[0];  // Отскок от левой плиты  
        }  

        if (balickRect.right >= plita2Rect.left && balickRect.left <= plita2Rect.right &&  
            balickRect.bottom >= plita2Rect.top && balickRect.top <= plita2Rect.bottom){  
            direction[0] = -direction[0]; // Отскок от правой плиты  
        }  
        //console.log(balickRect.left)   
        positionX += counter[0] * direction[0];  
        positionY += counter[1] * direction[1];  
        balick.style.left = `${positionX}px`;  
        balick.style.top = `${positionY}px`;  
        
        if (balickRect.left == 0){
            score[0] = score[0] + 1
            sc.innerText = "Игрок 1 - " + score [0]
            positionX = 400
            positionY = 400
            return;
        }

        if (balickRect.right >= frameWidth){
            score[1] = score[1] + 1
            sc2.innerText = "Игрок 2 - " + score [1]
            positionX = 400
            positionY = 400
        }
    }, 10);  
}, 500);

document.addEventListener('keydown', function(event) {  
    if (event.key === 'w' || event.key === 'W' || event.key === 'ц' || event.key === 'Ц'&& parseInt(plita.style.top) > 0) {  
        plita.style.top = `${parseInt(plita.style.top) - 45}px`; // Перемещение вверх  
    }  
    if (event.key === 's' || event.key === 'S' || event.key === 'ы' || event.key === 'Ы' && parseInt(plita.style.top) < frameHeight - 90) {  
        plita.style.top = `${parseInt(plita.style.top) + 45}px`; // Перемещение вниз  
    }  
});

document.addEventListener('keydown', function(event) {  
    if (event.key === 'ArrowUp' && parseInt(plita2.style.top) > 0) {  
        plita2.style.top = `${parseInt(plita2.style.top) - 45}px`; // Перемещение вверх для правой плиты  
    }  
    if (event.key === 'ArrowDown' && parseInt(plita2.style.top) < frameHeight - 90) {  
        plita2.style.top = `${parseInt(plita2.style.top) + 45}px`; // Перемещение вниз для правой плиты   
    } 
});

const sb = document.createElement('div')
sb.style.display = 'flex'
sb.style.justifyContent = 'center'
sb.style.padding = '20px 20px'

document.body.appendChild(sb)

const sc = document.createElement('h3');  
sc.style.margin = '0'
sc.style.fontSize = '3vw';
sc.style.textAlign = 'center';
sc.style.color = '#7FFF00'
sc.style.width = 'auto'
sb.appendChild(sc);

const sc2 = document.createElement('h3');  
sc2.style.margin = '0'
sc2.style.fontSize = '3vw';
sc2.style.textAlign = 'center';
sc2.style.color = '#F1F122'
sc2.style.width = 'auto'
sc2.style.marginLeft = '100px'
sb.appendChild(sc2);