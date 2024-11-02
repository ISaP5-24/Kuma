// Получение элементов из DOM по их идентификаторам
const buttonleft = document.getElementById(`left`); // Кнопка для перехода влево
const buttonright = document.getElementById(`right`); // Кнопка для перехода вправо
const countcontain = document.getElementById(`countcontain`); // Контейнер для отображения номера текущего слайда
const slidesline = document.getElementById(`slidesline`); // Контейнер для слайдов

const colSlides = 4; // Общее количество слайдов (количество колонок)

// Переменная для отслеживания текущего слайда
let i = 0;

// Обработчик события для кнопки "влево"
buttonleft.addEventListener('click', function() {
    // Если текущий индекс не равен 0 - мы можем перейти на предыдущий слайд
    if (!(i == 0)) {
        i++; // Увеличиваем индекс
        countcontain.innerText = -i + 1; // Обновляем текст с номером текущего слайда
        console.log(+1); // Логируем - это может быть полезно для отладки
        // Сдвигаем контейнер со слайдами влево на 80% ширины окна просмотра
        slidesline.style.left = `${80 * i}vw`;
    }
});

// Обработчик события для кнопки "вправо"
buttonright.addEventListener("click", function() {
    // Если текущий индекс не соответствует последнему слайду - мы можем перейти на следующий слайд
    if (!(-i == colSlides - 1)) {
        i--; // Уменьшаем индекс
        countcontain.innerText = -i + 1; // Обновляем текст с номером текущего слайда
        console.log(-1); // Логируем - это может быть полезно для отладки
        // Сдвигаем контейнер со слайдами вправо на 80% ширины окна просмотра
        slidesline.style.left = `${80 * i}vw`;
    }
});