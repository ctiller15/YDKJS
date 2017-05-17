// Ecommerce checkout system:

analytics.trackPurchase( purchaseData, function(){
	chargeCreditCard();
	displayThankyouPage();
} );