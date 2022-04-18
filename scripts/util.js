function randint(lower, upper) {
	return Math.round((Math.random() * (upper - lower)) + lower);
}

function choice(array) {
	return array[randint(0, array.length - 1)];
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}