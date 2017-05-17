// Undefined vs empty slots.

var a = new Array( 3 );
var b = [ undefined, undefined, undefined ];
var c = [];
c.length = 3;

console.log( a );
console.log( b );
console.log( c );

// Also, a and b behave the same in some cases
// but differently in others!

console.log(a.join( "-" ));	// "--"
console.log(b.join( "-" ));	// "--"

a.map(function(v,i){ return i; });	// [ undefined x 3 ]
b.map(function(v,i){ return i; });	// [ 0, 1, 2 ]

// a.map(..) fails because the slots don't exist!