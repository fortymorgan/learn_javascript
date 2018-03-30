function returnMinimal(a, b) {
    return (a < b) ? a : b;
}

var a = prompt("Введите число a:", "");
var b = prompt("Введите число b:", "");

(a == b) ? alert("Числа равны") : alert("Меньшее число: " + returnMinimal(a, b));