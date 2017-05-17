// Besides String(..) and Number(..), there are other ways to "explicitly" convert the values.

var a = 42;
var b = a.toString();

var c = "3.14";
var d = +c;

console.log( b );	// "42"
console.log( d );	// 3.14