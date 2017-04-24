// The safety guard on typeof is useful even if you're not using global variables.

function doSomethingCool() {
	// Tests for a variable called "FeatureXYZ" and uses it if found.
	// If not found, uses its own.
	var helper = 
	(typeof FeatureXYZ !== "undefined") ?
	FeatureXYZ :
	function() { /*.. default feature ..*/ };

	var val = helper();
	// ..
}