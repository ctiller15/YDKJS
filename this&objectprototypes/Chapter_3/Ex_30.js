// To make it sensible, properties should be defined with setters.

var myObject = {
	// define a getter for `a`
	get a() {
		return this._a_;
	},

	// define a setter for `a`
	set a(val) {
		this._a_ = val * 2;
	}
};

myObject.a = 2;

console.log(myObject.a);	// 4

// here we store 2 of the put operation into _a_.