// Both approaches ultimately result in a string, but if you're
// using an object instead of a regular primitive number,
// you may not necessarily get the same string value!

var a = {
	valueOf: function() { return 42; },
	toString: function() { return 4; }
};

a + "";						// "42"

console.log(String( a ));		// "4"