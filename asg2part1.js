function changeStyle(){
	var text = document.getElementById('tochange');
	text.style.color = '#ff3df8';
	text.style.fontFamily = "Impact,Charcoal,sans-serif";
	text.style.backgroundImage = "url('images/stars.gif')";
	text.style.borderRadius = "100px";
}

function swapT(){
	var p1 = document.getElementById('p1');
	var p2 = document.getElementById('p2');
	var temp = p1.innerHTML;
	p1.innerHTML = p2.innerHTML;
	p2.innerHTML = temp;
}

function swapI(){
	var img1 = document.getElementById('img1');
	var img2 = document.getElementById('img2');
	var temp = img1.src;
	img1.src = img2.src;
	img2.src = temp;
}

function printarr(){
	var prizes = ['$1 Million!', 'A New Car!', 'A New House!', 'Nothing :(', 'A New iPhone!', 'All Prizes!'];
	var size = prizes.length;
	var output = '';
	for(var i=0; i<size; i++){
		output = output + prizes[i] + "    ";
	}
	var p = document.getElementById("prizes");
	p.innerHTML = ("The Possible Prizes Are: " + output);
}

function prize(){
	var prizes = ['$1 Million!', 'A New Car!', 'A New House!', 'Nothing :(', 'A New iPhone!', 'All Prizes!'];
	var size = prizes.length;
	var rand = Math.floor(Math.random()*size);
	var p = document.getElementById("yourprize");
	p.innerHTML = ("You won " + prizes[rand]);
}

function newDoc(){
	var output="";
	output+="<h1>I Think You're Cute</h1>"
	output+="<link rel='stylesheet' type='text/css' href='styles/newdoc.css'>"
	output+="<img src='images/urcute.gif' id='cute' class='center'></img>"
	output+="<p id='newdoc'>This is an image found on giphy.com. It is a gif taken from the TV show Adventure Time on Cartoon Network</h3>";
	output+="<p>Height: " + document.getElementById("cute").height + "px</p>";
	output+="<p>Width: " + document.getElementById("cute").width + "px</p>";
	var date = new Date();
	output+="<p>Current Date:" + (date.getMonth()+1) + "-" + (date.getDate()) + "-" + date.getFullYear() + "</p>";
	output+="<p>Weekday: " + (date.getDay()+1);
	switch(date.getDay()) {
    	case 0:
        	output+= " Sunday</p>";
        	break;
    	case 1:
        	output+= " Monday</p>";
        	break;
     	case 2:
        	output+= " Tuesday</p>";
        	break;  
    	case 3:
        	output+= " Wednesday</p>";
        	break; 
    	case 4:
        	output+= " Thursday</p>";
        	break;
    	case 5:
        	output+= " Friday</p>";
        	break;
    	case 6:
        	output+= " Saturday</p>"
        	break;
	}
	output+="<h3><a href='asg2part1.html'>Return to Javascript Home</a></h3>";
	
	document.write(output);
		
}

function convert(){
	var years = document.getElementById("years").value;
	var dog = document.getElementById("dog");
	dog.value = years*7;
}