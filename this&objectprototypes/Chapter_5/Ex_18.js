// Another way of envisioning .__proto__ being implemented.

Object.defineProperty( Object.prototype, "__proto__", {
	get: function() {
		return Object.getPrototypeOf( this );
	},
	set: function(o) {
		// setPrototypeOf(..) as of ES6
		Object.setPrototypeOf( this, o);
		return o;
	}
} );