// ES5's strict mode defines even more early errors.

// In strict mode, function parameter names cannot be duplicated:

function foo(a,b,a) { }

function bar(a,b,a) { "use strict"; }	// Error! Duplicate parameter name not allowed.