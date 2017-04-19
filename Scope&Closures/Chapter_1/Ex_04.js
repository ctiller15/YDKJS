function foo(a) {
	console.log( a + b );
	b = a;
}

foo( 2 );

// ReferenceError occurs because b is not found in the scope.

// If performing a LHS look-up and the variable isn't found,
// the global scope will create that variable in global scope.