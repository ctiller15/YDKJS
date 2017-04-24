// But wait! We can polyfill even easier!

if (!Number.isNaN) {
	Number.isNaN = function(n) {
		return n !== n;
	};
}

// Hah! We tricked javascript!