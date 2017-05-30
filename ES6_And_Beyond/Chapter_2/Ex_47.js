// functions attached to properties in object literals also have a concise form.

// the old way:
var o = {
	x: function(){
		// ..
	},
	y: function(){
		// ..
	}
}

// And as of ES6...

var o = {
	x() {
		// ..
	},
	y() {
		// ..
	}
}

// Generators also have a concise method form:

var o = {
	*foo() { .. }
};