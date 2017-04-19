// declarations made with let will NOT hoist
// to the entire scope of the block that
// they appear in.

{
	console.log( bar );	// ReferenceError!
	let bar = 2;
}