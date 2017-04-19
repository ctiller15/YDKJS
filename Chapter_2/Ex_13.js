// hoisting.

var a = 2;

foo();					// 'foo()' declaration is "hoisted"

function foo(){
	a = 3;

	console.log( a );

	var a;				// declaration is "hoisted" to top of foo.

}

console.log( a ); // 2