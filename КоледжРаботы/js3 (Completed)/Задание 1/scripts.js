//Написать функцию, которая принимает строку и выводит статистику о ней: 
//количество букв, количество цифр и количество других знаков.
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '1234567890'
let l = 0;
let n = 0;
let o = 0;
function statistics (str){
    for (i = 0; i < str.length; i++){
        if (letters.includes(str[i])){
            l++;
            console.log(`${str[i]} - это буква`);
        }
        else if (numbers.includes(str[i])){
            n++;
            console.log(`${str[i]}  - это цифра`);
        }
        else {
            o++;
            console.log(`${str[i]} - это символ`);
        }
    };
    return {l,n,o}
}
statistics (prompt("Text"));
document.write (`Букв= ${l}. Цифр= ${n}. Символов= ${o}`)