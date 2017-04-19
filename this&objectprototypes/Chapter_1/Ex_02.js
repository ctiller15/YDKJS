// Instead of relying on this, we could have explicitly
//passed in a context object to both identify() and speak()

function identify(context) {
	return context.name.toUpperCase();
}

function speak(context) {
	var greeting = "Hello, I'm " + identify( context );
	console.log( greeting );
}

var me = {
	name: "Kyle"
};

var you = {
	name: "Reader"
};

console.log(identify( you )); //
speak( me );	//