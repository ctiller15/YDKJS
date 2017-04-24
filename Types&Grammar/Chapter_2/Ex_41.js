// To distinguish -0 from 0, you can't just rely on what the console outputs!

function isNegZero(n) {
	n = Number( n );
	return (n === 0) && (1 / n === -Infinity);
}

isNegZero( -0 );			// true
isNegZero( 0 / -3 );		// true
isNegZero( 0 );				// false