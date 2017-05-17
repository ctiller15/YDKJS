// What happens if there's a return statement inside a try clause?
// Does the calling code that receives that value run before or after finally?

function foo() {
	try {
		return 42;
	}
	finally {
		console.log( "Hello" );
	}

	console.log( "never runs" );
}

console.log( foo() );
// Hello
// 42