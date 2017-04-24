// Oh yeah, also you can't compare NaN to itself. Inconvenient!

var a = 2 / "foo";

console.log(a == NaN);		// false
console.log(a === NaN);		// false

// Ha! You expected this to make sense!