function printarr(){
	var prizes = new Array(5);
	prizes[0] = ["New Car", 0];
	prizes[1] = ["iPhone", 1];
	prizes[2] = ["Free Uber", 2];
	prizes[3] = ["Grocery Giftcard", 3];
	prizes[4] = ["Nothing", 4];
	
	var size = prizes.length;
	var output = '';
	for(var i=0; i<size; i++){
		output = output + "<br>" + prizes[i][0];
	}
	var p = document.getElementById("prizes");
	p.innerHTML = ("The Possible Prizes Are: " + output);
	
}

function prize(){
	var prizes = new Array(5);
	prizes[0] = ["New Car", 0];
	prizes[1] = ["iPhone", 1];
	prizes[2] = ["Free Uber", 2];
	prizes[3] = ["Grocery Giftcard", 3];
	prizes[4] = ["Nothing", 4];
	
	var size = prizes.length;
	
	var rand = Math.floor(Math.random()*size);
	var p = document.getElementById("yourprize");
	p.innerHTML = ("You won " + prizes[rand][0]);
}