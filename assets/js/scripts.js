$(document).ready(function() {
  
	var links = $('.link');

	links.mouseenter(function() {
		$('span').addClass('addOpacity');
		$('.link').not(this).addClass('addOpacity');
	}).mouseleave(function(){
		$('.addOpacity').removeClass('addOpacity');
	});


	links.on('click', function(){
		$('.addOpacity').removeClass('addOpacity');
	});

});