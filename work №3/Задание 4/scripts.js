//Написать функцию, которая преобразует названия css-стилей с дефисом в название в СamelСase стиле: font-size в fontSize, background-color в backgroundColor , text-align в textAlign.
function toCamelCase(cssStyle) {
    let words = cssStyle.split('-'); //split для разбития текста на массив слов

    let result = words[0]; // Удаление второго слова и оставляем 1 слово

    for (let i = 1; i < words.length; i++) {
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1); // charAt берёт только первую букву в слове
    }                                                                   // slice Выбирает все буквы после указанного (1)

    return result;
}
css = prompt("Введите 2 слова с символом `-` между ними")
alert (toCamelCase(css))
//toCamelCase
//document.write(toCamelCase('font-size '));
//document.write(toCamelCase('background-color '));
//document.write(toCamelCase('text-align '));