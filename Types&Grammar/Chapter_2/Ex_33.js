// As of ES6, we have Number.isNaN(..);


if (!Number.isNaN) {
	Number.isNaN = function(n) {
		return (
			typeof n === "number" &&
			window.isNaN( n )
		);
	};
}

var a = 2 / "foo";
var b = "foo";

Number.isNaN( a );	// true
Number.isNaN( b );	// false -- Whoo!