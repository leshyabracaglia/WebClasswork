function changeprop(){

	var img = document.getElementById('tochange');
	img.height = img.naturalHeight;

}

function ranimage(){
	
	var arr = new Array();
	arr[0] = new Image();
	arr[0].src = 'images/ran1.gif';
	arr[1] = new Image();
	arr[1].src = 'images/ran2.gif';
	arr[2] = new Image();
	arr[2].src = 'images/ran3.gif';
	arr[3] = new Image();
	arr[3].src = 'images/ran4.gif';
	arr[4] = new Image();
	arr[4].src = 'images/ran5.gif';
	
	var choice = Math.floor(Math.random()*5);
	console.log(choice);
	
	var img = document.getElementById("showing");
	img.src = arr[choice].src;
}

function convert(){
	
	var doll = document.getElementById("usd").value;
	var euro = doll*(0.87); //exchange rate
	
	var output = document.getElementById("result");
	output.value = euro;	
}

function display(){

	var obj = document.forms[0]; 
 	var len = obj.elements.length;// how many elements in form[0]
 	console.log(len);
	var output = "Your Information: ";

	for (var index=0; index <len-6; index ++){//cycles through the form
		var element = obj.elements[index];
		if (element.value == "" || element.value== null){ //no value
			alert("Please enter a value for " + element.name);
			element.focus();
			element.style.backgroundColor="#F00";
			return;
		}else if (index == 1 && element.value.length != 10){ // no phone number
			alert("Please enter a 10-digit phone number, digits only.");
			element.focus();
			element.style.backgroundColor="#F00";
			return;
		}else if (index == 2 && (element.value.indexOf("@") == -1 || element.value.indexOf(".") == -1)){ // if no @ or .
			alert("Please enter a valid email.");
			element.focus();
			element.style.backgroundColor="#F00";
			return;
		}else if (index == 3 && element.value == "default"){ // didnt choose gender
			alert("Please choose a gender.");
			element.focus();
			element.style.backgroundColor="#F00";
			return;
		}

	output += "<h3>" + element.name + ": " + element.value; 

	}//end of for loop

	document.getElementById("result").innerHTML = output;
	return;

}