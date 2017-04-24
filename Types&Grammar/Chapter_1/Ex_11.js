// Another way of doing the checks without using
// the safety guard of typeof is to observe that
// all global variables are also properties of the global object.

if (window.Debug) {
	// ..
}

if (!window.atob) {
	// ..
}