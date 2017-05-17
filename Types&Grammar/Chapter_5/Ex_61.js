// Other nonlinear control statements like continue and break exhibit similar behavior to return and throw:

for (var i=0; i<10; i++) {
	try {
		continue;
	}
	finally {
		console.log( i );
	}
}

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9