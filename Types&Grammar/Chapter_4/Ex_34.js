// Boolean(..) is an explicit way of forcing the ToBoolean coercion.

var a = "0";
var b = [];
var c = {};

var d = "";
var e = 0;
var f = null;
var g;

console.log(Boolean( a ));		// true
console.log(Boolean( b ));		// true
console.log(Boolean( c ));		// true

console.log(Boolean( d ));		// false
console.log(Boolean( e ));		// false
console.log(Boolean( f ));		// false
console.log(Boolean( g ));		// false