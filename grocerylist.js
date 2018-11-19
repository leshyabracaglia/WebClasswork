
var button = document.getElementById('bt1'); //gets button
button.addEventListener("click", append); //append to list when you click

var list = document.getElementById('list'); //gets list

function append(){
	var item = document.getElementById('input').value; //gets item entered
	if((item == "") || (item == null)){ //no item entered
			alert("Please Enter An Item Name");
			return;
	}else{
		var newitem = document.createElement('li'); //add to list
		var itemtext = document.createTextNode(item);
		newitem.appendChild(itemtext);
		newitem.addEventListener("click", done);
		list.appendChild(newitem);
	}//end of else
	document.getElementById('input').value = ""; //empty input box
}//end of append

function done(){            
	this.className = 'done';
}
var listItems = document.querySelectorAll('li');                   // All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var i;                                                             // Counter variable
for (i = 1; i < listItems.length; i++) {                           // Loop through elements
  listItems[i].className = 'cool';                                 // Change class to cool
  
}
