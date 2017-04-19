// We can use Object.defineProperty(..) to add a new property, or modify an existing one.
// with the desired characteristics.

var myObject = {};

Object.defineProperty( myObject, "a", {
	value: 2,
	writable: true,
	configurable: true,
	enumerable: true
} );

console.log(myObject.a);	// 2

// Generally we wouldn't do this unless we wanted to change one of the property descriptors.
// But hey, it's cool to know!