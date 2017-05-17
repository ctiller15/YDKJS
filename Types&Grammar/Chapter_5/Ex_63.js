// We can up the craziness if we combine finally with a break:

function foo() {
	bar: {
		try {
			return 42;
		}
		finally {
			// break out of `bar` labeled block
			break bar;
		}
	}

	console.log( "Crazy" );

	return "Hello";
}

console.log( foo() );
// Crazy
// Hello