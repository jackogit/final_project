$(document).ready(function(){

		$(".callouts").hover(function(){
			$(".rate").css("color","maroon");
		});

    $("div").css("border-radius","5px");
 

	$('#hamburger').click(function(event) {
        	event.preventDefault();
        $('nav').toggleClass('visible');
    });

	$("body").mouseenter(function() {
		$(".tagline").fadeIn(2000);
	});

	$("body").mouseenter(function() {
		$(".tagline").fadeOut(5000);
	});
//*	
//*TOILET FLUSH					
//*
	$("body").mouseenter(function(){
		var $audio = $('#audio');
		var audio = document.getElementById("audio");
		audio.play();
	});
		
//*
//*REPAIR VIDEOS
	$(".toiletRepairVideo").click(function(){
		video.play();
	});
});
//*
//*CALCULATE SQUARE FOOTAGE FOR CLEANING
//*
document.getElementById("clickme").onclick = calculateSquareHorFootage;

 function calculateSquareHorFootage() {
 	var footLength = document.getElementById("footLength").value;
 	var footWidth = document.getElementById("footWidth").value;
	var calculateSquareHorFootage = footWidth * footLength;
 	document.getElementById("sqFootage").innerHTML = calculateSquareHorFootage;
}


//LEAVING IN FOR AN EXAMPLE OF CONSOLE.LOG USAGE
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

					//console.log($audio);
					//	console.log('-------------');
					//	console.log(audio);
					//	audio.play();
					//All I seem to need is the AUDIO PLAY 

					//  Leaving in to remind me to learn about BitStorm
					//animate colors with BitStorm.com...applying to index.html .blurb
					//	$(".blurb").onclick(function(){
					//	$('.blurb').animate({backgroundColor: '#400101'});
