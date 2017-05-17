// While ES6 default parameter values can create divergence between
// the arguments array slot and the corresponding named parameter variable,
// this same disjointedness can occur in ES5.

function foo(a) {
	a = 42;
	console.log( arguments[0] );
}

foo( 2 );	// 42 (linked)
foo();		// undefined (not linked)