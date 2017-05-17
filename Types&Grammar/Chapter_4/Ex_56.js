// One of the biggest implicit coercion gotchas happens with loose equality.

var a = "42";
var b = true;

console.log(a == b);	// false