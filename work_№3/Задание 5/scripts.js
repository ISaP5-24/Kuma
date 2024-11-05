//Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру. 
//Например: cascading style sheets в CSS, объектно-ориентированное программирование в ООП.
function Socrashenie (phrase) {
    let a = phrase.split(' ');//Разделение
    let b = '';        //создания пустой строки для результата
    for (let i=0; i<a.length; i++) {
        b += a[i].charAt(0).toUpperCase();
    }
    return b;
}
a = prompt("Введите 3 слова для создания аббревиатуры")
alert (Socrashenie(a))