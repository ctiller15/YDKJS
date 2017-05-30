// We'll define a foo(..) that takes a start (x) and end (y) integer for a range.
// It then calculates all the inner adjacent multiplications of the
// values in the range, and then finally averages those values
// together:

function fooASM(stdlib,foreign,heap) {
	"use asm";

	var arr = new stdlib.Int32Array( heap );

	function foo(x,y) {
		x = x | 0;
		y = y | 0;

		var i = 0;
		var p = 0;
		var sum = 0;
		var count = ((y|0) - (x|0)) | 0;

		// calculate all the inner adjacent multiplications
		for (i = x | 0;
			(i | 0) < (y | 0);
			p = (p + 8) | 0, i = (i + 1) | 0
		) {
			// store result
			arr[ p >> 3 ] = (i * (i + 1)) | 0;
		}

		// calculate average of all intermediate values
		for (i = 0, p = 0;
			(i | 0) < (count | 0);
			p = (p + 8) | 0, i = (i + 1) | 0
			) {
				sum = (sum + arr[ p >> 3 ]) | 0;
		}

		return +(sum / count);
	}

	return {
		foo: foo
	};

}

var heap = new ArrayBuffer( 0x1000 );
var foo = fooASM( window, null, heap ).foo;

foo( 10, 20 );			// 233