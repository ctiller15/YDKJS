// Make a.valueOf() uave side effects each time it's alled.

var i = 2;

Number.prototype.valueOf = function() {
	return i++;
};

var a = new Number( 42 );

if (a == 2 && a == 3){
	console.log( "Well wouldja lookit dat." );
}