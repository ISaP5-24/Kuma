document.addEventListener('DOMContentLoaded', function() {
    const numbersInput = document.getElementById('numbers');
    const sortBtn = document.getElementById('sort-btn');
    const clearBtn = document.getElementById('clear-btn');
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');
    const sortedNumbersDiv = document.getElementById('sorted-numbers');
    const statsDiv = document.getElementById('stats');
    const sortDirectionRadios = document.querySelectorAll('input[name="sort-direction"]');

    // Функция проверки ввода
    function validateInput() {
        errorDiv.textContent = '';
        
        if (numbersInput.value.trim() === '') {
            errorDiv.textContent = 'Пожалуйста, введите числа';
            return false;
        }
        
        return true;
    }

    // Функция преобразования ввода в массив чисел
    function parseInput() {
        const input = numbersInput.value;
        // Удаляем все пробелы и разбиваем по запятым
        const numbersArray = input.replace(/\s/g, '').split(',');
        
        // Фильтруем пустые строки и преобразуем в числа
        const parsedNumbers = numbersArray
            .filter(item => item !== '')
            .map(item => parseFloat(item));
        
        // Проверяем, все ли элементы - числа
        const hasInvalidNumbers = parsedNumbers.some(item => isNaN(item));
        
        if (hasInvalidNumbers || parsedNumbers.length === 0) {
            errorDiv.textContent = 'Пожалуйста, введите только числа, разделённые запятыми';
            return null;
        }
        
        return parsedNumbers;
    }

    // Функция сортировки
    function sortNumbers() {
        if (!validateInput()) return;
        
        const numbers = parseInput();
        if (!numbers) return;
        
        // Получаем выбранное направление сортировки
        let sortDirection = 'asc';
        for (const radio of sortDirectionRadios) {
            if (radio.checked) {
                sortDirection = radio.value;
                break;
            }
        }
        
        // Сортируем массив
        const sortedNumbers = [...numbers];
        if (sortDirection === 'asc') {
            sortedNumbers.sort((a, b) => a - b);
        } else {
            sortedNumbers.sort((a, b) => b - a);
        }
        
        // Выводим результат
        sortedNumbersDiv.textContent = `Отсортированные числа: ${sortedNumbers.join(', ')}`;
        
        // Вычисляем статистику
        const count = sortedNumbers.length;
        const sum = sortedNumbers.reduce((acc, num) => acc + num, 0);
        const average = sum / count;
        
        statsDiv.textContent = `Количество чисел: ${count}, Среднее значение: ${average.toFixed(2)}`;
        
        // Показываем результат с анимацией
        resultDiv.style.display = 'block';
        resultDiv.style.animation = 'none';
        void resultDiv.offsetWidth; // Trigger reflow
        resultDiv.style.animation = 'fadeIn 0.5s ease-out';
        
        // Устанавливаем точку останова для отладки
        debugger;
    }

    // Функция очистки
    function clearAll() {
        numbersInput.value = '';
        errorDiv.textContent = '';
        resultDiv.style.display = 'none';
        document.querySelector('input[value="asc"]').checked = true;
    }

    // Обработчики событий
    sortBtn.addEventListener('click', sortNumbers);
    clearBtn.addEventListener('click', clearAll);
    
    // Поддержка Enter для сортировки
    numbersInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') sortNumbers();
    });
});