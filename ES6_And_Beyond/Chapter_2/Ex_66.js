// The foo`Everything...` is essentially a special kind of function call that doesn't
// need the ( .. ).
// The foo part is a function value that should be called.
// It can be any expression that results in a function.

function bar() {
	return function foo(strings, ...values) {
		console.log( strings );
		console.log( values );
	}
}

var desc = "awesome";

bar()`Everything is ${desc}!`;
// [ "Everything is ", "!"]
// [ "awesome" ]