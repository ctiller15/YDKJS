// The assignment expressions (a, y, etc) don't actually need to just
// be variable identifiers.
// Anything that's a valid assignment expression is allowed.

var o = {};

[o.a, o.b, o.c] = foo();
( { x: o.x, y: o.y, z: o.z } = bar() );

console.log( o.a, o.b, o.c );			// 1 2 3
console.log( o.x, o.y, o.z );			// 4 5 6