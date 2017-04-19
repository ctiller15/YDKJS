// Nested scope

function foo(a) {
	console.log( a + b );
}

// RHS reference for b not resolved inside of foo, but
// it can be resolved inside of the surrounding scope.
var b = 2;

foo( 2 );			// 4

// The scope initially starts at the currently executing scope.
// If it can't find the variable there, it will keep going up one level.
// Once outermost global scope is reached, the search stops regardless of result.