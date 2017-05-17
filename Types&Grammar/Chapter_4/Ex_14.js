// What do you expect these to be?

var a = [];					// empty array -- truthy or falsy?
var b = {};					// empty object -- truthy or falsy?
var c = function(){};	// empty function -- truthy or falsy?

var d = Boolean( a && b && c );

console.log( d );