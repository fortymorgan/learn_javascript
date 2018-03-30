function fibBinet(n) {
    var fi = (1 + Math.sqrt(5)) / 2;
    var fib = Math.pow(fi, n) / Math.sqrt(5);
    fib = Math.round(fib);
    return fib;
}

var n = +prompt("Введите порядковый номер числа Фибоначчи:", "");

alert("Число Фибоначчи под номером " + n + " равно: " + fibBinet(n));