// For shorthand property definitions, here's the ES6 form:

var foo = [1,2,3];

var obj = {
	foo				// means `foo: foo`
};

obj.foo;			// [1,2,3]

// Here's (roughly) how it transpiles:

var foo = [1,2,3];

var obj = {
	foo: foo
};

obj.foo;			// [1,2,3]