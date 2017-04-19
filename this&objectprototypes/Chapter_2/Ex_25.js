// passing a DMZ object

function foo(a,b) {
	console.log( "a:" + a + ", b:" + b );
}

// our DMZ empty object
var x = Object.create( null );

// spreading out array as parameters
foo.apply( x, [2, 3] );	// a:2, b:3

// currying with `bind(..)`
var bar = foo.bind( x, 2);
bar( 3 );	// a:2, b:3