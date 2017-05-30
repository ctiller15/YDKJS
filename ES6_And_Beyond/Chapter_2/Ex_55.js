// Getters/setters literal forms were defined in ES5.

var o = {
	_id: 10,
	get id() { return this.__id++; },
	set id(v) { this.__id = v; }
}

o.id;					// 10
o.id;					// 11
o.id = 20;
o.id;					// 20

// and:
o.__id;					// 21
o.__id;					// 21 -- still!

// These getter/setter forms also present in classes.
// setter literal must have exactly one declared parameter.