// "dependency injection"

function doSomethingCool(FeatureXYZ) {
	var helper = FeatureXYZ || 
		function() { /*.. default feature ..*/ };

	var val = helper();
	// ..
}