// Another pitfall is opaquely avoiding or adding "extra work" to one test case that creates
// an apples-to-oranges scenario:

// Case 1
var x = [12,-14,0,3,18,0,2.9];
x.sort();

// Case 2
var x = [12,-14,0,3,18,0,2.9];
x.sort( function mySort(a,b){
	return a - b;
} );