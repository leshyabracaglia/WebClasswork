function bday(){
	
	var name1 = document.getElementById("name1").value; //gets inputs
	var name2 = document.getElementById("name2").value;
	var d1og = document.getElementById("bd1");
	var d2og = document.getElementById("bd2");
	
	var date1 = new Date(d1og.value); //gets dates from the inputs
	var date2 = new Date(d2og.value); 
	
	var output = "<div id='div'>" + name1 + " was born on " + (date1.getMonth()+1) + "/" + (date1.getDate()+1) + "/" + (date1.getFullYear());
	output += "<br>" + name2 + " was born on " + (date2.getMonth()+1) + "/" + (date2.getDate()+1) + "/" + (date2.getFullYear());
	
	if(date1.getFullYear() > date2.getFullYear()){ //years
		output+= "<br>" + name2 + " is older than " + name1 + "!</div>"; 
	}else if(date1.getFullYear() < date2.getFullYear()){
		output+= "<br>" + name1 + " is older than " + name2 + "!</div>";
	}else if(date1.getMonth() > date2.getMonth()){ //months
		output+= "<br>" + name2 + " is older than " + name1 + "!</div>"; 
	}else if(date1.getMonth() < date2.getMonth()){ //months
		output+= "<br>" + name1 + " is older than " + name2 + "!</div>"; 
	}else if(date1.getDate() > date2.getDate()){ //months
		output+= "<br>" + name2 + " is older than " + name1 + "!</div>"; 
	}else if(date1.getDate() < date2.getDate()){ //months
		output+= "<br>" + name1 + " is older than " + name2 + "!</div>"; 
	}else{
		output+= "<br>" + name1 + " and " + name2 + " are the same age!</div>";
	}
	
	var out = document.getElementById("out"); //output text
	out.innerHTML = output;
}