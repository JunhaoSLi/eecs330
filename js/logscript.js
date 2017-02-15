$(document).ready(function() {
	num_input = $('.num_form');
	num_input.val(0);
	plus = $('.plus');
	minus = $('.minus');

	plus.click(function() {
		input = $(this).siblings('.num_form');
		input_val = Number(input.val());
		input.val(input_val + 1);
	});

	minus.click(function() {
		input = $(this).siblings('.num_form');
		input_val = Number(input.val());
		input.val(input_val - 1);
	});
});