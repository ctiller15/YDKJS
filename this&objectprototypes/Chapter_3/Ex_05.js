// Since the [".."] syntax uses a string's value to specify the location,
// the program can programatically build up the value of the string.

var wantA = true;
var myObject = {
	a: 2
};

var idx;

if (wantA) {
	idx = "a";
}

// later

console.log( myObject[idx] );	// 2