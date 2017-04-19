// Using let.

// let attaches the variable declaration to the scope of whatever block it's contained in.
// ** Hijacks any block's scope for variable declaration.

var foo = true;

if (foo) {
	let bar = foo * 2;
	bar = something( bar );
	console.log( bar );	// ReferenceError
}
