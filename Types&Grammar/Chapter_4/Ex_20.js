// An even better noncoercion option is to use Date.now()

var timestamp = Date.now();

console.log( timestamp );

// if you want to polyfill Date.now(), it's easy!

if (!Date.now) {
	Date.now = function() {
		return +new Date();
	};
}