$(document).ready(function() {
	
	$("#navStream").click(function() {
		$(".content").hide();
		$("#streamBody").show();
	});
	
	$("#navExplore").click(function() {
		$(".content").hide();
		$("#exploreBody").show();
	});
	
	$("#navNowPlaying").click(function() {
		$(".content").hide();
		$("#nothingPlayingBody").show();
	});

});