// Now, if someone has that utility in their module/program, it safely checks if they've defined it or not.

// an IIFE (see "Immediately Invoked Function Expressions"
// discussion in the *Scope & Closures* title of this series)

(function(){
	function FeatureXYZ() { /*.. my XYZ feature ..*/ }

	// include `doSomethingCool(..)`
	function doSomethingCool() {
		var helper = 
			(typeof FeatureXYZ !== "undefined") ?
			FeatureXYZ :
		function() { /*.. default feature ..*/ };

	var val = helper();
	// ..
	}

	doSomethingCool();
})();