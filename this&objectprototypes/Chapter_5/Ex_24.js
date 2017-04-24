// You can design your API to still take advantage of prototype linkage.

var anotherObject {
	cool: function() {
		console.log( "cool!" );
	}
};

var myObject = Object.create( anotherObject );

myObject.doCool = function() {
	this.cool();	// internal delegation!
};

myObject.doCool();	// "cool!"