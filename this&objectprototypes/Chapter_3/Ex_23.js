// Writable: false and configurable: false essentially creates a constant.

var myObject = {};

Object.defineProperty( myObject, "FAVORITE_NUMBER",	{
	value: 42,
	writable: false,
	configurable: false
} );

// This cannot be changed, redefined, or deleted.