// calling slice without any other parameters effectively duplicates
// the array.

// As of ES6, we can use Array.from(..) that does the same thing.

...
var arr = Array.from( arguments );
...