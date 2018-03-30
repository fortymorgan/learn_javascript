function factorial(n) {
    if (n != 1) {
        return n * factorial(n - 1);
    } else {
        return n;
    }
}

var n = +prompt("Введите число:", "");

alert("Факториал " + n + " равен: " + factorial(n));