// If you want to do illegal JSON stuff, define a toJSON method for it.
// return a JSON-safe version of the object.

var o = { };

var a = {
	b: 42,
	c: o,
	d: function(){}
};

// create a circular reference inside `a`
o.e = a;

// would throw an error on the circular reference
// JSON.stringify( a );

// define a custom JSON value serialization
a.toJSON = function() {
	// only include the `b` property for serialization
	return { b: this.b }
};

console.log(JSON.stringify( a ));	// "{"b": 42}"