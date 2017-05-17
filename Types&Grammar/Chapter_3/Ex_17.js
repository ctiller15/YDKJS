// An even easier way to create a date object is to use the
// ES5 helper function.

// Polyfilling it is pretty easy too!

if (!Date.now) {
	Date.now = function(){
		return (new Date()).getTime();
	};
}