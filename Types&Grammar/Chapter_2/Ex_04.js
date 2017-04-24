// Arrays are numerically indexed, but they are also objects.
// They can have string keys/properties added to them, but
// don't count toward the length of the array.

var a = [ ];

a[0] = 1;
a["foobar"] = 2;

console.log(a.length);			// 1
console.log(a["foobar"] = 2);	// 2
console.log(a.foobar);			// 2