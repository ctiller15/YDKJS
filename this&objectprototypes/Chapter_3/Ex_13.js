// Duplicating objects isn't exactly easy...

function anotherFunction()	{ /*..*/}

var anotherObject = {
	c: true
};

var anotherArray = [];

var myObject = {
	a: 2,
	b: anotherObject,		// reference, not a copy!
	c: anotherArray,		// another reference!
	d: anotherFunction
};

anotherArray.push( anotherObject, myObject );