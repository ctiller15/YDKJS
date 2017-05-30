// We can now create declarations that are bound
// to any block.
// This is called block scoping.

var a = 2;

{
	let a = 3;
	console.log( a );		// 3
}

console.log( a );			// 2

// Stylistically, you can put let on the same line as the opening {

{ let a = 2, b, c;
	// ..
}

let (a = 2, b, c) {
	// ..
}

// This is explicit block scoping.