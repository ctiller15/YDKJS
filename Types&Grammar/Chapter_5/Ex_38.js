// Some operators behave differently depending on left-associativity
// vs right-associativity.

// The ? : "ternary" operator

a ? b : c ? d : e;

// "?" is right-associative.

// Which grouping represents how it will be processed?

a ? b : (c ? d : e)
(a ? b : c) ? d : e

// The first is how it's processed.