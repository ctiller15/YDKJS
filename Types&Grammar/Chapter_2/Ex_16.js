// since . is a valud numeric character, using the methods on number literals is tricky.

// invalid syntax: The . is swallowed up as part of the 42
42.toFixed( 3 );		// SyntaxError

// these are all valid:
(42).toFixed( 3 );		// "42.000"
0.42.toFixed( 3 );		// "0.420"
42..toFixed( 3 );		// "42.000"
// Works. The first . is part of the number, the second
// is the property operator.