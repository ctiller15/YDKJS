// Nested/Chained Callbacks:

listen( "click", function handler(evt){
	setTimeout( function request(){
		ajax( "http://some.url.1", function response(test){
			if (text == "hello") {
				handler();
			}
			else if (text == "world") {
				request();
			}
		} );
	}, 500) ;
} );