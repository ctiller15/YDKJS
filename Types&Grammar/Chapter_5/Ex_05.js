// There's a proposal for an ES7 "do expression":

var a, b;

a = do {
	if (true) {
		b = 4 + 38;
	}
};

console.log( a );