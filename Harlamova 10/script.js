document.addEventListener('DOMContentLoaded', function() {
    const numbersInput = document.getElementById('numbers');
    const sortBtn = document.getElementById('sort-btn');
    const clearBtn = document.getElementById('clear-btn');
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');
    const sortedNumbersDiv = document.getElementById('sorted-numbers');
    const statsDiv = document.getElementById('stats');
    const sortDirectionRadios = document.querySelectorAll('input[name="sort-direction"]');


    function validateInput() {
        errorDiv.textContent = '';
        
        if (numbersInput.value.trim() === '') {
            errorDiv.textContent = 'Пожалуйста, введите числа';
            return false;
        }
        
        return true;
    }


    function parseInput() {
        const input = numbersInput.value;

        const numbersArray = input.replace(/\s/g, '').split(',');

        const parsedNumbers = numbersArray
            .filter(item => item !== '')
            .map(item => parseFloat(item));

        const hasInvalidNumbers = parsedNumbers.some(item => isNaN(item));
        
        if (hasInvalidNumbers || parsedNumbers.length === 0) {
            errorDiv.textContent = 'Пожалуйста, введите только числа, разделённые запятыми';
            return null;
        }
        
        return parsedNumbers;
    }

    function sortNumbers() {
        if (!validateInput()) return;
        
        const numbers = parseInput();
        if (!numbers) return;
        

        let sortDirection = 'asc';
        for (const radio of sortDirectionRadios) {
            if (radio.checked) {
                sortDirection = radio.value;
                break;
            }
        }

        const sortedNumbers = [...numbers];
        if (sortDirection === 'asc') {
            sortedNumbers.sort((a, b) => a - b);
        } else {
            sortedNumbers.sort((a, b) => b - a);
        }

        sortedNumbersDiv.textContent = `Отсортированные числа: ${sortedNumbers.join(', ')}`;

        const count = sortedNumbers.length;
        const sum = sortedNumbers.reduce((acc, num) => acc + num, 0);
        const average = sum / count;
        
        statsDiv.textContent = `Количество чисел: ${count}, Среднее значение: ${average.toFixed(2)}`;

        resultDiv.style.display = 'block';
        resultDiv.style.animation = 'none';
        void resultDiv.offsetWidth; 
        resultDiv.style.animation = 'fadeIn 0.5s ease-out';
        

        debugger;
    }


    function clearAll() {
        numbersInput.value = '';
        errorDiv.textContent = '';
        resultDiv.style.display = 'none';
        document.querySelector('input[value="asc"]').checked = true;
    }


    sortBtn.addEventListener('click', sortNumbers);
    clearBtn.addEventListener('click', clearAll);

    numbersInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') sortNumbers();
    });
});

//check