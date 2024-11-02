//Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, маленькие – на большие, а цифры – на знак нижнего подчеркивания.
const b = `1234567890`
let s = "";
function correction(str) {
    for (let i = 0; i < str.length; i++) {
        if (b.includes(str[i])){
            s += "_"
        }
        else if (str[i] === str[i].toUpperCase()) { //UpperCase Установить верхний регистр
            s += str[i].toLowerCase();       //LowerCase Установить нижний регистр
        }
        else{
            s += str[i].toUpperCase();
        }
    }
}
let a = prompt("Введите любой текст");
correction (a);
alert (s);