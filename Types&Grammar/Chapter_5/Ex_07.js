// The most common example of an expression with possible side
// effects is a function call expression:

function foo() {
	a = a + 1;
}

var a = 1;
console.log(foo());		// result: `undefined`, side effect: changed `a`