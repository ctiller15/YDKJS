// ~~ only works reliably on 32-bit values.
// Doesn't work the same on negative numbers as math.floor.

console.log(Math.floor( -49.6 ));	// -50
console.log(~~-49.6);				// -49