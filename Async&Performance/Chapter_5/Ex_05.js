// Creating a single centralized Worked that all the page
// instances of your app can share is useful.
// This is called a SharedWorker.
// Create SharedWorkers like so:

var w1 = new SharedWorker( "http://some.url.1/mycoolworker.js" );