// It's common to use apply to spread out arrays of values as parameters to a function call.

function foo(a,b) {
	console.log( "a:" + a + ",b:" + b );
}

// spreading out array as parameters
foo.apply( null, [2, 3] );	// a:2, b:3

// currying with `bind(..)`
var bar = foo.bind( null, 2 );
bar( 3 );	// a:2, b:3