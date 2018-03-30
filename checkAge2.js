function checkAge(age) {
    return (age > 18) || confirm("Родители разрешили?");
}

var age = prompt("Укажите ваш возраст","");

checkAge(age) ? alert("Вход разрешен") : alert("Вход запрещен")