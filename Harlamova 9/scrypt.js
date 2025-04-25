function addNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');
    
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Пожалуйста, введите оба числа';
        resultElement.style.color = 'var(--danger-color)';
        return;
    }
    
    const result = num1 + num2;
    resultElement.textContent = `Результат: ${result}`;
    resultElement.style.color = '';
    

    resultElement.style.animation = 'none';
    void resultElement.offsetWidth; 
    resultElement.style.animation = 'fadeIn 0.4s ease-out';
}

function clearScore() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').textContent = '';
}

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<span class="icon">☀️</span> Светлая тема';
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        themeToggle.innerHTML = isDark ? '<span class="icon">☀️</span> Светлая тема' : '<span class="icon">🌙</span> Тёмная тема';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});
//check