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

/*
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Анимация Balick</title>
    <style>
        body {
            background-color: #000000;
            height: 100vh;
            overflow: hidden;
            margin: 0;
            position: relative;
        }
        #balick {
            width: 50px;
            height: 50px;
            background-color: #ffffff;
            border-radius: 50%;
            position: absolute;
            left: 1px;
            top: 1px;
        }
        .plita {
            width: 10px;
            height: 100px;
            background-color: #ffffff;
            position: absolute;
            top: 200px;
        }
    </style>
</head>
<body>

<script>
    // Создание элемента balick
    const balick = document.createElement('div');
    balick.id = 'balick';
    document.body.appendChild(balick);

    // Создание плит
    const plita1 = document.createElement('div');
    plita1.className = 'plita';
    plita1.style.left = '100px';
    document.body.appendChild(plita1);

    const plita2 = document.createElement('div');
    plita2.className = 'plita';
    plita2.style.left = 'calc(100% - 110px)';
    document.body.appendChild(plita2);

    // Переменные для управления движением
    let positionX = 1;
    let positionY = 1;
    const speed = 5;
    let directionX = 1;
    let directionY = 1;

    function animate() {
        const frameWidth = window.innerWidth;
        const frameHeight = window.innerHeight;

        // Проверка столкновения с границами окна
        if (positionX + balick.offsetWidth >= frameWidth || positionX <= 0) {
            directionX = -directionX;
        }

        if (positionY + balick.offsetHeight >= frameHeight || positionY <= 0) {
            directionY = -directionY;
        }

        // Проверка столкновения с плитами
        const balickRect = balick.getBoundingClientRect();
        const plita1Rect = plita1.getBoundingClientRect();
        const plita2Rect = plita2.getBoundingClientRect();

        // Проверка столкновения с левой плитой
        if (balickRect.right >= plita1Rect.left &&
            balickRect.left <= plita1Rect.right &&
            balickRect.bottom >= plita1Rect.top &&
            balickRect.top <= plita1Rect.bottom) {
            directionX = -directionX; // Отскок от левой плиты
        }

        // Проверка столкновения с правой плитой
        if (balickRect.right >= plita2Rect.left &&
            balickRect.left <= plita2Rect.right &&
            balickRect.bottom >= plita2Rect.top &&
            balickRect.top <= plita2Rect.bottom) {
            directionX = -directionX; // Отскок от правой плиты
        }

        // Обновление позиции
        positionX += speed * directionX;
        positionY += speed * directionY;
        balick.style.left = `${positionX}px`;
        balick.style.top = `${positionY}px`;

        requestAnimationFrame(animate);
    }

    animate();
</script>

</body>
</html>

Найти еще */