function summTo(n) {
    var summ = 0;
    for (var i = 1; i <= n; i++) {
        summ += i;
    }
    return summ;
}

var n = +prompt("Введите число:", "");

alert("Сумма чисел от 1 до " + n + " равна: " + summTo(n));