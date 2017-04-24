// To test if a value is an integer, use Number.isInteger(..) (ES6)

console.log(Number.isInteger( 42 ));	// true
console.log(Number.isInteger( 42.000 ));	// true
console.log(Number.isInteger( 42.3 ));	// false

// to polyfill for pre-ES6:

if (!Number.isInteger) {
	Number.isInteger = function(num) {
		return typeof num == "number" && num % 1 == 0;
	};
}