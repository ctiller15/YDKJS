// declaring constants.
const ACCESSORY_PRICE = 9.99;
const SALES_TAX = 0.08;
const amount = 99.99;

//Starting bank balance and starting total.
var bank_balance = 322.13;
var total = 0;

//subtracts from the bank balance and adds to the running total.
function change(cost){
	bank_balance = bank_balance - cost;
	total = total + cost;
}

//Calculates sales tax.
function tax(val){
	return val * SALES_TAX;
}

//Displays the entire total.
function display(tot){
	console.log( "$" + tot.toFixed( 2 ) );
}

while(amount < bank_balance){
	// We will buy a phone AND an accessory if the cost is below our mental threshold.
	if(amount * 2 < bank_balance){
		// Buying an accessory...
		change(ACCESSORY_PRICE);
	}
	change(amount);
}
bank_balance = bank_balance - ( tax( total ) );

total = total + ( tax( total ) );

if(bank_balance > 0){
	console.log("You can afford it!!!");
	display(total);
} else{
	console.log("You can't afford that!");
	display(total);
}
