var soundSelectedYet = false;
var isPlaying = true;

$(document).ready(function() {
	
	$("#navStream").click(function() {
		goToStreamTab();
	});
	
	$("#navExplore").click(function() {
		goToExploreTab();
	});
	
	$("#navNowPlaying").click(function() {
		goToNowPlayingTab();
	});
	$(".listThumb").click(function() {
		goToProviderPage();
		return false; // don't keep going on to now playing page because .listThumb is inside .sound
	});
	$(".sound, .giantPlayButton, .tile, #play_pause_initial").click(function() {
		soundSelectedYet = true;
		goToNowPlayingTab();
	});
	
	$("#play_pause").click(function() {
		isPlaying = !isPlaying;
		setPlayPause();
	});	
	
	$(".listAddToStream").click(function() {
		flipStream(this);
		return false;
	});
	
	$(".providerAddToStream").click(function() {
		flipProvider(this);
		return false;
	});
	
});


function goToStreamTab() {
	$(".content").hide();
	$("#streamBody").show();
	$(".tabs").removeClass("selected");
	$("#navStream").addClass("selected");
}

function goToExploreTab() {
	$(".content").hide();
	$("#exploreBody").show();
	$(".tabs").removeClass("selected");
	$("#navExplore").addClass("selected");
}

function goToNowPlayingTab() {
	$(".content").hide();
	if (soundSelectedYet == false) {
		$("#nothingPlayingBody").show();
	} else {
		$("#nowPlayingBody").show();
	}
	$(".tabs").removeClass("selected");
	$("#navNowPlaying").addClass("selected");
}

function goToProviderPage() {
	$(".content").hide();
	$("#providerPage").show();
	$(".tabs").removeClass("selected");
}

function setPlayPause() {
	if (isPlaying) {
		$(".pause").attr("src","images/play-controls/pause.png");
	} else {
		$(".pause").attr("src","images/play-controls/play.png");
	}
}

function flipStream(icon) {
	if ($(icon).attr("src") == "images/added-to-stream.png") {
		$(icon).attr("src", "images/add-to-stream.png");
		showToast("Removed from Stream.");
	} else {
		$(icon).attr("src", "images/added-to-stream.png");
		showToast("Added to Stream.");
	}
}

function flipProvider(icon) {
	if ($(icon).attr("src") == "images/added-to-stream.png") {
		$(icon).attr("src", "images/add-to-stream.png");
		showToast("No longer following.");
	} else {
		$(icon).attr("src", "images/added-to-stream.png");
		showToast("Now following.");
	}
}


function showToast(message) {
	$("#toast").text(message).fadeIn(500).delay(1000).fadeOut(500);
}