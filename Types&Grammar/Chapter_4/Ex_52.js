// There is an implicit coercion to boolean after
// the compound expressions are evaluated.

var a = 42;
var b = null;
var c = "foo";

if (a && (b || c)) {
	console.log( "yep" );	// yep
}

// the a && (b || c) expression results in "foo".