$(function() {

jQuery.easing.def = "jswing";

$("#day9").hide();
$("#eSports").hide();

  $("#day9button").click(function(){
  		$("#eSports").hide();
		$("#day9").slideToggle("slow");
	});

    $("#eSportsbutton").click(function(){
  		$("#day9").hide();
		$("#eSports").slideToggle("slow");
	});

});