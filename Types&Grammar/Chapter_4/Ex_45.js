// Coercing boolean values to numbers can greatly help:

function onlyOne() {
	var sum = 0;
	for (var i=0; i < arguments.length; i++) {
		// skip falsy values. same as treating
		// them as 0's, but avoids NaN's.
		if (arguments[i]) {
			sum += arguments[i];
		}
	}
	return sum == 1;
}

var a = true;
var b = false;

console.log(onlyOne( b, a ));			// true
console.log(onlyOne( b, a, b, b, b ));	// true

console.log(onlyOne( b, b ));				// false
console.log(onlyOne( b, a, b, b, b, a ));	// false