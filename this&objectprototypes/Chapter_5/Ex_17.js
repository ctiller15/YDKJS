// Exact same result, but here we don't reference a function Foo
// whose .prototype property will automatically be consulted.

// We just need two objects to inspect a relation between them.

// Simple: does `b` appear anywhee in
// `c`s [[Prototype]] chain?
b.isPrototypeOf( c );

// We can directly retrieve the [[Prototype]] of an object.
// As of ES5, the standard method is:

Object.getPrototypeOf( a );

// The object reference is what we expect.

Object.getPrototypeOf( a ) === Foo.prototype;	// true

// Most browsers have also long supported a non-standard 
// alt way of accessing [[Prototype]]

a.__proto__ === Foo.prototype;	// true