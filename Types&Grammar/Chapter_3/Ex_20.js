// To define your own custom symbols, use the Symbol(..) native.

// The Symbol(..) native "constructor" is unique in that you're
// not allowed to use new with it.

var mysym = Symbol( "my own symbol" );
console.log(mysym);							// Symbol(my own symbol)
console.log(mysym.toString());			// "Symbol(my own symbol)"
console.log(typeof mysym);				// "symbol"

var a = { };
a[mysym] = "foobar";

console.log(Object.getOwnPropertySymbols( a ));
// [ Symbol(my own symbol) ]