// As long as a property is configurable, we can modify its descriptor definition.
// We do this with the same defineProperty(..) utility.

var myObject = {
	a: 2
};

myObject.a = 3;
myObject.a;								// 3

Object.defineProperty(myObject, "a", {
	value: 4,
	writable: true,
	configurable: false,	// not configurable!
	enumerable: true
} );

myObject.a;						
myObject.a = 5;				// 4
myObject.a;					// 5

Object.defineProperty( myObject, "a", {
	value: 6,
	writable: true,
	configurable: true,
	enumerable: true
} );	// TypeError

// Basically the "machine that turns itself off"
// Changing configurable to false is a one-way action and cannot be undone!