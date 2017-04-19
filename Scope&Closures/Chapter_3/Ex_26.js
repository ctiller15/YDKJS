// refactoring with let and var.

/*
var foo = true, baz = 10;

if (foo) {
	var bar = 3;

	if (baz > bar) {
		console.log( baz ); //	10
	}

	// ...
}*/

// And refactoring it, we get...

/*
var foo = true, baz = 10;

if (foo) {
	var bar = 3;

	// ...
}

if (baz > bar) {
	console.log( baz );
}
*/

// But be wary when doing it with block-scoped variables.

var foo = true, baz = 10;

if (foo) {
	let bar = 3;

	if (baz > bar) {	// <-- don't forget 'bar' when moving!
		console.log( baz );	// 10.
	}
}