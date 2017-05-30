// ES6 adds a number of important convenience extensions to the
// { .. } object literal.

var x = 2, y = 3,
	o = {
			x: x,
			y: y
	};

// If you need to define a property that is the same name as a
// lexical identifier, you can shorten it from x: x to x.

var x = 2, y = 3,
	o = {
			x,
			y
	};