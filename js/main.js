// Description
	console.log('Designed By: Xing.Huang');

// Loading Part
	$('.loading').css('width',$(window).width()).css('height',$(window).height());


// After Loading
	function load() {
		setTimeout(function(){
			$('.loading').css('display','none');
			$('.loaded').css('display','block');
			$('header').css('display','block');
			setTimeout(function(){
				$('#navigation-button').addClass('loaded');
				$('.welcome-pokemon span').addClass('welcome-loaded');			
			},10);
		},3000);
	}
// Menu Click
	var menuClick = 0;
	$('#navigation-button').click(function(){
		$('.nav-top').toggleClass('small-screen');
	});
// ScrollBar Animation
	