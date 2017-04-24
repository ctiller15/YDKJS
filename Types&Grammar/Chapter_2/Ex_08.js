// Strings only have a tangential similarity to arrays!

var a = "foo";
var b = ["f","o","o"];

// They do both possess a length property,
// an indexOf(..) method, and a concat(..) method.

console.log(a.length);	// 3
console.log(b.length);	// 3

console.log(a.indexOf( "o" ));	// 1
console.log(b.indexOf( "o" )); 	// 1

var c = a.concat( "bar" );		// foobar
var d = b.concat( ["b","a","r"] );	// [ 'f', 'o', 'o', 'b', 'a', 'r' ]

console.log( c );
console.log( d );

console.log(a === c);	// false
console.log(b === d);	// false

// They aren't quite just arrays of characters though...

a[1] = "O";
b[1] = "O";

console.log(a);
console.log(b);

// strings are immutable, while arrays are mutable.