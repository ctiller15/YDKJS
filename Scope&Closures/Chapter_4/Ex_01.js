// Closure is when a function is able to remember and
// access its lexical scope even when that function
// is executing outside its lexical scope.

function foo() {
	var a = 2;

	function bar() {
		console.log( a );	// 2
	}

	bar();
}

foo();