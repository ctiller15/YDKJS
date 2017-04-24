// A partial polyfill for Object.create(..)

if (!Object.create) {
	Object.create = function(o) {
		function F(){}
		F.prototype = o;
		return new F();
	};
}

// uses a throw-away F function and overrides its .prototype
// to point to the object we want to link to.