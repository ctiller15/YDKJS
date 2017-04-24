// Number.EPSILON is good with the tolerance value, but if you
// want to polyfill, you can safely do so:

if (!Number.EPSILON){
	Number.EPSILON = Math.pow(2,-52);
}

// We can also use this Number.EPSILON to compare two
// numbers for "equality" (within the rounding error tolerance)

function numbersCloseEnoughToEqual(n1,n2) {
	return Math.abs( n1 - n2 ) < Number.EPSILON;
}

var a = 0.1 + 0.2;
var b = 0.3;

console.log(numbersCloseEnoughToEqual( a, b ));					// true
console.log(numbersCloseEnoughToEqual( 0.0000001, 0.0000002 ));	// false