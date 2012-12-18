$(document).ready(function() {
	
	$("#navStream").click(function() {
		$(".content").hide();
		$("#streamBody").show();
		$(".tabs").removeClass("selected");
		$("#navStream").addClass("selected");
	});
	
	$("#navExplore").click(function() {
		$(".content").hide();
		$("#exploreBody").show();
		$(".tabs").removeClass("selected");
		$("#navExplore").addClass("selected");
		
	});
	
	$("#navNowPlaying").click(function() {
		$(".content").hide();
		$("#nothingPlayingBody").show();
		$(".tabs").removeClass("selected");
		$("#navNowPlaying").addClass("selected");
	});

});


