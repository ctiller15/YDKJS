// Arrays have an overridden default toString() that stringifies as the
// concatenation of all its values with ","
// in between each value.

var a = [1,2,3];

a.toString();	// "1,2,3"

// toString can be called explicitly, or will be autocalled
// if a non-string is used in a string context.