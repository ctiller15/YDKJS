// A series of values where each value has a definable relationship to the previous value:

var gimmeSomething = (function(){
	var nextVal;

	return function(){
		if (nextVal === undefined) {
			nextVal = 1;
		}
		else {
			nextVal = (3 * nextVal) + 6;
		}

		return nextVal;
	};
})();

console.log(gimmeSomething());			// 1
console.log(gimmeSomething());			// 9
console.log(gimmeSomething());			// 33
console.log(gimmeSomething());			// 105