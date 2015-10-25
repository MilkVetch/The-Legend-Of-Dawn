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

			$('#navigation-button').addClass('menu-tran');
			setTimeout(function(){
				$('#navigation-button').addClass('menu-loaded');
				$('.welcome-pokemon span').addClass('welcome-loaded');	
			},50);
		},3000);
		setTimeout(function(){
			$('#navigation-button').removeClass('menu-tran menu-loaded');
		},4200);
	}
// Menu Click
	var clickNumber = 0;
	$('#navigation-button').click(function(){
		$('.nav-top').toggleClass('small-screen');
		setTimeout(function(){
			$('#navigation-button').addClass('menu-tran');
			if (clickNumber === 0){
				$('#navigation-button').css({transform: 'rotate(360deg)'});
				clickNumber = 1;
			} else {
				$('#navigation-button').css({transform: 'rotate(0)'});
				clickNumber = 0;
			}
			$('#navigation-button').toggleClass('menu-click');
		},50);
	});

// ScrollBar Animation
	$(window).scroll(function(){
		$('#navigation-button').removeClass('menu-tran');
		var wScroll = $(this).scrollTop()*5;
		$('#navigation-button').css('transform', 'rotate('+ wScroll +'deg)');
	});