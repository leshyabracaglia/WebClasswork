//****************************************************************
//TEXT STYLE APPLICATION
//****************************************************************

//Fist button changes text color to green
$(document).ready(function(){//onload
	$("#b1").on('click',function(){//b1
	
    $("h1").css('color', 'green');
 });
});


//Second button does yellow highlight
$(document).ready(function(){//onload
	$("#b2").on('click',function(){//b1
	
    $(".highlight").css('background-color', 'yellow');
 });
});


//button 3 manipulates the instructions in paragraph
$(document).ready(function(){//onload
$('#b3').on('click',function(){

    $("p").css('color', 'white');
    $("p").css('text-shadow', '2px 2px black');
    $("p").css('font-size', '40px');
    $("p").css('margin', '50px');
    $("p").css('font-variant', 'small-caps');
    
});
});

//displays paragraph html
$(document).ready(function(){//onload
$('#b4').on('click',function(){

alert($("p").html);
    
});
});

//****************************************************************
//IMAGE APPLICATION
//****************************************************************

//show
$(document).ready(function(){//onload
$('#show').on('click',function(){

$('#img').show();
    
});
});


//hide
$(document).ready(function(){//onload
$('#hide').on('click',function(){

$('#img').hide();
    
});
});

//fadein
$(document).ready(function(){//onload
$('#fin').on('click',function(){

$('#img').fadeIn(3000);
    
});
});

//fadeout
$(document).ready(function(){//onload
$('#fout').on('click',function(){

$('#img').fadeOut(3000);
    
});
});

//****************************************************************
//ANIMATION APPLICATION
//****************************************************************

$(document).ready(function(){
    $('#anim').on('click', function() {
        $("#toani").animate({
            left: '+=50px',
            opacity: '1',
            height: '+=20px',
            width: '+=20px'
        });
    });
});