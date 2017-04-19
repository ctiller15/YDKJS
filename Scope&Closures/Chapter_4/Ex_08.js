// subsequent function declarations do override previous ones.

foo();	// 3

function foo() {
	console.log( 1 );
}

var foo = function() {
	console.log( 2 );
};

// this one gets hoisted and overrides the first function declaration.

function foo() {
	console.log( 3 );
}