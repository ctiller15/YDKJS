var a = 42;
typeof a;	// "number"

a = true;
typeof a;	// "boolean"

// the typeof operator always returns a string as well.

typeof typeof 42;	// "string"

// the first typeof 42 returns "number", and typeof "number" is "string"