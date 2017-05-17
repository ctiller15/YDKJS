// If you try to fulfill a Promise with any object/function value that happens to have a then(..) function on itm but you weren't intending it to be treated as a
// Promise/thenable , you're out of luck.

// This is even true if you didn't realize the value has a then(..) on it:

var o = { then: function(){} };

// make `v` be `[[Prototype]]`-linked to `o`
var v = Object.create( o );

v.someStuff = "cool";
v.otherStuff = "not so cool";

v.hasOwnProperty( "then" );			// false