// A situation with one or more property names that come from some sort of expression
// and thus can't be put into the object literal:

var prefix = "user_";

var o = {
	baz: function(..){ .. }
};

o[ prefix + "foo" ] = function(..){ .. };
o[ prefix + "bar" ] = function(..){ .. };
..

// ES6 adds a syntax to the object literal definition which allows you to specify an expression that should be computed, whose result is
// the property name assigned.

var prefix = "user_";

var o = {
	baz: function(..){ .. },
	[ prefix + "foo" ]: function(..){ .. },
	[ prefix + "bar" ]: function(..){ .. }
	..
};

// Any valid expression can appear inside the [ .. ] that sits in the property name
// position.