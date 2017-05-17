// accessing internal classes.

console.log(Object.prototype.toString.call( [1,2,3] ));	// [object Array]

console.log(Object.prototype.toString.call( /regex-literal/i ));	// [object RegExp]