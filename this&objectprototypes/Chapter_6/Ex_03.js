// traditional "class constructor" style JS code.
// As it appears in the console of chrome devtools.

function Foo() {}

var a1 = new Foo();

console.log(a1);	// Foo {}

// Chrome is saying "{} is an empty object that was constructed with the name 'Foo'"
// Firefox is saying "{} is an empty object of general construction from Object"