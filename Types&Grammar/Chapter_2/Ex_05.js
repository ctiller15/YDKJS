// if a string value intended as a key can be coerced into a number,
// it is assumed you wanted to use it as a number index.

var a = [];
a["13"] = 42;

console.log(a);
console.log(a.length);