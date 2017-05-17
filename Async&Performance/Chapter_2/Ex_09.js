// Ad hoc code from imaginary scenario:

var tracked = false;

analytics.trackPurchase( purchaseData, function(){
	if (!tracked) {
		tracked = true;
		chargeCreditCard();
		displayThankyouPage();
	}
} );