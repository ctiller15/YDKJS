// Why it is a gotcha:

var X = 10, Y = 20;

var o = { a: X, b: Y };

console.log( o.a, o.b );		// 10 20

// When you use object destructuring assignment, you invert
// the target: source pattrn.

var { x: bam, y: baz, z: bap } = bar();