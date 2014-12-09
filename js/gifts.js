var buyNow1 = document.getElementById("v10");
var buyNow2 = document.getElementById("v20");
var buyNow3 = document.getElementById("v50");
var buyNow4 = document.getElementById("v100");

buyNow1.onclick = printCard();
buyNow2.onclick = printCard();
buyNow3.onclick = printCard();
buyNow4.onclick = printCard();


function printCard(){
	var cardName = document.getElementById("cardName");
	var cardValue = this.innerHTML; 

	var printName = document.getElementById("printName");
	var printValue = document.getElementById("printValue").innerHTML; 

	var dineCard = document.getElementById("dineCard");

	printName.innerHTML = cardName.innerHTML;
	printValue.innerHTML = cardValue;

	return false;

}


