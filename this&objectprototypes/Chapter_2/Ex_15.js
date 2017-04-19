// Many libraries provide an optional context parameter.
// It is a work-around for you not having to use bind.

function foo(el) {
	console.log( el, this.id );
}

var obj = {
	id: "awesome"
};

// use 'obj' as 'this' for 'foo(..)' calls
[1, 2, 3].forEach( foo, obj );	// 1 'awesome' 2 'awesome' 3 'awesome'

// internally, these functions always use explicit binding
// via call or apply .