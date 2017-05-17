// When using ES6's default parameter values, the default value
// is applied to the parameter if you either omit an argument,
// or you pass an undefined value in its place.

function foo( a = 42, b = a + 1 ) {
	console.log( a, b );
}

console.log(foo());				// 42 43
console.log(foo(undefined));	// 42 43
console.log(foo( 5 ));			// 5 6
console.log(foo( void 0, 7 ));	// 42 7
console.log(foo( null ));		// null 1