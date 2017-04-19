// Our mod failed uneventfully.

// If we use strict mode though...

"use strict";
var myObject = {};

Object.defineProperty( myObject, "a", {
	value: 2,
	writable: false,	// not writable!
	configurable: true,
	enumerable: true
} );

myObject.a = 3;	// Bam! TypeError!
// TypeError: Cannot assign to read only property 'a' of object '#<Object>'