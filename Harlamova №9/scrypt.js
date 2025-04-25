function addNumbers(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 + num2;
    if (isNaN(result)){
        document.getElementById('result').textContent = 'Введите 2 числа'
    }
    else{
        document.getElementById('result').textContent = 'Результат: ' + result;
    }
}
function clearScore(){
    document.getElementById('result').textContent = ''
}

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Проверяем сохранённую тему (если есть)
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = 'Светлая тема';
    }
    
    // Обработчик клика по кнопке
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        // Меняем текст кнопки
        const isDark = document.body.classList.contains('dark-theme');
        themeToggle.textContent = isDark ? 'Светлая тема' : 'Тёмная тема';
        
        // Сохраняем выбор в localStorage
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});