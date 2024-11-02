const Button = document.getElementById('myButton') 
const myImput = document.getElementById('myImput')
const my_Imput = document.getElementById('my_Imput')
const myH = document.getElementById('myH')
const myH2 = document.getElementById('myH2')

//ЗАДАНИЕ 1
//function buttonClick() {
//
//   let value = myImput.value;
//   console.timeLog(value);
//   let i = 0; 
//   let y = 0;
//   while (i < value) { // выводит 0-3
//   i++;  
// }
// while (y < i) {
//   y = '#'  
//   myH.innerText = y.repeat(i);
//   y++; 
// }
//}

//ЗАДАНИЕ 2
//function buttonClick() {
//   
//   let value = myImput.value;
//   console.timeLog(value);
//   let i = value;  
//    while (i) { 
//      alert  (i);
//      i--;
//}
//}





//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// <input type="Text" id="my_Imput"> 
// вставить в dz10.09.html под пхожей строкой и до 5 задания использовать
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!






//ЗАДАНИЕ 3 
//function buttonClick() {
//   let value = myImput.value; 
//   let value_2 = my_Imput.value;
//   console.timeLog(value);
//   console.timeLog(value_2);
//   let i = value; 
//   let r = value_2; 
//   myH.innerText = i ** r;
//}


//ЗАДАНИЕ 4
//function buttonClick() {
//  let value = myImput.value; 
//  let value_2 = my_Imput.value;
//  console.timeLog(value);
//  console.timeLog(value_2);
//  let n = value;
//  let m = value_2;
//var divisors = [];    //divisors будет заполнен всеми делителями числа n                     
//    for (var i = 1; i <= n; i++) { //код перебирает все числа от 1 до n включительно
//        if (n % i === 0) {         //Если n делится на i без остатка i добавляется в массив 
//            divisors.push(i);
//        }
//        myH.innerText = divisors;
//    }
//
//var divisorss = []; 
//    for (var i = 1; i <= m; i++) {
//        if (m % i === 0) {
//            divisorss.push(i);
//        }
//        myH2.innerText = divisorss;
//    }
//    return divisors;
//    return divisorss;
//}




//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// <input type="Text" id="my_Imput"> 
// желательно убрать строку в dz10.09.html под пхожей строкой
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




//ЗАДАНИЕ 5

//function buttonClick() {
//     let value = myImput.value; 
//     console.timeLog(value);
//     let number = value; //ввод числа
//     let numberFactorial = number; 
//         while(number > 1){   //цикл
//             numberFactorial = numberFactorial * (number-1); //factorial
//             number--;
//         }
//         myH.innerText = numberFactorial; //vivod
//
//   }


// ЧАСТЬ 2 ЗАДАНИЕ 1 
//let number;
//do {
//  number = parseInt(prompt("2 + 2 * 2", ""));
//} while ((number) != (2 + 2 * 2));

// ЧАСТЬ 2 ЗАДАНИЕ 2
//function buttonClick() {
//     let value = myImput.value; 
//     console.timeLog(value);
//     let i = value; //ввод числа
//     do {
//      i = i/2;
//     } while(i >= 50)
//  myH.innerText = i;
//}


// ЧАСТЬ 3 ЗАДАНИЕ 1
function buttonClick() {
       let value = myImput.value; 
       console.timeLog(value);
       let num = value; //ввод числа
       for (let i = 1; i <= 100; i++) {
        if (i % num === 0) 
        console.info(i);
          myH.innerText = (i);

       }
}







