function calendar(){
	
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	
	var calendar = new Array(20); //initiating dates, start and end date in array, same if one day
	calendar[0] = [8, 2, 2, 2018, "Labor Day.  This is an NYU Holiday. There are no classes!", "<br><img src='images/laborday.gif'>"];
	calendar[1] = [8, 3, 3, 2018, "the day NYU fall classes begin. This is not an NYU holiday.", "<br><img src='images/bts.gif'>"];
	calendar[2] = [9, 7, 7, 2018, "fall recess.  No NYU Classes!", "<br><img src='images/fall.gif'>"];
	calendar[3] = [9, 8, 8, 2018, "a legislative day. NYU follows a Monday class schedule.", "<br><img src='images/monday.gif'>"];
	calendar[4] = [10, 20, 22, 2018, "Thanksgiving break. There are no NYU classes!", "<br><img src='images/thanks.gif'>"];
	calendar[5] = [11, 13, 13, 2018, "the last day of fall 2018 classes!", "<br><img src='images/last.gif'>"];
	calendar[6] = [11, 16, 20, 2018, "Fall exams.", "<br><img src='images/finals.gif'>"];
	calendar[7] = [11, 21, 32, 2018, "Winter recess. No NYU classes!", "<br><img src='images/wbreak.gif'>"];
	calendar[8] = [0, 0, 3, 2019, "Winter recess. No NYU classes!", "<br><img src='images/wbreak.gif'>"];
	calendar[9] = [0, 20, 20, 2019, "Martin Luther King Jr. Day. No NYU classes.", "<br><img src='images/mlk.gif'>"];
	calendar[10] = [0, 27, 27, 2019, "the day NYU spring classes begin! This is not an NYU holiday.", "<br><img src='images/spring.gif'>"];
	calendar[11] = [1, 17, 17, 2019, "Presidents' Day. There are no NYU classes.", "<br><img src='images/president.gif'>"]; 
	calendar[12] = [2, 17, 23, 2019, "Spring Break. No classes!", "<br><img src='images/sprang.gif'>"];
	calendar[13] = [4, 12, 12, 2019, "the last day of NYU spring classes!", "<br><img src='images/last.gif'>"]; 
	calendar[14] = [4, 14, 20, 2019, "Spring exams.", "<br><img src='images/finals.gif'>"]; 
	calendar[15] = [4, 26, 26, 2019, "Memorial Day. No NYU classes!", "<br><img src='images/memorial.gif'>"]; 
	calendar[16] = [4, 27, 27, 2019, "the first day of NYU summer classes!", "<br><img src='images/bts.gif'>"]; 
	calendar[17] = [6, 3, 3, 2019, "Independence Day. No NYU classes.", "<br><img src='images/july4.gif'>"]; 
	calendar[18] = [7, 0, 0, 2019, "the date of the Census capture!", "<br><img src='images/census.gif'>"]; 
	calendar[19] = [7, 17, 17, 2019, "the last day of NYU summer classes!", "<br><img src='images/last.gif'>"]; 
	
	
	
	
	var date1= document.getElementById("date");
	var date = new Date(date1.value); //gets date from the input
	
	var month = date.getMonth();
	var day = date.getDate();
	var year = date.getFullYear();
	
	var output = "";
	var out = document.getElementById("out2"); //output text
	
	var found = 0; //not found
	
	//out of bounds
	if((year==2019 && month>7) || (year>2019) || (year<2018) || (month<8 && year==2018)){
		output+= "<div id='div'>this day falls outside of the range of data.<\div>";
	}else{
		for(var i=0; i<calendar.length; i++){
			//if the day finds a holiday, print message
			if((month==calendar[i][0]) && day>=calendar[i][1] && day<=calendar[i][2] && (year==calendar[i][3])){
				found = 1; //found
				output+= "<div id='div'>" + months[month] + " " + (day+1) + ", " + year + " is ";
				output+= calendar[i][4] + calendar[i][5] + "</div>";
			}//end of if
		}//end of for
	if (found==0) {output+="<div id='div'>This is not an NYU holiday</div>";}
	}//end of else
	
	
	out.innerHTML = output;
	
}