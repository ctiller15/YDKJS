// Very large or very small numbers will be outputted in exponent form.
// Same as the output of the toExponential() method.

var a = 5E10;					// 50000000000
console.log(a);
console.log(a.toExponential());	// 5e+10

var b = a * a;
console.log( b );				// 2.5e+21

var c = 1 / a;
console.log( c );				// 2e-11