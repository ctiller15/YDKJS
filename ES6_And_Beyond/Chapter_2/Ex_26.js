// You can use computed property expressions in the destructuring:

var which = "x",
	o = {};

( { [which]: o[which] } = bar() );

console.log( o.x );

// [which] is the computed property.