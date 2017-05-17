// The && operator "selects"  the second operand if and only if the first tests as truthy.

function foo() {
	console.log( a );
}

var a = 42;

a && foo();	// 42