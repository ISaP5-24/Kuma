// Создаем элемент 'div' для кастомного указателя мыши
const mouse = document.createElement('div');

// Устанавливаем размеры кастомного указателя
mouse.style.width = '3vw'; // Ширина указателя в процентах от ширины окна
mouse.style.height = '5vh'; // Высота указателя в процентах от высоты окна

// Устанавливаем SVG-изображение в качестве фона указателя мыши
mouse.style.backgroundImage = 'url(Curesore.svg)'; // Укажите правильный путь к изображению

// Устанавливаем позицию указателя на фиксированную для перемещения
mouse.style.position = 'fixed';
mouse.style.opacity = '0'; // Начальное значение прозрачности указателя (невидим)

 // Устанавливаем эффект перехода для прозрачности
mouse.style.transition = 'opacity 0.3s'; // Замена запятой на точку в интервале 0.3 секунды

// Центрируем фоновое изображение
mouse.style.backgroundPosition = 'center'; 

// Добавляем элемент указателя в тело документа
document.body.appendChild(mouse);

// Добавляем обработчик событий на движение мыши
document.addEventListener('mousemove', function(event) {
    // Устанавливаем прозрачность указателя на 1 (видимый)
    mouse.style.opacity = '1';

    // Устанавливаем позицию указателя в центр текущей позиции мыши
    // Сдвигаем на половину ширины и высоты указателя, чтобы центрировать его
    mouse.style.left = `${event.clientX - (mouse.offsetWidth / 2)}px`;
    mouse.style.top = `${event.clientY - (mouse.offsetHeight / 2)}px`;

    // Скрываем стандартный курсор
    document.body.style.cursor = 'none';
});

// Добавляем обработчик событий, чтобы скрыть указатель, 
// когда курсор покидает окно браузера
document.addEventListener('mouseleave', function() {
    // Скрываем кастомный указатель
    mouse.style.opacity = '0'; 
    
    // Возвращаем стандартный курсор
    document.body.style.cursor = 'auto'; 
});