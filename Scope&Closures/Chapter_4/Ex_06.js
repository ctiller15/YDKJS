// A more accurate interpretation involving hoisting.

var foo;

foo();	// TypeError
bar();	// ReferenceError

foo = function() {
	var bar = ...self...
	// ...
}