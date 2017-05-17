// There are some values where the unboxing doesn't exactly work:

var a = null;
var b = Object( a );	// same as `Object()`
console.log( a == b );	// false

var c = undefined;
var d = Object( c );	// same as `Object()`
console.log( c == d );	// false

var e = NaN;
var f = Object( e );	// same as `new Number( e )`
console.log( e == f );	// false