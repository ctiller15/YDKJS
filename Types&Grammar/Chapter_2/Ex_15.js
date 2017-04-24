// toPrecision(..) is similar to tofixed, but specifies how many significant digits should be used.

var a = 42.59;
console.log(a.toPrecision( 1 ));	// "4e+1"
console.log(a.toPrecision( 2 ));	// "43"
console.log(a.toPrecision( 3 ));	// "42.6"
console.log(a.toPrecision( 4 ));	// "42.59"
console.log(a.toPrecision( 5 ));	// "42.590"
console.log(a.toPrecision( 6 ));	// "42.5900"

// careful with the "." operator. Since it is a valid numeric character,
// it will be interpreted as part of the number literal, if possible.