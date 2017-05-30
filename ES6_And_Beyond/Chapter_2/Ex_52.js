// What if your inner this.makeRequest(..) call needs to be
// made from a nested function?

var controller = {
	makeRequest: function(..){
		var self = this;

		btn.addEventListener( "click", function(){
			// ..
			self.makeRequest(..);

		}, false);
	}
};