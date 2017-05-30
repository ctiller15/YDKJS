// Accessing a let-declared variable earlier than its let declaration/initialization causes an error.
// With var declarations the ordering doesn't matter.

{
	console.log( a );			// undefined
	console.log( b );			// ReferenceError!

	var a;
	let b;
}