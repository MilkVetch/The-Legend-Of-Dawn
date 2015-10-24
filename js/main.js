// Description
	console.log('Designed By: Xing.Huang');

// Loading Part
	$('.loading').css('width',$(window).width()).css('height',$(window).height());


// After Loading
	function load() {
		$('.loading').css('display','none');
		$('.loaded').css('display','block');
		$('#navigation-button').addClass('loaded');
		$('.welcome-pokemon span').addClass('welcome-loaded');
	}
// Menu Click
	var menuClick = 0;
	$('#navigation-button').click(function(){
		$('.nav-top').toggleClass('small-screen');
	});
// ScrollBar Animation
	