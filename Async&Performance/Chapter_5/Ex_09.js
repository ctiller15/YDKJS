// There are some "tricks" you can use to hint to an asm.js-aware JS engine that the intended type
// is for variables/operations so it can skip those steps.

var a = 42;

// ..

var b = a;

// Could instead be written as:

var a = 42;

// ..

var b = a | 0;

// The addition operation could be more performant as well:

( a + b ) | 0;