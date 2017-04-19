// Function expressions aren't hoisted.

foo();	// not ReferenceError, but TypeError!

bar(); // ReferenceError // name identifier not available in enclosing scope.

var foo = function bar() {
	// ...
};