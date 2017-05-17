// You can even modify these native prototypes.

Array.isArray( Array.prototype );		// true
Array.prototype.push( 1, 2, 3 );		// 3
Array.prototype;									// [1,2,3]

// don't leave it that way, though, or expect weirdness!
// reset the `Array.prototype` to empty.
Array.prototype.length = 0;