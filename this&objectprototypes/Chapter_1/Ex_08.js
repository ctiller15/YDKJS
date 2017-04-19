// this does *not* refer to a function's lexical scope.

// the code here tries to use this to implicitly
// reer to a function's lexical scope.

function foo() {
	var a = 2;
	this.bar();
}

function bar() {
	console.log( this.a );
}

foo();	// undefined.