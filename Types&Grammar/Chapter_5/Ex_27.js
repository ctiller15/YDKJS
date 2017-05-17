// && and || are easy to reason about if they are the only two operands and one operator.

var a = 42;
var b = "foo";

console.log(a && b);	// "foo"
console.log(a || b);	// 42