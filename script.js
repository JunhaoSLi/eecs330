
var chosen_app = null; // holds currently opened prompt's appliance; defaults to null
var overlay = $('#overlay'); // holds overlay when prompt is opened

var open_prompt = function(app) {
	// set the global open app to the newly clicked app
	chosen_app = app;
	// hide the button and show the prompt
	$('#' + app + '_btn').css('visibility', 'hidden');
	$('#' + app + '_prompt').css('display', 'inline-block');

	// turn off pointer cursor for all app buttons
	$('.app_btn').css('cursor','auto');
}

var close_prompt = function() {
	// hide the open prompt and show the button again
	$('#' + chosen_app + '_btn').css('visibility', 'visible');
	$('#' + chosen_app + '_prompt').hide();

	// turn the pointer cursor on again
	$('.app_btn').css('cursor','pointer');
	
	// set the chosen app to show no prompt is open
	chosen_app = null;
}

// once document is loaded...
$(document).ready(function() {
	// if an app button was clicked and there's no prompt, open the app's prompt
	$('.app_btn').click(function(){
		if (chosen_app === null) {
			open_prompt(this.id.replace('_btn',''));
			overlay.css('opacity', 0.6);
		}
	});

	// if a prompt is open and a click happens anywhere outside the app's prompt/button,
	// close the open prompt 
	$(document).click(function(e) {
  		if (chosen_app !== null 
  			&& !$(e.target).closest('#' + chosen_app + '_prompt').length
  			&& !$(e.target).closest('#' + chosen_app + '_btn').length) {
			close_prompt();
			overlay.css('opacity', 0);
  		}
	});
});