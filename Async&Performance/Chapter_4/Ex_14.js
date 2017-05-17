// Implementing the standard iterator interface for our number series producer:

var something = (function(){
	var nextVal;

	return {
		// needed for `for..of` loops
		[Symbol.iterator]: function(){ return this; },

		// standard iterator interface metho
		next: function() {
			if (nextVal === undefined) {
				nextVal = 1;
			}
			else {
				nextVal = (3 * nextVal) + 6;
			}

			return {done:false, value: nextVal };
		}
	};
})();

console.log(something.next().value);			// 1
console.log(something.next().value);			// 9
console.log(something.next().value);			// 33
console.log(something.next().value);			// 105