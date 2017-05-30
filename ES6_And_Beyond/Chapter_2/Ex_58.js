// Sometimes it will be helpful to assign the [[Prototype]] of an
// object at the same time you're declaring its object literal.

// Is standardized as of ES6:

var o1 = {
	// ..
};

var o2 = {
	__proto__: o1,
	// ..
};