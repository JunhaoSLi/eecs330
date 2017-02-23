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
});