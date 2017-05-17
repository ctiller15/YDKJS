function *something() {
	var nextVal;

	while (true) {
		if (nextVal === undefined) {
			nextVal = 1;
		}
		else {
			nextVal = (3 * nextVal) + 6;
		}

		yield nextVal;
	}
}

// We can use the *something() generator with a for..of loop.
// Works basically identically:

for (var v of something()) {
	console.log( v );

	// don't let the loop run forever!
	if (v > 500) {
		break;
	}
}