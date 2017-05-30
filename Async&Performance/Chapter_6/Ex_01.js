// Most developers, if asked to benchmark the speed of
// an operation, would do something like this:

var start = (new Date()).getTime();			// or `Date.now()`

// do some operation

var end = (new Date()).getTime();

console.log( "Duration:", (end - start) );