// Null and undefined can be treated as indistinguishable for comparisons.

var a = null;
var b;

console.log(a == b);			// true
console.log(a == null);			// true
console.log(b == null);			// true

console.log(a == false);		// false
console.log(b == false);		// false
console.log(a == "");			// false
console.log(b == "");			// false	
console.log(a == 0);			// false
console.log(b == 0);			// false