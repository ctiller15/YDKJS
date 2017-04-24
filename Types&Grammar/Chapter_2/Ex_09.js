var a = "foo";
var b = ["f","o","o"];

// none of the string methods that alter its contents
// can modify in-place.
// They must create and return new strings

c = a.toUpperCase();
console.log(a === c);	// false
console.log(a);			// foo
console.log(c);			// FOO

b.push( "!" );			// [ 'f', 'o', 'o', '!' ]
console.log(b);

// many array methods that could be helpful when dealing with strings are not actually
// available for them.

// We can "borrow" non-mutation array methods against our string.

console.log(a.join);	// undefined
console.log(a.map);		// undefined

var c = Array.prototype.join.call( a, "-" );
var d = Array.prototype.map.call( a, function(v){
	return v.toUpperCase() + ".";
} ).join( "" );

console.log(c);			// "f-o-o"
console.log(d);			// "F.O.O."

// reversing a string.
// arrays have a reverse method, but strings don't.

console.log(a.reverse);	// undefined

console.log(b.reverse());	// [ '!', 'o', 'o', 'f' ]
console.log(b);				// [ '!', 'o', 'o', 'f' ]

// This doesn't work with array mutators.
// strings are immutable and thus cannot be modified in place.

console.log(Array.prototype.reverse.call( a ));	// ERROR!
// still returns a string object wrapper
// for "foo" :()