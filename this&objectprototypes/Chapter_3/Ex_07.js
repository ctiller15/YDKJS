// ES6 adds computed property names.
// You can specify an expression sorrounded by a [] pair in
// the key-name position of an object-literal declaration:

var prefix = "foo";

var myObject = {
	[prefix + "bar"]: "hello",
	[prefix + "baz"]: "world"
};

console.log(myObject["foobar"]);	// hello
console.log(myObject["foobaz"]);	// world

// Strongly discouraged from working with the actual symbol, so the name of
// the symbol will be what you use:

var myObject = {
	[Symbol.Something]: "hello world"
};