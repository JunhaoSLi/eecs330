$(document).ready(function() {
	num_input = $('.num');
	time_input = $('.time');
	plus = $('.plus');
	minus = $('.minus');

	num_input.val(0);
	time_input.val('0:00');

	plus.click(function() {
		if ($(this).siblings('.num').length > 0) {
			var input = $(this).siblings('.num');
			var input_val = Number(input.val());
			input.val(input_val + 1);
		}
		else {
			var input = $(this).siblings('.time');
			var input_val = input.val();
			var minutes = input_val.substring(0, input_val.indexOf(':'));
			var new_minutes = String(Number(minutes) + 1);
			input.val(input_val.replace(minutes, new_minutes));
		}
	});

	minus.click(function() {
		if ($(this).siblings('.num').length > 0) {
			var input = $(this).siblings('.num');
			var input_val = Number(input.val());
			if (input_val > 0) {
				input.val(input_val - 1);
			}
		}
		else {
			var input = $(this).siblings('.time');
			var input_val = input.val();
			var minutes = input_val.substring(0, input_val.indexOf(':'));
			if (minutes > 0) {
				var new_minutes = String(Number(minutes) - 1);
				input.val(input_val.replace(minutes, new_minutes));
			}
		}
	});

	num_input.keypress(function(e) {
		var theEvent = e || window.event;
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode( key );
		var regex = /[0-9]/;
		if( !regex.test(key) ) {
			theEvent.returnValue = false;
			if(theEvent.preventDefault) theEvent.preventDefault();
		}
	});

	time_input.keypress(function(e) {
		var theEvent = e || window.event;
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode( key );
		var input_val = $(this).val();

		console.log(input_val);
		var regex = /[0-9]|:/;
		var oneColon = (input_val.indexOf("-") + 1) % (input_val.lastIndexOf("-") + 1) !== 0;
		console.log(oneColon);

		if( !regex.test(key) && oneColon ) {
			theEvent.returnValue = false;
			if(theEvent.preventDefault) theEvent.preventDefault();
		}
	});

	$('.info').hover(
       function(){ $(this).siblings('.info-box').show() },
       function(){ $(this).siblings('.info-box').hide() }
	)
});