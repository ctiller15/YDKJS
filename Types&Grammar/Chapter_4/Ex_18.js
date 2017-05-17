// You can convert dates to numbers via the unitary ( + ) operator.

var d = new Date( "Mon, 18 Aug 2014 08:53:06 CDT" );

console.log( +d );	// 1408369986000

// this is commonly used to get the current now moment as a timestamp.

var timestamp = +new Date();
console.log( timestamp );