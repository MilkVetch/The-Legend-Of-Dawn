// Description
	console.log('Designed By: Xing.Huang');

//var

// After Loading
	function load() {
		$('#navigation-button').addClass('loaded');
	}
// Menu Click
	var menuClick = 0;
	$('#navigation-button').click(function(){
		$('.nav-top').toggleClass('small-screen');
		if (menuClick === 0) {
			$('#navigation-button').css('margin-left',$(window).width()/2-28);
			menuClick = 1;			
		} else {
			$('#navigation-button').css('margin-left','10px');
			menuClick = 0;
		}
	});
// ScrollBar Animation
	