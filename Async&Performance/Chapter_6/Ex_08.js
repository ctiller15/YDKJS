// More subtle pitfalls:

// Case 1
var x = false;
var y = x ? 1 : 2;

// Case 2
var x;
var y = x ? 1 : 2;

// You're setting x's value in the first case and not setting it in the other.
// You're actually doing work in the first case that you're not
// doing in the second.

// To eliminate potential skew...

// Case 1
var x = false;
var y = x ? 1 : 2;

// Case 2
var x = undefined;
var y = x ? 1 : 2;