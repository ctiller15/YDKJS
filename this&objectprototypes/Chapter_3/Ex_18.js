// The ability for you to change the value of a property is controlled by writable

var myObject = {};

Object.defineProperty( myObject, "a", {
	value: 2,
	writable: false,	// and now we can't change it!
	configurable: true,
	enumerable: true
} );

myObject.a = 3;
console.log(myObject.a);	// and it's still 2! No error thrown!