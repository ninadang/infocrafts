$(function() {

$("#day9").hide();
$("#eSports").hide();

  $("#day9button").click(function(){
  		$("#eSports").hide();
		$("#day9").toggle("slow");
	});

    $("#eSportsbutton").click(function(){
  		$("#day9").hide();
		$("#eSports").toggle("slow");
	});

});