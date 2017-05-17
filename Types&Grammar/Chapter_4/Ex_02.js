// Very large numbers are represented in exponent form:

// multiplying `1.07` by `1000`, seven times over.

var a = 1.07 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;

// seven times three digits => 21 digits.

console.log(a.toString());	// "1.07e+21"