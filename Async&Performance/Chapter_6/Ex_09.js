// Sometimes the compiler can decide to run different code than you wrote.

var foo = 41;
(function(){
	(function(){
		(function(baz){
			var bar = foo + baz;
			// ..
		})(1);
	})();
})();

// It's quite possible and acceptable that the JS compiler
//could decide to just remove the foo variable entirely,
// and inline the value

(function(){
	(function(){
		(function(baz){
			var bar = 41 + baz;
			//..
		})(1);
	})();
})();