var chosen_app = null; // holds currently opened prompt's appliance; defaults to null
var overlay = $('#overlay'); // holds overlay when prompt is opened

var open_prompt = function(app) {
	// set the global open app to the newly clicked app
	chosen_app = app;

	// show the prompt
	$('#' + app + '_prompt').css('display', 'inline-block');

	// bring out overlay
	overlay.css('opacity', 0.6)
	       .css('z-index', 10);
}

var close_prompt = function() {
	// hide the prompt
	$('#' + chosen_app + '_prompt').hide();

	// hide overlay underneath everything
	overlay.css('opacity', 0)
	       .css('z-index', -1);

	$('.prompt_pic').removeClass('shadowed');
	
	// set the chosen app to reflect that no prompt is open
	chosen_app = null;
}

// once document is loaded...
$(document).ready(function() {
	// if an app button was clicked and there's no prompt, open the app's prompt
	$('.app_btn').click(function() {
		// check if there is a prompt and if we're clicking on
		if (chosen_app === null) {
			open_prompt(this.id.replace('_btn',''));
		}
	});

	// if a prompt is open and a click happens anywhere outside the app's prompt,
	// close the open prompt 
	overlay.click(function() {
  		close_prompt();
	});

	// if 'X' button is clicked, close prompt
	$('.close').click(function() {
		close_prompt();
	});

	// if 'OK' button is clicked, close prompt and make new icon appear
	// icon feature is WIP
	$('.ok').click(function() {
		close_prompt();
	});

	// moving box shadow around the pictures
	$('.prompt_pic').click(function() {
		$(this).addClass('shadowed');
		$('.prompt_pic').not(this).removeClass('shadowed');
	});
});

//&& !$(e.target).closest('#' + chosen_app + '_btn').length
//