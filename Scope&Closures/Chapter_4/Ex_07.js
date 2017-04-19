// functions are hoisted before variables.

foo();	// 1

var foo;

function foo()	{
	console.log( 1 );
}

foo = function() {
	console.log( 2 );
};

/*
This is interpreted by the engine as:

function foo() {
	console.log( 1 );
}

foo();	// 1

foo = function() {
	console.log( 2 );
};



*/