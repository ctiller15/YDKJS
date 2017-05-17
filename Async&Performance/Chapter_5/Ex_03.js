// Can load extra JS scripts into your Worker.

// inside the Worker:
importScripts( "foo.js", "bar.js" );

// Scripts are loaded synchronously.
// Importscripts will block the rest of the Worker's execution until the files are finished
// loading and executing.