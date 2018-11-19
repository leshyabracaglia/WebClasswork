//all the onchanges
var q1 = document.getElementById("q1");
q1.addEventListener("change", total);
var q2 = document.getElementById("q2");
q2.addEventListener("change", total);
var q3 = document.getElementById("q3");
q3.addEventListener("change", total);
var q4 = document.getElementById("q4");
q4.addEventListener("change", total);
var q5 = document.getElementById("q5");
q5.addEventListener("change", total);
var q6 = document.getElementById("q6");
q6.addEventListener("change", total);
var ship = document.getElementById("select");
ship.addEventListener("change", total);


function total(){ //updates cart total
	//get all the forms, go through each quantity form, and add to total
	
	var prices = document.getElementsByClassName('price');
	var quants = document.getElementsByClassName('quant');
	
	var output = document.getElementById('ctotal'); //cart total
	var total = 0;
	
	var len = prices.length;
	for(var i=0; i<len; i++){ //goes through each quantity element
		total+= prices[i].value * quants[i].value;
	}
	
	output.value = "$" + total;  //cart total
	
	var gtotout = document.getElementById("gtotal"); //output for grand total
	var sel = document.getElementById("select");
	var shipping = sel.options[sel.selectedIndex].value;
	gtotout.value = "$" + (shipping*1 + total*1);
		
}//end of total


var form = document.getElementById("form"); //gets personal info form

form.addEventListener("submit", function(e)
{
	 e.preventDefault();

	var text = "<h1 align='center'>Your Order</h1>";
	var d = new Date();
	text += "<h1 align='center'>" + d.toDateString() + "</h1>";
	
	var prices = document.getElementsByClassName('price');
	var quants = document.getElementsByClassName('quant');
	var items = document.getElementsByClassName('label');
	console.log(items.length);
	
	var len = prices.length;
	for(var i=0; i<len; i++){ //goes through each quantity element
		if(quants[i].value>0){
			text+="<p align='center'>" + quants[i].value + " " + items[i*3].textContent + "</p>";
		}
	}
	text+="</br>";
	
	len = form.elements.length;
	
	for (var i=1; i < len; i++)//goes through the form 17 elements
	{
		if ((i==2) && (form.elements[i].value.indexOf("@") == -1)){ //email @
			alert("Your email should inlcude an @ " + form.elements[i].name);
			form.elements[i].focus();
			form.elements[i].select();
			form.elements[i].style.backgroundColor="red";
			return;
		}
		else if ((i==2) && (form.elements[i].value.indexOf(".") == -1)){ //email dot
			alert("Your email should inlcude an . " + form.elements[i].name);
			form.elements[i].focus();
			form.elements[i].style.backgroundColor="red";
			return;
		}
		else if ((i==5) && (form.elements[i].value.length != 5)){ //zip code
			alert("Make sure to input 5 digits for " + form.elements[i].name);
			form.elements[i].focus();
			form.elements[i].style.backgroundColor="red";
			return;
		}
		
		else if(i==6 || i==13 || i==15){} //skip these form elements, not elements
		
		else if(i==9 || i==8 || i==7){ //payment type
			if(!form.elements[9].checked && !form.elements[8].checked && !form.elements[7].checked){
			alert("Please Choose A Payment Type");
			form.elements[9].focus();
			form.elements[8].focus();
			form.elements[7].focus();
			form.elements[8].style.backgroundColor="red";
			form.elements[9].style.backgroundColor="red";
			return;
			}
		}
		else if ((i==10) && (form.elements[i].value.length < 16)){ //credit card number
			alert("Please Enter A Valid " + form.elements[i].name);
			form.elements[i].focus();
			form.elements[i].style.backgroundColor="red";
			return;
		}
		else if ((i==14) && ((form.elements[i].value == "") || (form.elements[i].value == null))){ //grand total
			alert("Your Cart is Empty! Please choose at least one item to purchase.");
			form.elements[i].focus();
			form.elements[i].style.backgroundColor="red";
			return;
		}
		else if ((form.elements[i].value == "") || (form.elements[i].value == null)) //any left null
		{
			alert("Please Enter " + form.elements[i].name);
			form.elements[i].focus();
			form.elements[i].style.backgroundColor="red";
			return;
		}else{
			text += "<p align='center'> " + form.elements[i].name;
			text += ": ";
			if(i==10){ //credit card number is X's
				text += "xxxx-xxxx-xxxx-"
				text += form.elements[i].value.substring(12);
			}else{
			text += form.elements[i].value;
			}
			text += "</p>";
		}
	}//end of for loop
	document.write(text);
});


