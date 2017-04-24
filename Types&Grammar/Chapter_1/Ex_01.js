// typeof inspects the type and always returns
// a string value.

typeof undefined === "undefined";	// true
typeof true === "boolean";	// true
typeof 42 === "number";	// true
typeof "42" === "string";	// true
typeof { life: 42 } === "object";	// true

// added in ES6!
typeof Symbol()	=== "symbol";	// true

// null, however, is a little buggy.

typeof null === "object";	// true