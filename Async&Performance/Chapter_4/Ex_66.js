// If we use regenerator to transpile our previous generator,
// here's the code produced:

// `request(..)` is a Promise-aware Ajax utility

var foo = regeneratorRuntime.mark(function foo(url) {
	var val;

	return regeneratorRuntime.wrap(function foo$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.prev = 0;
				console.log( "requesting:", url );
				context$1$0.next = 4;
				return request( url );
			case 4:
				val = context$1$0.sent;
				console.log( val );
				context$1$0.next = 12;
				break;
			case 8:
				context$1$0.prev = 8;
				context$1$0.t0 = context$1$0.catch(0);
				console.log("Oops:", context$1$0.t0);
				return context$1$0.abrupt("return", false);
			case 12:
			case "end":
				return context$1$0.stop();

		}
	}, foo, this, [[0, 8]]);
});