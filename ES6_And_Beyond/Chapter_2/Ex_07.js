// The other common usage of "..." gathers a set of values together into an array.

function foo(x,y, ...z) {
	console.log( x, y, z );
}

foo( 1, 2, 3, 4, 5 );			// 1 2 [3,4,5]

// And if you don't have any named parameters, the ... gathers all arguments:

function foo(...args) {
	console.log( args );
}

foo( 1, 2, 3, 4, 5);			// [1,2,3,4,5]