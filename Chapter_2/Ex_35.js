// Understanding polyfill


//Guards against applying the definition where it already exists.
if (!Number.isNaN) {
	Number.isNaN = function isNaN(x) {
			return x !== x;
	};
}