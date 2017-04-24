// There is a special behavior associated with typeof as it relates to undeclared
// variables that even further reinforces the confusion.

var a;

console.log(typeof a);	// "undefined"

console.log(typeof b);	// "undefined"

// typeof returns "undefined" even for "undeclared" variables.