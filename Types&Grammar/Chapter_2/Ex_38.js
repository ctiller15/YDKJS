// If you try to stringify a negative zero, it will always
// be reported as "0".

var a = 0 / -3;

// (some browser) consoles at least get it right
console.log(a);

// but the spec insists on lying to you!
console.log(a.toString());							// "0"
a + "";											// "0"
console.log(String( a ));							// "0"

// Even JSON can't be trusted!

JSON.stringify( a );			// "0"
