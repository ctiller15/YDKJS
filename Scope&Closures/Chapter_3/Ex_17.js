var foo = true;

if (foo) {
	var bar = foo * 2;
	bar = something( bar );
	console.log( bar );
}

// Using var ensures it will belong to the enclosing scope.