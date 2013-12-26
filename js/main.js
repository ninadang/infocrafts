$(function() {

$("#day9").hide();
$("#eSports").hide();
$("#day92").hide();

	$("#day9button").click(function(){
		$("#eSports").hide();
		$("#day92").hide();
		$("#day9").toggle("slow");
	});

    $("#eSportsbutton").click(function(){
  		$("#day9").hide();
  		$("#day92").hide();
		$("#eSports").toggle("slow");
	});

      $("#day92button").click(function(){
      	$("#day9").hide();
  		$("#eSports").hide();
		$("#day92").toggle("slow");
	});

});