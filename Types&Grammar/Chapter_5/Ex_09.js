// The ++ increment operator and the -- decrement operator are
// both unary operators.
// They can be used in either a postfix or prefix position.

var a = 42;

console.log(a++);	// 42
console.log(a);		// 43

console.log(++a);	// 44
console.log(a);		// 44

// When ++ is a prefix, its side effect happens before
// the value is returned, rather than after.