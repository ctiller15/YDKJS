// number values can access method built into number.prototype.

var a = 42.59;
console.log(a.toFixed( 0 ));	// 43
console.log(a.toFixed( 1 ));	// 42.6
console.log(a.toFixed( 2 ));	// 42.59
console.log(a.toFixed( 3 ));	// 42.590
console.log(a.toFixed( 4 ));	// 42.5900

// the output is actually a string.
// the value is 0-padded if you ask for more decimals than it holds.