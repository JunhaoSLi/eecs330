$(document).ready(function(){
	time_frame = $(".time_frame");

	//A time frame button is clicked
	time_frame.click(function(){
		//Change to respective graphs
		$("#monthgraph_img").slideUp();
		if($(this).html() === "MONTH"){
			$("#graph_imgs").html = "<img id='monthgraph_img' src='icons/graph_placeholder1.png'>";
			$(".graph_imgs").html = 'hi';
			console.log('working?');
		}
		if($(this).html() === "WEEK"){

		}
		if($(this).html() === "DAY"){
			
		}
	});
});