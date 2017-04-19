//Transpiling is essentially converting your newer code into older code equivalents.

function foo(a = 2) {
	console.log( a );
}

foo();			// 2
foo( 42 );		// 42

// But that's invalid in pre-ES6 engines.

// What a transpiler would do is...

// If arguments[0] is void, we don't have a value. the ternary with arguments[0] is skipped over.
// 2 is put in instead.
function foo() {
	var a = arguments[0] !== (void 0) ? arguments[0] : 2;
	console.log( a );
}

foo();