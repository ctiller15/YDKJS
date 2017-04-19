// JS developers have strived to simulate as much as they can
// of class-orientation.

function Foo(name) {
	this.name = name;
}

Foo.prototype.myName = function() {
	return this.name;
};

var a = new Foo( "a" );
var b = new Foo( "b" );

console.log(a.myName()); // "a"
console.log(b.myName()); // "b"