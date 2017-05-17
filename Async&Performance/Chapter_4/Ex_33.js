// generators yielding Promises that then control the generator's
// iterator to advance it to completion.

function foo(x,y) {
	return request(
		"http://some.url.1/?x=" + x + "&y=" + y
		);
}

async function main() {
	try {
		var text = await foo( 11, 31 );
		console.log( text );
	}
	catch (err) {
		console.error( err );
	}
}

main();

// No run call, meaning no need for a library utility.