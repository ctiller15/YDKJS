// modules proof of concept.

var MyModules = (function Manager() {
	var modules = {};

	function define(name, deps, imp1) {
		for (var i=0; i<deps.length; i++) {
			deps[i] = modules[deps[i]];
		}
		modules[name] = imp1.apply( imp1, deps );
	}

	function get(name) {
		return modules[name];
	}

	return {
		define: define,
		get: get
	};
})();