// There's additional functionality that Object.create provides,
// that is NOT polyfillable for pre-es5.

var anotherObject = {
	a: 2
};

var myObject = Object.create( anotherObject, {
	b: {
		enumerable: false,
		writable: true,
		configurable: false,
		value: 3
	},
	c: {
		enumerable: true,
		writable: false,
		configurable: false,
		value: 4
	}
} );

console.log(myObject.hasOwnProperty( "a" ));	// false
console.log(myObject.hasOwnProperty( "b" ));	// true
console.log(myObject.hasOwnProperty( "c" ));	// true

console.log(myObject.a);	// 2
console.log(myObject.b);	// 3
console.log(myObject.c);	// 4

// The second argument specifies property names to add to the newly created object.
// It does this via declaring each new property's property descriptor.