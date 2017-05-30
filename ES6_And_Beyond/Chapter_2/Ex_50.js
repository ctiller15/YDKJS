// There was no lexical name for the object, so we referred
// to the function.
// Actually a common practice:

var controller = {
	makeRequest: function(..){
		// ..
		controller.makeRequest(..);
	}
};

// Assumes controller will always point to the object in question.
// But it may not...