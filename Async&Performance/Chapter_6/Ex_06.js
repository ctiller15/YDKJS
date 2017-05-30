// Another common apples-to-oranges flaw:

// Case 1
var x = ["John","Albert","Sue","Frank","Bob"];
x.sort();

// Case 2
var x = ["John","Albert","Sue","Frank","Bob"];
x.sort( function mySort(a,b){
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
} );