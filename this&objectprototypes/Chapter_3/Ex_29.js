// hidden function call to getter function

var myObject = {
	// define a getter for `a`
	get a() {
		return 2;
	}
};

myObject.a = 3;

console.log(myObject.a);	// 2

// because we're using a getter, if we try to set a later, it just throws the assignment away.