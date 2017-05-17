//The most common way JS devs coerce to boolean is to use the
// !! double-negate operator. The second "!" will flip back to the original.

var a = "0";
var b = [];
var c = {};

var d = "";
var e = 0;
var f = null;
var g;

console.log( !!a );		// true
console.log( !!b );		// true
console.log( !!c );		// true

console.log( !!d );		// false
console.log( !!e );		// false
console.log( !!f );		// false
console.log( !!g );		// false