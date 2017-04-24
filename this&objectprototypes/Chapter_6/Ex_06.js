// How does in work in OLOO code?


var Foo = {};

var a1 = Object.create( Foo );

console.log(a1);	// Object {}

Object.defineProperty( Foo, "constructor", {
	enumerable: false,
	value: function Gotcha(){}
});

console.log(a1); // Gotcha {}