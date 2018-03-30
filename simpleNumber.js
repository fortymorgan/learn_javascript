var lowNumber = prompt('Введите нижнее ограничение','');	
var upNumber = prompt('Введите верхнее ограничение','');	
outer:
	for (var i = lowNumber; i <= upNumber; i++) {
		for (var j = 2; j < i; j++) {
			if (i % j == 0) continue outer;
		}
	alert (i);
	}