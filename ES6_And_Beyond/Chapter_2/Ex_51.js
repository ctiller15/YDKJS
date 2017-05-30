// Others prefer to use this to define things:

var controller = {
	makeRequest: function(..){
		// ..
		this.makeRequest(..);
	}
};

// Will always work if you invoke as controller.makeRequest(..)

// Now you have a this binding gotcha:

btn.addEventListener( "click", controller.makeRequest, false );