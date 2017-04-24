// So... we've solved the problem, right?

// Nu-uh!

// isNaN just tests if it's not a number, or is a number.
// That's it.

var a = 2 / "foo";
var b = "foo";

a;	// NaN
b;	// "foo"

window.isNaN( a );	// true
window.isNaN( b );	// true	-- Oh cmon!