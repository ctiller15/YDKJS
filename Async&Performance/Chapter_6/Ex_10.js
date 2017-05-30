// Obsession over discrete syntatic minutia is mostly unfounded.

function factorial(n) {
	if (n < 2) return 1;
	return n * factorial( n - 1 );
}

factorial( 5 );			// 120

// Could be rewritten by the JS engine as:

function factorial(n) {
	if (n < 2) return 1;

	var res = 1;
	for (var i=n; i>1; i--) {
		res *= i;
	}
	return res;
}

factorial( 5 );			// 120
