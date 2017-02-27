$(document).ready(function(){
	time_frame = $(".time_frame");

	//A time frame button is clicked
	time_frame.click(function(){
		//Change to respective graphs
		$("#graph_img").slideUp();
		
		if($(this).html() === "MONTH"){
			$("#graph_imgs").html("<img id='graph_img' src='icons/graph_placeholder.png'>");
		}
		if($(this).html() === "WEEK"){
			$("#graph_imgs").html("<img id='graph_img' src='icons/graph_placeholder2.png'>");

		}
		if($(this).html() === "DAY"){
			$("#graph_imgs").html("<img id='graph_img' src='icons/graph_placeholder3.png'>");
		}
	});

	$('.app_pic').click(function(){
		$('#appliances_graphs').hide();
		$('#app_graph_wrapper').toggleClass('hidden displayed_inline_block');
	});

	$('#app_close').click(function(){
		$('#appliances_graphs').show();
		$('#app_graph_wrapper').toggleClass('hidden displayed_inline_block');
	});

	$('.active').click(function(){
		$('#calendar').hide();
		$('#calendar_graph_wrapper').toggleClass('hidden displayed_inline_block');
	});

	$('#calendar_close').click(function(){
		$('#calendar').show();
		$('#calendar_graph_wrapper').toggleClass('hidden displayed_inline_block');
	});

	$('#month_btn').click(function(){
		$('.sorry').addClass('displayed_inline_block');
		$('.sorry').removeClass('hidden');
		$('.ill_fix').addClass('hidden');
		$('.ill_fix').removeClass('displayed_inline_block');
		$('.this_later').addClass('hidden');
		$('.this_later').removeClass('displayed_inline_block');
	});


	$('#week_btn').click(function(){
		console.log('wtf')
		$('.sorry').addClass('hidden');
		$('.sorry').removeClass('displayed_inline_block');
		$('.ill_fix').addClass('displayed_inline_block');
		$('.ill_fix').removeClass('hidden');
		$('.this_later').addClass('hidden');
		$('.this_later').removeClass('displayed_inline_block');
	});

	$('#day_btn').click(function(){
		$('.sorry').addClass('hidden');
		$('.sorry').removeClass('displayed_inline_block');
		$('.ill_fix').addClass('hidden');
		$('.ill_fix').removeClass('displayed_inline_block');
		$('.this_later').addClass('displayed_inline_block');
		$('.this_later').removeClass('hidden');
	});

});