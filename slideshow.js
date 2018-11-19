
var arr = ["images/fine1.gif","images/fine2.gif","images/fine3.gif", "images/fine4.gif","images/fine5.gif", "images/fine6.gif"];

var count=0;

var flag;// use to stop slideshow


// start slideshow when user click on start button
function start()
{
	if (count == arr.length){
 		count=0;
	}
	
	var img = document.getElementById("showing");
	img.src = arr[count];
	img.style.width="500px";
	img.style.height="500px";
	count++; 

	myFlag = setTimeout(start, 2000);
}

// stop start show when user clicks on stop button
function stop()
{
	clearTimeout(myFlag);
}
