// typeof has an exception for undeclared variables,
// but no such safety exception is made for TDZ references.

{
	typeof a;			// undefined
	typeof b;			// ReferenceError! (TDZ)
	let b;
}