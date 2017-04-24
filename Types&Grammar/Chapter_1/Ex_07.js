// undefined vs "undeclared"

var a;

console.log(typeof a);	// "undefined"

var b = 42;
var c;

// later
b = c;

console.log(typeof b);	// "undefined"
console.log(typeof c);	// "undefined"