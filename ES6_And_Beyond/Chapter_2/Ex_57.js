// The most common use of computed property names will be with Symbols.

var o = {
	[Symbol.toStringTag]: "really cool thing",
	..
};

// Computed property names can also appear as the name of a concise
// method or a concise generator:

var o = {
	["f" + "oo"]() { .. } // computed concise method
	*["b" + "ar"]() { .. } // computed concise generator
};