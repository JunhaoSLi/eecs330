$(document).ready(function() {
	num = $('.num');
	min = $('.min');
	sec = $('.sec');
	plus = $('.plus');
	minus = $('.minus');

	num.val(0);
	min.val(0);
	sec.val('00');

	// plus button click
	plus.click(function() {
		var input = $(this).siblings('.num, .min');
		var input_val = Number(input.val());
		input.val(input_val + 1);		
	});

	// minus button click
	minus.click(function() {
		var input = $(this).siblings('.num, .min');
		var input_val = Number(input.val());
		if (input_val > 0) {
			input.val(input_val - 1);
		}
	});

	// num input restrictions
	$('.num, .min, .sec').keypress(function(e) {
		var theEvent = e || window.event;
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode( key );
		var regex = /[0-9]/;
		if( !regex.test(key) ) {
			theEvent.returnValue = false;
			if(theEvent.preventDefault) theEvent.preventDefault();
		}
	});

	// info box pop up on hover
	$('.info').hover(
		function(){ 
			$(this).toggleClass('hidden')
			$(this).siblings('.info-box').show() 
		}, function(){ 
			$(this).toggleClass('hidden')
			$(this).siblings('.info-box').hide() 
    });
});