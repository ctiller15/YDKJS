// You can also use || short circuiting:

function doSomething(opts) {
	if (opts.cache || primeCache()) {
		// ..
	}
}