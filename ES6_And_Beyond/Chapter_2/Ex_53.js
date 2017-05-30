// What does this have to do with concise methods?

runSomething( {
	something: function something(x,y) {
		// ..
	}
});

// The second something provides a lexical identifier
// that will always point to the function itself.