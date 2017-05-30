// The longer form allows you to assign a property to a different variable name:

var { X: bam, y: baz, z: bap } = bar();

console.log( bam, baz, bap );				// 4 5 6
console.log( x, y, z );							// ReferenceError