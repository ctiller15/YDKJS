// There's a drawback to concise methods...
var Foo = {
	bar() { /*..*/ },
	baz: function baz() { /*..*/ }
};

// and de-sugaring...

var Foo = {
	bar: function() { /*..*/ },
	baz: function baz() { /*..*/ }
};

// The bar() short-hand became an anonymous function expression
// attached to the bar property.