// What about when there's two operators involved and three operands?

var a = 42;
var b = "foo";
var c = [1,2,3];

a && b || c;	// ???
a || b && c;	// ???