// hoisting is per scope.

// entire function foo gets hoisted up.
function foo()	{
	var a;	// hoisted up within the scope of foo.

	console.log( a );	// undefined

	a = 2;
}

foo();