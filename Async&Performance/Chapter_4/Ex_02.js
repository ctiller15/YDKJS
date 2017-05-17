// Cooperative concurrency:

var x = 1;

function *foo() {
	x++;
	yield;	// pause!
	console.log( "x:", x );
}

function bar() {
	x++;
}