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

//*****************************************************************
//USERNAME PASSWORD APPLICATION
//*****************************************************************

$(document).ready(function(){
    $("input").on('change', function() { //on  change

        if ($(".user").val() == (null || "")) { //username empty
            console.log("user empty");
            alert("Please enter " + $(".user").attr('name'));
            $(".user").focus();
            $(".user").css("background-color","yellow");
        }else if($(".pass").val() == (null || "")){ //password empty
            console.log("pass empty");
            alert("Please enter " + $(".pass").attr('name'));
            $(".pass").focus();
            $(".pass").css("background-color","yellow");
        }else{ //both are entered
            console.log("entered")
            var output = "<p>Username: " + $(".user").val() + "</p>" + 
                "<p>Password: " + $(".pass").val() + "</p>";
             $("#demo").html(output);
        }

    });
});

//****************************************************************
//NICE JQUERY WEBSITE -- SLACKTRIBE
//****************************************************************

$(document).ready(function() {

    $('nav').hide().delay(500).fadeIn(1000);

   $('.links').eq(0).on('click', function() { //video
        $('.links').removeClass('selected'); //selected
        $(this).addClass('selected');

      $('section').empty();
       var $video = '</br></br><div class="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/bjyftzD8GwU" frameborder="0" allowfullscreen></iframe></div></br></br>';
       $('section').html($video);
    });
    
    $('.links').eq(1).on('click', function() { //art
        $('.links').removeClass('selected');
        $(this).addClass('selected');

        $('links').empty();
        var $nyphoto = '</br></br><div class="center"><img src="images/st1.jpg" width="400" border=2></div></br></br><div class="center"><img src="images/st2.jpg" width="400" border=2></div></br></br><div class="center"><img src="images/st3.jpg" width="400" border=2></div>';
        $('section').html($nyphoto);
    });

    $('.links').eq(2).on('click', function() { //Shows
        $('.links').removeClass('selected');
        $(this).addClass('selected');
        $('section').empty();


        var $concerts = '</br><p class="shows">No upcoming shows</p><p class="shows">Please contact to schedule:</p><p class="shows">slacktribefcc@gmail.com</p>';
       $('section').html($concerts);

    });


});