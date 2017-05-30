// Object destructuring for parameters works too:

function foo( { x, y } ) {
	console.log( x, y );
}


foo( { y: 1, x: 2 } );			// 2 1
foo( { y: 42 } );					// undefined 42
foo( {} );								// undefined undefined

// This is an approximation of named arguments.