// acessor descriptors.
// value and writable are ignored.
// set and get characteristics are the main props.

var myObject = {
	// define a getter for `a`
	get a() {
		return 2;
	}
};

Object.defineProperty(
	myObject,	// target
	"b",		// property name
	{			// descriptor
				// define a getter for `b`
				get: function(){ return this.a * 2 },

				// make sure `b` shows up as an object property
				enumerable: true
	}
);

console.log(myObject.a);	// 2

console.log(myObject.b);	// 4