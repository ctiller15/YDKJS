// Comparison operators are ALSO configured to lie!

var a = 0;
var b = 0 / -3;

console.log(a == b);	// true
console.log(-0 == 0);	// true

console.log(a === b);	// true
console.log(-0 === 0);	// true

console.log(0 > -0);	// false
console.log(a > b);		// false
