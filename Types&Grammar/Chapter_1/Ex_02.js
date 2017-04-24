// If you want to test for a null value using its type,
// you need a compound condition:

var a = null;

(!a && typeof a === "object");	// true

// null is the only primiitive value that is "falsy"
// that also returns an object from the typeof check.