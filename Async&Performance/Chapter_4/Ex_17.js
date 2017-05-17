// In addition to making your own iterators, many built-in data structures in JS like arrays
// also have default iterators:

var a = [1,3,5,7,9];

for (var v of a) {
	console.log( v );
}
// 1 3 5 7 9