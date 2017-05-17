//It may perform better for a browser to handle console I/O asynchronously in the background.

// this could be observable in the following example:

var a = {
	index: 1
};

// later
console.log( a );	// ??

// even later
a.index++;