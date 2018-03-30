function summTo(n) {
    if (n != 1) {
        return n + summTo(n - 1);
    } else {
        return n;
    }
}

var n = +prompt("Введите число:", "");

alert("Сумма чисел от 1 до " + n + " равна: " + summTo(n));