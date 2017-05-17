// We could also use the explicit coercion method for our onlyone function...

function onlyOne() {
	var sum = 0;
	for (var i=0; i < arguments.length; i++) {
			sum += Number( !!arguments[i] );
	}
	return sum === 1;
}