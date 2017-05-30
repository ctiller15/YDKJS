// Now we try to refactor that function reference to the ES6 concise method form:

runSomething( {
	something(x,y) {
		if (x > y) {
			return something( y, x );
		}

		return y - x;
	}
});

// It breaks. The return something(..) call will not find
// a something identifier, so you'll
// get a ReferenceError.

// This is interpreted as meaning:

runSomething( {
	something: function(x,y){
		if (x > y) {
			return something( y, x );
		}

		return y - x;
	}
} );

// The concise method definition implies something: function(x,y)