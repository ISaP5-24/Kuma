const buttonContain = document.getElementById('buttonContain');
const output = document.getElementById('output');
const drag = document.getElementById('drag');
const calc = document.getElementById('calc');
const operators = ['+', '-', '*', '/'] 

function moveCalc(event){
    calc.style.left = `${event.clientX - startX}px`;
    calc.style.top = `${event.clientY - startY}px`;
}

let startX, startY;

drag.addEventListener('mousedown', function(event) {
    startX = event.clientX - calc.offsetLeft;
    startY = event.clientY - calc.offsetTop;
    document.addEventListener('mousemove', moveCalc);
});


drag.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', moveCalc);
});


let formula = '';
let otvet = '';

buttonContain.addEventListener('click', function(event){
    if (event.target.value != undefined){ //если кликаем исключительно по кнопкам, то продолжаем. Так мы исключаем написание undefined в строку
        if (event.target.value == '=') { //если целью является кнопка ==, то считаем
            for (i=0; i<formula.length; i++){ //тут мы используем перебор всех символов, и если там есть проценты, то мы их выводим, но не пишем в формулу, для корректного подсчёта
                if (formula[i] == `%`){
                    otvet += ``
                }
                else {
                    otvet += formula[i]
                }
            }
            otvet = new Function('return ' + otvet)(); //собственно считаем и выводим на экран
            formula = otvet;
            output.innerText = formula; // была введена переменная otvet, для правильного вывода ответа, но не записи % для корректного подсчёта
            otvet = '';
        }
        else if (event.target.value == '%') { //при нажатии на % мы используем перебор всех символов
            for (i=0; i<formula.length; i++){
                if (operators.includes(formula[i])){
                    dele = formula.split(formula[i]); // split разделяет всё что мы написали. Для понимания, когда разделять в этой строчке указан -
                    formula += event.target.value; // разделение происходит так, что символ разделяющий убирается
                    output.innerText = formula;
                    formula = dele[0] + formula[i] + ((dele[0]/100)*dele[1]); // поэтому ответ мы записываем с символом, который у нас взят
                    break; // досрочно заканчиваем, так как основное действие выполнено
                }
            }
        }
        else if (event.target.value == '+/-'){
            formula = -formula;
            output.innerText = formula;
        }
        else if (event.target.value == 'AC'){
            formula = '';
            output.innerText = '0';
            otvet = '';
        }
        else if (event.target.value == 'C'){
            function clear(formula) {
                i = formula.length;
                let newformula = formula;
                while (!operators.includes(formula[i]) && !(i == 0)) {
                    i--;
                    newformula = newformula.slice(0, newformula.length -1);
                }
                return newformula;
            }
            formula = clear(formula);
            if (formula == '' || formula === 0 || formula == '0'){ // если в формуле уже ничего нет, то пишем 0
                output.innerText = '0';
            }
            else{
                output.innerText = formula; // если там что-то осталось, то выписываем это что-то
            }
        }
        
        else if (event.target.value == '0' && formula == ''){ // огран на кол-во нулей, если у нас итак стоит 0
            output.innerText = '0';
        }
        else if (event.target.value == '.' && formula == ''){ // если точку нажимает пользователь, то пишется как 0. , а не .
            formula = '0.'
            output.innerText = formula;
        }
        else {
            formula += event.target.value;
            output.innerText = formula;
        }
    }
}) 










