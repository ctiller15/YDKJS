// Most clear example of "Temporal Dead Zone" is with ES6 let block-scoping.

{
	a = 2;			// ReferenceError!
	let a;
}