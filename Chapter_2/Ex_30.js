// Understanding closure.

// Closure allows you to continue to access a function's variables once the function has finished running.

function makeAdder(x) {
	// parameter `x` is an inner variable

	// inner function `add()` uses `x` , so
	// it has a "closure" over it
	function add(y) {
		return y + x;
	
	};

	return add;
}