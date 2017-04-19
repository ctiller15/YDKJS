// Putting closure into light:

function foo() {
	var a = 2;
	function bar() {
		console.log( a );
	}

	return bar;
}

var baz = foo();

baz();	// 2 -- Whoa, we just observed closure!

// here we are executing bar outside of its lexical scope.
