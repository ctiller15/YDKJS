// The formal parameters in a function declaration are in their own scope,
// not in the function body's scope.

var w = 1, z = 2;

function foo( x = w + 1, y = x + 1, z = z + 1 ) {
	console.log( x, y, z );
}

foo();				// ReferenceError!