// new hijacks any normal function and calls it in a fashion
// that constructs an object, in adition to
// whatever else it was going to do.

function NothingSpecial() {
	console.log( "Don't mind me!" );
}

var a = new NothingSpecial();
// "Don't mind me!"

console.log(a);	// {}

// In Javascript a constructor is any function
// called with the new keyword in front of it.

// Functions aren't constructors, but function calls are "constructor calls" if and only if new is used.