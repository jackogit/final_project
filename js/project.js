/*
$(document).ready(function(){
	$(".body").mouseover(function(){
		$(".merg").animate({
			color : blue;
		})
	});

});
*/
$(document).ready(function(){
    $(".rate").hover(function(){
        $(this).css("background-color", "yellow");
				}, function(){
        $(this).css("background-color", "pink");
    });
    $('#hamburger').click(function(event) {
        event.preventDefault();
        $('nav').toggleClass('visible');
    });
});


/*

$(document).ready(function(){
	$("body").mouseenter(function() {
		$(".tagline").fadeIn(2000);
	});
	$("body").mouseenter(function() {
		$(".tagline").fadeOut(5000);
	});

//	$("#toiletSound").click(function(){
//		var $audio = $('#audio');
//		var audio = document.getElementById("audio");
//
//		console.log($audio);
//		console.log('-------------');
//		console.log(audio);
//
//		audio.play();
//	});
	$("body").mouseenter(function(){
		var $audio = $('#audio');
		var audio = document.getElementById("audio");

		//console.log($audio);
		console.log('-------------');
		console.log(audio);
		audio.play();
	});

//All I seem to need is the AUDIO PLAY in next line & html line 65.thats all!
//		audio.play();
	$(".toiletRepairVideo").click(function(){
		video.play();
	});

	$("body").hover(function(){
		$(".merg").fadeIn(1000);
	});
	$("body").hover(function(){
		$(".merg").fadeOut(1000);
	});
//animate colors with BitStorm.com...applying to index.html .blurb
	$(".blurb").onclick(function(){
	$('.blurb').animate({backgroundColor: '#400101'});
	});


});

 function calculateSquareHorFootage() {
 	var footLength = document.getElementById("footLength").value;
 	var footWidth = document.getElementById("footWidth").value;
	var calculateSquareHorFootage = footWidth * footLength;
 	document.getElementById("sqFootage").innerHTML = calculateSquareHorFootage;
 }
	document.getElementById("clickme").onclick = calculateSquareHorFootage;


*/
