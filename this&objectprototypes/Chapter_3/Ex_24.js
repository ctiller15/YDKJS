// To prevent an object from having new properties added,
// but to leave everything else alone, call Object.preventExtensions(..)

var myObject = {
	a: 2
};

Object.preventExtensions( myObject );

console.log(myObject.b);	// undefined
myObject.b = 3;
console.log(myObject.b);	// undefined

// Trying to directly write myObject.b led to nothing happening.
// In non-strict mode, it's a silent failure.
// In strict-mode, TypeError is thrown.