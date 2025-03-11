//4. Запросить 2 числа и найти все общие делители.
let a = Number (prompt("Введите 1 число"))
let b = Number (prompt("введите 2 число"))
for (let i=1; i<=a; i++)
    if (a%i==0){
        if (b%i==0)
            document.write(i)
            document.write(" ")
    }