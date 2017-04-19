// Take a look at these two functions:

function foo() {
	foo.count = 4;	// 'foo' refers to itself.
}

setTimeout( function(){
	// anonymous function (no name), cannot
	// refer to itself
}, 10 );

// in the first function, "foo" is a reference that can be used
// to refer to the function inside of itself.

// In the second example, the function callback
// has no name identifier.
// It can't refer to the function object itself.
