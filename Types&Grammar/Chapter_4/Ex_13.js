// A value is truthy if it's not on the falsy list.

var a = "false";
var b = "0";
var c = "''";

var d = Boolean( a && b && c );

console.log( d );	// true

// "" is the only string value on the falsy list.