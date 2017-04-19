//If hoisting were to re-arrange executable logic.

foo();

function foo() {
	console.log( a );	// undefined

	var a = 2;
}


