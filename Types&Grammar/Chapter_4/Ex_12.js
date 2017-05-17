// Falsy Objects

var a = new Boolean( false );
var b = new Number( 0 );
var c = new String( "" );

// All three are objects wrapped around falsy values.

var d = Boolean( a && b && c );

console.log( d );	// true

// All three behave as true! Sweet!

e = a && b && c;
console.log( e );