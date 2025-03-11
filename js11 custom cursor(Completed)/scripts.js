// Создаем элемент 'div' для кастомного указателя мыши
const mouse = document.createElement('div');
mouse.style.width = '3vw'; // Ширина указателя в процентах от ширины окна // Устанавливаем размеры кастомного указателя
mouse.style.height = '5vh'; // Высота указателя в процентах от высоты окна
mouse.style.backgroundImage = 'url(Curesore.svg)'; // Укажите правильный путь к изображению // Устанавливаем SVG-изображение в качестве фона указателя мыши
mouse.style.position = 'fixed';// Устанавливаем позицию указателя на фиксированную для перемещения
mouse.style.opacity = '0'; // Начальное значение прозрачности указателя (невидим)
mouse.style.transition = 'opacity 0.3s'; // Замена запятой на точку в интервале 0.3 секунды // Устанавливаем эффект перехода для прозрачности
mouse.style.backgroundPosition = 'center'; // Центрируем фоновое изображение

// Добавляем элемент указателя в тело документа
document.body.appendChild(mouse);

// Добавляем обработчик событий на движение мыши
document.addEventListener('mousemove', function(event) {
    mouse.style.opacity = '1'; // Устанавливаем прозрачность указателя на 1 (видимый)
    mouse.style.left = `${event.clientX - (mouse.offsetWidth / 2)}px`;// Устанавливаем позицию указателя в центр текущей позиции мыши
    mouse.style.top = `${event.clientY - (mouse.offsetHeight / 2)}px`;// Сдвигаем на половину ширины и высоты указателя, чтобы центрировать его
    document.body.style.cursor = 'none';// Скрываем стандартный курсор
});

// Добавляем обработчик событий, чтобы скрыть указатель, когда курсор покидает окно браузера
document.addEventListener('mouseleave', function() {
    mouse.style.opacity = '0'; // Скрываем кастомный указатель
    document.body.style.cursor = 'auto'; // Возвращаем стандартный курсор
});