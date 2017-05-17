// What is the precedence of ternary ops?

//a && b || c ? c || b ? a : c && b : a;

// Is it more like...

// a && b || (c ? c || (b ? a : c) && b : a)

// Or like:

// (a && b || c) ? (c || b) ? a : (c && b) : a